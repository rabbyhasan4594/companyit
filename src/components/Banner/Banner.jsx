import React from 'react';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-7 lg:ps-24 lg:pe-32 gap-10 bg-red-50 pt-10'>
            <div className='lg:col-span-3'>
<div>
<div className='flex gap-2'>
    <img className='h-6' src="https://www.creativeitinstitute.com/assets/images/home/Check.png" alt="" />
<h6 className='font-bold mb-2  '>Unleash Your Potential</h6>
</div>
<h2 className='font-bold text-4xl mb-2 '>Become an IT Pro & Rule the</h2>
<h1 className='font-bold text-5xl text-red-600 mb-2'>Digital World</h1>
<p className='mb-2'>With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and updated curriculum. Pick your desired course from more than 30 trendy options.</p>
</div>
<div className='grid lg:grid-cols-2 gap-4 mb-6 '>
<h5 className="bg-red-500 btn  hover:bg-slate-100 hover:text-red-600 text-white font-bold py-2 px-3 rounded-lg "> Browse Course </h5>
<h5 className="bg-red-500 btn  hover:bg-slate-100 hover:text-red-600 text-white font-bold py-2 px-3 rounded-lg "> Browse Course </h5>
</div>
<div className='flex gap-4'>
    <img src="https://www.creativeitinstitute.com/iso.png" alt="" />
    <h6 className='font-medium'>
    One of the best ISO certified IT
Training Institutes in Bangladesh


    </h6>
</div>
            </div>
            <div className='lg:col-span-4 py-8 '>
<img className='rounded-2xl border-spacing-2.5' src="https://i.ibb.co/KKxCgYz/banner1667976882.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;