import { useState } from "react";
import '../popupInputOpen.css'

const PopupList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Группа")


  const toggleFunction = () => setIsOpen((prevState) => !prevState);
  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  }

  return (
    <>
      <div
        id="popup__group"
        className="popup__input"
        onClick={toggleFunction}
      >
        <p>{selectedValue}</p>
        <div className={`popup__group-pluss${isOpen ? 'minus' : ""}`}></div>
      </div>

      <input
        type='hidden'
        name="group"
        value={selectedValue === "Группа" ? "" : selectedValue}
      />
      <div
        id="popup__group-list"
        className={`popup__group-list ${isOpen ? "open" : ""}`}
      >
        <div className="popup__group-choice"
          onClick={() => handleSelect("Бачата с 0")}>
          <p>Бачата с 0</p>
        </div>
        <div className="popup__group-choice"
          onClick={() => handleSelect("Индивидуальные")}>
          <p>Индивидуальные</p>
        </div>
        <div className="popup__group-choice"
          onClick={() => handleSelect("Совершенствование")}>
          <p>Совершенствование</p>
        </div>
      </div>
    </>
  );
};

export default PopupList;