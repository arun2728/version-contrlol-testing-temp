const flowConfig = {
  "id": "467e53a0-1b67-45ad-a2c3-9eff5b96b969",
  "name": "Thoughtless Beard",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {},
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "edges": [],
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