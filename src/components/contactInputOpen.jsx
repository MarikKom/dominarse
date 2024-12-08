import { useState } from "react";
import '../contactInputOpen.css'

const ContactList = () => {
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
      id="contacts__group"
      className="contacts__input"
      onClick={toggleFunction}
    >
        <p>{selectedValue}</p>
    <div className={`contacts__group-pluss${isOpen ? 'minus' : ""}`}></div>
      </div>

      <input
        id="hiddenGroupInputContacts"
        type='hidden'
        name="group"
        value={selectedValue === "Группа" ? "" : selectedValue}
      />
      <div
        id="contacts__group-list"
        className={`contacts__group-list ${isOpen ? "open" : ""}`}
      >
        <div className="contact__group-choice"
        onClick={() => handleSelect("Бачата с 0")}>
          <p>Бачата с 0</p>
        </div>
        <div className="contact__group-choice"
          onClick={() => handleSelect("Индивидуальные")}>
          <p>Индивидуальные</p>
        </div>
        <div className="contact__group-choice"
          onClick={() => handleSelect("Совершенствование")}>
          <p>Совершенствование</p>
        </div>
      </div>
    </>
  );
};

export default ContactList;