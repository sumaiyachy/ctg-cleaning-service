import React from 'react';
import cleanGirl from "../assets/images/clean.png";

const Landing = () => {
    return (
      <>
        <div className="hero h-screen lg:h-[60vh] bg-accent mt-8">
  <div className="hero-content flex-col lg:flex-row md:flex-row">
   
    <div >
        <p data-aos="fade-up" data-aos-duration='1000'  className='text-xl'>Best Quality</p>
      <h1 data-aos="fade-right" data-aos-duration='2000' data-aos-delay='300'className="text-4xl font-bold">Professional Cleaning Services</h1>
      <p data-aos="fade-left" data-aos-duration='2000' className="py-6 max-w-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    <div className='h-[60vh] shrink-0'>   
    <img alt='' src={cleanGirl} className="h-full" />
  </div>
  </div>
  </div>
  <div className='rounded-lg lg:ml-24 mx-auto mt-[-30px] z-20 bg-base-200 relative shadow-xl p-8 w-5/6'>
    <h1 className='text-2xl text-primary mb-4'>Get Free Estimate</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    <input type="text" placeholder="Type here" class="input input-bordered w-full h-8" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full h-8" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full h-8" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full h-8" />
    
    <input type="text" placeholder="Type here" class="input input-bordered w-full h-8" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full h-8" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full h-8" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full h-8" />
    </div>
    <div>
      <button className='btn btn-primary mt-5'>Get a Quote</button>
    </div>
  </div>
</>
    );
};

export default Landing;