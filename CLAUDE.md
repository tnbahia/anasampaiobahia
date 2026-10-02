# Página da Ana Sampaio Bahia

Página profissional da Ana Sampaio Bahia, psicóloga, em Astro (página única, estática, publicada no GitHub Pages).
O público principal são potenciais clientes.

## Regras

- **Todo o texto visível tem de estar em português de Portugal** (Acordo Ortográfico de 1990): títulos, botões,
  `alt`, `aria-label`, `<title>` e `<meta name="description">`. Nada em inglês nem em português do Brasil
  («contacto», não «contato»; «equipa», não «equipe»; «estar a fazer», não «estar fazendo»).
- **Depois de qualquer alteração, correr `npm run build`.** O build corre o validador de português
  (`scripts/validar-portugues.mjs`) e falha se encontrar problemas. Não dar uma alteração por concluída sem
  o build passar.
- Nomes próprios e termos corretos que o dicionário não conhece acrescentam-se à lista `words` em `cspell.json`.
  Nunca acrescentar grafias antigas (ex.: «acção») nem palavras em inglês para contornar o validador.
- O conteúdo está em `src/data/ana.ts`; a estrutura e o estilo em `src/pages/index.astro`.
- Não publicar dados pessoais além dos já presentes (sem telefone nem morada pessoal).
- O CV da Ana não deve ser guardado neste repositório (é público).
