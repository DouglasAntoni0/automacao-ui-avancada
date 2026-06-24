# Automação UI Avançada - EBAC Shop

![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-automacao-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)
![QA](https://img.shields.io/badge/QA-UI%20Testing-0A66C2?style=for-the-badge)

Suíte de testes end-to-end com Cypress para validar fluxos de interface da EBAC Shop. O projeto transforma um exercício de formação em uma entrega organizada, com foco em execução reprodutível, leitura rápida por times técnicos e base para evolução de regressão web.

## Visão geral

Este repositório trabalha automação de interface em uma aplicação de e-commerce. A proposta é validar comportamento diretamente no navegador, usando Cypress como ferramenta principal para interagir com a aplicação, executar cenários e apoiar a detecção de regressões.

Mesmo sendo um projeto de estudo, ele é documentado como ativo técnico: o README explica objetivo, stack, execução, estratégia e caminhos de evolução. Essa abordagem mostra uma mentalidade importante em QA Automation: testes não são apenas scripts; são documentação executável do comportamento esperado.

## Problema técnico abordado

Aplicações web mudam com frequência. Alterações em layout, fluxo, botões, campos e navegação podem quebrar jornadas críticas. Uma suíte E2E ajuda a responder perguntas como:

- o fluxo principal continua funcionando no navegador?
- a aplicação responde aos cliques e preenchimentos esperados?
- o ambiente local está pronto para execução dos testes?
- os cenários podem ser repetidos de forma padronizada?
- há uma base para evoluir uma regressão automatizada?

## Stack utilizada

| Tecnologia | Papel no projeto |
| --- | --- |
| Cypress | Framework principal de automação E2E |
| JavaScript | Linguagem usada nos testes e configuração |
| Node.js/npm | Runtime e gerenciamento de dependências |
| EBAC Shop | Aplicação alvo dos fluxos web |
| GitHub | Versionamento e rastreabilidade da entrega |

## O que este projeto demonstra

| Competência | Aplicação prática | Valor para QA |
| --- | --- | --- |
| Automação Web/E2E | Execução de cenários sobre aplicação de e-commerce | Valida comportamento real no navegador |
| Cypress | Configuração de projeto, navegação e validações | Permite feedback rápido e execução local |
| Estratégia de regressão | Base para validar fluxos críticos após mudanças | Reduz risco de quebra em jornadas importantes |
| Execução reprodutível | Comandos documentados para setup e execução | Facilita manutenção e onboarding |
| Comunicação técnica | README completo e orientado a contexto | Ajuda recrutadores e times técnicos a entenderem o valor do repo |

## Estrutura esperada

```text
.
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

> A estrutura pode variar conforme evolução do exercício, mas segue o padrão de projetos Cypress: cenários em `e2e`, dados em `fixtures`, comandos e suporte em `support`.

## Estratégia de testes

A estratégia deste projeto é focada em automação de interface:

1. Configurar uma aplicação alvo com `baseUrl`.
2. Executar cenários pelo navegador.
3. Validar comportamento esperado em fluxos de e-commerce.
4. Permitir execução headless para regressão local.
5. Permitir execução interativa para depuração.

Esse tipo de suíte é útil para validar a integração final entre interface, navegação e comportamento percebido pelo usuário.

## Como executar

Clone o repositório:

```bash
git clone https://github.com/DouglasAntoni0/automacao-ui-avancada.git
cd automacao-ui-avancada
```

Instale as dependências:

```bash
npm install
```

Execute em modo headless:

```bash
npx cypress run
```

Abra o Cypress Runner:

```bash
npx cypress open
```

## Execução headless vs interativa

| Modo | Quando usar |
| --- | --- |
| `npx cypress run` | Regressão local, execução rápida e uso em CI/CD |
| `npx cypress open` | Desenvolvimento, depuração, inspeção visual e criação de cenários |

## Boas práticas aplicáveis

Este projeto pode ser evoluído com boas práticas típicas de QA Automation:

- Page Objects ou App Actions para reduzir repetição;
- Custom Commands para ações comuns;
- Fixtures para massa de dados;
- uso de `data-testid` quando a aplicação permitir;
- separação entre smoke, regressão e cenários críticos;
- relatórios com screenshots e vídeos;
- execução em pipeline.

## Troubleshooting

| Problema | Possível causa | Ação sugerida |
| --- | --- | --- |
| Cypress não abre | Dependências não instaladas | Rodar `npm install` |
| Teste falha ao acessar URL | Aplicação alvo indisponível ou URL alterada | Conferir `baseUrl` no `cypress.config.js` |
| Elemento não encontrado | Mudança no DOM ou seletor instável | Inspecionar página e revisar seletor |
| Execução lenta | Ambiente ou rede instável | Rodar novamente e avaliar waits/sincronização |

## Resultado técnico

Este repositório evidencia domínio dos fundamentos de automação web: configuração de ambiente, execução de testes E2E e estrutura inicial para uma suíte de regressão. É uma base direta para evoluir cenários mais robustos com Page Objects, dados dinâmicos, relatórios e CI/CD.

## Competências evidenciadas

- Cypress para automação E2E.
- JavaScript aplicado a testes.
- Execução headless e interativa.
- Leitura de DOM e seletores.
- Organização de projeto de QA.
- Documentação de setup e execução.
- Mentalidade de regressão funcional.

## Próximos passos de evolução

- Adicionar cenários com dados dinâmicos.
- Criar relatório com Mochawesome.
- Separar specs por fluxo de negócio.
- Integrar a execução ao GitHub Actions.
- Definir tags ou suites por prioridade.
- Evoluir arquitetura para reduzir manutenção.

## Conclusão

Este projeto mostra uma base sólida para automação de interface. A força dele está em conectar execução prática com visão de qualidade: validar fluxos no navegador, documentar a execução e preparar o terreno para uma suíte de regressão mais madura.
