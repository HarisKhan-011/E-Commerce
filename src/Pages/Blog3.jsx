import React from 'react';
import '../Styles/Blog1.css';
import blog3 from '../Assets/blog3.jpeg';

export const Blog3 = () => {
  return (
    <>
      <main className="main-content">
        <div className="container">
          {/* Article Section */}
          <article className="article">
            <h2>Five Ways to Lead a Happy and Fulfilling Life</h2>
            <p className="author">By Admin | <span className="date">January 1, 2024</span></p>

            <img src={blog3} alt="Happiness and Lifestyle" className="article-image" />

            <div className="article-body">
              <p>Leading a happy life is about creating balance, finding joy in the little things, and nurturing meaningful connections. Here are five practical tips that can help you cultivate happiness and live a more fulfilling life:</p>
              
              <h3>1. Practice Gratitude</h3>
              <p>Take time each day to appreciate the positive aspects of your life. Whether it's through a gratitude journal or simply reflecting on your day, acknowledging the good can boost your mood and foster a more positive outlook.</p>
              
              <h3>2. Maintain a Healthy Lifestyle</h3>
              <p>Physical health is closely linked to mental well-being. Regular exercise, a balanced diet, and adequate sleep can have a profound impact on your mood and energy levels. Prioritize your health for a happier, more vibrant life.</p>
              
              <h3>3. Cultivate Meaningful Relationships</h3>
              <p>Surround yourself with supportive, loving people who uplift and inspire you. Building and maintaining strong relationships can provide a sense of belonging and reduce stress, leading to greater happiness.</p>
              
              <h3>4. Set Goals and Stay Positive</h3>
              <p>Having goals gives you a sense of purpose and direction. Break down larger goals into smaller, manageable steps and celebrate your progress along the way. A positive mindset can help you overcome challenges and achieve your dreams.</p>
              
              <h3>5. Practice Mindfulness and Stress Management</h3>
              <p>Incorporate mindfulness techniques into your daily routine, such as meditation or deep-breathing exercises. These practices can help you manage stress, increase self-awareness, and find peace amidst life's chaos.</p>

              <p>Remember, happiness is a journey, not a destination. By adopting these tips and making them a part of your daily life, you can create a more joyful and fulfilling existence. Stay happy, stay connected, and live with intention!</p>
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

export default Blog3;
