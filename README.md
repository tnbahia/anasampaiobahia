# anasampaiobahia

Página profissional da Ana Sampaio Bahia, psicóloga, feita em Astro e publicada no GitHub Pages.

## Desenvolvimento local

```bash
npm install
npm run dev
```

O `npm install` também ativa o gancho de pré-commit (`.githooks/pre-commit`).

## Atualizar conteúdo

Todo o conteúdo está em `src/data/ana.ts`: perfil, áreas de consulta, locais, percurso, formação, projetos,
artigos e voluntariado. A estrutura e o estilo da página estão em `src/pages/index.astro`.

- **Formulário de contacto:** colar o link do Google Forms em `formularioContactoUrl`.
- **Fotografias:** colocar os ficheiros em `public/img/` e indicar o caminho em `fotos.retrato`
  (fotografia principal) e `fotos.secundaria` (opcional, aparece na secção «Abordagem»).

## Validador de português

Todo o texto do site tem de estar em português de Portugal (Acordo Ortográfico de 1990).
O `npm run build` gera o site e corre `scripts/validar-portugues.mjs`, que verifica:

1. que a página declara `lang="pt-PT"`;
2. que todas as palavras existem no dicionário de português europeu (apanha inglês, gralhas e grafias antigas);
3. que não há formas do português do Brasil, como «contato», «equipe» ou «estou fazendo».

O validador corre:

- em cada `npm run build` (e `npm run validar:pt`);
- antes de cada commit, através do gancho de pré-commit;
- no GitHub Actions, antes de publicar. Se falhar, o site não é publicado.

Nomes próprios ou termos corretos que o dicionário não conheça acrescentam-se à lista `words` em `cspell.json`.

## Publicação

A publicação no GitHub Pages está configurada em `.github/workflows/deploy.yml` e corre a cada push para `main`.
