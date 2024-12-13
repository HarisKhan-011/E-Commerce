import React from 'react';
import '../Styles/Blog1.css';

export const Blog1 = () => {
  return (
    <>
      <main className="main-content">
        <div className="container">
          {/* Article Section */}
          <article className="article">
            <h2>Five Ways to Lead a Happy Life</h2>
            <p className="author">By Admin | <span className="date">January 1, 2024</span></p>

            <img src="https://via.placeholder.com/800x400" alt="Happy Life" className="article-image" />

            <div className="article-body">
              <p>Leading a happy life is something we all strive for. While everyone's path to happiness is different, there are some universal practices that can help improve well-being and create a fulfilling life. Here are five ways to lead a happier life:</p>
              
              <h3>1. Practice Gratitude</h3>
              <p>Gratitude is one of the most powerful tools for boosting happiness. By focusing on the positive aspects of your life, you can shift your mindset and appreciate the small things.</p>
              
              <h3>2. Build Strong Relationships</h3>
              <p>Surrounding yourself with positive and supportive people can greatly enhance your happiness. Strong relationships provide emotional support and contribute to a sense of belonging.</p>
              
              <h3>3. Stay Active and Healthy</h3>
              <p>Exercise is not just good for your body, but also for your mind. Regular physical activity can help reduce stress, improve mood, and boost overall well-being.</p>
              
              <h3>4. Embrace Mindfulness</h3>
              <p>Mindfulness encourages you to live in the present moment without judgment. By focusing on the here and now, you can reduce anxiety and improve mental clarity.</p>
              
              <h3>5. Pursue Your Passions</h3>
              <p>Doing what you love can bring immense satisfaction and joy. Whether it's a hobby, a career, or a creative pursuit, following your passions can create a deep sense of fulfillment.</p>

              <p>Remember, happiness isn't something you find—it's something you create. Start incorporating these habits into your daily life and see how they transform your well-being!</p>
            </div>
          </article>

          {/* Sidebar Section */}
          <aside className="sidebar">
            <h3>Recent Posts</h3>
            <ul>
              <li><a href="#">How to Manage Stress Effectively</a></li>
              <li><a href="#">The Importance of Self-Care</a></li>
              <li><a href="#">Finding Balance in Your Life</a></li>
              <li><a href="#">10 Tips for a Positive Mindset</a></li>
            </ul>

            <h3>Categories</h3>
            <ul>
              <li><a href="#">Happiness</a></li>
              <li><a href="#">Mental Health</a></li>
              <li><a href="#">Self-Improvement</a></li>
              <li><a href="#">Mindfulness</a></li>
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
};
