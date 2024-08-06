const { query } = require("express");
const fs = require("fs");
const pool = require("./connection");

const ph = JSON.parse(fs.readFileSync("./productionHouses.json"))
  .map((el) => {
    return `('${el.name}', '${el.headquarters}')`;
  })
  .join(", \n");

const phQuery = `
  INSERT INTO "ProductionHouses" ("name_prodHouse", "headquarters")
  VALUES
    ${ph}
  RETURNING *
`;

pool
  .query(phQuery)
  .then((result) => {
    console.table(result.rows);
  })
  .catch((err) => {
    console.log(err.message);
  });
