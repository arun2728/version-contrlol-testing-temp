const flowConfig = {
  "id": "467e53a0-1b67-45ad-a2c3-9eff5b96b969",
  "name": "Thoughtless Beard",
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
      "id": "plus-node-addNode_249196",
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
        "y": 260
      }
    },
    {
      "id": "batchEndNode_908",
      "data": {
        "label": "batchEndNode node",
        "modes": {},
        "nodeId": "batchEndNode",
        "values": {
          "nodeName": "Batch End",
          "connectedTo": "batchNode_475"
        }
      },
      "type": "batchEndNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 390
      }
    },
    {
      "id": "batchNode_475",
      "data": {
        "label": "batchNode node",
        "modes": {},
        "nodeId": "batchNode",
        "values": {
          "id": "batchNode_475",
          "endValue": "130",
          "nodeName": "Batch",
          "increment": 1,
          "connectedTo": "batchEndNode_908",
          "iterateOver": "range",
          "initialValue": "10",
          "iteratorValue": "[]",
          "concurrencyLimit": 10
        }
      },
      "type": "batchNode",
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
        "y": 520
      }
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-batchNode_475-611",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "batchNode_475",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchNode_475-plus-node-addNode_249196-913",
      "data": {
        "condition": "Batch Start",
        "invisible": true
      },
      "type": "conditionEdge",
      "source": "batchNode_475",
      "target": "plus-node-addNode_249196",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "plus-node-addNode_249196-batchEndNode_908-723",
      "type": "defaultEdge",
      "source": "plus-node-addNode_249196",
      "target": "batchEndNode_908",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchEndNode_908-responseNode_triggerNode_1-184",
      "type": "defaultEdge",
      "source": "batchEndNode_908",
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
    },
    {
      "id": "batchNode_475-batchEndNode_908-505",
      "data": {
        "condition": "Batch"
      },
      "type": "loopEdge",
      "source": "batchNode_475",
      "target": "batchEndNode_908",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchEndNode_908-batchNode_475-664",
      "data": {
        "condition": "Batch",
        "invisible": true
      },
      "type": "loopEdge",
      "source": "batchEndNode_908",
      "target": "batchNode_475",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-05-07T04:10:22.697653+00:00"
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