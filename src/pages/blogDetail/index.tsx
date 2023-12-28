import BlogDetailHero from '@organisms/BlogDetailPage/BlogDetailHero'; 
import BlogDetailContent from '@organisms/BlogDetailPage/BlogDetailContent';
import './style.css';

const BlogDetail = () => {
  return (
      <section className="blog-detail-page">
        <BlogDetailHero />
        <BlogDetailContent />
      </section>
  )
}

export default BlogDetail;