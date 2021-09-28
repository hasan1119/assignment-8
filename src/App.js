import { useEffect, useState } from "react";
import "./App.css";
import bg from "./bg.jpg";
import Header from "./components/header/Header.js";
import Body from "./components/body/Body.js";
import Footer from "./components/footer/Footer.js";

function App() {
  // States
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  //Load data
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  useEffect(() => {
    const cart = getCart();
    setSelectedMembers(cart);
  }, [members]);

  function getCart() {
    const existingCart = localStorage.getItem("cart");
    let cart;
    if (existingCart) {
      cart = JSON.parse(existingCart);
    } else {
      cart = [];
    }
    return cart;
  }

  //Event Handler
  function eventHandler(selected) {
    const isMatching = selectedMembers.find(
      (member) => member.id === selected.id
    );
    if (!isMatching) {
      const newSelectedMembers = [...selectedMembers, selected];
      setSelectedMembers(newSelectedMembers);
      localStorage.setItem("cart", JSON.stringify(newSelectedMembers));
    } else {
      alert("Already Selected ⚠️");
    }
  }

  function confirm() {
    setSelectedMembers([]);
    localStorage.setItem("cart", []);
    alert("Thanks for Confirmation");
  }

  function Remove(name) {
    const cart = getCart();
    const newCart = cart.filter((person) => person.name !== name);
    setSelectedMembers(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <div style={{ background: `url(${bg})`, backgroundAttachment: "fixed" }}>
      <Header></Header>
      <Body
        Remove={Remove}
        confirm={confirm}
        selectedMembers={selectedMembers}
        eventHandler={eventHandler}
        members={members}
      ></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
