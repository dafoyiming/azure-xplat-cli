// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'australiasoutheast';
  process.env['SSHCERT'] = 'test/containerCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer9791master\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer9791a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer9791a2\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true\r\n      }\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791\",\r\n  \"name\": \"xplatContainer9791\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2370',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '62975ac4-1346-400f-84f6-0e3837c6b258',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '2098b7ff-046f-497d-8631-99af1b15e81d',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022741Z:2098b7ff-046f-497d-8631-99af1b15e81d',
  date: 'Mon, 11 Apr 2016 02:27:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer9791master\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer9791a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer9791a2\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true\r\n      }\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791\",\r\n  \"name\": \"xplatContainer9791\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2370',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '62975ac4-1346-400f-84f6-0e3837c6b258',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '2098b7ff-046f-497d-8631-99af1b15e81d',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022741Z:2098b7ff-046f-497d-8631-99af1b15e81d',
  date: 'Mon, 11 Apr 2016 02:27:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '4890bfe5-e93d-49aa-aa7e-54978f10b04a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2b6f3b72-4a2c-4747-b7dc-0acde0be4335',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022814Z:2b6f3b72-4a2c-4747-b7dc-0acde0be4335',
  date: 'Mon, 11 Apr 2016 02:28:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '4890bfe5-e93d-49aa-aa7e-54978f10b04a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2b6f3b72-4a2c-4747-b7dc-0acde0be4335',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022814Z:2b6f3b72-4a2c-4747-b7dc-0acde0be4335',
  date: 'Mon, 11 Apr 2016 02:28:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '015f1141-cc6f-464d-ba2a-871dd8a0b608',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'b31acac2-69ec-4219-9fe3-36325963ebae',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022845Z:b31acac2-69ec-4219-9fe3-36325963ebae',
  date: 'Mon, 11 Apr 2016 02:28:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '015f1141-cc6f-464d-ba2a-871dd8a0b608',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'b31acac2-69ec-4219-9fe3-36325963ebae',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022845Z:b31acac2-69ec-4219-9fe3-36325963ebae',
  date: 'Mon, 11 Apr 2016 02:28:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '9cad32c7-c2ff-4f2c-9542-f71beb3d60e3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'ec65312f-8053-4b3c-842f-8522e927488c',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022916Z:ec65312f-8053-4b3c-842f-8522e927488c',
  date: 'Mon, 11 Apr 2016 02:29:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '9cad32c7-c2ff-4f2c-9542-f71beb3d60e3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'ec65312f-8053-4b3c-842f-8522e927488c',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022916Z:ec65312f-8053-4b3c-842f-8522e927488c',
  date: 'Mon, 11 Apr 2016 02:29:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '0c16aac4-c966-44f5-a701-01103a223a60',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'd81b8a72-a59a-4035-a2a7-0e5d42574eff',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022947Z:d81b8a72-a59a-4035-a2a7-0e5d42574eff',
  date: 'Mon, 11 Apr 2016 02:29:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '0c16aac4-c966-44f5-a701-01103a223a60',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'd81b8a72-a59a-4035-a2a7-0e5d42574eff',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T022947Z:d81b8a72-a59a-4035-a2a7-0e5d42574eff',
  date: 'Mon, 11 Apr 2016 02:29:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"endTime\": \"2016-04-11T02:30:14.0359084+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '842b78dd-e655-40e9-9bbf-3367d561920c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'abe70310-9a8b-4b22-9a7d-74d30005a1bc',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T023018Z:abe70310-9a8b-4b22-9a7d-74d30005a1bc',
  date: 'Mon, 11 Apr 2016 02:30:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/62975ac4-1346-400f-84f6-0e3837c6b258?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"62975ac4-1346-400f-84f6-0e3837c6b258\",\r\n  \"startTime\": \"2016-04-11T02:27:40.1603662+00:00\",\r\n  \"endTime\": \"2016-04-11T02:30:14.0359084+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '842b78dd-e655-40e9-9bbf-3367d561920c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'abe70310-9a8b-4b22-9a7d-74d30005a1bc',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T023018Z:abe70310-9a8b-4b22-9a7d-74d30005a1bc',
  date: 'Mon, 11 Apr 2016 02:30:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer9791master\",\r\n      \"fqdn\": \"xplatcontainer9791master.australiasoutheast.cloudapp.azure.com\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer9791a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer9791a2\",\r\n        \"fqdn\": \"xplatcontainer9791a2.australiasoutheast.cloudapp.azure.com\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true\r\n      }\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791\",\r\n  \"name\": \"xplatContainer9791\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2531',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '1a72e810-8451-41b1-90be-e877e621e9a0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '36f5465d-02a0-4627-9a0e-9e3b52ac485d',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T023019Z:36f5465d-02a0-4627-9a0e-9e3b52ac485d',
  date: 'Mon, 11 Apr 2016 02:30:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer9791master\",\r\n      \"fqdn\": \"xplatcontainer9791master.australiasoutheast.cloudapp.azure.com\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer9791a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer9791a2\",\r\n        \"fqdn\": \"xplatcontainer9791a2.australiasoutheast.cloudapp.azure.com\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true\r\n      }\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791\",\r\n  \"name\": \"xplatContainer9791\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2531',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '1a72e810-8451-41b1-90be-e877e621e9a0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '36f5465d-02a0-4627-9a0e-9e3b52ac485d',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T023019Z:36f5465d-02a0-4627-9a0e-9e3b52ac485d',
  date: 'Mon, 11 Apr 2016 02:30:19 GMT',
  connection: 'close' });
 return result; }]];