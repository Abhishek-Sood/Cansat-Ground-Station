
import * as React from "react";
import {useNavigate} from 'react-router-dom';

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
      <style jsx>{`
        
        .div {
          background-color: #000;
          display: flex;
          flex-direction: column;
          font-size: 26px;
          font-weight: 400;
        }
        .div-2 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 713px;
          // margin-top: 39px;
          width: 100%;
          align-items: start;
          justify-content: center;
          padding: 80px 60px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          margin-left:280px;
          
        }
        .div-3 {
          position: relative;
          display: flex;
          width: 568px;
          max-width: 100%;
          flex-direction: column;
          margin: 23px 0 155px 55px;
        }
        @media (max-width: 991px) {
          .div-3 {
            margin-bottom: 40px;
          }
        }
        .div-4 {
          width:400px;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            font-size: 40px;
          }
        }
        .div-5 {
          color: #707070;
          font-family: Roboto, sans-serif;
          margin-top: 20px;
          font-size:20px;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-6 {
         width:200px;
         height:50px;
         margin-top:40px;
         cursor:pointer;
          
        }
        
        
        @media (max-width: 991px) {
          .div-6 {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


export default Home;