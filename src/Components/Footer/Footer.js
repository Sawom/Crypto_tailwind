import React from 'react';
import './Footer.css'
const footer = () => {
    return (
        <div className='mid' >
            <br /><br />
            <div className='text-white fot '>
             <br />
                <div className='space-x-5 lg:flex md:flex '>
                    <h2>Company</h2>
                    <h2>Home</h2>
                    <h5>About Us</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Terms of Services</h5>
                </div> 
                <div className='space-x-5 lg:flex md:flex mid '>
                    <h5>Support</h5>
                    <h5>Blog</h5>
                    <h5>FAQ</h5>
                    <h5>Whatsapp</h5> 
                    <h5> Subscribe to us: </h5>
                    <input placeholder='Enter email' type="text" />
                    <br />
                </div>
                <br />
            </div>
            <br /> <br /> 
        </div>
    );
};
export default footer;