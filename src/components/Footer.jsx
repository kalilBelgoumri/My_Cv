import React from 'react'
import Button from '@mui/material/Button'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import Contact from '../components/Contact'
function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center items-center h-screen">
        {/* <div className="w-20">
          <Button
            variant="contained"
            href="mailto:kalil.belgoumri@gmail.com"
          >
            <ContactMailIcon sx={{ padding: '10' }} />
            Contact
          </Button>
        </div> */}

        {/* <div className="contact flex items-center justify-center text-white font-bold  border-4 border-white-500 px-20 py-4 ring-2 ring-offset-2 rounded-xl cursor-pointer">
          <a href="mailto:kalil.belgoumri@gmail.com">Contact</a>
        </div> */}
        <Contact />
      </footer>
    </div>
  )
}

export default Footer
