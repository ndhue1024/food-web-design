import { Link, useNavigate } from "react-router-dom";
import Heading from "@atoms/Heading";
import Button from "@atoms/Button";
import BlogCard from "@atoms/BlogCard";
import "./style.css";

const data = [
  {
    "src":"https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579013/food-web/blog1_bnqhu5.png",
    "content1":"January 3, 2023",
    "content2":"How to prepare the perfect french fries in an air fryer",
  },
  {
    "src":"https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579014/food-web/blog2_dvvp97.png",
    "content1":"January 3, 2023",
    "content2":"How to prepare delicious chicken tenders",
  },
  {
    "src":"https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579013/food-web/blog3_pzsiht.png",
    "content1":"January 3, 2023",
    "content2":"7 delicious cheesecake recipes you can prepare",
  },
  {
    "src":"https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579014/food-web/blog4_owgyig.png",
    "content1":"January 3, 2023",
    "content2":"5 great pizza restaurants you should visit this city",
  }
]

const Blog = () => {
  const navigate = useNavigate();

  const renderBlog = () => {
    return data.map((blog, index) => (
      <Link to="/blog-detail" key={index+1}>
        <BlogCard
          src={blog.src}
          content1={blog.content1}
          content2={blog.content2}
        />
      </Link>
    ))
  }
  
  return (
    <section className="blog">
      <div className="heading">
        <Heading title="Our Blog & Articles" />
          <Button 
            title="Read All Articles" 
            variant="primary"
            onClick={() => navigate('/blog')}
          />
      </div>
      <div className="blog-content">
        <div className="remarkable-blog">
          <Link to="/blog-detail">
            <BlogCard
                src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579417/food-web/remark-blog_u7x09e.png"
                content1="January 3, 2023"
                content2="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
                content3="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
              />
          </Link>
        </div>
        <div className="other-blog">
          {renderBlog()}
        </div>
      </div>
    </section>
  );
};

export default Blog;