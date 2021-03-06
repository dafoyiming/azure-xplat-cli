// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-lb\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n      \"etag\": \"W/\\\"4d9f5bf9-4f5e-4d9c-9a83-f92f38a79385\\\"\",\r\n      \"type\": \"Microsoft.Network/loadBalancers\",\r\n      \"location\": \"southeastasia\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"57fd9101-aec4-4efe-bab3-954dfafcfa41\",\r\n        \"frontendIPConfigurations\": [],\r\n        \"backendAddressPools\": [],\r\n        \"loadBalancingRules\": [],\r\n        \"probes\": [],\r\n        \"inboundNatRules\": [],\r\n        \"outboundNatRules\": [],\r\n        \"inboundNatPools\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '826',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd78803f7-656a-4555-abce-55bb5417b418',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '879220a2-ec5a-4bdc-8ef1-f308fb8ed9f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T130036Z:879220a2-ec5a-4bdc-8ef1-f308fb8ed9f0',
  date: 'Tue, 17 May 2016 13:00:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-lb\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n      \"etag\": \"W/\\\"4d9f5bf9-4f5e-4d9c-9a83-f92f38a79385\\\"\",\r\n      \"type\": \"Microsoft.Network/loadBalancers\",\r\n      \"location\": \"southeastasia\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"57fd9101-aec4-4efe-bab3-954dfafcfa41\",\r\n        \"frontendIPConfigurations\": [],\r\n        \"backendAddressPools\": [],\r\n        \"loadBalancingRules\": [],\r\n        \"probes\": [],\r\n        \"inboundNatRules\": [],\r\n        \"outboundNatRules\": [],\r\n        \"inboundNatPools\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '826',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd78803f7-656a-4555-abce-55bb5417b418',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '879220a2-ec5a-4bdc-8ef1-f308fb8ed9f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T130036Z:879220a2-ec5a-4bdc-8ef1-f308fb8ed9f0',
  date: 'Tue, 17 May 2016 13:00:36 GMT',
  connection: 'close' });
 return result; }]];