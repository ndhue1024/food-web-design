import React, { useEffect, useState } from 'react'
import './style.css'
import { Title } from '../../../../atoms/title'
import { CardItem } from '../../../../molecules/card-item/CardItem'

interface Foo {
  title: string;
  text: string;
  avatar: string;
  name: string;
  address: string;
  id: string;
}

export const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<Foo[]>([]);

  // Get Testimonial List
  const getTestimonials = () => {
    fetch('https://65816b993dfdd1b11c4339d2.mockapi.io/testimonial')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setTestimonial(data)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getTestimonials();
  }, []);

  const renderTestimonials = () => {
    return (
      testimonial?.map((item) => (
        <CardItem
            key={item.id}
            title={`“${item.title}”`}
            text={item.text}
            src={`./assets/${item.avatar}`}
            name={item.name}
            address={item.address}
          />
      ))
    )
  }
  return (
    <section className="testimonial">
      <div className="container">
        <Title title="What Our Customers Say" />
        <div className="list-card">
          {renderTestimonials()}
        </div>
      </div>
    </section>
  )
}
