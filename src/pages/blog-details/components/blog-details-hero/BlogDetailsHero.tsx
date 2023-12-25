import React from 'react'
import { Title } from '../../../../atoms/title'
import './style.css'

export const BlogDetailsHero = () => {
  return (
    <section className="blog-details-hero">
      <div className="container">
        <div className="title">
          <Title title="The secret tips & tricks to prepare a perfect burger & pizza for our customers" />
        </div>
        <div className="blog-img">
            <img src="./assets/blog-details-1.png" alt="blog-details" />
        </div>
        <div className="content">
          {/* paragraph 1 */}
            <h4 className='sub-title'>What do you need to prepare a home-made burger?</h4>
            <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
            <p>
              1.<span className="marked"> Quality Beef: </span>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
              <br />
              2.<span className="marked"> Seasoning: </span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
              <br />
              3.<span className="marked"> Don’t Overwork the Meat: </span>When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
              <br />
              4.<span className="marked"> Cooking: </span>High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
              <br />
              5.<span className="marked"> Resting: </span>Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
            </p>
        </div>
        <div className="content">
          {/* paragraph 2 */}
          <h4 className='sub-title'>What do you need to prepare a home-made burger?</h4>
            <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
            <p>
              1.<span className="marked"> Quality Beef: </span>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
              <br />
              2.<span className="marked"> Seasoning: </span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
              <br />
              3.<span className="marked"> Don’t Overwork the Meat: </span>When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
              <br />
              4.<span className="marked"> Cooking: </span>High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
              <br />
              5.<span className="marked"> Resting: </span>Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
            </p>
        </div>
        <div className="blog-img">
            <img src="./assets/blog-details-2.png" alt="blog-details" />
        </div>
        <div className="content">
          <h4 className='sub-title'>What do you need to prepare a home-made burger?</h4>
          <p>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis.</p>
        </div>
      </div>
    </section>
  )
}
