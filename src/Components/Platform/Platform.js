import React from 'react';
import './Platform.css'
const Platform = () => {
    return (
        <div className='platform' >
            {/* heading */}
            <div >
                <h1  className='text-white text-5xl font-bold' >
                    <span>The Most Secure</span> <br /> 
                    <span>Trading Platform</span>
                </h1>
                <br /><br />
            </div>
            {/* rest part */}
            <div className='lg:flex md:flex' >
                {/* 1 */}
                <div class="p-1 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2  ">
                    <div>
                        <div class="text-xl font-medium text-black">Get your crypto <br /> portfolio
                        </div>
                            <p class="text-slate-500">features that combine <br />
                            to make it the finest spot <br />to begin trading.</p>
                    </div>
                </div>
                {/* 2 */}
                <div class="p-1  my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                    <div>
                        <div class="text-xl font-medium text-black"> Wallet Services
                        </div>
                            <p class="text-slate-500">Keep track of all your <br /> crypto assets.</p>
                    </div>
                </div>
                {/* 3 */}
                <div class="p-1  my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                    <div>
                        <div class="text-xl font-medium text-black">Industry <br /> Best <br /> Practices
                        </div>
                            <p class="text-slate-500">f the most widely used <br /> digital currencies.</p>
                    </div>
                </div>
                {/* 4 */}
                <div class=" p-1 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
                    <div>
                        <div class="text-xl font-medium text-black">Insured  Deposits
                        </div>
                            <p class="text-slate-500">All assets are securely <br /> stored in secure
                             <br /> offline storage wallets. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Platform;