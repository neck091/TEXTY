let query;
if (typeof window === "undefined") {
  // 서버 환경인 경우에만 pg 모듈을 가져옵니다.
  const { query: serverQuery } = require("./db.js");
  query = serverQuery;
} else {
  // 브라우저 환경에서는 더미 함수를 사용합니다.
  query = () => {};
}

export const obtainItem = async (itemId) => {
  try {
    await query(
      `UPDATE inventory_items SET visible = true WHERE id = $1`,
      [itemId]
    );
    console.log("Item updated successfully");
  } catch (error) {
    console.error("Database update error:", error);
    throw error;
  }
};
