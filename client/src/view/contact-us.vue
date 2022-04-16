<template><div>
 <div class="cU col-12">
                Contact Us
            </div>
            <div id="mainContainer_38" class="col-12">
                <div class="contactForm col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 form1"> 
                      <div class="form">
                            <span class="formspan">First Name</span> 
                            <div class="text">
                                <input type="text" placeholder="Enter User First Name Here" class="form_Nav_input" >
                            </div>
                           
                            <br>
                            <span class="formspan ">Email</span>
                            <div class="text">
                                <input type="text" placeholder="Enter User Email Here" class="form_Nav_input span1"> 
                            </div>
                          
                            <br>
                            <span class="formspan span2">Message</span>
                            <br>
                            <div class="text">
                                <textarea placeholder="message" class="textarea1"></textarea>
                            </div>
                            <br>
                            <div class="subBTN">
                              <button class="submit">Submit</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
           </div>
            <div class="col-12 footer">
                <div class="col-4 col-xs-12" style="padding-top: 40px">
                    <div><img src="../Images/dmeal.png"></div>
                </div>
                <div class="col-5 col-xs-12">
                    
                    <p>Subscribe</p>
                    <p style="margin-bottom: 20px;">To Our News Letter</p>
                    <p class="p_newL" style="margin-bottom: 40px;color:#707070;text-align: center;font-size: 13px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. </p>
                    <div style="padding-left:30px"><input class="inp_search2" placeholder="Email" type="email"><span class="sp_search2"><button class="btn_search2"><img src="../Images/right_arr.png" ></button></span></div>
                    <br><ul class="footerNav">
                        <li><a>Product</a></li>
                        <li><a>Company</a></li>
                        <li><a>Learn More</a></li>
                        <li><a>Get In Touch</a></li>
                    </ul>
                    <div class="lasFot">
                        <img src="../Images/facebook.png"><img src="../Images/twitter.png"><img src="../Images/instagram.png"><span style="margin-left:25px;font-weight: bold;">&copy; 950Meals.com</span>
                    </div>
                </div>
                <img class="mMealImg" src="../Images/dmeal.png" height="180">
                <div class="mSocial col-3 col-xs-12">
                    <div>
                        <img src="../Images/facebook.png"><img src="../Images/twitter.png"><img src="../Images/instagram.png"><span style="margin-left:25px;font-weight: bold;">&copy; 950Meals.com</span>
                    </div>
                </div>             
            </div>
          </div>
</template>

<style>
            .contactForm {padding:0px 10%;margin-bottom:20px;padding-left:20%;padding-right:20%;}
            .cU{margin-bottom: 20px;padding: 60px 7%;background-color: #171a29;color: #fff;font-size: 30px;font-family: Arial, Helvetica, sans-serif;}
            .form1 {
                border: 1px solid #E9E9EB;
                box-shadow: 0px 5px 2px lightgray; 
                height: auto;
                padding: 10% 5%;
                margin: auto;
            }
            .formspan {
                font-family: Ari, Helvetica, sans-serif;
                color: #DC0E00;
                font-size: 18px;
                margin-right:30px;
            }
            .form {
                padding-left: 3%;
            }
            .form_Nav_input {
                border: 1px solid #E9E9EB;
                border-radius: 5px;
                border-bottom: 1px solid #E9E9EB;
                padding-bottom: 10px;
                padding: 5px 10px;
                width: 85%;
                height: 40px;
                margin-bottom: 10px;
            }
            .form_Nav_input:focus {
                outline: none;
            }
            .text {margin-left:120px;margin-bottom: 20px;  margin-top: -20px;}
            .textarea1 {height: 170px;width:85%;padding:5px 10px;border-radius: 5px;border-color: #E9E9EB;}
            .textarea1:focus {outline: none;}
            .submitBtn {text-align: center;border: 1px solid #DC0E00;}
            .subBTN {width: 100%;height: auto;padding-left:35%;padding-right: 30%;}
            .submit {width: 100% !important;text-align: center;background-color: #DC0E00;padding: 10px 35px;font-size: 20px;color: white;font-family:"Arial";border-radius: 5px;border-width: 0px;}
            @media only screen and (max-width:1125px) {
                .textarea1 {width: 90%;}
            }
            @media only screen and (max-width:1040px) {
                .textarea1 {width: 90%;}
            }
            @media only screen and (max-width:1012px) {
                .textarea1 {width: 92%;}
            }
            @media only screen and (max-width:980px) {
                .textarea1 {width: 93%;}
            }
            @media only screen and (max-width:940px) {
                .textarea1 {width: 93%;}
            }
            @media only screen and (max-width:840px) {
                .textarea1 {width: 95%;}
            }
            @media only screen and (max-width:805px) {
                .formspan {font-size: 90%;}  
                .textarea1 {margin-left: -10px;}
                .textarea1 {width: 95%;}
            }
            @media only screen and (max-width:795px) {
                .textarea1 {width: 97%;}
            }
            @media only screen and(max-width: 767) {
                .contactForm {
                    padding-left: 5% !important;
                    padding-right: 5% !important;
                }
                .formspan {
                    margin-bottom: 30px;
                }
                .text {
                    margin-left:70px;
                }
            }
            @media only screen and (max-width:704px) {
                .textarea1 {width: 100%;margin-left:0px;}
                .contactForm {padding-left: 5% !important;padding-right: 5% !important;}
                .form_Nav_input {width: 90% !important;margin-bottom: 5px !important;}
                .formspan {margin-bottom: 30px !important;}
                .text {margin-left:10px !important;margin-top: 10px;margin-bottom: 20px !important;}
                .textarea1 {width: 90% !important;}
                .subBTN {width: 100%;height: auto;padding-left:3% !important;padding-right:12% !important;}
                .submit {width: 100% !important;text-align: center;background-color: #DC0E00;padding: 3% 2%;color: white;
                    font-family:Arial;border-radius: 5px;
                }
                .cU{text-align: center;}
            }
            @media only screen and (max-width:700px) {
                .textarea1 {width: 90%;}
            }
            @media only screen and (max-width:463px) {
                form > input {width: 100%;}
                .formspan {font-size: 90%;width: 100%;}
            }
        </style>