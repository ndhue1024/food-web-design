import "./style.css";
import { Title } from "../../../../atoms/title";
import Button from "../../../../atoms/button";
import { Card } from "../../../../atoms/card";
import { Link } from "react-router-dom";


export const Blog = () => {
  

  return (
    <section className="blog">
      <div className="heading">
        <Title title="Our Blog & Articles" />
        <Link to="/blogs">
          <Button title="Read All Articles" isRed={true} />
        </Link>
      </div>
      <div className="blog-content">
        <div className="remarkable-blog">
          <Link to="/blog-details">
            <Card
                src="./assets/remark-blog.png"
                title="January 3, 2023"
                detail="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
                isRemarkable="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
              />
          </Link>
        </div>
        <div className="others-blog">
          <Link to="/blog-details">
            <Card
                src="./assets/blog1.png"
                title="January 3, 2023"
                detail="How to prepare the perfect french fries in an air fryer"
                isBlog={true}
              />
          </Link>
          <Link to="/blog-details">
            <Card
              src="./assets/blog2.png"
              title="January 3, 2023"
              detail="How to prepare delicious chicken tenders"
              isBlog={true}
            />
          </Link>
          <Link to="/blog-details">
            <Card
              src="./assets/blog3.png"
              title="January 3, 2023"
              detail="7 delicious cheesecake recipes you can prepare"
              isBlog={true}
            />
          </Link>
          <Link to="/blog-details">
            <Card
              src="./assets/blog4.png"
              title="January 3, 2023"
              detail="5 great pizza restaurants you should visit this city"
              isBlog={true}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};