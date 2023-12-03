import React from 'react';
import "./Footer.css"

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='nav'>
          <h2 className="company">Milton</h2>
          <p className="">A short text explaining why my startup is so cool</p> 
          <p className="copyright">© My super start-up</p> 
        </div>

        <div className='nav'>
          <h3>Products</h3>
          <a href="#">Features</a>
          <a href="#">Testimonials</a>
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>   
        </div>

        <div className='nav'>
         <h3>Resources</h3> 
         <a href="#">Changelog</a>
         <a href="#">Help Center</a>
         <a href="#">Blog</a>  
         <a href="#">Contact</a>
        </div>

        <div className='nav'>
         <h3>Others</h3>   
         <a href="#">Privacy</a>
         <a href="#">Terms</a>
         <a href="#">Affiliation </a>
         <a href="#">Press</a>  
        </div>

        <div className='nav'>
         <h3>From the blog</h3>   
         <p>Mastering Your Schedule: Top Time Management Techniques...</p>
         <p>Organizing Your Calendar for Enhanced Productivity...</p> 
         <p>The Power of Prioritization: Effective Strategies...</p>
         <p>Maximizing Your Minutes: Essential Tips...</p>
        </div> 

      </div>
    </footer>
  );

}

export default Footer;