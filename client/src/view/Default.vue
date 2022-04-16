<template>
<div class="col-12">
  <div class="col-12 content">
     <div class="col-12 tBanner">
                <div class="col-lg-4 col-md-3 col-sm-4 col-xs-12">
                    <div class="col-12" style="padding:5px 0px 5px 7%;position: relative;">
                        <img style="float:left" src="../Images/logo.png"  height="60">
                        <span style="color:#DC0e00;font-size:30px;font-weight:bold;margin-top:18px;float:left">950Meals</span>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-4 col-xs-12 navMenu">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/meals">Menu</router-link></li>
                        <li><router-link to="/contact-us">Contact Us</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <div class="meu" style="padding:10px 10px;position: relative; top:7px">
                        <router-link to="cart"><img src="../Images/cartred.png" width="35" height="35" style="float:left;cursor:pointer"/></router-link>
                        <span class="cartNum" style="position:absolute;left:30px;top:5px;padding:2px;text-align:center;display: inline-block;color:#fff;background-color: #31a24c;width: 20px;border-radius: 50%;height: 20px;">0</span>
                        <span class="lik"><router-link class="login sign" to="login?de=index">Login</router-link> <router-link to="register" class="sign signup">Sign Up</router-link></span>
                        <span class="uLik"><a class="usrN sign usrN2"></a> <a onclick="logout()" class="sign signup">Log Out</a></span>
                    </div>
                </div>
    </div>
    <div class="col-12 tNavBan">
        <img src="../Images/logo.png"  height="60">
        <div style="float: right;padding-top: 20px;">
            <a onclick="showModal2('#mobile_nav')"><img src="../Images/hamburger.png" height="20"></a>
        </div>
    </div>
    <router-view/>
  </div>
   <div id="myModal2" class="modal2">
            <div id="mobile_nav" class="modal-content2" >
                <div class="modal-header2">
                    <span class="close2" onclick="closeSpan2()">&times;</span>
                    <a><img class="mNImg" src="Images/cart.png" width="35" height="35"  /></a>
                    <span class="cCa" >0</span>
                </div>
                <div class="modal-body2"><br />
                    <a href="index.html">Home</a>
                    <a href="Meals/allProduct.html">Menu</a>
                    <a href="contactus">Contact Us</a>
                    <span class="lik"><router-link class="login4 sign4" to="login.html?de=index">Login</router-link> <router-link to="register" class="sign4 signup4">Sign Up</router-link></span>
                    <span class="uLik"><a class="usrN login4 sign4 usrN2"></a> <a onclick="logout()" class="sign4 signup4">Log Out</a></span>
                </div>
              </div>
   </div>    
</div>        
</template>
<script>
//import * from '@si.js';
export default {
  name: "Default",
  
  head() {
    return {
      title: '950meals',script: "si.js"
    }
  },
  mounted(){
      if(localStorage.getItem("user")== null){
            let sps = document.querySelectorAll(".uLik");
            for(let i = 0; i < sps.length; i++){
                sps[i].style.display="none"
            }
        }
        else{
            let sps = document.querySelectorAll(".lik");
            var usN = document.querySelectorAll(".usrN");
            for(var i = 0; i < sps.length; i++){
                sps[i].style.display="none"
                usN[i].innerHTML = "Hi&nbsp;" + localStorage.getItem("userN");
            }
            //document.querySelector(".mNav").style.width = "160px";
            //document.querySelector(".mNav > div > a:first-child").style.paddingLeft = "30px"
            document.querySelector(".cCa").style.left = "120px"
        } 
         /* const tag = document.createElement("script");
        tag.setAttribute("type","text/javascript")
        tag.setAttribute("src", "si.js");
        document.head.appendChild(tag)*/
        //document.querySelector(".content").innerHTML +='script type=\"text/javascript\" src=\"si.js\"script';
        //external.body_script()
        this.cartQuantity2();
       setInterval(this.cartQuantity2,1000);
  },

  methods:{
      cartQuantity2(num) {//alert("work");
            var cart = "mealUniqueId950";
            var cartData = localStorage.getItem(cart);
            var cartCount2 = 0;
            if(cartData != null || cartData != ""){
                try{
                    cartCount2 = cartData.split("]|]").length -1; 
                }
                catch(err){
                    //Do something
                }
            }
              
            document.querySelector(".cartNum").innerHTML = cartCount2;
            try { document.querySelector(".quantity3").innerHTML = cartCount2;}
            catch(er){//Do something}
        
        if (num == 1) {
                alert("Meal Added successfully");
             } 
        }
                  
    }
    },
    closeSpan() {
        let modal = document.querySelector(".modal");
        modal.style.display = "none";
        let modalContent = document.querySelectorAll(".modal-content")
        for (var i = 0; i < modalContent.length; i++) {
            modalContent[i].style.display = "none";
        }
    },
    showModal(div) {
        let modal = document.querySelector(".modal");
        let modalContent = document.querySelectorAll(".modal-content");
        modal.style.display = "block";
        for (var i = 0; i < modalContent.length; i++) {
            modalContent[i].style.display = "none";
        }
        document.querySelector(div).style.display = "block";
    }
}

</script>

<style scoped>
    @import 'si.css';
            @media only screen and (min-width: 768px){
                .tNavBan,.lasFot,.mMealImg{display: none;}
            }
             a{text-decoration: none;font-family: Arial, Helvetica, sans-serif;}
            .menu{margin-left: -90px;font-weight:bold;margin-top: 60px;border-width: 0px;padding:10px 60px;background-color: #DC0e00;border-radius: 0px 30px 30px 0px;color:#fff}
            .login{margin-left: 20px; border: 1px solid #DC0e00;color:#DC0e00;}
            .signup{background-color: #DC0e00; color:#fff; margin-left: 20px;}
            .sign{display: inline-block;font-weight: bold;font-size: 17px;border-radius: 5px;padding:10px 20px}
            .footer{background-color: #fff5ec;height: 500px;font-family: Arial, Helvetica, sans-serif;}
            .footer > div{height:100%}
            .footer > div:first-child > div{background-image: url('../Images/divDot.png');padding-top: 35px;background-size: 100% 100%;background-repeat: no-repeat;}
            .footer > div:first-child img{height: 400px; width: 100%;margin-left: -150px;margin-top:-60px}
            .footer > div:nth-child(2) p{font-size: 27px;color:#2e266f;font-weight: bolder; margin:0px; margin-top:2px}
            .footer > div:nth-child(2){position: relative;;padding-top: 5%; text-align: center;}
            .inp_search2{float: left;color:#2e266f;font-weight: bold;border-radius: 30px 0px 0px 30px;width:70%;padding-left:30px;height: 50px;border-width: 0px;background-color: #fff;outline: none;}
            .sp_search2{float:left;padding:7px;padding-right: 10px;border-radius: 0px 30px 30px 0px; background-color: #fff;display: inline-block;}
            .btn_search2{height:36px;font-size: 13px;font-weight: bold; border-radius: 50%;color:#fff;border-width:0px;background-color: #DC0e00;}
            .footerNav{display: block; margin-top: 40px;padding: 50px}
            .footerNav li{display: inline; margin-left: 10px}
            .footerNav li a{color: #707070;font-weight: bold;}
            .footer > div:last-child{position: relative;}
            .footer > div:last-child > div,.lasFot{position: absolute;bottom: 40px;right:40px}
            .footer > div:last-child img,.lasFot img{margin-left: 20px;}
            
            .navMenu a{color:#DC0e00;font-size: 18px;} .navMenu{padding-top:10px}
            .navMenu ul li{display: inline;margin-right: 12px;}
            .usrN2{color:#DC0e00;margin-left: 0px;font-size: 14px;}
            .uLik > a:last-child{padding: 10px;margin-left: 0px;font-size: 15px;}
            .loc{font-family: Arial, Helvetica, sans-serif;position: absolute; top: 25px;left:170px;color: #DC0e00;font-weight: bold;}
            @media only screen and (max-width: 767px){
                .tBanner{display: none !important}
                .tNavBan{padding: 5px 20px}
                .cCa{position: absolute;text-align:center;left:65px;padding-top: 2px;background-color: #31a24c;color:#fff;width:20px;height: 20px;border-radius: 10px;}
                .meu{padding-top: 10px !important;padding-bottom: 20px !important;text-align: center;}
                .meu > img{margin-left: 40px;}
                .cartNum{left: 70px !important; top: 10px !important}
                .login4{margin-left: 0px; border: 1px solid #fff;color:#fff;}
                .signup4{background-color: white; color:#DC0e00; margin-left: 10px;}
                .sign4{font-weight: bold;font-size: 17px;border-radius: 5px;padding:10px}
                .lik{display: inline-block;margin-top: 40px;}
                .uLik > a{ margin-bottom: 10px;}
                .footer{position: relative;}.p_newL{padding-left: 30px;}
                .uLik > a:first-child{display: block;border-width: 0px !important;}
                .footerNav{padding: 50px 5%}.footerNav li:last-child{display: block;margin-top: 10px;}
                .mMealImg{position: absolute;left:-130px; top: 20px}
                .footer > div:first-child, .footer > div:last-child{display: none ;}
                .footer > div:nth-child(2){padding: 40px 5% 0px}.fDiv2 > div:not(:nth-child(2)){height:250px;padding: 20px;text-align: center;font-family: Arial, Helvetica, sans-serif;}
               
            }
</style>