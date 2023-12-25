import React, { useEffect, useState } from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading'
import './style.css'
import { Link } from 'react-router-dom';

interface BlogProps {
  id: number;
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
            <Heading 
              title="Our Blog & Articles"
              text='We consider all the drivers of change gives you the components you need to change to create a truly happens.'
            />
          <div className="blogs">
            {blogs.map( blog => (
              <Link to="/blog-details" key={blog.id}>
                <Card
                  src={blog.img}
                  content1={blog.date}
                  content2={blog.title}
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
