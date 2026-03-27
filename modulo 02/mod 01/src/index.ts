import { config } from "./config.ts";
import { OpenRouterService } from "./openrouterService.ts";
import { createServer } from "./server.ts";

const routerService = new OpenRouterService(config);
const app = createServer(routerService)

app.listen({ port: 3000, host: '0.0.0.0'})

app.inject({
    method: 'POST',
    url: '/chat',
    body: {
        question: 'What is the meaning of life?'
    }
}).then(response => {
    console.log('Response json', response.body);
    console.log('Response staus', response.statusCode);
})