import React from 'react'
import "./style.css"
import { Title } from '../../../atoms/title'

const brands = [
  { id: 1, src: "brand1.png" },
  { id: 2, src: "brand2.png" },
  { id: 3, src: "brand3.png" },
  { id: 4, src: "brand4.png" },
  { id: 5, src: "brand5.png" },
  { id: 6, src: "brand6.png" },
  { id: 7, src: "brand7.png" },
  { id: 8, src: "brand8.png" },
  { id: 9, src: "brand9.png" },
]

interface BrandProps {
  id: number,
  src: string;
}
export const MenuBrand = () => {

  const renderBrands = () => {
    return brands.map((brand: BrandProps) => (
      <div className="brand-container" key={brand.id}>
        <img src={`./assets/${brand.src}`} alt="brand" />
      </div>
    ))
  }
  return (
    <section className="menu-brand">
      <div className="container">
        <div className="content">
          <Title title="You can order through apps" />
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
        </div>
          <div className="brands">
            {renderBrands()}
          </div>
      </div>
    </section>
  )
}
