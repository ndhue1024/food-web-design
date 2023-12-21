import React, { useEffect, useState } from 'react'
import './style.css';
import { Title } from '../../../atoms/title';
import Button from '../../../atoms/button';

interface MenuCardsProps {
  id: string;
  price: number;
  name: string;
  desc: string;
  img: string;
}

export const MenuHero = () => {
  const [cards, setCards] = useState<MenuCardsProps[]>([]);
  const [filter, setFilter] = useState("All");

  const handleFilter = (e: string) => {
    setFilter(e);
  }

  const getCards =  () => {
    fetch('https://65816b993dfdd1b11c4339d2.mockapi.io/menu')
    .then(res => res.json())
    .then((data: MenuCardsProps[]) => {
      setCards(data)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getCards();
  }, [])

  return (
    <section className="menu-hero">
      <div className="title">
        <Title title="Our Menu" />
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <div className="container">
        <div className="buttons">
          <Button 
            onClick={() => handleFilter("All")} 
            title="All"
            isRed={filter === "All"}
          />
          <Button 
            title="Breakfast"
            onClick={() => handleFilter("Breakfast")}
            isRed={filter === "Breakfast"}
          />
          <Button
            title="Main Dishes"
            onClick={() => handleFilter("Main Dishes")}
            isRed={filter === "Main Dishes"}
          />
          <Button
            title="Drinks"
            onClick={() => handleFilter("Drinks")}
            isRed={filter === "Drinks"}
          />
          <Button
            title="Desserts"
            onClick={() => handleFilter("Desserts")}
            isRed={filter === "Desserts"}
          />
        </div>
      </div>
      <div className="cards">
        {cards.map(card => (
          <div className="card" key={card.id}>
          <img src={card.img} alt="menu" />
          <div className="text">
            <p className="price">$ {card.price}</p>
            <p className="name">{card.name}</p>
            <p className="desc">{card.desc}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}
