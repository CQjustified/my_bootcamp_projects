//React import statement
import React from "react";

//Importing my functional components
import Navigation from "./Components/Navigation.js";
import About from "./Components/About.js";
import CardDisp from "./Components/Cards.js";
import CardBox from "./Components/Box.js";
import Suscribe from "./Components/Suscribe.js";

//importing App and bootstrap css files
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


//Card description object
const descriptions = {
  card1: "You shouldn’t have to compromise at snack-time. That’s why as well as having benefits such as added fibre or plant protein, our snacks are also soul-stirringly delicious. We combine wholesome ingredients in innovative and exciting ways to make sure every bite is mind-blowing.",
  card2: "Never get bored at snack-time again. Each month, you’ll have the chance to unbox a carefully curated collection of 8 or more unique snacks. We’ll also introduce you to new snacking brands and share exciting content in our exclusive magazine, The Grazette.",
  card3: "We know there’s no Planet B. That’s why we believe that people and planet are as equally as important as profit. So much so that we actively measure ourselves on it. As a certified B Corp, we’re constantly hunting out ways to do better, to be better and to snack our way to a future we all want to be part of. That’s why with our fresh new look, we’ve made sure our Crunch Sharing Bags and Oat Boost wrappers are now recyclable in large supermarkets when they weren’t before."
}

function App() {
  return (
    <div>
      <header>
        {/*Navigation component*/}
        <Navigation/>
        {/*Landing webpage banner*/}
        <img className="pageBanner" src = "https://uk.graze.com/cdn/shop/files/About_LandingPage_Banner_Desktop_Presents.png?v=1712042259&width=2000"
        alt="graze snack boxes webpage banner"/>
      </header>
      {/*Graze About section*/}
      <section>
        <About/>
      </section>
      {/*graze image card section feeds the properties into the CardDisp function
      to generate the main section info cards*/}
      <section className="Cards">
        <CardDisp title = "NO SNACKRIFICES"
        image="https://uk.graze.com/cdn/shop/files/About_LandingPage_TopicCards_Nosnackrifices.png?v=1712042672&width=1080"
        description = {descriptions.card1} btnTitle = "OUR HEALTH PROMISE"
        />
        <CardDisp title = "SO, HOW DOES GRAZE PRESENTS... WORK?" image = "https://uk.graze.com/cdn/shop/files/About_LandingPage_TopicCards_HowPresentsWorks.png?v=1712042672&width=1080"
        description = {descriptions.card2} btnTitle = "HOW TO SUSCRIBE"
        />
        <CardDisp title = "SNACK TO THE FUTURE" image = "https://uk.graze.com/cdn/shop/files/About_LandingPage_TopicCards_Sustainability.png?v=1712042673&width=1080"
        description = {descriptions.card3} btnTitle = "OUR PLEDGES"
        />
      </section>
      {/*About footer section with the page footer banner, suscribe button and reference link respectively
      to the example website for cloning*/}
      <img className="AboutfooterImg" src="https://uk.graze.com/cdn/shop/files/About_Page_thisMonthsBox.jpg?v=1715142281&width=2000" alt="Graze about footer banner"/>
      <CardBox/>
      <footer>
      <b>Sign up to be the first to hear about exclusive discounts and more </b><Suscribe/>
      <hr/>
      <b>Link to Reference Website:</b>
      <a href="https://uk.graze.com/pages/about">Graze Snacks About Page</a>
      </footer>
    </div>
  );
}

export default App;
