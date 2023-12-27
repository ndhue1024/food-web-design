import BlogDetailHero from '@organisms/blogDetailPage/blogDetailHero'; 
import BlogDetailContent from '@organisms/blogDetailPage/blogDetailContent';
import './style.css';

const BlogDetail = () => {
  return (
      <section className="blog-details">
        <BlogDetailHero />
        <BlogDetailContent />
      </section>
  )
}

export default BlogDetail;