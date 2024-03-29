import "./style.css";

type ServiceCardProps = {
  src: string;
  content1: string;
  content2: string;
}

const ServiceCard = ({
  src,
  content1,
  content2,
}: ServiceCardProps) => {
  return (
    <div className="card-box">
      <div className="card-container">
        <div className="img">
          <img src={src} alt="service-img" />
        </div>
        <h4 className="title">{content1}</h4>
        <p className="detail">{content2}</p>
      </div>
    </div>
  );
};

export default ServiceCard;