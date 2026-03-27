# Módulo 09 — OpenRouter via cURL

## Pré-requisitos

- [cURL](https://curl.se/) instalado
- [jq](https://jqlang.org/) instalado (para formatação da resposta)
- Chave de API do [OpenRouter](https://openrouter.ai)

## Configuração

Edite o arquivo `.env` com sua chave de API:

```env
OPENROUTER_API_KEY="sua-api-key"
```

## Executando a requisição

```bash
bash request.sh
```

## Detalhes da requisição

| Parâmetro | Valor |
|---|---|
| Modelo | `google/gemma-3-27b-it:free` |
| Temperature | 0.3 |
| Max tokens | 1000 |
| Endpoint | `https://openrouter.ai/api/v1/chat/completions` |
