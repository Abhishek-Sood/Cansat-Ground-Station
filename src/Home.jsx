
import * as React from "react";
import {useNavigate} from 'react-router-dom';
import './Home.css'

function Home() {
  const navigate=useNavigate();
  const Station=()=>{
    navigate('/station')
  }
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div>
        <iframe src='https://my.spline.design/earthdayandnight-709f63feb79a009baf5af739496e348e/'
        frameBorder='0'
        width='100px' 
        height='600px'
        className='img'
        >
          </iframe>
          </div>
          <div className="div-3">
            <div>
            <img src="gagan.png" alt="Logo" className="div-4"/>
            </div>
            <div className="div-5">
              Empowering Exploration: Open Source Ground Station for Cansat
              Satellites
            </div>
            <div>
              <button className="div-6" onClick={Station}>
                <div className="div-7">View</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}


export default Home;