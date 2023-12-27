import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Heading from "@atoms/heading";
import Button from "@atoms/button";
import MenuCard from "@atoms/card/menuCard";
import "./style.css";

type MenuCardsProps = {
  id: string;
  price: number;
  name: string;
  desc: string;
  img: string;
};

const MenuHero = () => {
  const [cards, setCards] = useState<MenuCardsProps[]>([]);
  const [filter, setFilter] = useState("All");

  const handleFilter = (e: string) => {
    setFilter(e);
  };

  const getCards = async () => {
    try {
      const response = await fetch("https://65816b993dfdd1b11c4339d2.mockapi.io/menu");
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.log(error);
    } 
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <section className="menu-hero">
      <Heading
        title="Our Menu"
        text="We consider all the drivers of change gives you the components you need to change to create a truly happens."
      />
      <div className="container">
        <div className="buttons">
          <Button
            onClick={() => handleFilter("All")}
            title="All"
            variant={(filter === "All") ? "primary" : "secondary"}
          />
          <Button
            title="Breakfast"
            onClick={() => handleFilter("Breakfast")}
            variant={(filter === "Breakfast") ? "primary" : "secondary"}
          />
          <Button
            title="Main Dishes"
            onClick={() => handleFilter("Main Dishes")}
            variant={(filter === "Main Dishes") ? "primary" : "secondary"}
          />
          <Button
            title="Drinks"
            onClick={() => handleFilter("Drinks")}
            variant={(filter === "Drinks") ? "primary" : "secondary"}
          />
          <Button
            title="Desserts"
            onClick={() => handleFilter("Desserts")}
            variant={(filter === "Desserts") ? "primary" : "secondary"}
          />
        </div>
      </div>
      
        {cards.length !== 0 ? (
          <div className="cards">
            {
              cards.map((card) => (
                <div className="card" key={card.id}>
                  <MenuCard
                    src={card.img}
                    content1={card.price.toString()}
                    content2={card.name}
                    content3={card.desc}
                  />
                </div>
              ))
            }
          </div>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
          >
            <CircularProgress color="inherit" />
          </Box>
        )}
    </section>
  );
};
export default MenuHero;