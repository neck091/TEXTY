import React, { useState, useEffect } from "react";
import "./Inventory.css";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // 인벤토리 아이템 조회 함수
  const fetchInventory = async () => {
    const response = await fetch("/api/inventory");
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // 아이템 클릭 이벤트 핸들러
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // 상세 정보 닫기 이벤트 핸들러
  const handleCloseDetail = () => {
    setSelectedItem(null);
  };

  return (
    <main className="inventory">
      <h2 className="title">인벤토리</h2>
      <div className="item_box">
        {items.length > 0 && (
          <ul className="items">
            {items.map((item, index) => (
              <li
                className="item"
                key={index}
                onClick={() => handleItemClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
        {selectedItem && (
          <section className="item_texts">
            <>
              <div className="item_text">
                <p>{selectedItem.description}</p>
              </div>
              <button className="cancel" onClick={handleCloseDetail}>
                x
              </button>
            </>
          </section>
        )}
      </div>
    </main>
  );
};

export default Inventory;
