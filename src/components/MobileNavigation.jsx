import React from 'react';
import NavLinks from './NavLinks';


function MobileNavigation() {
  return (
    <div>
      <div className="invisible md:visible logo__Nav absolute left-0 -mt-3 mx-6">
      </div>
      
      <NavLinks />
    </div>
  );
}

export default MobileNavigation;
