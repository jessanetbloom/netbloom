import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import SingleBlog from "./pages/SingleBlog.js";
import Navbar from "./components/Navbar.js";
import AllBlog from "./components/AllBlog.js";
import AllTestimonials from "./components/AllTestimonials.js";
import CaseStudies from "./components/AllCaseStudies.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './Global.scss';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="index" />
        <link rel="canonical" href={window.location.href} />
        <title>Netbloom: SEO Services in NZ | Guaranteed Results</title>
      </Helmet>
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path="/" exact />
          <Route element={<Blog/>} path="/blog" />
          <Route element={<AllBlog/>} />
          <Route element={<AllTestimonials/>} path="/testimonials" />
          <Route element={<CaseStudies/>} path="/case-studies" />
          <Route element={<SingleBlog/>} path="/blog/:slug" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
