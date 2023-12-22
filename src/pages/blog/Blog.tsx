import React, { useEffect, useState } from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { Card } from '../../atoms/card';
import { Title } from '../../atoms/title'
import './style.css'
import { Link } from 'react-router-dom';

interface BlogProps {
  img: string;
  date: string;
  title: string;
}

export const Blog = () => {
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
    <GeneralTemplate>
      <section className="blog-page">
        <div className="container">
          <div className="title">
            <Title title="Our Blog & Articles" />
            <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
          </div>
          <div className="blogs">
            {blogs.map( blog => (
              <Link to="/blog-details">
                <Card
                  src={blog.img}
                  title={blog.date}
                  detail={blog.title}
                  isBlog={true}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </GeneralTemplate>
  )
}
