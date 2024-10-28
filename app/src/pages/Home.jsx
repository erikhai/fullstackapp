import React, { useState, useEffect } from "react";
import "../App.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/register'); 
    };

    const scrolling = () =>{
        const element = document.getElementById('home-showcase-features');
        console.log("Element is", element)
        const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the position relative to the document
        const offsetPosition = elementPosition - 60; // Adjust this value (80 pixels in this case)

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
    }

    return (
        <div>
            <div className="padding"/>
            <div className="home-banner">

                <div className="home-banner-title"><h1>FINANCING MANAGEMENT AT YOUR FINGERTIPS</h1></div>
                <div className="home-banner-text">
                    <h2>Ever wanted a visual representation of your spending? Look no futher, here at [idk] we provide insights into your money management</h2>
                    <br/>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" size = "small" onClick={handleClick}>Sign Up</Button>
                        <Button variant="contained" size = "small" onClick={scrolling}>View Services</Button>
                    </Stack>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div className="home-about">
                <div className="home-about-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique felis velit, sit amet sollicitudin dolor condimentum vitae. Duis commodo ligula non diam molestie finibus. Nunc vitae viverra nibh. Etiam iaculis mauris dapibus dolor pharetra, in sagittis neque accumsan. Sed finibus in turpis non dignissim. Donec facilisis ornare tellus, eget finibus dolor vestibulum nec. Ut varius massa eu mi lobortis, id luctus urna ullamcorper.

Aliquam tristique arcu eu urna rhoncus tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum mauris nulla, rhoncus sit amet consectetur nec, suscipit nec ante. Sed ullamcorper laoreet ligula id viverra. Mauris feugiat tortor diam. Curabitur porta velit mi. Duis eu turpis eget elit elementum rutrum non ut magna.

Integer porta viverra velit sed ultricies. Vestibulum rhoncus velit massa, vitae pellentesque urna iaculis ut. Integer lobortis, nulla et lobortis venenatis, odio leo aliquam diam, eu laoreet urna nibh nec tellus. Mauris efficitur in risus ut rutrum. Duis scelerisque sit amet enim vel hendrerit. Fusce viverra mi arcu, non maximus sem semper in. Donec viverra mi leo, eget volutpat magna elementum sit amet. Vestibulum gravida tellus ac eros pretium consectetur. Quisque massa sapien, egestas et velit nec, bibendum sagittis justo. Suspendisse lobortis ligula in mi consequat, sit amet aliquam arcu malesuada.

Mauris pellentesque dui quis dapibus viverra. Fusce consequat nec augue in ornare. Integer non augue sit amet lacus dapibus tincidunt. Fusce volutpat purus eget porta blandit. Nullam sit amet faucibus felis. Etiam nec viverra ante. Donec sit amet nulla non mi volutpat auctor nec nec mi. Curabitur ut odio varius, fermentum libero ut, vehicula lorem. Fusce commodo pulvinar mi, eu gravida diam iaculis vitae.

Praesent maximus eget augue quis ultrices. Aenean rhoncus vulputate augue, ac malesuada nisi ultricies at. Mauris sagittis velit ac arcu ornare, at iaculis diam pellentesque. Fusce ac lacus ante. Cras eget arcu malesuada, feugiat ipsum in, pellentesque felis. Mauris tristique, urna eu venenatis feugiat, tortor massa accumsan nunc, eget blandit tortor sem ut est. Ut suscipit malesuada tortor. Duis iaculis odio quis erat dapibus suscipit. Nunc a velit vel massa eleifend pharetra. Donec ut erat nunc. Donec nec nisl nec enim condimentum congue. Ut feugiat orci ipsum, id euismod turpis fermentum at. Integer arcu est, tempus ac ante quis, ultrices ornare nunc. Quisque accumsan nisi nec urna tristique elementum. Pellentesque at nibh magna.
                </div>
                <div className="home-about-left">
                    Some picture
                </div>
            </div>
            <div id="home-showcase-features" className="home-showcase-features">
                <h1>What we offer</h1>
                dynamic auto meoving scroll thing
            </div>
                
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p >
            Home page needs a navbar that is catered for all devices (done)
            Home page needs some dynamic something(three.js)
            some dynamic moving text with this
            followed by text underneath about what this app is about 
            home page should have what this application is about with a dynamic scrollbar of the features
            a sign up button
            

            </p>
        </div>
    )
}

export default Home;