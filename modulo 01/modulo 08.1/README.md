# Demo: Next.js + Better Auth + GitHub OAuth + SQLite

Projeto demo com autenticação via GitHub usando Better Auth, banco SQLite local e Next.js App Router.

## Pré-requisitos

- Node.js >= 18
- npm
- Ferramentas de build nativas para `better-sqlite3`:
  - **Windows:** [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/) + Python
  - **macOS:** `xcode-select --install`
  - **Linux:** `sudo apt install build-essential python3`

## Configuração

### 1. Variáveis de ambiente

Copie o exemplo e preencha com suas credenciais:

```bash
cp .env.local.example .env.local
```

No [GitHub Developer Settings → OAuth Apps](https://github.com/settings/developers), crie um novo OAuth App:

| Campo | Valor |
|---|---|
| Homepage URL | `http://localhost:3000` |
| Authorization callback URL | `http://localhost:3000/api/auth/callback/github` |

Copie o **Client ID** e o **Client Secret** gerados e preencha no `.env.local`.

Gere um secret seguro para `BETTER_AUTH_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Criar tabelas do banco

```bash
npx @better-auth/cli migrate
```

Isso cria o arquivo `better-auth.sqlite` com as tabelas necessárias.

### 4. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Acesse: **http://localhost:3000**

## Comportamento

| Estado | Exibição |
|---|---|
| Não autenticado | "Você não está logado" + botão "Entrar com GitHub" |
| Autenticado | "Logado como \<email/nome\>" + botão "Sair" |

## Estrutura

```
├── lib/
│   ├── auth.ts              # Configuração servidor (Better Auth + SQLite)
│   └── auth-client.ts       # Cliente browser
├── app/
│   ├── api/auth/[...all]/
│   │   └── route.ts         # Route handler Better Auth
│   ├── components/
│   │   ├── sign-in-button.tsx
│   │   └── sign-out-button.tsx
│   ├── layout.tsx
│   ├── page.tsx             # Home com estado de sessão
│   └── globals.css
├── .env.local.example
├── next.config.ts
└── postcss.config.mjs
```
