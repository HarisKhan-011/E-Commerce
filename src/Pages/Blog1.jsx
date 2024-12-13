import React from 'react';
import '../Styles/Blog1.css';
import blogfashion from '../Assets/blogfashion.png'
export const Blog1 = () => {
  return (
    <>
      <main className="main-content">
        <div className="container">
          {/* Article Section */}
          <article className="article">
            <h2>A Guide to Latest Trends in Fashion</h2>
            <p className="author">By Admin | <span className="date">January 1, 2024</span></p>

            <img src={blogfashion} alt="Fashion Trends" className="article-image" />

            <div className="article-body">
              <p>The world of fashion is constantly evolving, and staying updated with the latest trends is essential for anyone who loves style. This guide explores the top fashion trends of the season...</p>
              <h3>1. Sustainable Fashion</h3>
              <p>Sustainability is at the forefront of fashion this year. More designers and brands are focusing on eco-friendly fabrics, recycled materials, and reducing waste in the production process...</p>
              
              <h3>2. Bold Colors</h3>
              <p>This season is all about bold, vibrant colors. Expect to see neon greens, electric blues, and fiery reds dominating the runways...</p>
              
              <h3>3. Retro Styles</h3>
              <p>Retro fashion continues to be a big trend, with '90s-inspired clothing making a comeback. Baggy jeans, oversized jackets, and chunky sneakers are making their way back into modern wardrobes...</p>
              
              <p>Keep an eye on these trends and don't be afraid to experiment with your style. Fashion is all about expressing yourself!</p>
            </div>
          </article>

          {/* Sidebar Section */}
          <aside className="sidebar">
            <h3>Recent Posts</h3>
            <ul>
              <li><a href="#">5 Ways to Style Your Denim</a></li>
              <li><a href="#">Must-Have Accessories for 2024</a></li>
              <li><a href="#">How to Mix Patterns and Prints</a></li>
              <li><a href="#">The Best Fashion Finds Under $50</a></li>
            </ul>

            <h3>Categories</h3>
            <ul>
              <li><a href="#">Trends</a></li>
              <li><a href="#">Street Style</a></li>
              <li><a href="#">Sustainable Fashion</a></li>
              <li><a href="#">Celebrity Fashion</a></li>
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
};
