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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage16018.blob.core.windows.net/xplatteststoragecnt12103\",\r\n            \"https://xplatteststorage26659.blob.core.windows.net/xplatteststoragecnt24121\",\r\n            \"https://xplatteststorage37766.blob.core.windows.net/xplatteststoragecnt39401\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Network/virtualNetworks/xplattestvnet5583/subnets/xplattestsubnet7518\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2533',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '4ee0e722-5076-4db4-9c04-8dac80324b80',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2ec1a3fe-7e7d-49ee-b0c1-2f6f76e3a69d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170756Z:2ec1a3fe-7e7d-49ee-b0c1-2f6f76e3a69d',
  date: 'Tue, 17 May 2016 17:07:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage16018.blob.core.windows.net/xplatteststoragecnt12103\",\r\n            \"https://xplatteststorage26659.blob.core.windows.net/xplatteststoragecnt24121\",\r\n            \"https://xplatteststorage37766.blob.core.windows.net/xplatteststoragecnt39401\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Network/virtualNetworks/xplattestvnet5583/subnets/xplattestsubnet7518\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2533',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '4ee0e722-5076-4db4-9c04-8dac80324b80',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2ec1a3fe-7e7d-49ee-b0c1-2f6f76e3a69d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170756Z:2ec1a3fe-7e7d-49ee-b0c1-2f6f76e3a69d',
  date: 'Tue, 17 May 2016 17:07:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage16018.blob.core.windows.net/xplatteststoragecnt12103\",\r\n            \"https://xplatteststorage26659.blob.core.windows.net/xplatteststoragecnt24121\",\r\n            \"https://xplatteststorage37766.blob.core.windows.net/xplatteststoragecnt39401\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Network/virtualNetworks/xplattestvnet5583/subnets/xplattestsubnet7518\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2533',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': 'e6688aee-3177-4bc5-9882-878e1e4dc4fa',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '61a6a698-6935-4502-a0bb-4a319d6d0764',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170758Z:61a6a698-6935-4502-a0bb-4a319d6d0764',
  date: 'Tue, 17 May 2016 17:07:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage16018.blob.core.windows.net/xplatteststoragecnt12103\",\r\n            \"https://xplatteststorage26659.blob.core.windows.net/xplatteststoragecnt24121\",\r\n            \"https://xplatteststorage37766.blob.core.windows.net/xplatteststoragecnt39401\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Network/virtualNetworks/xplattestvnet5583/subnets/xplattestsubnet7518\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2533',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': 'e6688aee-3177-4bc5-9882-878e1e4dc4fa',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '61a6a698-6935-4502-a0bb-4a319d6d0764',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170758Z:61a6a698-6935-4502-a0bb-4a319d6d0764',
  date: 'Tue, 17 May 2016 17:07:57 GMT',
  connection: 'close' });
 return result; }]];