import React from 'react';
import logogoogle from "./Images/logogoogle.png";

const Header = () => {
    return ( 
    
    <> 
<div className="header"> 
<img src={logogoogle} alt='logo' width="50" height = "50" />
<h1> &nbsp; Google Keep</h1>

</div>
    </>

    );
};
export default Header;