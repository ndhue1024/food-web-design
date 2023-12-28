import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Pagination } from "@mui/material";
import Loader from "@atoms/loader";
import Heading from "@atoms/heading";
import BlogCard from "@atoms/card/blogCard";
import "./style.css";

type BlogProps = {
  id: number;
  img: string;
  date: string;
  title: string;
};

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  const itemsByPage = () => {
    const begin = page === 1 ? 0 : ((page - 1) * perPage);
    const end = begin + perPage;
    return blogs.slice(begin, end);
  };

  const handleChange = (e: any, p: any) => {
    setPage(p);
  };

  const getBlogs = async () => {
    try {
      const response = await fetch(
        "https://65816b993dfdd1b11c4339d2.mockapi.io/blog"
      );
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
    const handlePage = () => {
      if(window.innerWidth >= 1175) {
        setPerPage(8)
      }
      if(window.innerWidth < 1175) {
        setPerPage(6)
      }
      if(window.innerWidth < 991) {
        setPerPage(4)
      }
    }
    window.addEventListener('resize', handlePage)
    handlePage();
    return () => window.removeEventListener('resize', handlePage);
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
            {itemsByPage().map((blog) => (
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
          <Loader />
        )}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="1rem"
        >
          <Pagination
            count={Math.ceil(blogs.length / perPage)}
            size="medium"
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </Box>
      </div>
    </section>
  );
};

export default Blog;
