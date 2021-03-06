import React from 'react'
import ContactUs from '../components/ContactUs'
function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center items-center py-20 px-10">
        <div data-aos="fade-up-right">
          <ContactUs />
        </div>
      </footer>
    </div>
  )
}

export default Footer
