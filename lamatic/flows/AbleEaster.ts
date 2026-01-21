const flowConfig = {
  "id": "711de9c6-abc1-4d50-a45b-38fb5341b2ad",
  "name": "Able Easter",
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_513",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_513",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_513-firecrawlNode_210",
      "type": "defaultEdge",
      "source": "LLMNode_513",
      "target": "firecrawlNode_210",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "firecrawlNode_210-plus-node-addNode_triggerNode_1570",
      "type": "defaultEdge",
      "source": "firecrawlNode_210",
      "target": "plus-node-addNode_triggerNode_1570",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "inactive",
  "created_at": "2026-01-21T12:44:56.986513+00:00",
  "slug": "AbleEaster",
  "trigger_id": 2,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {
          "folderUrl": "list"
        },
        "nodeId": "googleDriveNode",
        "values": {
          "id": "triggerNode_1",
          "globs": [
            "**"
          ],
          "nodeName": "Google Drive",
          "syncMode": "incremental_append",
          "folderUrl": "https://drive.google.com/drive/folders/1vUrqW5Q1VDd5tN9acm-dQYjrn7F_j59Z",
          "credentials": "Google Drive OAuth",
          "cronExpression": "0 0 00 ? * 1 * UTC"
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
      "id": "LLMNode_513",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "LLMNode",
        "values": {
          "id": "LLMNode_513",
          "tools": [],
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an AI Assistant"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Just say Hello"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate Text",
          "attachments": "",
          "credentials": "",
          "generativeModelName": [
            {
              "type": "generator/text",
              "params": {},
              "configName": "configA",
              "model_name": "gpt-4o-mini",
              "credentialId": "54755a46-676f-4e50-aac3-aa49d3b4b37f",
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
      "selected": false
    },
    {
      "id": "firecrawlNode_210",
      "data": {
        "label": "dynamicNode node",
        "logic": [
          {
            "type": "retry",
            "config": "Config A",
            "delayConfig": 300,
            "maxAttempts": 3
          },
          {
            "type": "fallback",
            "config": "Config A",
            "onTimeout": false,
            "fallbackConfig": "Config B"
          }
        ],
        "modes": {
          "webhook": "list"
        },
        "nodeId": "firecrawlNode",
        "values": {
          "id": "firecrawlNode_210",
          "url": "https://config1",
          "mode": "sync",
          "urls": "",
          "delay": 0,
          "limit": 10,
          "model": "spark-1-mini",
          "mobile": false,
          "prompt": "",
          "search": "",
          "timeout": 30000,
          "waitFor": 2000,
          "webhook": "",
          "nodeName": "Firecrawl",
          "agentUrls": "",
          "agentJobId": "",
          "crawlDepth": 1,
          "crawlLimit": 10,
          "maxCredits": "",
          "agentSchema": "",
          "credentials": "Firecrawl",
          "excludePath": [],
          "excludeTags": [],
          "includePath": [],
          "includeTags": [],
          "sitemapOnly": false,
          "crawlSubPages": false,
          "ignoreSitemap": false,
          "webhookEvents": [
            "completed",
            "failed",
            "page",
            "started"
          ],
          "changeTracking": false,
          "webhookHeaders": "",
          "onlyMainContent": false,
          "webhookMetadata": "",
          "includeSubdomains": false,
          "maxDiscoveryDepth": 1,
          "allowBackwardLinks": false,
          "allowExternalLinks": false,
          "skipTlsVerification": false,
          "ignoreQueryParameters": true,
          "strictConstrainToURLs": false
        },
        "valuesB": {
          "id": "firecrawlNode_210",
          "url": "https://config2",
          "mode": "sync",
          "urls": "",
          "delay": 0,
          "limit": 10,
          "model": "spark-1-mini",
          "mobile": false,
          "prompt": "",
          "search": "",
          "timeout": 30000,
          "waitFor": 2000,
          "nodeName": "Firecrawl",
          "agentUrls": "",
          "agentJobId": "",
          "crawlDepth": 1,
          "crawlLimit": 10,
          "maxCredits": "",
          "agentSchema": "",
          "credentials": "Firecrawl",
          "excludePath": [],
          "excludeTags": [],
          "includePath": [],
          "includeTags": [],
          "sitemapOnly": false,
          "crawlSubPages": false,
          "ignoreSitemap": false,
          "webhookEvents": [
            "completed",
            "failed",
            "page",
            "started"
          ],
          "changeTracking": false,
          "webhookHeaders": "",
          "onlyMainContent": false,
          "webhookMetadata": "",
          "includeSubdomains": false,
          "maxDiscoveryDepth": 1,
          "allowBackwardLinks": false,
          "allowExternalLinks": false,
          "skipTlsVerification": false,
          "ignoreQueryParameters": true,
          "strictConstrainToURLs": false
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 260
      },
      "selected": true
    },
    {
      "id": "plus-node-addNode_triggerNode_1570",
      "data": {
        "label": "+",
        "nodeId": "addNode",
        "values": {}
      },
      "type": "addNode",
      "measured": {
        "width": 216,
        "height": 100
      },
      "position": {
        "x": 0,
        "y": 390
      }
    }
  ]
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