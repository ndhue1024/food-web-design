import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import BlogCard from "@atoms/card/blogCard";
import Heading from "@atoms/heading";
import "./style.css";

interface BlogProps {
  id: number;
  img: string;
  date: string;
  title: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  const getBlogs = () => {
    fetch("https://65816b993dfdd1b11c4339d2.mockapi.io/blog")
      .then((response) => response.json())
      .then((data: BlogProps[]) => setBlogs(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section className="blog-page">
      <div className="container">
        <Heading
          title="Our Blog & Articles"
          text="We consider all the drivers of change gives you the components you need to change to create a truly happens."
        />
        {blogs.length !== 0 ? (
          <div className="blogs">
            {blogs.map((blog) => (
              <Link to="/blog-detail" key={blog.id}>
                <BlogCard
                  src={blog.img}
                  content1={blog.date}
                  content2={blog.title}
                />
              </Link>
            ))}
          </div>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
          >
            <CircularProgress color="inherit" />
          </Box>
        )}
      </div>
    </section>
  );
};

export default Blog;