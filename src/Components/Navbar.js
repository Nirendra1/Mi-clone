import React from 'react';
import "../Styles/Nav.css";

// import { default as logo } from "../Data/Data.json";
import logo from "../Data/Data.json";

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" /></svg>

const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <div className='logo'>

                <a href="/">
                  <img id="logoImage" src={logo}Mi alt="Not" /> 
             </a>


                </div>

                {/* <Link className='navlinks' to="/miphones">Mi Phones</Link> */}

                <a href="https://www.mi.com/in/phone#xiaomi" className='navlinks'>Mi Phones</a> <span>|</span>
                <a href="https://www.mi.com/in/phone#redmi" className='navlinks'>Redmi phones</a> <span>|</span>
                <a href="https://www.mi.com/in/smart-home#tv" className='navlinks'>TV</a> <span>|</span>
                <a href="https://www.mi.com/in/smart-office#laptops" className='navlinks'>Laptops</a> <span>|</span>
                <a href="https://www.mi.com/in/life-style" className='navlinks'>Fitness & Lifestyle</a> <span>|</span>
                <a href="https://www.mi.com/in/smart-home#smart-home" className='navlinks'>Home</a> <span>|</span>
                <a href="https://www.mi.com/in/product-list/tv?cat_id=379" className='navlinks'>Accessories</a> <span>|</span>


                <div className="searchbox">
                    <input type='text' name='search' placeholder='Search product' />
                    {searchIcon}
                </div>
            </div>
        </>
    )
}
export default Navbar;