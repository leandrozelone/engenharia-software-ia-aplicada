import { AIMessage } from "langchain";
import { type GraphState } from "../graph.ts";

export function fallbackNode(state: GraphState) {
    const message = "Comando não reconhecido. Por favor, tente novamente.";

    return {
        ...state,
        output: message,
        messages: [
            ...state.messages,
        ]
    }
}