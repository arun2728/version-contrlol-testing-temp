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
      "id": "docClassifierNode_486",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "docClassifierNode",
        "values": {
          "id": "docClassifierNode_486",
          "classes": [
            {
              "id": "cls_mor5fl0i_0mpkv",
              "label": "Deed / Conveyance",
              "description": "Warranty deeds, grant deeds, quitclaim deeds — transfers of property ownership. Very common throughout.",
              "identifiableFields": "\"Grantor/Grantee\", \"convey and warrant\", notary acknowledgment, BK/PG stamp."
            },
            {
              "id": "cls_mor5h1lp_9j3s1",
              "label": "Mortgage / Deed of Trust",
              "description": "Security instruments pledging the property as collateral. ",
              "identifiableFields": "\"Borrower/Lender\", \"Security Instrument\", acceleration clauses, MERS references."
            },
            {
              "id": "cls_mor5jpik_e6ek4",
              "label": "Survey / Plot Map",
              "description": "Boundary surveys and subdivision plats. ",
              "identifiableFields": "metes-and-bounds descriptions, surveyor certifications, lot/block numbers."
            },
            {
              "id": "cls_mor5kpwq_sltlr",
              "label": "Architectural / Building Plan",
              "description": "Structural drawings — floor plans, building sections, elevation diagrams. ",
              "identifiableFields": "rotated pages, technical drawings, architect firm logos (e.g., Minno & Wasko)."
            }
          ],
          "nodeName": "Doc Classifier",
          "documentUrl": "https://drive.google.com/uc?export=download&id=1d2R_6ONks8059ldjUcpC-gSZgAtawlqA",
          "ocrModelName": [
            {
              "type": "ocr/document",
              "params": {},
              "configName": "configA",
              "model_name": "mistral/mistral-ocr-latest",
              "credentialId": "23206267-db92-450c-a233-9f786f3fd6aa",
              "provider_name": "mistral",
              "credential_name": "mistralll"
            }
          ],
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "6aa2c475-ccfc-4041-82b5-514fc7b8c3fd",
            "provider_name": "openai",
            "credential_name": "OpenAI"
          },
          "enhanceDescriptions": true,
          "generativeModelName": [
            {
              "type": "generator/text",
              "params": {},
              "configName": "configA",
              "model_name": "gpt-4o",
              "credentialId": "6aa2c475-ccfc-4041-82b5-514fc7b8c3fd",
              "provider_name": "openai",
              "credential_name": "OpenAI"
            }
          ]
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
        "condition": "Invoice",
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
      "id": "triggerNode_1-docClassifierNode_486",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "docClassifierNode_486",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "docClassifierNode_486-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "docClassifierNode_486",
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