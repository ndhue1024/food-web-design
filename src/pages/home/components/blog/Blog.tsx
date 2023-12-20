import React, { useEffect, useState } from "react";
import "./style.css";
import { Title } from "../../../../atoms/title";
import Button from "../../../../atoms/button";
import { Card } from "../../../../atoms/card";

interface BlogType {
  id: string;
  img: string;
  date: string;
  title: string;
  text?: string;
  isRemarkable?: boolean;
}

export const Blog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [remarkableBlog, setRemarkableBlog] = useState<BlogType>();

  // Get Blog List
  const getBlogs = () => {
    fetch('https://65816b993dfdd1b11c4339d2.mockapi.io/blog')
    .then(response => {
      return response.json();
    })
    .then((data: BlogType[]) => {
      setBlogs(data.filter(blog => blog.isRemarkable === false));
      setRemarkableBlog(data.find(blog => blog.isRemarkable === true));
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getBlogs();
  }, []);

  const renderOtherBlog = () => {
    return (
      blogs?.map(blog => (
        <Card
            key={blog.id}
            src={`./assets/${blog?.img}`}
            title={blog.date}
            detail={blog.title}
            isBlog={true}
          />
      ))
    )
  }

  return (
    <section className="blog">
      <div className="heading">
        <Title title="Our Blog & Articles" />
        <Button title="Read All Articles" isRed={true} />
      </div>
      <div className="blog-content">
        <div className="remarkable-blog">
          <Card
              src={`./assets/${remarkableBlog?.img}`}
              title={remarkableBlog?.date}
              detail={remarkableBlog?.title}
              isRemarkable={remarkableBlog?.text}
            />
        </div>
        <div className="others-blog">
          {renderOtherBlog()}
        </div>
      </div>
    </section>
  );
};