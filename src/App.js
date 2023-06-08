import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from './Components/Slider';
import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import data from "./Data/Data.json"
import Heading from './Components/Heading';
import StarProduct from "./Components/StarProduct";
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessories from './Components/HotAccessories';
import ProductReviews from './Components/ProductReviews';
import Videos from "./Components/Videos.js";
import Banner from"./Components/Banner.js";
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <div>
        <Router>
          <PreNavbar />
          <Navbar />
          <Slider start={data.banner.start} />
          <Offers offer={data.offer} />
          <Heading text="STAR PRODUCTS" />
          <StarProduct starProduct={data.starProduct} />
          <Heading text="HOT ACCESSORIES" />

          <HotAccessoriesMenu />


          <Route exact path="/music" >
            <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
          </Route>


          <Route exact path="/smartDevice" >
            <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
          </Route>



          <Route exact path="/home" >
            <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
          </Route>

          <Route exact path="/lifestyle" >
            <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
          </Route>

          <Route exact path="/mobileAccessories" >
            <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
          </Route>



          <Heading text="PRODUCT REVIEWS" />
          
          <ProductReviews productReviews={data.productReviews} />

          <Heading text="VIDEOS" />
          <Videos Videos={data.videos} />

          <Heading text="IN THE PRESS" />
          <Banner banner={data.banner}/>  

          < Footer footer={data.footer}/> 
          
        </Router>

      </div>
    </>
  )
}
export default App;