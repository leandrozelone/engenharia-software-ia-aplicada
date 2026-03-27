# Módulo 02 — LangChain Intro

## Pré-requisitos

- Node.js 24.14.0 (LTS) via [nvm-windows](https://github.com/coreybutler/nvm-windows)
- Chave de API do [LangSmith](https://smith.langchain.com)

## Instalação

### 1. Instalar dependências

```bash
npm i @langchain/core@1.1.19 langchain@1.2.17
npm i @types/node@24
npm i fastify@5.7.4
```

Ou instalar tudo de uma vez:

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env
```

Edite o arquivo `.env`:

```env
LANGSMITH_API_KEY=sua-api-key
LANGCHAIN_TRACING_V2=true
LANGCHAIN_PROJECT=yt02-langchain-intro
```

## Iniciando o projeto

```bash
npm start
```

## Dependências principais

| Pacote | Versão |
|---|---|
| `@langchain/core` | 1.1.19 |
| `langchain` | 1.2.17 |
| `fastify` | 5.7.4 |
| `@types/node` | 24 |
