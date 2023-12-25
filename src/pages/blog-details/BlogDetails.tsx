import React from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { BlogDetailsHero } from './components/blog-details-hero/BlogDetailsHero'

import './style.css';
import { BlogDetailsContent } from './components/blog-details-content/BlogDetailsContent';

export const BlogDetails = () => {
  return (
    <GeneralTemplate>
      <section className="blog-details">
        <BlogDetailsHero />
        <BlogDetailsContent />
      </section>
    </GeneralTemplate>
  )
}
