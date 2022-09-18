const { createConnection, endConnection } = require("../database/index");

async function getAllArtistsInGenre(req, res) {
  const db = await createConnection();
  const { genre } = req.params;
  const query = `SELECT DISTINCT artist FROM projects WHERE genre = 'Rap';`;

  try {
    const results = await db.query(query);

    res.send(results.rows);
  } catch (e) {
    console.error(e.stack);
    res.send(e.stack);
  }

  endConnection(db);
}

module.exports = {
  getAllArtistsInGenre
}