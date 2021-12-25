/**
 * Database Connection
 */
 var config = {
    "user": "sa",
    "password": "***",        // DB Password
    "server": "***",          // localhost or IP Address
    "database": "TestDB",     // DB Name
    "driver": "msnodesqlv8",
    "port": 1433,
    "options": {
        "trustedConnection": true,
        "encrypt": true,
        "enableArithAbort": true,
        "trustServerCertificate": true
      }
  };

module.exports = config;