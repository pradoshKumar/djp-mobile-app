import { ITelemetryContext } from "./telemetry-request";

export const initTelemetryContext: ITelemetryContext = {
    config: {
        "pdata": {
        "id": "genie",
        "ver": "6.5.2567",
        "pid": ""
        },
        "env": "initTelemetry",
        "channel": "",
        "did": '',
        "authtoken": "",
        "uid": "anonymous",
        "sid": "",
        "batchsize": 20,
        "mode": "",
        "host": "",
        "endpoint": "/v3/telemetry",  
        "tags": [],
        "cdata": [],
        'dispatcher': {
        }
    },
    userOrgDetails: ''
}

export const startTelemetryConfig: any = {
    options: {
        object: {
            "id": "",
            "type": "",
            "ver": "",
            "rollup": {}
        },
    },
    edata: {},
    eid: "",
    ets: "",
    context: {
        "cdata": [],
        "env": "",
        "channel": "0126796199493140480",
        "pdata": {
            "id": "",
            "pid": "",
            "ver": ""
        },
        "sid": "",
        "did": "",
        "rollup": {}
    },
    actor: {
        "type": "User",
        "id": ""
    },
    mid: ""
}

export const telemetryConfig: any = {
    edata: {},
    options: {
        context: {
          "cdata": [],
          "env": "",
          "channel": "0126796199493140480",
          "pdata": {
            "id": "",
            "pid": "",
            "ver": ""
            },
          "sid": '',
          "did": "",
          "rollup": {}
        },
        object: {
          "id": "",
          "type": "",
          "ver": "",
          "rollup": {}
        },
        actor: {
          "type": "User",
          "id": ""
        },
        tags: [''],
    },
    eid: '',
    ets: '',
    mid: ''
}

export const syncTelemetryReq = {
    id: "api.djp.telemetry",
    ver: "3.0",
    params: {
        msgid: "17afd6b09dd6448c891829d9f4af904a"
    },
    ets: 0,
    events: [{}]
}