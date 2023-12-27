import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Heading from '@atoms/heading'
import BlogCard from '@atoms/card/blogCard';
import './style.css'

interface BlogProps {
  id: number;
  img: string;
  date: string;
  title: string;
}

const BlogDetailContent = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  const getBlogs = () => {
    fetch("https://65816b993dfdd1b11c4339d2.mockapi.io/blog")
    .then(response => response.json())
    .then((data: BlogProps[]) => setBlogs(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <section className="blog-detail-content">
      <div className="container">
          <Heading 
            title="Read More Articles" 
            text='We consider all the drivers of change gives you the components you need to change to create a truly happens.'
          />
        <div className="blogs">
        {blogs.slice(0, 4)
        .map(blog => (
              <Link to="/blog-detail" key={blog.id}>
                <BlogCard
                  src={blog.img}
                  content1={blog.date}
                  content2={blog.title}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
export default BlogDetailContent;