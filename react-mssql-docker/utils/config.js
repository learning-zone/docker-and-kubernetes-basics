/**
 * Database Connection
 */
 var config = {
    "user": "sa",
    "password": "P@ssw0rd",
    "server": "192.168.43.120",
    "database": "TestDB",
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