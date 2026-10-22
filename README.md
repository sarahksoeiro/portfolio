# Portfólio 2026 — Suellen Miranda

Meu portfólio pessoal, feito com **HTML, CSS e JavaScript** puro e publicado com o **GitHub Pages**.

🔗 **Site no ar:** https://suellenmiranda.github.io/Portfolio-2026/

## Seções

- Topo com menu (Início, Sobre mim, Trabalhos, Contato)
- Apresentação
- O que eu faço
- Sobre mim
- Portfólio
- Habilidades (carrossel)
- Chamada para contato e rodapé

## Como foi desenvolvido

Cada parte do site foi feita em uma branch própria, com commit e Pull Request para a `main`:

| Tarefa | Branch | Commit |
|---|---|---|
| Estrutura e estilo base | `feature/estrutura` | `feat: cria estrutura e estilo base` |
| Topo e apresentação | `feature/topo` | `feat: adiciona menu e apresentação` |
| O que eu faço e Sobre mim | `feature/sobre` | `feat: adiciona serviços e sobre mim` |
| Portfólio | `feature/portfolio` | `feat: adiciona cards de projetos` |
| Habilidades e contato | `feature/habilidades` | `feat: adiciona habilidades e rodapé` |
| README | `docs/readme` | `docs: adiciona descrição e link do site` |

Fluxo de cada tarefa: `switch main → pull → switch -c tipo/nome → alterar → add → commit → push → Pull Request → Merge`.

## Personalizar

As cores ficam em variáveis no início do `style.css` (`:root`). Mude uma linha e o site inteiro acompanha.

## Rodar localmente

Basta abrir o arquivo `index.html` no navegador.

---
Projeto do *Workshop Git, GitHub e GitLab: Do Zero ao Portfólio* — Liga Acadêmica Feminina de TI.
