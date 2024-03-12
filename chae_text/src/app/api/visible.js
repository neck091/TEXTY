import { query } from "../db/db.js";

export const obtainItem = async (itemId) => {
  try {
    await query(
      `UPDATE inventory_items SET visible = true WHERE id = $1`,
      [itemId]
    );
    return { message: "Item updated successfully" };
  } catch (error) {
    throw new Error("Database update error");
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { itemId } = req.body;
    try {
      const result = await obtainItem(itemId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
