// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .put('/storageclitestqueue')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'aa2c1c62-0003-0031-2a3e-8becb1000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:05:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .head('/storageclitestqueue?comp=metadata')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9114f1fe-0003-000e-274a-d4480b000000',
  'x-ms-version': '2014-02-14',
  'x-ms-approximate-messages-count': '0',
  date: 'Wed, 31 Dec 2014 04:06:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=metadata')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f0a05044-0003-0012-73b2-393df2000000',
  'x-ms-version': '2014-02-14',
  'x-ms-approximate-messages-count': '0',
  date: 'Wed, 31 Dec 2014 04:06:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1d317a58-0003-0003-4d70-d76c6c000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:02 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.queue.core.windows.net/\"><Queues><Queue><Name>queue01</Name></Queue><Queue><Name>queue011</Name></Queue><Queue><Name>queue02</Name></Queue><Queue><Name>queue03</Name></Queue><Queue><Name>queue04</Name></Queue><Queue><Name>queue10a5d3d7</Name></Queue><Queue><Name>queue91043d65</Name></Queue><Queue><Name>queue9c3b5fd4</Name></Queue><Queue><Name>queuea36ed56c</Name></Queue><Queue><Name>storageclitestqueue</Name></Queue></Queues><NextMarker /></EnumerationResults>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7b930875-0003-0007-4082-8c6945000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:03 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '42fa0b87-0003-001f-34ae-0ac0e1000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitestqueue?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '872404b8-0003-0038-054c-ccc7b9000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:05 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>queuepolicy01</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>au</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8cb2f4ff-0003-0028-62fa-abbb63000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:07 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>queuepolicy01</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>au</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '21f937e9-0003-0041-4b52-84ba61000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitestqueue?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3f96a401-0003-0045-80f7-bc6915000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:09 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>queuepolicy01</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>au</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>queuepolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>au</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '66f3353b-0003-000d-313f-c8e90e000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:10 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>queuepolicy01</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>au</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>queuepolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>au</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '84d02bd9-0003-003a-0119-40a74d000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:09 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitestqueue?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c0bb8316-0003-0016-6684-1bd940000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:11 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>queuepolicy01</Id><AccessPolicy><Start>2015-12-01T00:00:00.0000000Z</Start><Expiry>2100-12-31T00:00:00.0000000Z</Expiry><Permission>rpau</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>queuepolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>au</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '216af7c8-0003-002f-1238-f630b9000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitestqueue?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '46ea4557-0003-000b-1f29-8987b1000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:12 GMT' });
 return result; }],
[],
[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .head('/storageclitestqueue?comp=metadata')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '432891e0-0003-000f-4e36-9d75d1000000',
  'x-ms-version': '2014-02-14',
  'x-ms-approximate-messages-count': '0',
  date: 'Wed, 31 Dec 2014 04:06:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=metadata')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c678b3b2-0003-0014-11d4-958157000000',
  'x-ms-version': '2014-02-14',
  'x-ms-approximate-messages-count': '0',
  date: 'Wed, 31 Dec 2014 04:06:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>queuepolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>au</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ac058e18-0003-0040-097a-7cdef5000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:15 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .delete('/storageclitestqueue')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '509cff9b-0003-001d-2233-f45de2000000',
  'x-ms-version': '2014-02-14',
  date: 'Wed, 31 Dec 2014 04:06:16 GMT' });
 return result; }]];