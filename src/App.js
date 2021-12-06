import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getBlogs } from './services/blogs';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      //important to await this data because when we get the data is it coming from an async function
      const data = await getBlogs();
      console.log(data);
      setBlogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <section className="main">
      <Header />
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
