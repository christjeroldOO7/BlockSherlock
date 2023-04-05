/*
    Authors: Innovative Geeks
    Date: 31/03/2023
*/


import React from "react";
import { useState, useEffect } from "react";
import Sample from './Redirect';

function Form(){    //Form Section of the Web Page
    const initialValue = {hash:""}; //Initial values for the useState 
    const [InputValue, setInputValue] = useState(initialValue); //We set the intial values for InputValue. setInputValue handles changes to the initial values 
    const [InputErrors, setInputErrors] = useState({}); //Creating a useState for Errors (Non-Alphanumeric, Too Small, etc)
    const[isSubmit, setIsSubmit] = useState(false); //Creating a useState when User submits the form

    const changeInput = (e) => {
        const { name, value } = e.target;   //Event e looks for [name: value] in the form input

        setInputValue({ ...InputValue, [name] : value });   //We then set [name: value] to setInputValue 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputErrors(validate(InputValue));
        setIsSubmit(true);
    };

    useEffect(() =>{
        if(Object.keys(InputErrors).length === 0 && isSubmit){
            
        }
    },[InputErrors]);

    const validate = (values) => {  //Validates whether the input is Alphanumeric or not
        const errors = {}   //Errors will be stored  here
        const regex = /^[a-zA-Z0-9]+$/ ;    //The regex which will be used for testing

        if(!regex.test(values.hash)){   //If input is not an alphanumeric
            errors.hash = "Enter a valid Alphanumeric"  //Add this statement to errors object
        }

        return errors;  //Return the errors if any
    }


    return(
        <>
       <div class="s128">
      <form>
        <div class="inner-form">
          <div class="row">
            <div class="input-field first" id="first">
              <input class="input" id="inputFocus" type="text" placeholder="Enter Alphanumeric" />
              <button class="clear" id="clear">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </form>
    </div>
   
        
        </>
    );
}

function Header(){  //Header Section of the Web Page
    return(
        <>
            <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                <a href="index.html" class="logo">

                                </a>
                                <ul class="nav">
                                    <li><a href="index.html" class="active">Home</a></li>
                                    <li><a href="listing.html">Image Investigate</a></li>
                                    <li><a href=""></a></li> 
                                </ul>     
                                <a class='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

function About(){   //About Section of the Web Page
    return(
        <>
            <div class="popular-categories">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>ABOUT</h2>
                                <h6>Crypto Investigate Tool</h6>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="naccs">
                                <div class="grid">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="menu">
                                                <div class="first-thumb active">
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="col-lg-9 align-self-center">
                                            <ul class="nacc">
                                                <li class="active">
                                                <div>
                                                    <div class="thumb">
                                                        <div class="row">
                                                            <div class="col-lg-5 align-self-center">
                                                                <div class="left-text">
                                                                    <h4>One Of The Most Trending Tool Right Now!</h4>
                                                                    <p>BLOCKSHERLOCK is one of the best blockchain analysis tools that helps in investigating cryptocurrency transactions. It is used by law enforcement agencies and businesses to detect illicit activities such as money laundering, fraud, and terrorist financing.</p>
                                                                    <div class="main-white-button"><a href="#"><i class="fa fa-eye"></i>Investigate More</a></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-7 align-self-center">
                                                                <div class="right-image">
                                                                    <img src="styles/assets/images/tabs-image-01.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>  
                                                </li>
                                            </ul>        
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Footer(){  //Footer section of the Web Page
    return(
        <>
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="about">
                        <div class="logo">
                            <img src="assets/images/black-logo.png" alt="Plot Listing"/>
                        </div>
                        <p>If you consider that <a rel="nofollow" href="https://templatemo.com/tm-564-plot-listing" target="_parent">Plot Listing template</a> is useful for your website, please <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little via PayPal.</p>
                    </div>
                </div>
               
                <div class="col-lg-4">
                    <div class="contact-us">
                        <h4>Contact Us</h4>
                        <p>27th Street of New Town, Digital Villa</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <a href="#">010-020-0340</a>
                            </div>
                            <div class="col-lg-6">
                                <a href="#">090-080-0760</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="sub-footer">
                        <p>Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.
                        <br />
                        Design: <a rel="nofollow" href="https://templatemo.com" title="CSS Templates">TemplateMo</a></p>
                    </div>
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}

function MainPage(){    //The main section where all the sub sections are added
  return(
    <>
        <div id="js-preloader" class="js-preloader">
                <div class="preloader-inner">
                    <span class="dot"></span>
                    <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
        </div>

        <Header />  

    <div class="main-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="top-text header-text">
            <h6>Search Crypto Address</h6> 
              <h2>Investigate Crypto</h2>
            </div>
          </div>
          <div class="col-lg-12">
            <Form />
          </div>
        </div>
      </div>
    </div>
  
    <About />
    &nbsp;

    <Footer />

    </>
  )
}

export default MainPage;