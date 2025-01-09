import React from 'react'
// import { assets } from '../assets/assets'

const Footer2 = () => {
	return (
		<div id='contact-us' className='bg-gray-900 text-white relative z-10 border-t border-t-white'>
			<div className='max-w-7xl grid grid-cols-[3fr_1fr_1fr] gap-12 border-b-4 border-b-white mx-auto py-8 px-8 max-md:flex max-md:flex-col '>

				<div className='flex flex-col gap-8 max-md:items-center'>
					<h1 className='text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>PrepPundit AI</h1>
					<p className='max-md:text-center max-380px:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

				</div>

				{/* Laptop footer */}
				<div className='flex flex-col gap-8 max-md:hidden'>
					<h2 className='font-bold text-2xl underline'>COMPANY</h2>
					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Contact Us</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				<div className='flex flex-col gap-8 max-md:hidden'>
					<h2 className='font-bold text-2xl underline'>GET IN TOUCH</h2>
					<div>
					<p>+91-987-654-3210</p>
					<p>contact@preppunditai.com</p>
					</div>
				</div>

				{/* Medium screen footer */}
				<div className='md:hidden flex justify-center gap-12'>
					<div className='flex flex-col gap-8'>
						<h2 className='font-bold text-2xl underline max-380px:text-xl'>COMPANY</h2>
						<ul className='flex flex-col items-center max-380px:text-sm'>
							<li>Home</li>
							<li>About Us</li>
							<li>Contact Us</li>
							<li>Privacy Policy</li>
						</ul>
					</div>

					<div className='flex flex-col gap-8'>
						<h2 className='font-bold text-2xl underline max-380px:text-xl'>GET IN TOUCH</h2>
						<div className='max-380px:text-sm flex flex-col items-center'>
						<p>+91-987-654-3210</p>
						<p>contact@preppunditai.com</p>
						</div>
					</div>
				</div>

			</div>

			<p className='text-center mt-8 pb-8 max-sm:text-sm max-sm:px-4'>Copyright 2025 © PrepPunditAI.com - All Right Reserved.</p>
		</div>
	)
}

export default Footer2