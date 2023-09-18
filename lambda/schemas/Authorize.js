exports.schema = {
    "$id": "urn:OCPP:1.6:2019:12:AuthorizeRequest",
    "title": "AuthorizeRequest",
    "type": "object",
    "properties": {
        "idTag": {
            "type": "string",
            "maxLength": 20
        }
    },
    "additionalProperties": false,
    "required": [
        "idTag"
    ]
}