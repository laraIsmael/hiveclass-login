import React from 'react'

function Header() {

  return (
    <div className="sticky top-0 z-20 bg-white p-3 flex justify-between item-center shadow-md">
      <a href="/#">
        <img 
          src="https://www.hiveclass.co/wp-content/themes/hiveclass.co/assets/images/hiveclass-logo-new-black.png" 
          alt="Hiveclass Logo" 
          className="hover:brightness-90"
        />
      </a>
    </div>
  )
}

export default Header