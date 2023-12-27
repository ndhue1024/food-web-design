import React from 'react'
import "./style.css";

type BlogCardProps = {
  src: string;
  content1: string;
  content2: string;
  content3?: string;
};
const BlogCard: React.FC<BlogCardProps> = ({
  src,
  content1,
  content2,
  content3
}) => {
  return (
    <div className="card-box">
      <div className="card-container">
        <div className="img">
          <img src={src} alt="service-img" />
        </div>
        <div className={`card-blog-content ${content3 && `remarkable`}`}>
            <h4 className="blog-title">{content1}</h4>
            <p className="blog-detail">{content2}</p>
            <p className="blog-text">{content3}</p>     
          </div>
      </div>
    </div>
  )
}

export default BlogCard