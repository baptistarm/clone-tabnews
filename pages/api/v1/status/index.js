import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as SUM;");
  console.log(result.rows[0].sum);

  // console.log(database);

  return response.status(200).json({ teste: "teste" });
}

export default status;
