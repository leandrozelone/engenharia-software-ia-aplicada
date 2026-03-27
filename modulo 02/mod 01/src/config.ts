console.assert(
    process.env.OPENROUTER_API_KEY,
    "OPENAI_API_KEY is not set in env variables. Please set it to your OpenAI API key."
)

export type ModelConfig = {
    apiKey: string;
    httpReferer: string;
    xTitle: string;
    port: number;
    models: string[];
    temperature: number;
    maxTokens: number;
    systemPrompt: string;

    provider: {
        sort: {
            by: string,
            partition: string,
        }
    }
}

export const config: ModelConfig = {
    apiKey: process.env.OPENROUTER_API_KEY!,
    httpReferer: 'http:pos-ia.com',
    xTitle: 'SmartMOdelRouterGateway',
    port: 3000,
    models: [
        //top 4 para a listagem ordenada por preço
        'arcee-ai/trinity-large-preview:free'
    ],
    temperature: 0.2,
    maxTokens: 50,
    systemPrompt: 'helper assistant for answering questions about the meaning of life',
    provider: {
        sort: {
            by: 'price',
            partition: 'none',
        }
    }
}