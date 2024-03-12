import React, { useState, useEffect } from "react";
import "./Inventory.css";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const updateInventory = () => {
      const storedItems =
        JSON.parse(localStorage.getItem("inventory")) || [];
      setItems(storedItems);
    };

    // 로컬 스토리지에 변화가 있을 때마다 인벤토리를 업데이트하고 싶지만,
    // 직접적인 이벤트 리스너를 설정할 수는 없으므로, 다른 방법을 모색해야 합니다.
    updateInventory();

    // 예를 들어, 아이템 추가 로직을 호출하는 컴포넌트에서 이벤트를 발생시키고,
    // 여기에서 해당 이벤트를 감지하여 `updateInventory`를 호출할 수 있습니다.
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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
