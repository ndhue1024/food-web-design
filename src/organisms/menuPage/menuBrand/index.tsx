import Heading from '@atoms/heading'
import "./style.css"

const brands = [
  { id: 1, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580574/food-web/brand/brand1_sovzoh.png" },
  { id: 2, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580574/food-web/brand/brand2_lek91y.png" },
  { id: 3, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580575/food-web/brand/brand3_jgzmk2.png" },
  { id: 4, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580575/food-web/brand/brand4_v9cdyu.png" },
  { id: 5, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580576/food-web/brand/brand5_gwnknj.png" },
  { id: 6, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580577/food-web/brand/brand6_vw4yad.png" },
  { id: 7, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580578/food-web/brand/brand7_q1rrer.png" },
  { id: 8, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580579/food-web/brand/brand8_twgboj.png" },
  { id: 9, src: "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703580579/food-web/brand/brand9_hvgoip.png" },
]

type BrandProps = {
  id: number,
  src: string;
}
const MenuBrand = () => {
  const renderBrands = (start: number, end: number) => {
    return (
      brands
    .slice(start, end)
    .map((brand: BrandProps) => (
      <div className="brand-container" key={brand.id}>
        <img src={brand.src} alt="brand" />
      </div>
    ))
    )
  }
  return (
    <section className="menu-brand">
      <div className="container">
        <div className="content">
          <Heading 
            title="You can order through apps"
            text='Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.' 
          />
        </div>
          <div className="brands">
            <div className="brands-line">
              {renderBrands(0,3)}
            </div>
            <div className="brands-line middle">
              {renderBrands(3,6)}
            </div>
            <div className="brands-line">
              {renderBrands(6,9)}
            </div>
          </div>
      </div>
    </section>
  )
}
export default MenuBrand;