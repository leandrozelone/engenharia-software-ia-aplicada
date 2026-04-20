import {
    END,
    MessagesZodMeta,
    START,
    StateGraph,
} from '@langchain/langgraph'
import { withLangGraph } from '@langchain/langgraph/zod'
import { BaseMessage } from 'langchain'
import { z } from 'zod/v3'
import { identifyIntent } from './node/identifyIntentNode.ts'
import { chatResponseNode } from './node/chatResponseNode.ts'
import { lowerCaseNode } from './node/lowerCaseNode.ts'
import { upperCaseNode } from './node/upperCaseNode.ts'
import { fallbackNode } from './node/fallBackNode.ts'

const GraphState = z.object({
    messages: withLangGraph(
        z.custom<BaseMessage[]>(),
        MessagesZodMeta
    ),
    output: z.string(),
    command: z.enum(['uppercase', 'lowercase', 'unknown'])
})

export type GraphState = z.infer<typeof GraphState>

export function buildGraph() {
    const workflow = new StateGraph({
        stateSchema: GraphState
    })
    .addNode("identifyIntent", identifyIntent)
    .addNode("chatResponse", chatResponseNode)
    .addNode("lowerCase", lowerCaseNode)
    .addNode("upperCase", upperCaseNode)
    .addNode("fallback", fallbackNode)

    .addEdge(START, "identifyIntent")

    .addConditionalEdges("identifyIntent", 
        (state: GraphState) =>{
            return state.command;   
        },
        {
            'uppercase': "upperCase",
            'lowercase': "lowerCase",
            'unknown': "fallback"
        }
    )

    .addEdge("upperCase", "chatResponse")
    .addEdge("lowerCase", "chatResponse")
    .addEdge("fallback", "chatResponse")
    .addEdge("chatResponse", END)

    return workflow.compile()
}