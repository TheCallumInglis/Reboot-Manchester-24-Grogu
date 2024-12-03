import React, { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleClick = () => setIsVisible(false);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    isVisible && (
      <div className='open-splash'>
        <img src='./src/mortgage_ad_design_page.png' alt='Splash Screen' />
      </div>
    )
  );
};

export default SplashScreen;
