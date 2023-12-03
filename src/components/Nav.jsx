import React from 'react';
import "./Nav.css"
function Nav() {
  return (
    <nav className='navbar' style={{backgroundColor: 'cream'}}>
      <div className="nav-header">
        <h2>Milton</h2>
      </div>

      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">Testimonial</a>
        <a href="#">Pricing</a>
        <a href="#">FAQs</a>  
        <a href="#">Blog</a>
      </div>

      <div className="nav-auth">
        <button className='login'>Log In</button>
        <button className='start'>Get Started</button>  
      </div>
    </nav>
  );
}

export default Nav;