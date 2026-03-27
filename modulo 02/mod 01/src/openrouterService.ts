import { OpenRouter } from "@openrouter/sdk";
import { config, type ModelConfig } from "./config.ts";

export class OpenRouterService {
    private cliente: OpenRouter
    private config: ModelConfig

    constructor(configOverride: ModelConfig) {
        this.config = configOverride ?? config

        this.cliente = new OpenRouter({
            apiKey: config.apiKey,
            httpReferer: config.httpReferer,
            xTitle: config.xTitle,
        })
    }


    async generate(prompt: string) {}
}