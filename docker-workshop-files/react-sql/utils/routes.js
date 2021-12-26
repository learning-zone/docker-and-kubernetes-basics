const express = require("express");
const router = express.Router();
const sql = require("mssql");
const config = require("./config");

/**
 * GET Inventory DETAILS
 */
router.get("/api/get/items", function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);

    const request = new sql.Request();

    const smt = `SELECT [id], [name], [quantity] FROM [Inventory] ORDER BY [id]`;

    request.query(smt, function (err, recordsets) {
      if (err) console.log(err);
      res.send(recordsets);
    });
  });
});

module.exports = router;
