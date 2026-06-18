import React from "react";
import imgOur2 from "../assets/our 2.jpeg";
import img5 from "../assets/5.jpeg";
import img1 from "../assets/1.jpeg";

const articles = [
  {
    image: imgOur2,
    title: "Best For Web Startups and Web Apps",
    author: "Ham Brook",
    date: "Jan 18, 2020",
    category: "News",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
  },
  {
    image: img5,
    title: "Best For Web Startups and Web Apps",
    author: "James Phelps",
    date: "Jan 18, 2020",
    category: "News",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
  },
  {
    image: img1,
    title: "Best For Web Startups and Web Apps",
    author: "James Phelps",
    date: "Jan 18, 2020",
    category: "News",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <span className="blog-label">Blog</span>
        <h2>News & Updates</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          explicabo, quasi. Magni deserunt sunt labore.
        </p>
      </div>
      <div className="blog-grid">
        {articles.map((article) => (
          <article key={article.author + article.title} className="blog-card">
            <img src={article.image} alt={article.title} />
            <div className="blog-card-body">
              <h3>{article.title}</h3>
              <p className="blog-meta">
                {article.author} · {article.date} · <span>{article.category}</span>
              </p>
              <p className="blog-excerpt">{article.excerpt}</p>
              <a href="#" className="blog-link">
                Continue Reading...
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
