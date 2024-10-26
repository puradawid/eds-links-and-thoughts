# How does admin.hlx.page work?

### Publication

`POST` to `https://admin.hlx.page/(live|preview)/${owner}/${repository}/${branch}/${page_path}` to trigger publication on live on preview.
Here's the example call:

```
curl -X POST "https://admin.hlx.page/live/puradawid/eds-demo/main/index"
```

Response:

```
{
  "webPath": "/",
  "resourcePath": "/index.md",
  "live": {
    "url": "https://main--eds-demo--puradawid.aem.live/",
    "status": 200,
    "contentBusId": "helix-content-bus/6b5ed9775dd80615b9ea40ab704d4563c4fa24dfdafd7856af217b2dc6e/live/index.md",
    "contentType": "text/plain; charset=utf-8",
    "lastModified": "Sat, 26 Oct 2024 18:04:32 GMT",
    "sourceLocation": "gdrive:198uGwlyNXlYv5wAm6MyEFh184MyqgaN-Ei1bXD5VOMo",
    "sourceLastModified": "Sat, 26 Oct 2024 18:03:46 GMT",
    "permissions": [
      "delete",
      "read",
      "write"
    ]
  },
  "links": {
    "status": "https://admin.hlx.page/status/puradawid/eds-demo/main/",
    "preview": "https://admin.hlx.page/preview/puradawid/eds-demo/main/",
    "live": "https://admin.hlx.page/live/puradawid/eds-demo/main/",
    "code": "https://admin.hlx.page/code/puradawid/eds-demo/main/"
  }
}
```

Theoretically, there is no authentication mechanism, so you can trigger publication event for any website, if you know the name of repository used.

You can also check the status of specific page by calling GET to this endpoint `https://admin.hlx.page/status/${owner}/${repository}/${branch}/${page_path}`

Example call: 

```
curl "https://admin.hlx.page/status/puradawid/eds-demo/main/index"
```

Repsonse:

```
{
  "webPath": "/",
  "resourcePath": "/index.md",
  "live": {
    "url": "https://main--eds-demo--puradawid.aem.live/",
    "status": 200,
    "contentBusId": "helix-content-bus/6b5ed9775dd80615b9ea40ab704d4563c4fa24dfdafd7856af217b2dc6e/live/index.md",
    "contentType": "text/plain; charset=utf-8",
    "lastModified": "Sat, 26 Oct 2024 18:04:32 GMT",
    "sourceLocation": "gdrive:198uGwlyNXlYv5wAm6MyEFh184MyqgaN-Ei1bXD5VOMo",
    "sourceLastModified": "Sat, 26 Oct 2024 18:03:46 GMT",
    "permissions": [
      "read",
      "write"
    ]
  },
  "preview": {
    "url": "https://main--eds-demo--puradawid.aem.page/",
    "status": 200,
    "contentBusId": "helix-content-bus/6b5ed9775dd80615b9ea40ab704d4563c4fa24dfdafd7856af217b2dc6e/preview/index.md",
    "contentType": "text/plain; charset=utf-8",
    "lastModified": "Sat, 26 Oct 2024 18:04:21 GMT",
    "sourceLocation": "gdrive:198uGwlyNXlYv5wAm6MyEFh184MyqgaN-Ei1bXD5VOMo",
    "sourceLastModified": "Sat, 26 Oct 2024 18:03:46 GMT",
    "permissions": [
      "read",
      "write"
    ]
  },
  "edit": {},
  "code": {
    "status": 404,
    "codeBusId": "helix-code-bus/puradawid/eds-demo/main/index",
    "permissions": [
      "read",
      "write"
    ]
  },
  "links": {
    "status": "https://admin.hlx.page/status/puradawid/eds-demo/main/",
    "preview": "https://admin.hlx.page/preview/puradawid/eds-demo/main/",
    "live": "https://admin.hlx.page/live/puradawid/eds-demo/main/",
    "code": "https://admin.hlx.page/code/puradawid/eds-demo/main/"
  }
}
```
