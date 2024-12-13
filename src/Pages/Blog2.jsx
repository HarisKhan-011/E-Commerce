import React from 'react';
import '../Styles/Blog1.css';
import blogfashion2 from '../Assets/blogfashion2.jpg'
export const Blog2 = () => {
  return (
    <>
      <main className="main-content">
        <div className="container">
          {/* Article Section */}
          <article className="article">
            <h2>Five Ways to Lead a Stylish and Happy Life</h2>
            <p className="author">By Admin | <span className="date">January 1, 2024</span></p>

            <img src={blogfashion2}alt="Fashion and Happiness" className="article-image" />

            <div className="article-body">
              <p>Leading a stylish and happy life is all about embracing the things that make you feel good, both inside and out. While everyone’s sense of style is unique, these five fashion habits can boost your mood and enhance your confidence:</p>
              
              <h3>1. Wear Clothes that Make You Feel Good</h3>
              <p>Your wardrobe should reflect your personality and make you feel confident. Whether it's a sharp suit, a flowy dress, or comfy casuals, wearing clothes that suit your body and mood can improve your outlook and happiness.</p>
              
              <h3>2. Experiment with New Trends</h3>
              <p>Fashion is all about self-expression. Trying out new trends can be exciting and fun. Don't be afraid to step outside your comfort zone with bold colors, patterns, or unconventional styles. It’s a great way to keep your look fresh and inspire creativity.</p>
              
              <h3>3. Invest in Timeless Pieces</h3>
              <p>Having a few high-quality, timeless pieces in your wardrobe can provide both comfort and confidence. Items like a classic leather jacket, a well-tailored blazer, or a perfect pair of jeans never go out of style and can always make you feel great.</p>
              
              <h3>4. Take Care of Your Fashion Accessories</h3>
              <p>Accessories like scarves, jewelry, and shoes can elevate any outfit. Maintaining them, keeping them clean, and pairing them well with your attire can bring out your inner fashionista and make you feel extra special.</p>
              
              <h3>5. Embrace Sustainable Fashion</h3>
              <p>Choosing eco-friendly fashion not only benefits the environment but can also make you feel good about your purchases. Opting for brands that prioritize sustainability can boost your confidence and happiness while contributing to a better planet.</p>

              <p>Remember, fashion isn't just about looking good—it's about feeling good. By following these simple style tips, you can boost your confidence and live a more fulfilled life. Stay stylish, stay happy!</p>
            </div>
          </article>

          {/* Sidebar Section */}
          <aside className="sidebar">
            <h3>Recent Posts</h3>
            <ul>
              <li><a href="#">How to Style Your Denim for Every Season</a></li>
              <li><a href="#">Top 10 Must-Have Accessories for 2024</a></li>
              <li><a href="#">How to Mix Prints Like a Pro</a></li>
              <li><a href="#">Sustainable Fashion: A Trend to Stay</a></li>
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

export default Blog2;
