<template>
    <div>
        <div class="col-12 content">
            <div class="col-es-6 col-xs-12">
                <div class="col-12" style="padding-bottom: 40px;">
                    <a href="/"><img src="../Images/logo.png" style="margin-left: -20px;" width="98" height="106"></a>
                    <router-link class="signup signup2" id="mSignup" to="login">Sign In</router-link>
                </div>
                
                <h1>Sign up</h1>
                <span class="tx">Please fill in the form below</span>
                <span class="res"></span>
                <br><br>
                <form ref="form" @submit.prevent="validate">
                    <span class="in">Business Name</span><br>
                    <input id="name" type="text" required="required">
                    <!--<span class="in">Gender</span><br>
                    <select id="gender" type="text" required="required">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>-->
                    <span class="in">Business Phone Number</span><br>
                    <input id="num" type="text" required="required">
                    <span class="in">Business Email</span><br>
                    <input id="email" type="email" required="required">
                    <span class="in">Password</span><br>
                    <input type="password" id="pwd" required="required">
                    <span class="in">Repeat Password</span><br>
                    <input type="password" id="cPwd" required="required">
                    <span class="in inx">Already have an account? <router-link class="signup" to="/login">Sign In</router-link></span><br><br>
                    <span class="in inx">Click <router-link class="signup" to="register">here</router-link> to sign up as an individual</span><br>
                    <p><input class="signin" type="submit" value="Sign Up"></p>                    
                </form>
                
            </div>
            <div class="col-es-6 imgDiv">
                
                <img src="../Images/br.png" width="407" height="415">
                <router-link class="signup" to="login">Sign In</router-link>
                <img src="../Images/mock.png" width="1400" height="890">
            </div>
        </div>
        <div id="myModal" class="modal">
            <div id="div_loading" class="modal-content" >
                <div class="modal-body"><br />
                    <div class="sh_loader">
                        <div class="loader"></div>
                        <p style="font-size: 25px;font-family: Arial, Helvetica, sans-serif;color:#dc0e00">Please Wait.....</p>
                    </div>  
                    <div class="signinFailed signinFailed1">
                         Registration Failed. Please Try Again Later.
                        <span class="close" v-on:click="closeSpan()">X</span>
                    </div> 
                    <div class="signinFailed signinFailed2">
                        Registration Successfull.<br>
                        <span style="font-size: 17px;">A mail Have Been Sent To Your Email,<br>
                            PLease Verify Your Email Address</span>
                        <span class="close" v-on:click="closeSpan()">X</span>
                    </div>
                    <div class="signinFailed signinFailed3">
                        Registration Failed. User Already Exist.
                        <span class="close" v-on:click="closeSpan()">X</span>
                    </div>
                    <div class="signinFailed signinFailed5">
                        You are Offline
                        <span class="close" v-on:click="closeSpan()">X</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

 <style scoped>
        @import 'si.css';
            body{margin:0px !important;padding: 0px !important;}.content{height: 100%;}
            *{box-sizing: border-box}input[type="submit"]{outline:none !important}
            [class*="col-"]{float: left}
            .col-12{width:100%}
            .col-6{width:50%}
            select,input[type="email"],input[type="text"],input[type="password"]{cursor:pointer;outline: none !important;border-width: 0px 0px 1px 0px;width:100%; border-style: solid;border-color: #000;height:35px;padding-left:10px;margin:2px 0px 25px;}
            input:focus{border-color: #dc0e00;}
            .content > div{height: 100%;}
            .content h1{font-family: Arial, Helvetica, sans-serif; margin-top: 35px;}
            .content > div:first-child .tx{color: #979797;display: block;}
            .signin{border:1px solid #dc0e00;border-radius: 10px;font-size: 20px;margin-top: 20px;color:white;background-color: #dc0e00;padding: 10px 45px;cursor: pointer;}
            .signup{color:#dc0e00;text-decoration: none;}
            .res{color:white; background-color: #dc0e00;padding: 10px 15px; display: none;}
            .imgDiv a, .signup2{ padding:8px 15px;font-family: Arial, Helvetica, sans-serif; border: 1px solid #dc0e00;position: absolute;right: 5%;top:20px;border-radius: 5px;font-weight:bold;z-index: 10000;}
            .content > div:first-child .in{font-family: Arial, Helvetica, sans-serif;color:#000;font-size:17px;}
            @media only screen and (min-width: 768px){
                .col-es-12{width:100%}
                .col-es-6{width:50%}
                .imgDiv{background-color: #ffedde;position: relative;overflow: hidden;}
                .imgDiv > img{position: absolute;}
                .imgDiv > img:first-child{transform: rotate(-15deg);left:-40px;top:150px;}
                .imgDiv > img:last-child{z-index: 100;left:-420px;top:-100px;}
                .content > div:first-child{padding:10px 8%;position: relative;z-index: 10000;}
                
                #mSignup{display: none;}
            }
            @media only screen and (max-width: 767px){
                .col-xs-12{width:100%}
                .imgDiv{display: none;}
                .content > div:first-child{padding:10px 5%;}
                .inx{display: block;text-align: center;}
                .content p{text-align: center;}
            }
            .signinFailed{position: relative;margin-left: -10%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);color:#dc0e00;text-align: center;background-color: #fff;display: none;padding: 30px;font-size: 25px;font-family: Arial, Helvetica, sans-serif;}      
        </style>

<script>
   export default{
       name: 'Register',
       data(){
           return{
               title: '950Meals Registration',
                url: "http" + "://localhost" +":5000",
           }
       },
        mounted(){
            var c = document.querySelector(".content");c.style.height=screen.availHeight.toString() + "px";
            document.querySelector(".modal").style.paddingTop = ((screen.availHeight/2)-150).toString() + "px";
            //c.style.width = screen.availWidth.toString() + "px";

            if(screen.availWidth > 767){
                c.style.height = (screen.availHeight + 300).toString() + "px";
            }
            if(location.href.indexOf("localhost:8080") > 0){         
                //alert(this.url);
                //alert(process.env.VUE_APP_URL);      
            }
            else{
                //this.url = "https://" + "950Meals.com";
                this.url = process.env.VUE_APP_URL;
            }
        },
        methods:{
            validate(){ 
                var pwd1 = document.getElementById("pwd").value;
                var pwd2 = document.getElementById("cPwd").value;
                if(pwd1.localeCompare(pwd2)==0){
                    let res = document.querySelector(".res")
                    res.innerHTML = ""; res.style.display = "none";
                    this.signup(this.closeSpan);
                }
                else {
                    var res = document.querySelector(".res")
                    res.innerHTML = "Password does not match"; res.style.display = "block";
                    res.style.marginTop = "15px";                   
                }
                return false;
            },
            signup(){

                if(!navigator.onLine){
                    this.showModal('#div_loading');
                    let modDiv2 = document.querySelectorAll(".modal-body > div");
                    for(var i = 0; i <modDiv2.length; i++){
                        modDiv2[i].style.display = "none";
                    }
                    document.querySelector(".signinFailed5").style.display = "block";
                    return false;
                }

                this.showModal('#div_loading');
                var usrEmail = document.getElementById("email").value;
                var pwd = document.getElementById("pwd").value;
                var name = document.getElementById("name").value;
                var num = document.getElementById("num").value;
                //var gender = document.getElementById("gender").value;

                var modDiv = document.querySelectorAll(".modal-body > div");
                for(let i = 0; i <modDiv.length; i++){
                    modDiv[i].style.display = "none";
                }
                document.querySelector(".sh_loader").style.display = "block";

                var obj = {"email" : usrEmail,"password": pwd,"fullName":name,"phoneNumber":num, "userType": "business"}; var res;
                var xhhtp = new XMLHttpRequest();
                xhhtp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        //this.closeSpan();
                        //cl();
                    res = JSON.parse(xhhtp.responseText);
                        if(res.status==1){
                            //var modal = document.querySelector(".modal");
                            var modDiv = document.querySelectorAll(".modal-body > div");
                                for(var i = 0; i <modDiv.length; i++){
                                    modDiv[i].style.display = "none";
                                }
                            document.querySelector(".signinFailed2").style.display = "block";
                        }
                        else if(res.status==0){
                            let modDiv2 = document.querySelectorAll(".modal-body > div");
                            for(let i = 0; i <modDiv2.length; i++){
                                modDiv2[i].style.display = "none";
                            }
                            document.querySelector(".signinFailed3").style.display = "block";
                        }
                        else{                   
                            //res = JSON.parse(xhhtp.responseText);
                            let modDiv2 = document.querySelectorAll(".modal-body > div");
                            for(let i = 0; i <modDiv2.length; i++){
                                modDiv2[i].style.display = "none";
                            }
                            document.querySelector(".signinFailed1").style.display = "block";
                        }
                    }
                    else{ //alert(this.readyState)
                        if(this.readyState == 4){
                            res = JSON.parse(xhhtp.responseText);
                            let modDiv3 = document.querySelectorAll(".modal-body > div");
                            for(let i = 0; i <modDiv3.length; i++){
                                modDiv3[i].style.display = "none";
                            }
                            if(res.message.localeCompare("User already exist")==0){
                                document.querySelector(".signinFailed3").style.display = "block";
                            }
                            else{
                                document.querySelector(".signinFailed2").style.display = "block";
                            }
                        }
                    }
                }
                xhhtp.open("POST", this.url + '/api/auth/register', true); 
                xhhtp.setRequestHeader("Content-type", "application/json"); 
                xhhtp.send(JSON.stringify(obj));

                return false;
            },
            closeSpan() {
                var modal = document.querySelector(".modal");
                var modalContent = document.querySelectorAll(".modal-content");
                modal.style.display = "none"; //alert("crazy")
                for (var i = 0; i < modalContent.length; i++) {
                    modalContent[i].style.display = "none !important";
                }
            },
            showModal(div) {
                var modal = document.querySelector(".modal");
                var modalContent = document.querySelectorAll(".modal-content");
                modal.style.display = "block";
                for (var i = 0; i < modalContent.length; i++) {
                    modalContent[i].style.display = "none";
                }
                document.querySelector(div).style.display = "block";

                if(screen.availWidth < 767){
                    modal.style.paddingLeft = "10%";
                    document.querySelector(div).style.width = "80%";
                }
            },
        }
   }
</script>
