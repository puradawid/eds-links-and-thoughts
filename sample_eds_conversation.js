fetch("https://admin.hlx.page/status/puradawid/eds-demo/main?editUrl=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Ffolders%2F1MXqgCqL2O6T3vILEgUPUjrumuZdFQnmK", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,pl;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://drive.google.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});

/* RESPONSE:
{
  "webPath": "/",
  "resourcePath": "/",
  "live": {
    "url": "https://main--eds-demo--puradawid.aem.live/",
    "status": 404,
    "contentBusId": "helix-content-bus/6b5ed9775dd80615b9ea40ab704d4563c4fa24dfdafd7856af217b2dc6e/live/",
    "permissions": [
      "read",
      "write"
    ]
  },
  "preview": {
    "url": "https://main--eds-demo--puradawid.aem.page/",
    "status": 404,
    "contentBusId": "helix-content-bus/6b5ed9775dd80615b9ea40ab704d4563c4fa24dfdafd7856af217b2dc6e/preview/",
    "permissions": [
      "read",
      "write"
    ]
  },
  "edit": {
    "url": "https://drive.google.com/drive/u/0/folders/1MXqgCqL2O6T3vILEgUPUjrumuZdFQnmK",
    "name": "",
    "contentType": "application/folder",
    "folders": [],
    "lastModified": "Tue, 22 Oct 2024 12:48:30 GMT",
    "sourceLocation": "gdrive:1MXqgCqL2O6T3vILEgUPUjrumuZdFQnmK",
    "status": 200
  },
  "code": {
    "status": 400,
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
*/

// request publication

fetch("https://admin.hlx.page/preview/puradawid/eds-demo/main/nav", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,pl;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://drive.google.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});

/* RESPONSE:
{
  "webPath": "/nav",
  "resourcePath": "/nav.md",
  "preview": {
    "url": "https://main--eds-demo--puradawid.aem.page/nav",
    "status": 200,
    "contentBusId": "helix-content-bus/6b5ed9775dd80615b9ea40ab704d4563c4fa24dfdafd7856af217b2dc6e/preview/nav.md",
    "contentType": "text/plain; charset=utf-8",
    "lastModified": "Sat, 26 Oct 2024 17:46:49 GMT",
    "sourceLocation": "gdrive:1j4PdXTyuSx80PgY8Khrhz1cz7cRrLC5gI4MwK-3GVPk",
    "sourceLastModified": "Tue, 22 Oct 2024 12:54:10 GMT",
    "permissions": [
      "delete",
      "read",
      "write"
    ]
  },
  "links": {
    "status": "https://admin.hlx.page/status/puradawid/eds-demo/main/nav",
    "preview": "https://admin.hlx.page/preview/puradawid/eds-demo/main/nav",
    "live": "https://admin.hlx.page/live/puradawid/eds-demo/main/nav",
    "code": "https://admin.hlx.page/code/puradawid/eds-demo/main/nav"
  }
}
*/
