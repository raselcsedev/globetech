import React from 'react';
import './Features.css'
import img1 from './../../images/software1.png'
import img2 from './../../images/bulk.png'
const Features = () => {
    return (
        <div className="feature">
            <div className='service-title'>
                <h1>FEATURES</h1>
                <h2>Our Feature and services</h2>
            </div>
            <div className='service-grid '>
                <div className='card'>
                    <img src={img1} alt="" />
                    <h2>Communication</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                    <button>MORE</button>
                </div>
                <div className='card'>
                    <img src={img2} alt="" />
                    <h2>inspires Design</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                    <button>MORE</button>
                </div>
                <div className='card'>
                    <img src={img1} alt="" />
                    <h2>Happy Clint</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                    <button>MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Features;