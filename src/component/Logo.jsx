import React from 'react'
import Marquee from "react-fast-marquee";


export const Logo = () => {
    const logoImages = [
        './Logo/1.jpg',
        './Logo/2.png',
        './Logo/3.jpg',
        './Logo/4.jfif',
        './Logo/5.png',
        './Logo/6.png',
    ];
    return (
        <footer className='footer mt-auto'>
            <Marquee>
                {logoImages.map((src, index) => (
                    <img className="h-8 mx-3" key={index} src={src} alt={`Logo ${index + 1}`} />
                ))}
            </Marquee>
        </footer>
    )
}
