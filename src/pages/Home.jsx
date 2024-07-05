import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
const [posts,setPosts]=useState([])

const cat =useLocation().search

useEffect(()=>{
  const fetchData =async ()=>{
    try{
      const res= await axios.get(`http://localhost:8800/api/posts${cat}`)
      setPosts(res.data)
    }catch(err){
      console.log(err)
    }
  }
  fetchData();
},[cat])

  // Function to truncate text and add ellipses
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substr(0, maxLength);
    return truncatedText.substr(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(" "))) + ' ...';
  }


  // Function to get one random post from each category
  const getOnePostPerCategory = (posts) => {
    const categories = {};
    const selectedPosts = [];

    // Group posts by category
    posts.forEach((post) => {
      if (!categories[post.category]) {
        categories[post.category] = [];
      }
      categories[post.category].push(post);
    });

    // Select one random post from each category
    Object.keys(categories).forEach((category) => {
      const randomIndex = Math.floor(Math.random() * categories[category].length);
      selectedPosts.push(categories[category][randomIndex]);
    });

    return selectedPosts;
  };

  // Get one random post from each category
  const randomPosts = getOnePostPerCategory(posts);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className='carousel-container'>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          transitionTime={1600} // Set transition time to 1000ms for smooth transition
          emulateTouch={true}
          showStatus={false}
          dynamicHeight={true}
          useKeyboardArrows={true}
          showArrows={true} // Hide the navigation arrows
        >
          {randomPosts.map((post) => (
            <div key={post.id} className="carousel-item">
              <img src={`../upload/${post.img}`} alt="" className="d-block w-100" />
              <div className="legend">
                <h1>{post.title}</h1>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id} >
            <div className="img">
              <img src={`../upload/${post.img}`} alt=""  />
            </div>
            <div className="content">
              <h1>{post.title}</h1>
              <p>{truncateText(getText(post.desc), 100)}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home