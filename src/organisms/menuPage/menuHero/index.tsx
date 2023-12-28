import { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";
import Heading from "@atoms/heading";
import Button from "@atoms/button";
import MenuCard from "@atoms/card/menuCard";
import Loader from "@atoms/loader";
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
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  const itemsByPage = () => {
    const begin = (page === 1) ? 0 : ((page - 1) * perPage);
    const end = begin + perPage;
    return cards.slice(begin, end);
  }
  const handleChange = (e:any, p:any) => {
    setPage(p);
  }

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
    const handlePage = () => {
      if(window.innerWidth >= 1175) {
        setPerPage(8)
      }
      if(window.innerWidth < 1175) {
        setPerPage(6)
      }
      if(window.innerWidth < 991) {
        setPerPage(4)
      }
    }
    window.addEventListener('resize', handlePage)
    handlePage();
    return () => window.removeEventListener('resize', handlePage);
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
              itemsByPage().map((card) => (
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
          <Loader />
        )}
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
          <Pagination
            count={Math.ceil(cards.length / perPage)}
            size="medium"
            variant="outlined"
            shape="rounded" 
            page={page}
            onChange={handleChange}
          />
        </Box>
    </section>
  );
};
export default MenuHero;