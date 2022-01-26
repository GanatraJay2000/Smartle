import { constants } from 'buffer';
import React from 'react';

const GradientBlobTR = () => {
    return (        
        <div className="absolute top-0 right-0 -z-10 overflow-x-hidden">
            <div className="translate-x-20 translate-y-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="824" height="1526" viewBox="0 0 824 1826" fill="none">
                    <path d="M215.103 0H824V1826C824 1826 771.009 1826 215.103 1826C-340.803 1826 344.581 536.641 445.564 395.633C546.547 254.626 215.103 0 215.103 0Z" fill="url(#paint0_linear_1_89)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1_89" x1="0" y1="913" x2="824" y2="913" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#A18CD1"/>
                            <stop offset="1" stopColor="#FBC2EB"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>        
    );
}

export default GradientBlobTR;
