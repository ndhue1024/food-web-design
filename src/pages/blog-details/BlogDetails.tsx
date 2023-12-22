import React from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { BlogDetailsHero } from './components/BlogDetailsHero'

import './style.css';

export const BlogDetails = () => {
  return (
    <GeneralTemplate>
      <section className="blog-details">
        <BlogDetailsHero />
      </section>
    </GeneralTemplate>
  )
}
