// Validador de português de Portugal.
//
// Lê o site já gerado (pasta `dist/`), extrai todo o texto que um visitante vê ou ouve — incluindo
// títulos, descrições, `alt` e `aria-label` — e verifica que:
//   1. cada página declara `lang="pt-PT"`;
//   2. todas as palavras existem no dicionário de português europeu (Acordo Ortográfico de 1990),
//      o que apanha palavras em inglês, gralhas e grafias antigas como «acção»;
//   3. não há formas do português do Brasil (por exemplo, «contato», «equipe», «estou fazendo»).
//
// Nomes próprios e termos técnicos aceites acrescentam-se à lista `words` em `cspell.json`.
// Corre automaticamente em `npm run build`, no gancho de pré-commit e no GitHub Actions.

import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { spawnSync } from 'node:child_process';

const raiz = new URL('..', import.meta.url).pathname;
const pastaDist = join(raiz, 'dist');

// Formas do português do Brasil (ou anglicismos) e a alternativa de Portugal.
// `\b` não funciona com letras acentuadas, por isso as fronteiras de palavra usam `\p{L}`.
const palavra = (padrao) => new RegExp(`(?<!\\p{L})(?:${padrao})(?!\\p{L})`, 'iu');

const formasBrasileiras = [
  [palavra('contatos?'), 'contacto'],
  [palavra('equipes?'), 'equipa'],
  [palavra('celular(?:es)?'), 'telemóvel'],
  [palavra('cadastr\\p{L}*'), 'registo / inscrição'],
  [palavra('usuári[oa]s?'), 'utilizador'],
  [palavra('registros?'), 'registo'],
  [palavra('ônibus'), 'autocarro'],
  [palavra('banheiros?'), 'casa de banho'],
  [palavra('trem'), 'comboio'],
  [palavra('geladeiras?'), 'frigorífico'],
  [palavra('xícaras?'), 'chávena'],
  [palavra('sistêmic[oa]s?'), 'sistémico'],
  [palavra('acadêmic[oa]s?'), 'académico'],
  [palavra('fenômenos?'), 'fenómeno'],
  [palavra('gerenciar'), 'gerir'],
  [palavra('agendar'), 'marcar'],
  [
    palavra(
      '(?:estou|está|estás|estamos|estão|estava|estavam|ficamos|fico|fica|ficam|vou|vai|vamos|vão)\\s+(?!(?:quando|lindo|vindo|brando|bando|comando)(?!\\p{L}))\\p{L}+(?:ando|endo|indo)'
    ),
    '«estar a + infinitivo» (por exemplo, «estou a fazer»)',
  ],
];

const entidades = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', laquo: '«', raquo: '»', ndash: '–', mdash: '—', rsquo: '’', lsquo: '‘', copy: '©' };

const descodificar = (texto) =>
  texto
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&([a-z]+);/gi, (m, nome) => entidades[nome.toLowerCase()] ?? m);

function extrairTexto(html) {
  const atributos = [];
  const reAtributo = /\s(?:alt|title|aria-label|placeholder)\s*=\s*"([^"]*)"/gi;
  for (const m of html.matchAll(reAtributo)) atributos.push(m[1]);
  const reMeta = /<meta\s+[^>]*(?:name|property)\s*=\s*"(?:description|og:title|og:description)"[^>]*>/gi;
  for (const m of html.matchAll(reMeta)) {
    const conteudo = m[0].match(/content\s*=\s*"([^"]*)"/i);
    if (conteudo) atributos.push(conteudo[1]);
  }

  const corpo = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, '\n');

  return descodificar([corpo, ...atributos].join('\n'))
    .replace(/\b[\w.+-]+@[\w-]+\.[\w.]+\b/g, ' ') // emails
    .replace(/\bhttps?:\/\/\S+/g, ' ') // endereços web
    .split('\n')
    .map((linha) => linha.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
}

async function listarHtml(pasta) {
  const ficheiros = [];
  for (const entrada of await readdir(pasta, { withFileTypes: true })) {
    const caminho = join(pasta, entrada.name);
    if (entrada.isDirectory()) ficheiros.push(...(await listarHtml(caminho)));
    else if (entrada.name.endsWith('.html')) ficheiros.push(caminho);
  }
  return ficheiros;
}

if (!existsSync(pastaDist)) {
  console.error('Validador de português: não existe a pasta dist/. Corra primeiro `npm run build`.');
  process.exit(1);
}

const paginas = await listarHtml(pastaDist);
const problemas = [];

for (const pagina of paginas) {
  const nome = relative(raiz, pagina);
  const html = await readFile(pagina, 'utf8');

  if (!/<html[^>]*\slang="pt-PT"/.test(html)) {
    problemas.push(`${nome}: a página não declara <html lang="pt-PT">.`);
  }

  const texto = extrairTexto(html);
  const linhas = texto.split('\n');

  for (const linha of linhas) {
    for (const [padrao, alternativa] of formasBrasileiras) {
      const m = linha.match(padrao);
      if (m) problemas.push(`${nome}: «${m[0]}» não é português de Portugal — use ${alternativa}.\n    ↳ ${linha}`);
    }
  }

  const cspell = spawnSync(
    join(raiz, 'node_modules', '.bin', 'cspell'),
    ['--no-progress', '--no-summary', '--no-color', '--show-suggestions', '--config', join(raiz, 'cspell.json'), '--locale', 'pt-PT', 'stdin'],
    { input: texto, encoding: 'utf8' }
  );
  if (cspell.error) {
    console.error('Validador de português: não foi possível correr o cspell. Corra `npm install`.');
    process.exit(1);
  }
  for (const resultado of cspell.stdout.split('\n').filter(Boolean)) {
    const m = resultado.match(/:(\d+):\d+ - Unknown word \(([^)]+)\)(?:\s+Suggestions: \[(.*)\])?/);
    if (!m) continue;
    const [, numeroLinha, palavra, sugestoes] = m;
    const sugestao = sugestoes ? ` Sugestões: ${sugestoes}.` : '';
    problemas.push(`${nome}: palavra desconhecida «${palavra}».${sugestao}\n    ↳ ${linhas[Number(numeroLinha) - 1]}`);
  }
}

if (problemas.length) {
  console.error(`\n✗ Validador de português: ${problemas.length} problema(s) encontrado(s).\n`);
  for (const problema of problemas) console.error(`  • ${problema}`);
  console.error(
    '\nCorrija o texto (em src/data/ana.ts ou nas páginas). Se for um nome próprio ou termo correto, acrescente-o à lista `words` em cspell.json.\n'
  );
  process.exit(1);
}

console.log(`✓ Validador de português: ${paginas.length} página(s) verificada(s), sem problemas.`);
