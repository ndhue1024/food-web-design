import "./style.css";
import { Title } from "../../../../atoms/title";
import Button from "../../../../atoms/button";
import { Card } from "../../../../atoms/card";


export const Blog = () => {
  

  return (
    <section className="blog">
      <div className="heading">
        <Title title="Our Blog & Articles" />
        <Button title="Read All Articles" isRed={true} />
      </div>
      <div className="blog-content">
        <div className="remarkable-blog">
          <Card
              src="./assets/remark-blog.png"
              title="January 3, 2023"
              detail="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
              isRemarkable="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
            />
        </div>
        <div className="others-blog">
          <Card
              src="./assets/blog1.png"
              title="January 3, 2023"
              detail="How to prepare the perfect french fries in an air fryer"
              isBlog={true}
            />
            <Card
              src="./assets/blog2.png"
              title="January 3, 2023"
              detail="How to prepare delicious chicken tenders"
              isBlog={true}
            />
            <Card
              src="./assets/blog3.png"
              title="January 3, 2023"
              detail="7 delicious cheesecake recipes you can prepare"
              isBlog={true}
            />
            <Card
              src="./assets/blog4.png"
              title="January 3, 2023"
              detail="5 great pizza restaurants you should visit this city"
              isBlog={true}
            />
        </div>
      </div>
    </section>
  );
};