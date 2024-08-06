const pool = require("./connection");

const phDDL = `
  CREATE TABLE IF NOT EXISTS "ProductionHouses" (
    "id" SERIAL PRIMARY KEY,
    "name_prodHouse" VARCHAR,
    "headquarters" VARCHAR
  )
`;

const moviesDDL = `
  CREATE TABLE IF NOT EXISTS "Movies" (
    "id" SERIAL	PRIMARY KEY,
    "name" VARCHAR,
    "released_year" INTEGER,
    "genre"	VARCHAR,
    "ProductionHouseId" INTEGER	REFERENCES "ProductionHouses" ("id")
  )
`;

(async () => {
  try {
    await pool.query(`DROP TABLE IF EXISTS "Movies", "ProductionHouses"`);
    console.log(`Tables have been dropped!`);
    await pool.query(phDDL);
    console.log(`Success create table "ProductionHouses`);
    await pool.query(moviesDDL);
    console.log(`Success create table "Movies`);
  } catch (error) {
    console.log(error.message);
  }
})();
