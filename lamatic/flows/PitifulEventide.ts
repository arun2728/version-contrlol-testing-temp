const flowConfig = {
  "id": "f989c3bc-da3c-4021-8b19-f527920ba0a4",
  "name": "Pitiful Eventide",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\"sampleInput\":\"string\"}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "selected": false
    },
    {
      "id": "docExtractorNode_812",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "docExtractorNode",
        "values": {
          "id": "docExtractorNode_812",
          "schema": "",
          "nodeName": "Doc Extractor",
          "joinPages": true,
          "documentUrl": "https://www.bookdio.org/_files/ugd/ef8af1_516ef3f4ef464f699b1786bcb683bf04.pdf",
          "customPrompt": "",
          "ocrModelName": [
            {
              "type": "ocr/document",
              "params": {},
              "configName": "configA",
              "model_name": "gemini/gemini-2.5-flash-lite",
              "credentialId": "78b4d60b-c6a3-497e-81dd-f3321c361207",
              "provider_name": "gemini",
              "credential_name": "gemini"
            }
          ],
          "outputFormat": "markdown",
          "mistralTableFormat": "markdown",
          "mistralIncludeAnnotations": false
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 130
      },
      "selected": true
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "graphqlResponseNode",
        "values": {
          "headers": "{\"content-type\":\"application/json\"}",
          "retries": "0",
          "nodeName": "API Response",
          "webhookUrl": "",
          "retry_delay": "0",
          "outputMapping": "{}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 260
      }
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-docExtractorNode_812",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "docExtractorNode_812",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "docExtractorNode_812-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "docExtractorNode_812",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-trigger_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-03-05T05:38:16.330116+00:00"
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}