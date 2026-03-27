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
        'arcee-ai/trinity-large-preview:free',
        'nvidia/nemotron-3-nano-30b-a3b:free',
        'minimax/minimax-m2.5:free',
    ],
    temperature: 0.2,
    maxTokens: 100,
    systemPrompt: 'helper assistant for answering questions about the meaning of life',
    provider: {
        sort: {
            // by: 'throughput',
            // by: 'latency',
            by: 'price',
            partition: 'none',
        }
    }
}