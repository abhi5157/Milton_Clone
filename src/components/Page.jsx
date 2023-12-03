import React from 'react';
import HorizontalAvtar from "./HorizontalAvtar"
// and so on for other avatar images

import './Page.css'; 

function Page() {
  return (
    <div className="page">
      <p className="tagline">An other way to manage time️</p>
      
      <h1 className="heading">Your new favorite calendar 🗓️ app</h1>

      <p className="description">
        Here you should explain how cool your app is. Remember, focus on the 
        benefits for your users, not on the features.
      </p>

      <button className="btn">Get started, it's free</button>

      <p className="trial">
        Free 14 days trials,no credit card needed
      </p>
<div className="avtr">
<HorizontalAvtar/>
</div>

<div className="image-container">
        <img 
          src="https://framerusercontent.com/images/eOkQipcAuByHjPvicAhsR8PzC0.png?scale-down-to=2048"
          className="main-image"
        />
      </div>
    





    </div>
    
  );
}

export default Page;