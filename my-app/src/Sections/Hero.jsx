import React from 'react'
import Button from '../Components/Button'
import thrishaImg from "../assets/thrisha.jpg";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import Projects from '../Components/Projects';
import Certificates from '../Components/Certificates';
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                stagger:0.2,
                duration:1,
                ease:'power2.inOut'
            },
        )
    })
    return (
        <section id="hero" className='relative overflow-hidden'>
            <Navbar/>
            {/* Background */}
            <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.png' alt='background ' />
            </div>

            {/* Hero Layout: Text on Left, Image on Right */}
            <div className='hero-layout flex flex-col md:flex-row items-center justify-between md:px-20 px-5 relative z-20'>

                {/* Left Side - Text */}
                <header className='flex flex-col justify-center md:w-1/2 w-full gap-7'>
                    <div className='hero-text'>
                        <h1>
                            Shaping Ideas
                            {/* <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <img src={word.imgPath}
                                                alt={word.text}
                                                className='xl:size-12 md:size-10 size7 md:p-2 p-1 rounded-full bg-white-50' />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span> */}
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className='text-white-50 md:text-xl'>
                        Hii, I am Thrisha U Shetty, a developer with a passion for code and designs.
                    </p>
                    <Button
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my work"
                    />
                </header>

                {/* Right Side - Image */}
                <figure className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
                    <div className='p-2 rounded-full shadow-lg border-2 border-gray-200'>
                        <img
                            src={thrishaImg}
                            alt="Thrisha U Shetty"
                            className="w-70 h-70 object-cover rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                </figure>
            </div>
            <Projects/>
            <Certificates/>
            <Slider/>
            <Footer/>
        </section>
    )
}

export default Hero
