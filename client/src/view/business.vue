<template>
    <div>
        <div class="col-12 content">
            <div class="col-md-2 col-sm-3 col-xs-12 col-lg-2" >
                <div>
                    <ul class="adminList">
                        <li><a id="a_overview" @click="showSelectedMenu('a_overview','#div_overview')"><span></span><img src="../Images/Group527.png" class="img_light"><img src="../Images/Group500.png" class="img_unlight"><span>Overview</span></a></li>
                        <li><a id="a_userMgmt" @click="showSelectedMenu('a_userMgmt','#div_userMgmt')"><span></span><img src="../Images/Group527(2).png" class="img_light"><img src="../Images/Group527(1).png" class="img_unlight"><span>My Details</span></a></li>
                         <li><a id="a_userMgmt2" @click="showSelectedMenu('a_userMgmt2','#div_userMgmt2')"><span></span><img src="../Images/Group527(2).png" class="img_light"><img src="../Images/Group527(1).png" class="img_unlight"><span>User Mgmt</span></a></li>
                        <li><a id="a_orders" @click="showSelectedMenu('a_orders','#div_orders')"><span></span><img src="../Images/Group5261.png" class="img_light"><img src="../Images/Group526.png" class="img_unlight"><span>Orders</span></a></li>
                    </ul>
                    <div class="menuDet"><button @click="hideMenu()">&#10094;</button><button @click="showMenu()">&#10095;</button></div>                  
                </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                <div class="nav col-12">
                    <div class="oMobile">
                        <a><img src="../Images/logo.png" height="50"></a>
                        <div style="float: right;padding-top: 17px;">
                            <a onclick="showModal2('#mobile_nav')"><img src="../Images/hamburger.png" height="20"></a>
                        </div>
                    </div>
                    <div><img class="uImg" src="../Images/u_avatar.png"><span id="uName" class="uName">John Doe</span><img class="not" style="display: inline-block;margin-bottom: -7px;" src="../Images/VectorA.png"><img class="logou" style="margin-right: 8px;display: inline-block;margin-bottom: -5px;" src="../Images/GroupA.png"><span style="cursor:pointer" onclick="logout()" class="logou">Log Out</span></div>
                </div>
                <div class="div_mainContent col-12">
                    <div id="div_overview" class="col-12 div_menu">
                        <h1 class="nMo">OVERVIEW</h1>
                        <div class="nMo" style="position: relative;">
                            <p style="margin:0px;color:#5e1313;font-size: 19px;padding-right: 300px;">Welcome. Here are the things you can do. You can always find them on the sidebar on the left.</p>
                            <div style="width:178px; height: 173px;background-image: url('Images/Group499.png');position: absolute;top:-95px;right:0px"></div>
                        </div>
                        <div class="col-12 wycd">
                            
                            <div><div>
                                <h3>Orders</h3>
                                <p>View & manage orders.</p>
                                <img src="../Images/g10.png">
                            </div></div>
                            <div><div>
                                <h3>User</h3>
                                <p>View & manage personal info</p>
                                <img src="../Images/g101.png">
                            </div></div>
                        </div>
                    </div>
                    <div id="div_userMgmt" class="div_userMgmt div_menu6 div_menu8">
                        <div>
                            <h1>My Details</h1>
                            <img class="mOrderImg" style="right:20px;top:0px;position: absolute;" src="../Images/g101.png">
                        </div>
                        <div class="div_c">
                            
                            <table class="orderTab">
                                <tr><th>Name</th><th>Email</th><th>Phone Number</th><th>Business Code</th><th>Change Password</th></tr>
                                <tr v-for="user in bizs" :key="user.id"><td>{{user.firstName}} {{user.lastName}}</td><td>{{user.email}}</td><td>{{user.phoneNumber}}</td><td><button class="claim" @click="showModal('#div_mainUsercode2')">View Code</button></td><td><button class="pending" onclick="changePwd(user.id)">Change Password</button></td></tr>                              
                            </table>
                        </div>
                    </div>
                    <div id="div_userMgmt2" class="div_userMgmt div_menu6 div_menu8">
                        <div>
                            <h1>User Management</h1>
                            <button @click="showModal('#div_addWorker')" class="adduser">Add User</button>
                            <img class="mOrderImg" style="right:20px;top:0px;position: absolute;" src="../Images/g101.png">
                        </div>
                        <div class="div_c">
                            <table class="userTab">
                                <tr><th>Worker Id</th><th>Email</th><th>Action</th></tr>
                                <tr v-for="user in users" :key="user.id"><td>{{user.id}}</td><td>{{user.userEmail}}</td><td><a class="redLink" onclick="changePwd(user.id)">Change Password</a></td></tr>    
                            </table>
                        </div>
                    </div>
                    <div id="div_orders" class="div_userMgmt div_menu6 div_menu8">
                        <div style="padding: 40px 30px 40px 50px">
                            <h1>Orders</h1>
                             <button @click="showModal('#div_orderDetails')" class="adduser">View Settlement</button>&nbsp;
                             <button @click="showModal('#div_orderDetails2')" class="adduser">Make Payment</button>
                            <img class="mOrderImg" style="right:20px;top:0px;position: absolute;" src="../Images/g10.png">
                        </div>
                        <div class="div_c">
                            <div class="div_filter">
                                <span style="color:#d63031;font-weight: bold;display: inline-block;margin-top:20px;">Business Orders</span>
                            </div>
                            <div id="orderDiv">
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Order ID</th><th>Order Date</th><th>User Email</th><th>Amount</th></tr>
                                        <tr v-for="order in orders" :key="order.id"><td>{{order.id}}</td><td>{{order.time}}</td><td>{{order.email}}</td><td>{{order.amount}}</td></tr>  
                                    </table>
                                </div>                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="myModal" class="modal">           
            <div id="div_orderDetails" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>SETTLEMENT DETAILS</h2>
                </div>
                <div class="modal-body">
                    <div id="div_mainOrderDetails">

                    </div>
                </div>  
            </div>
            <div id="div_orderDetails2" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>Make Payment</h2>
                </div>
                <div class="modal-body">
                    <div id="div_mainOrderDetails2">
                        <div class="form_Nav76">
                            <span>
                                Card Number
                            </span>
                            <br/>
                            <input id="cardNum" type="" class="form_Nav76_input">
                            <br/>
                            <span>
                                Expiry Date
                            </span>
                            <br/>
                            <input id="expDate" type="text" class="form_Nav76_input" placeholder="MM/YY">
                            <br/>
                            <span>
                                CVV
                            </span>
                            <br/>
                            <input id="ccv" type="text" class="form_Nav76_input">
                            <span>
                                Amount
                            </span>
                            <br/>
                            <input id="amt" type="text" class="form_Nav76_input">
                            <p style="text-align: center;"><button class="bill_btn2" @click="makePayment()">Make Payment</button></p>
                        </div>
                    </div>
                </div>  
            </div>
            <div id="div_addWorker" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>ADD USER</h2>
                </div>
                <div class="modal-body">
                    User Email<br>
                    <input type="text" class="modalInput" maxlength="10" placeholder="Enter email" id="userEmail">
                    <br><br>                
                    <p style="text-align: center;"><button class="redBtn" @click="addUser()">Add User</button></p>
                </div> 
            </div>
             <div id="div_mainUsercode2" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>USER CODE</h2>
                </div>
                <div class="modal-body">
                    <div id="div_mainUsercode">
                        No code have been assigned
                    </div>
                </div>  
            </div>
        </div>
        <div id="myModal2" class="modal2">
            <div id="mobile_nav" class="modal-content2" >
                <div class="modal-header2">
                    <span class="close2" onclick="closeSpan2()">&times;</span>
                </div>
                <div class="modal-body2"><br />
                    <a onclick="showSelectedMenu(this.id,'#div_overview')">Overview</a>
                    <a onclick="showSelectedMenu(this.id,'#div_userMgmt')">My Details</a>
                    <a onclick="showSelectedMenu(this.id,'#div_orders')" >Orders</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import 'si.css';@import 'checkout.css';
    *{box-sizing: border-box;}button,input{outline: none !important;cursor: pointer;} a{cursor: pointer;}
body{margin:0px !important; padding: 0px !important;font-family: Arial, Helvetica, sans-serif;}
ul{margin:0px; padding:0px;list-style-type: none;}
.content > div:first-child{width:210px;position: fixed;z-index: 100;;background-color: #dc3031;height: 100%;}
.content > div:first-child > div{padding-top: 100px;position: relative;}
.content > div:first-child > div img{margin-right: 10px;}
.content > div:last-child{padding-left: 210px;}
.menuDet{position: absolute; right: -13px; top: 30px}
.menuDet button{outline: none !important;border: 1px solid #dc3031; width: 32px;height: 32px;text-align: center;border-radius: 16px;font-size: larger;background-color: #fff;color: #dc3031;font-weight: bold;cursor: pointer;}
.menuDet > button:last-child{display: none;}
.img_light{display: none;}
ul li{padding:12px 10px 10px 0px; margin-bottom: 15px; color:#fff;cursor: pointer;}
.img_unlight{margin-left: 10px;}
.li_activeBackground .img_light{display: inline !important;}
.li_activeBackground .img_unlight{display: none !important;}
.li_activeBackground{background-color: #fff; color: #dc3031;}
.li_activeBackground a span:first-child{display: inline-block; width: 7px; height: 20px;margin-bottom: 3px;background-color: #dc3031;margin-right: 10px;}
.nav{color: #dc3031;background-color: #fff;position: relative;}
.nav > div{right:0px;position: absolute;padding: 30px 20px 20px;background-color: #fff;} 
.nav span{display: inline-block;font-size: 18px;}
#div_overview{padding-left: 50px;padding-top: 40px;padding-right: 40px;}
.div_userMgmt{padding: 30px 40px 50px 60px;}
.div_userMgmt > div:first-child{position: relative;background-color: #d63031;color:#fff;padding: 40px 30px 20px 50px}
#div_overview h1{color:#dc3031}
.wycd{margin-top:60px}
.wycd > div{padding:10px; width: 25%;float: left;}
@media only screen and (min-width: 767px) and (max-width: 992px){
    .wycd > div{width: 35%;}
}
.wycd > div > div{padding: 20px 10px;border-radius: 10px;background-color: #fff; height: 230px; box-shadow: 0px 6px 30px #e3ecf2;}
.wycd > div > div h3{margin:0px;color: #d63031}
.wycd > div > div p{color: #5e1313;margin-bottom: 0px;}
.wycd > div > div img{float: right;}
.div_userMgmt > div:first-child > h1{margin-top:0px}
.adduser{border-radius: 5px;color: #d63031; background-color: #fff;font-weight: bold;padding: 10px 30px;border-width: 0px;}
.div_userMgmt > div:last-child{margin-top: 10px;background-color: #fff;border: 1px solid #f0f3f4;padding: 25px 30px}
.sort{color:#686c79;font-weight: bold;}
.div_userMgmt > div:last-child > div:first-child{padding:0px 20px 15px;border-bottom: 1px solid #dfe0eb;}
.uSearch{padding: 40px 30px 60px;text-align: center;}
.uSearch span, .uSearch input{height: 45px}
.uSearch span{display: inline-block; border-width: 1px 0px 1px 1px;border-style: solid; border-color: #dfe0eb;padding:13px;border-radius: 20px 0px 0px 20px;float:left}
.filter{border: 1px solid #dfe0eb;background-color: #fff;border-radius: 20px;cursor: pointer;}
.uSearch input{border-width: 1px 1px 1px 0px;border-style: solid;border-color: #dfe0eb;border-radius: 0px 20px 20px 0px;margin-left: -3px;float:left;width:90%}
.userTab,.orderTab{width: 100%; text-align: center;}
.userTab tr:first-child th{color: #707070;padding-bottom: 30px;}
.orderTab tr:first-child th{color: #707070;padding-bottom: 20px;padding-top: 40px;}
.userTab tr td,.orderTab tr td{border-bottom: 1px solid #dfe0eb !important;padding:30px 10px}
.userTab tr th,.orderTab tr th{border-bottom: 1px solid #dfe0eb !important;padding:30px 10px}
.userTab tr:not(:first-child) > td:nth-child(2){color: #899ad2}
.userTab tr:not(:first-child) > td:not(:nth-child(2)){color: #707070}
.orderTab tr:not(:first-child) > td:nth-child(3){color: #899ad2}
.orderTab tr:not(:first-child) > td:not(:nth-child(3)){color: #707070}
.orderTab button{width:100px;color:#fff;padding: 10px 5px;border-width: 0px;border-radius: 5px;}
.orderTab .claim{background-color: #29cc97;}
.orderTab .pending{background-color: #bb2222;}
.orderTab .delivering{background-color: #fed700;}
.orderTab tr:not(:first-child):hover{background-color: #dfe0eb;}
.orderTab tr, .orderTab td,.orderTab{border-collapse: collapse;cursor: pointer;}
.modal {display: none;position: fixed;z-index: 100000000; padding-top: 6%;padding-left: 15%;top: 0;
    width: 100%;height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4) !important;
}
.modal-content {position: relative;background-color: #fefefe;margin: auto;padding:40px;padding-bottom: 20px;
    width: 75% !important;-webkit-animation-name: animatetop;-webkit-animation-duration: 0.4s;animation-name: animatetop;animation-duration: 0.4s
}
@-webkit-keyframes animatetop {
    from {top: -300px;opacity: 0}
    to {top: 0;opacity: 1}
}
@keyframes animatetop {
    from {top: -300px;opacity: 0}
    to {top: 0;opacity: 1}
}
.close {text-align: center;color: #fff;background-color: #c24548;border-radius: 50%;width:35px;height: 35px;float: right;font-size: 28px;position: absolute;right:-20px;top:-20px;padding-top: 2px;}
.close:hover,.close:focus {text-decoration: none;cursor: pointer;}
.modal-header {margin-bottom: 40px;}
.modal-header h2 {margin-bottom: 5px;margin-top: 10px;color: #dc0e00;}
.modalInput {width: 80% !important;outline: none; height:40px;border:1px solid #d9d9d9;border-radius: 5px;}
.modalLink {text-decoration: underline;}
.modalLink:hover {cursor: pointer;}
.f_aduser span{margin-right: 50px;color: #3b3f4d;font-weight: bold;}
.f_aduser input[type="text"],.f_aduser input[type="email"],.f_aduser input[type="password"]{width:50%;height: 35px;border-radius: 10px;border: 1px solid #dfe0eb;padding-left: 10px;}
.sp_role{color: #3b3f4d}
.f_aduser button{font-weight: bold;color: #fff; background-color: #dc0e00;padding: 10px 40px;border-width: 0px;border-radius: 5px;}
.f_aduser p{text-align: center;}
.p_order .ti{display: inline-block;color: #9fa2b4; width: 200px !important} .p_order .va{color: #252733}
.p_order{margin: 25px 0px}
.pro_br{display: inline;width:500px;text-align: center;}
.pro_br tr td{padding: 8px 0px}
.pro_br tr th{color:#9fa2ba;padding-bottom: 5px;}
.va label{margin-right: 30px;}
.container {position: relative;padding-left: 25px;margin-bottom: 12px;cursor: pointer;font-size: 15px;
    -webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: #252733;
  } 
  /* Hide the browser's default checkbox */
  .container input {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;} 
  /* Create a custom checkbox */
  .checkmark {position: absolute;top: 0;left: 0;height: 17px;width: 17px;background-color: #eee;}
  .container:hover input ~ .checkmark {background-color: #c4c4c4;}
  .container input ~ .checkmark {background-color: #c4c4c4;border-radius: 3px;}
  .container input:checked ~ .checkmark { background-color: #3751ff;} 
  .checkmark:after {content: "";position: absolute;display: none;}
  .container input:checked ~ .checkmark:after {display: block;}
  .container .checkmark:after {left: 4px;top: 2px;width: 5px;height: 10px;border: solid white;
    border-width: 0 3px 3px 0;-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);
  }
@media only screen and (min-width: 768px){
    .oMobile,.uImg,.mFilter{display:none}.nav{height:80px}
    .not{margin:0px 25px;}
}
select{outline:none !important}
 option{
    padding: 10px 20px;
}
.redBtn{color:#fff; background-color: #dc0e00;border-width: 0px;border-radius: 5px;font-size: 19px;padding: 10px 30px}
.sp_iTxt{margin-right: 10px;}
.mealsBtn{color: #dc0e00;background-color: #fff;border-radius: 5px;border-width: 0px;padding:10px 30px;font-size: 16px;}
@media only screen and (min-width: 768px){
    .div_addMealContent > div > div{padding: 10px}
}
@media only screen and (max-width: 767px){
    .content > div:first-child,.nMo,.logou, .mOrderImg,.div_filter{display:none !important}
    .content > div:last-child{padding-left: 0px;}
    .wycd > div{width: 100%} .wycd{margin-top: 130px;}
    .wycd > div:not(:first-child){padding:10px 10px 30px}
    .div_menu{padding: 20px 10% 40px !important}
    .div_menu6{padding: 20px 0px 40px !important}
    .nav > div{padding:5px 15px;width:100%;position: static;z-index: 10000}
    .nav > div:first-child{border-bottom: 2px solid #f2f2f2;}
    .oMobile{display: block;}
    .nav{margin-left: 0px;left:0px;position: fixed;width: 100%;z-index: 1000000;}
    .nav > div:last-child{padding:15px 15px 10px;position: relative;}
    .not{float: right;margin-right: 0px;}
    .uName{position: absolute; top: 25px; left: 60px}
    .div_menu8{padding-top:135px !important}
    .div_userMgmt > div:last-child{margin-top:0px;padding: 20px 0px}
    .div_menu6 > div:first-child h1{font-size: 24px;}
    .div_menu6 > div:first-child{padding: 40px 15px 50px;z-index: 10;}
    .adduser{padding: 10px 20px}
    .uSearch input{width:80%}
    .div_c{overflow: scroll;}
    .modal-content,.modal-content{width:90% !important}
    .modal{padding-left: 5% !important;}
    .va{display: block;margin-top: 5px;}
    .f_aduser input[type="text"],.f_aduser input[type="email"]{height: 40px;width:95% !important;margin-top: 5px;}
    .mFilter{padding-left: 30px;}.mFilter select{margin-top: 8px;}
    .modalInput{width:80%;margin: 5px 0px 15px;}
}
 .condivs > div > div{height: 50px} 
 
</style>

<script>
    export default{
        name: 'Logistics',
        data(){
            return{
                title: '950Meals Chef',
                url: "http" + "://localhost" +":5000",items:[],bizs:[],
                users:[],orders:[], userId: 0,
            }
        },
        mounted(){
            if(location.href.indexOf("localhost:8080") > 0){         
                //alert(this.url);
            }
            else{
                //this.url = "https://" + "950Meals.com";
                this.url = process.env.VUE_APP_URL;
            }
            if(localStorage.getItem("user")== null){
                location.href="/login";
            }
            else{
                if(localStorage.getItem("level")==null || localStorage.getItem("level").localeCompare("business") != 0){
                    location.href="/login";
                }
                document.getElementById("uName").innerHTML = localStorage.getItem("userN") ;
            } 
            this.showSelectedMenu('a_overview','#div_overview');
            this.getBusinessData(this.bizs,this.users,this.orders)
        },
        methods:{
            showSelectedMenu(a_menuItem, div_menuContent){ //alert("working")
                var contentDiv = document.querySelectorAll(".div_mainContent > div"); for(let i = 0; i <contentDiv.length; i++) {
                    contentDiv[i].style.display='none'
                }
                try{ 
                    document.querySelector(div_menuContent).style.display = 'block'
                }catch (ex){ 
                    //Exception
                }
                let menuList = document.querySelectorAll(".adminList li") 
                for(let i = 0; i < menuList.length; i++){
                    menuList[i].classList.remove("li_activeBackground");
                    }try{
                    document.querySelector("#" + a_menuItem).parentElement.className += " li_activeBackground"; //Add the hightlighted link
                }
                catch(ex){/**/}
                
                var b = document.querySelector("body");
                if(a_menuItem.localeCompare("a_userMgmt")==0){
                    b.style.backgroundColor = "#f5fbff";
                }
                else{
                    b.style.backgroundColor = "#fdf6f7";
                }
            },
            hideMenu(){
                var btns = document.querySelectorAll(".menuDet > button");
                btns[0].style.display = "none"; btns[1].style.display = "block";
                var sps = document.querySelectorAll(".adminList li a > span:last-child");
                for(var i = 0; i < sps.length; i++){
                    sps[i].style.display = "none";
                }
                document.querySelector(".content > div:last-child").style.paddingLeft = "70px"
                document.querySelector(".content > div:first-child").style.width = "70px"
            },
            showMenu(){
                var btns = document.querySelectorAll(".menuDet > button");
                btns[1].style.display = "none"; btns[0].style.display = "block";
                var sps = document.querySelectorAll(".adminList li a > span:last-child");
                for(var i = 0; i < sps.length; i++){
                    sps[i].style.display = "inline";
                }
                document.querySelector(".content > div:last-child").style.paddingLeft = "210px";
                document.querySelector(".content > div:first-child").style.width = "210px"
            },
            closeDiv() { //alert("working")
                //let modal2 = document.querySelector(".modal");
                //let modalContent = document.querySelectorAll(".modal-content");
                let modal = document.querySelector(".modal");
                let modalContent = document.querySelectorAll(".modal-content");
                modal.style.display = "none";
                for (let i = 0; i < modalContent.length; i++) {
                    modalContent[i].style.display = "none";
                }
            },
            closeSpan() {
                let modal = document.querySelector(".modal");
                let modalContent = document.querySelectorAll(".modal-content");
                modal.style.display = "none"; //alert("crazy")
                for (let i = 0; i < modalContent.length; i++) {
                    modalContent[i].style.display = "none !important";
                }
            },
            showModal(div) {
                let modal = document.querySelector(".modal");
                let modalContent = document.querySelectorAll(".modal-content");
                modal.style.display = "block";
                for (let i = 0; i < modalContent.length; i++) {
                    modalContent[i].style.display = "none";
                }
                document.querySelector(div).style.display = "block";
            },
            showModal5(div2,num){
                //Do all settings here
                var inp_ch = document.querySelectorAll(".inp_ch input");
                for(var i = 0; i < inp_ch.length; i++){
                    inp_ch[i].checked = false;
                }
                inp_ch[num].checked = true;
                this.showModal(div2);
            },
            showModal3(div2,num){
                //Do all settings here
                let inp_ch = document.querySelectorAll(".inp_ch2 input");
                for(let i = 0; i < inp_ch.length; i++){
                    inp_ch[i].checked = false;
                }
                inp_ch[num].checked = true;
                this.showModal(div2);
            },
            changePwd(n){
                this.userId = n;
                this.showModal();
            },
            showOrderTable(n){         
                let select = document.querySelector(n);
                let mealDiv = document.querySelectorAll("#orderDiv > div")
                
                for(let i = 0; i < mealDiv.length; i++){
                    mealDiv[i].style.display = "none";
                }
                mealDiv[select.selectedIndex].style.display = "block";
            },
            getBusinessData(bizs,users,orders){
                //let dis = this;
                let xhhtp = new XMLHttpRequest();
                let usId = localStorage.getItem("userId");
                xhhtp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                        //alert(this.responseText)
                        let co = JSON.parse(this.responseText);
                        for(let k = 0; k < co.user.length; k++){
                            bizs[k] = co.user[k];
                                document.getElementById("div_mainUsercode").innerHTML = "Your business code is :" + co.user[k].gender; 
                        }
                        for(let k = 0; k < co.users.length; k++){
                            users[k] = co.users[k];
                        }
                         for(let k = 0; k < co.orders.length; k++){
                            orders[k] = co.orders[k];
                        }
                        let div_m = document.getElementById("div_mainOrderDetails");
                        let conn = "<span>Numbers of orders: " + co.settlement.orderCnt + "</span><br>";
                        conn += "<span>Total amount ordered: "+ co.settlement.totalOrder +"</span><br>";
                        conn += "<span>Numbers of settlements: " + co.settlement.setCnt +"</span><br>";
                        conn += "<span>Total settlement: "+ co.settlement.setAmount +"</span><br>";
                        conn += "<span>Amount Owning: " + (co.settlement.totalOrder-co.settlement.setAmount).toString() + "</span><br>";
                        conn += "<span>Last Paid: "+ co.settlement.lastPaid +"</span>";
                        div_m.innerHTML = conn;
                    }
                }
                xhhtp.open("GET", this.url + '/api/getallbusinessdata/'+usId, true); 
                xhhtp.send();
            },
            showOrderDetails(n){
                let select = document.querySelector(n);
                let mealDiv = document.querySelectorAll("#orderDiv > div")
                for(let i = 0; i < mealDiv.length; i++){
                    mealDiv[i].style.display = "none";
                }
                mealDiv[select.selectedIndex].style.display = "block";
            },
            viewOrderDetails(id){
                let orderDetails = document.getElementById("div_mainOrderDetails");
                for(let i=0; i < this.orders.length; i++){
                    if(this.orders[i].id==id){
                        if(this.orders[i].orderDetails.length > 0){
                            let tab = '<table class="orderTab"><tr><th>Item name</th><th>Side Meal</th><th>Drink</th><th>Total Quantity</th></tr>';
                            for(let k = 0; k < this.orders[i].orderDetails.length; k++){
                                tab += "<tr><td>";
                                for(let u = 0; u < this.items.length; u++){
                                    if(this.items[u].id==this.orders[i].orderDetails[k].itemId){
                                        tab += this.items[u].name;
                                        tab += "</td><td>";
                                        for(let v = 0; v < this.items[u].sideMeals.length; v++){
                                            if(this.orders[i].orderDetails[k].sideMealId==this.items[u].sideMeals[v].id){
                                                tab += this.item[u].name;
                                                tab += "</td><td>";
                                            }
                                        }
                                        
                                    }
                                }
                                for(let u = 0; u < this.drinks.length; u++){
                                    if(this.drinks[u].id == this.orders[i].orderDetails[k].drinkId){
                                        tab += this.drinks[u].name;
                                        tab += "</td><td>";
                                    }
                                }
                                tab += this.orders[i].orderDetails[k].totalQuantity + "</td></tr>";
                            }
                            tab += "</table>";
                            orderDetails.innerHTML = tab;
                        } 
                        else{
                            orderDetails.innerHTML = "";
                        }    
                    }
                }
                this.showModal("#div_orderDetails")
            },
            deleteUser(n){
                let r = confirm("Are you sure you want to delete this user?");
                if(r==true){
                 let dis = this;
                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            let res = JSON.parse(this.responseText);
                            alert(res.message);
                            if(res.status==1){
                                dis.users = [];
                                for(let i = 0; i < res.users.length; i++){
                                    dis.users[i] = res.users[i];
                                }
                            }
                             
                        }
                    }
                    xhhtp.open("GET", this.url + '/api/deletecuser/' + n, true); 
                    xhhtp.send();
                }
            },
            addUser(){let dis = this;
                let xhhtp = new XMLHttpRequest();let obj = {userEmail: document.getElementById("userEmail").value,userId: localStorage.getItem("userId")}
                xhhtp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                        let co = JSON.parse(this.responseText);
                        alert(co.message);
                        if(co.status==1){
                             dis.users = [];
                            for(let i = 0; i < co.users.length; i++){
                                dis.users[i] = co.users[i];
                            }
                        }
                    }
                }
                xhhtp.open("POST", this.url + '/api/addcuser', true); 
                xhhtp.setRequestHeader("Content-type", "application/json"); 
                xhhtp.send(JSON.stringify(obj));
            },
            makePayment(){
                let settle= {};let dis = this; 
                settle.cardNumber = document.getElementById("cardNum").value;
                settle.expireDate = document.getElementById("expDate").value;
                settle.ccv = document.getElementById("ccv").value;
                settle.userId = localStorage.getItem("userId");
                settle.email = localStorage.getItem("user");
                settle.amount = document.getElementById("amt").value;
                let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                        let co = JSON.parse(this.responseText);
                        dis.closeDiv();
                        alert(co.message);
                    }
                }
                xhhtp.open("POST", this.url + '/api/makesettlement', true); 
                xhhtp.setRequestHeader("Content-type", "application/json"); 
                xhhtp.send(JSON.stringify(settle));
            }
        }
    }
</script>
