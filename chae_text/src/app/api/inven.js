import { query } from "../db/db.js";

export default handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const results = await query(
        "SELECT * FROM inventory_items WHERE visible = true"
      );
      res.status(200).json(results.rows);
    } catch (error) {
      res.status(500).json({ error: "Database connection error" });
    }
  } else {
    // 다른 HTTP 메소드 처리 (POST, PUT 등)
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
