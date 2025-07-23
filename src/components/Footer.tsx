
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-10 w-full'>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3'>
            <div>
                <h2 className='text-[#00C0E0] text-2xl font-semibold'>About Us</h2>
                <p className='text-gray-300 mt-3'>Discover your perfect soundtrack with our music app – stream, create, and share your favorite tunes anytime, anywhere.
                We bring music to life with personalized playlists, powerful tools, and endless vibes for every mood.</p>
            </div>
            <div className='text-center'>
                <h2 className='text-[#00C0E0] text-2xl font-semibold'>Quick Links</h2>
                <p className='text-gray-300 mt-3'>
                    Home
                </p>
                <p className='text-gray-300 mt-3'>
                    About
                </p>
                <p className='text-gray-300 mt-3'>
                    Courses
                </p>
                <p className='text-gray-300 mt-3'>
                    Contact
                </p>
            </div>
            <div>
                <h2 className='text-[#00C0E0] text-2xl font-semibold'>Follow Us</h2>
                <p className='text-gray-300 mt-3'>
                    FaceBook
                </p>
                <p className='text-gray-300 mt-3'>
                    Twitter
                </p>
                <p className='text-gray-300 mt-3'>
                    Instagram
                </p>
            </div>
            <div>
                 <h2 className='text-[#00C0E0] text-2xl font-semibold'>Contact Us</h2>
                 <p className='text-gray-300 mt-3'>
                    123 Harmony Street, Melody Town, LA 90210, United States
                 </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer
