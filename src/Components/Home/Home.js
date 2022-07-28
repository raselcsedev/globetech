import React from 'react';
import './Home.css'
import air from './../../images/Vector.png'
import { GiHamburgerMenu} from 'react-icons/gi';

const Home = () => {
    return (
        <div className='home'>
            <div className='title'>
            <div className='air-animation'>
                    <div className="timer">
                        <div className='line'>
                            <GiHamburgerMenu color="#8FE5FF" size="3rem" />
                        </div>
                        <div>
                        <img src={air} alt="animation"  />
                        </div>
                    </div>
                </div>
                
                <div className='card'>
                    <h1>Welcome to <br/><span>GlobeTech</span></h1>
                    <p>We are committed to deliver <span>Best IT Services.</span>  Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
                    <button className='button'>Support Us</button>
                    <button className='button2'>Our Mission</button>
                </div>
            </div>
            <div className='space-body'>
              <div className='space'>
                 <span className='sun'></span>
                 <span className=' planet planet1'></span>
                 <span className=' planet planet2'></span>
                 <span className=' planet planet3'></span>
                 <span className=' planet planet4'></span>
              </div>
            </div>
        </div>
    );
};

export default Home;