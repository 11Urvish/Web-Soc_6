exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:GetLocalListVersionResponse",
    "title": "GetLocalListVersionResponse",
    "type": "object",
    "properties": {
        "listVersion": {
            "type": "integer"
        }
    },
    "additionalProperties": false,
    "required": [
        "listVersion"
    ]
}