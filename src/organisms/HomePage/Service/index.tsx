import Heading from "@atoms/Heading";
import ServiceCard from "@atoms/ServiceCard";
import "./style.css";

const serviceData = [
  {
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579413/food-web/kebab-set-table-1_hm3pya.png",
    "content1": "Caterings",
    "content2": "In the new era of technology we look in the future with certainty for life."
  },
  {
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579015/food-web/charming-female-1_naqs1b.png",
    "content1": "Birthdays",
    "content2": "In the new era of technology we look in the future with certainty for life."
  },
  {
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579139/food-web/happy-sunny-1_mh9sao.png",
    "content1": "Weddings",
    "content2": "In the new era of technology we look in the future with certainty for life."
  },
  {
    "src": "https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579138/food-web/group-friend-1_fctv1n.png",
    "content1": "Events",
    "content2": "In the new era of technology we look in the future with certainty for life."
  }
]

const Service = () => {
  const renderServiceCard = () => {
    return serviceData.map((service, index) => (
      <ServiceCard
        key={index+1}
        src={service.src}
        content1={service.content1}
        content2={service.content2}
      />
    ))
  }
  return (
    <section className="services">
      <div className="container">
        <Heading title="We also offer unique services for your events" />
        <div className="service-options">
          {renderServiceCard()}
        </div>
      </div>
    </section>
  );
};
export default Service;