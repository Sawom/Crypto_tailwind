import React from 'react';
import image3 from '../../images/bar.png'
const Cryptosecurity = () => {
    return (
        <div className=' md:flex items-center py-12 px-10' >
            <div>
                <img style={{width:'500px'}} src={image3} alt="" />
            </div>
            <div>
                <h1 className='text-white text-5xl font-bold'>
                            <span>Worlds Best  </span> <br />
                            <span>Security</span> <br />
                </h1> <br />
                <p className="text-white" > 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
                    et dolore magna aliqua. Ut enim ad minim veniam,  <br />
                    quis nostrud exercitation ullamco laboris nisi ut aliquip <br />
                </p> <br />
                <button className='rounded-full px-6 py-2.5 bg-yellow-500 text-white font-medium'  >Read More</button>
            </div>
        </div>
    );
};

export default Cryptosecurity;