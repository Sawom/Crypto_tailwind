import React from 'react';
import image from '../../images/coin.png';
import image1 from '../../images/phone.png';
import './Header.css'
const Header = () => {
    return (
        <div className='lg:flex' >
            {/* 1st part navbar crypto description and image */}
            <div  >
                <nav >
                {/* menu bar */}
                <br /><br />
                    <a href="#" className="text-white  px-2 py-2 rounded-md text-sm font-medium" aria-current="page">samuel </a>
                    <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">Pricing</a>
                    <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">contact</a>
                    <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">Buy Crypto</a>
                    <br /> <br />
                </nav>
            {/* crypto description and image */}
                <div className=' md:flex items-center py-12 px-10' >
                    <div>
                        <h1 className='text-white text-5xl font-bold'>
                            <span>Dicover  </span> <br />
                            <span>Samuel’s </span> <br />
                            <span>Crypto World</span>
                        </h1> <br />
                        <p className="text-white" > 
                        <span>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span> <br />
                        <span>et dolore magna aliqua. Ut enim ad minim veniam, </span> <br />
                        <span>quis nostrud exercitation ullamco laboris nisi ut aliquip</span>  <br />
                        </p>
                        
                    </div>
                    <div>
                        <img style={{width:'600px'}} src={image} alt="" />
                    </div>
                </div>
            </div>
            <br /><br />
            {/* 2nd part instant notification*/}
            <div className=' md:flex items-center py-12 px-10' >
                <div>
                    <h1 className='text-white text-5xl font-bold'>
                            <span>Instant  </span> <br />
                            <span>Notification</span> <br />
                    </h1> <br />
                    <p className="text-white">
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
                            et dolore magna aliqua. Ut enim ad minim veniam,  <br />
                            quis nostrud exercitation ullamco laboris nisi ut aliquip <br />
                    </p> <br />
                    <button className='rounded-full px-6 py-2.5 bg-yellow-500 text-white font-medium'  >Read More</button>
                </div>
                {/* image */}
                <div>
                    <img style={{width:'450px'}}  src={image1} ></img>
                </div>
            </div>
        </div>
    );
};
export default Header;