import { type GraphState } from "../graph.ts";

export function identifyIntent(state: GraphState) {

    const input = state.messages.at(-1)?.text || "";
    const inputlower = input.toLowerCase();

    let command: GraphState["command"] = "unknown";
    
    if (inputlower.includes("upper")) {
        command = "uppercase";
    } else if (inputlower.includes("lower")) {
        command = "lowercase";
    }

    return {
        ...state,
        command,
        output: input
    }
}