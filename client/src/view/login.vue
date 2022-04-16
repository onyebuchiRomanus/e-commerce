<template><div>
    <div class="col-12 content">
            <div class="col-es-6 col-xs-12">
                <div class="col-12" style="padding-bottom: 40px;">
                    <a href="/"><img src="../Images/logo.png" style="margin-left: -20px;" width="108" height="116"></a>
                    <router-link class="signup signup2" id="mSignup" to="register">Sign Up</router-link>
                </div>
                <h2>Let's Make Your Order!</h2>
                <span class="tx">To sign in please type the email address</span>
                <span class="tx">linked to your account and your password</span>
                <br><br>
                <form ref="form" @submit.prevent="login">
                    <span class="in">Email Address</span><br>
                    <input id="email" type="email" required="required">
                    <span class="in">Password</span><br>
                    <input id="pwd" type="password" required="required">
                    <span class="in inx">Don't have an account? <router-link class="signup" to="register">Sign Up</router-link></span><br>
                    <p><input class="signin" type="submit"  value="Sign In"></p>
                    
                </form>
                
            </div>
            <div class="col-es-6 imgDiv">         
                <img src="../Images/br.png" width="407" height="415">
                <router-link class="signup" to="/register">Sign Up</router-link>
                <img src="../Images/mock.png" width="1400" height="890">
            </div>
        </div>
        <div id="myModal" class="modal">
            <div id="div_loading" class="modal-content" >
                <div class="modal-body"><br />
                    <div class="sh_loader" >
                        <div class="loader"></div>
                        <p style="font-size: 25px;font-family: Arial, Helvetica, sans-serif;color:#dc0e00">Please Wait.....</p>
                    </div>  
                    <div class="signinFailed signinFailed1">
                        SIGNING IN FAILED
                        <span class="close" v-on:click="closeSpan()">X</span>
                    </div> 
                    <div class="signinFailed signinFailed2">
                        Please Verify Your Email
                        <span class="close" v-on:click="closeSpan()">X</span>
                    </div>
                    <div class="signinFailed signinFailed5">
                        You are Offline
                        <span class="close" v-on:click="closeSpan()">X</span>
                    </div>
                </div>
            </div>
        </div></div>
</template>

<script>
    export default {
        name: 'login',
        data(){
            return {
                title:'950Meals Login',
                url: "http" + "://localhost" +":5000",
            }
        },
        mounted(){
            var c = document.querySelector(".content");c.style.height=screen.availHeight.toString() + "px";
            document.querySelector(".modal").style.paddingTop = ((screen.availHeight/2)-150).toString() + "px";
             if(location.href.indexOf("localhost:8080") > 0){         
                alert(this.url);
            }
            else{
                //this.url = "https://" + "950Meals.com";
                this.url = process.env.VUE_APP_URL;
            }
        },
        methods: {
            login(){ 
                if(!navigator.onLine){
                    this.showModal('#div_loading');
                    let modDiv = document.querySelectorAll(".modal-body > div");
                    for(var i = 0; i <modDiv.length; i++){
                        modDiv[i].style.display = "none";
                    }
                    document.querySelector(".signinFailed5").style.display = "block";
                    return false;
                }
                this.showModal('#div_loading');
                var usrEmail = document.getElementById("email").value;
                var pwd = document.getElementById("pwd").value;

                let modDiv = document.querySelectorAll(".modal-body > div");
                for(let i = 0; i <modDiv.length; i++){
                    modDiv[i].style.display = "none";
                }
                document.querySelector(".sh_loader").style.display = "block";

                var obj = {"email" : usrEmail,"password": pwd}; var res;
                var xhhtp = new XMLHttpRequest();let dis = this;
                xhhtp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        dis.closeSpan();
                        res = JSON.parse(xhhtp.responseText);
                        //alert(this.responseText)
                        if(res.status==1){ alert(res.message)
                            //if(res.data.authenticated){
                                localStorage.setItem("user",res.user.email);
                                localStorage.setItem("userN",res.user.firstName);
                                localStorage.setItem("userL",res.user.lastName);
                                localStorage.setItem("level",res.user.userType);
                                localStorage.setItem("userId", res.user.id);
                                var rd = location.href.split('=');
                                if(res.user.userType.localeCompare("chef")==0){
                                    location.href = "/chef"
                                }
                                else if(res.user.userType.localeCompare("Admin")==0){
                                    location.href = "/admin";
                                }
                                else if(res.user.userType.localeCompare("rider")==0){
                                    location.href="/rider"
                                }
                                else if(res.user.userType.localeCompare("business")==0){
                                    location.href="/business"
                                }
                                else if(rd.length > 1){
                                    location.href = location.href.split('=')[1];  
                                }
                                else{
                                    location.href = "/";
                                }                         
                            //}
                            /*else{ 
                                
                                var modDiv = document.querySelectorAll(".modal-body > div");
                                for(var i = 0; i <modDiv.length; i++){
                                    modDiv[i].style.display = "none";
                                }
                                document.querySelector(".signinFailed2").style.display = "block";
                            }*/
                        }
                        //return xhhtp.responseText;
                    }
                    else{ //alert(this.readyState)
                        if(this.readyState == 4){
                            try{
                                res = JSON.parse(xhhtp.responseText);
                            }
                            catch(e){
                                //
                            }
                            var modDiv = document.querySelectorAll(".modal-body > div");
                            for(var i = 0; i <modDiv.length; i++){
                                modDiv[i].style.display = "none";
                            }
                            document.querySelector(".signinFailed1").style.display = "block";
                            
                        }
                    }
                }
                //xhhtp.open("POST", 'https://n950meals.herokuapp.com/api/v1/auth/login', true); 
                xhhtp.open("POST", this.url + '/login', true);
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
            closeSpan2() {
                var modal = document.querySelector(".modal2");
                var modalContent = document.querySelectorAll(".modal-content2");
                modal.style.display = "none"; //alert("crazy")
                for (var i = 0; i < modalContent.length; i++) {
                    modalContent[i].style.display = "none !important";
                }
            },
            showModal2(div) {
                var modal = document.querySelector(".modal2");
                var modalContent = document.querySelectorAll(".modal-content2");
                modal.style.display = "block";
                for (var i = 0; i < modalContent.length; i++) {
                    modalContent[i].style.display = "none";
                }
                document.querySelector(div).style.display = "block";
            },
            logout(){
                localStorage.removeItem("user");
                localStorage.removeItem("userN");
                location.reload();
            },
            axiosSend(){
              /*  axios.request({
                        url: '/items/ITEM_NAME',
                        method: 'get',
                        baseURL: 'https://preview-deliver.kenticocloud.com/PROJECT_ID',
                        headers: {
                            'Authorization': 'Bearer TOKEN'
                        }
                    })
                    .then(response => {
                        console.log(response.data)
                    })
                */
            }
        }
    }
</script>

<style scoped>
    @import 'si.css';
            body{margin:0px !important;padding: 0px !important;}.content{height: 100%;}
            *{box-sizing: border-box}input[type="submit"]{outline:none !important}
            [class*="col-"]{float: left !important}
            .col-12{width:100%}
            .col-6{width:50%}
            input[type="email"],input[type="password"]{cursor:pointer;outline: none !important;border-width: 0px 0px 1px 0px;width:100%; border-style: solid;border-color: #000;height:35px;padding-left:10px;margin:5px 0px 45px;}
            input:focus{border-color: #dc0e00;}
            .content > div{height: 100%;}
            .content h2{font-family: Arial, Helvetica, sans-serif; margin-top: 35px;}
            .content > div:first-child .tx{color: #979797;display: block;}
            .signin{border:1px solid #dc0e00;border-radius: 10px;font-size: 20px;margin-top: 20px;color:white;background-color: #dc0e00;padding: 10px 45px;cursor: pointer;}
            .signup{color:#dc0e00;text-decoration: none;cursor: pointer !important;}
            .imgDiv a, .signup2{ padding:8px 15px;font-family: Arial, Helvetica, sans-serif; border: 1px solid #dc0e00;position: absolute;right: 5%;top:20px;border-radius: 5px;font-weight:bold;z-index: 1000000;}
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