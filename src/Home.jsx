import * as React from "react";
import {useNavigate} from 'react-router-dom';// Importing useNavigate hook from react-router-dom
import './Home.css'// Importing CSS file for styling
// Import the components used in the Navbar
import ViewButton from "./ViewButton";
import Typewriter from 'typewriter-effect';


function Home() {// Declaring Home component
  // Returning JSX for Home component
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div>
            {/* Globe animation */}
            <iframe src='https://my.spline.design/earthdayandnight-709f63feb79a009baf5af739496e348e/'
            frameBorder='0'
            width='100px' 
            height='600px'
            className='img'
            >
            </iframe>
          </div>
          <div className="div-3">
             {/* Logo image */}
            <div>
            <img src="gagan.png" alt="Logo" className="div-4"/>
            </div>
            <div className="div-5">
               {/* Title */}
               <Typewriter
                  options={{
                    strings: ['Empowering Exploration-Open Source Ground Station for Cansat Satellites',
                    'Connecting the Stars-Open Source Ground Stations',
                    'Unlocking the Sky-Open Source Ground Station Innovation'
                  ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 1000, 
                  }}
               />
              {/* Empowering Exploration: Open Source Ground Station for Cansat
              Satellites */}
            </div>
            <div>
               {/* Button to navigate to the '/station' route */}
              <ViewButton />
            </div>
            
            
          
          </div>
        </div>
      </div>
      
    </>
  );
}


export default Home;// Exporting Home component