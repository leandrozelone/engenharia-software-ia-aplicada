# Módulo 08 — Testes com Playwright

## Pré-requisitos

- Node.js 24.14.0 (LTS) via [nvm-windows](https://github.com/coreybutler/nvm-windows)

## Instalação

```bash
npm install
```

Ou individualmente:

```bash
npm i @playwright/test@1.58.2
```

Instalar os browsers do Playwright:

```bash
npx playwright install
```

## Executando os testes

```bash
npm test
```

## Configuração

Os testes apontam para:

```
baseURL: https://erickwendel.github.io/vanilla-js-web-app-example/
```

Para alterar, edite `playwright.config.js`.

## Dependências principais

| Pacote | Versão |
|---|---|
| `@playwright/test` | 1.58.2 |
