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
      "id": "docExtractorNode_746",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "docExtractorNode",
        "values": {
          "id": "docExtractorNode_746",
          "schema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"page_meaning\": {\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"In 1-3 sentences, describe what this page is ABOUT using clear, domain-relevant keywords, WITHOUT including any instance-specific facts. Focus on the type of document and the legal, commercial, or informational purpose of this page. Allowed: generic descriptions like 'residential mortgage agreement for a single-family property', 'employment offer letter outlining compensation and duties', 'non-disclosure agreement defining confidentiality obligations', 'invoice page listing line-item charges for services'. Forbidden: any specific party names, company names, addresses, jurisdictions, book/page numbers, instrument numbers, tax IDs, or exact dates and amounts. If the page is mostly maps, diagrams, or tables, describe their conceptual purpose without quoting any labels or numbers.\"\n    },\n    \"mentioned_page_number\": {\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"The page number as it appears on this page, if any. Look for markers like 'Page 3', 'Page 3 of 10', 'P. 3', or Roman numerals such as 'iii'. Return the page number in a concise normalized form: prefer plain Arabic numerals (e.g., '3') when unambiguous; for compound formats you may return the full string (e.g., '3 of 10'). If no page number marker is visible on the page, return 'N/A'.\"\n    },\n    \"is_first_page\": {\n      \"type\": \"boolean\",\n      \"required\": true,\n      \"description\": \"Return true if this page appears to be the first page (or cover page) of a multi-page document, otherwise false. Signals for true include: a prominent document title near the top, opening clauses such as 'This Agreement', 'This Indenture', or 'Know All Men', introductory recitals ('Whereas' clauses), a clear introductory block of parties and roles, or a recording/filing stamp at the very top. If the page looks like a continuation of numbered sections, schedules, exhibits, signature pages, or maps with no clear introductory framing, return false.\"\n    },\n    \"is_last_page\": {\n      \"type\": \"boolean\",\n      \"required\": true,\n      \"description\": \"Return true if this page appears to be the final page of a document, otherwise false. Signals for true include: signature blocks (individual or corporate), acknowledgment/verification or notary sections, witness lines, closing attest language (e.g., 'In witness whereof'), or completion markers like 'End of Document' or page count indicators such as 'Page 10 of 10'. If the page looks like a middle page with ongoing clauses, schedules, or tables and no closing/signature structure, return false.\"\n    },\n    \"is_map\": {\n      \"type\": \"boolean\",\n      \"required\": true,\n      \"description\": \"Return true ONLY if this page is visually structured as a land map, tax map, subdivision plat, survey diagram, floor plan, or similar layout and is dominated by spatial graphics rather than linear text. Typical indicators: multiple adjacent shapes or parcels arranged in a grid or block layout; repeated numeric labels inside parcels (lot numbers, unit numbers); lines forming property boundaries, streets, or easements; measurements such as distances or bearings near lines; labels like 'LOT', 'BLOCK', 'PARCEL', or street names positioned inside the layout; rotated or scattered text aligned with shapes, with very little continuous paragraph flow. Return false if the page is primarily paragraphs, legal text, tables, or forms, follows a normal top-to-bottom reading order, or contains only small diagrams with mostly text, even if it references lots, parcels, or maps in the wording.\"\n    }\n  }\n}",
          "nodeName": "Doc Extractor",
          "joinPages": true,
          "documentUrl": "https://drive.google.com/uc?export=download&id=1d2R_6ONks8059ldjUcpC-gSZgAtawlqA",
          "customPrompt": "",
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
          "outputFormat": "json",
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
      "id": "triggerNode_1-docExtractorNode_746",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "docExtractorNode_746",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "docExtractorNode_746-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "docExtractorNode_746",
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