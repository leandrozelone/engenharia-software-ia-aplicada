# Módulo 01 — OpenRouter Intro

## Pré-requisitos

- Node.js 24.14.0 (LTS) via [nvm-windows](https://github.com/coreybutler/nvm-windows)
- Chave de API do [OpenRouter](https://openrouter.ai)

## Instalação

### 1. Instalar dependências

```bash
npm install
```

Ou individualmente:

```bash
npm i @openrouter/sdk@0.5.1
npm i @types/node@24
npm i fastify@5.7.4
```

### 2. Configurar variáveis de ambiente

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env
```

Edite o arquivo `.env`:

```env
OPENROUTER_API_KEY="sua-api-key"
```

## Iniciando o projeto

### Modo desenvolvimento (com hot reload)

```bash
npm run dev
```

### Executar testes

```bash
npm run test
```

### Executar testes em modo watch

```bash
npm run test:dev
```

## Dependências principais

| Pacote | Versão |
|---|---|
| `@openrouter/sdk` | 0.5.1 |
| `fastify` | 5.7.4 |
| `@types/node` | 24 |
