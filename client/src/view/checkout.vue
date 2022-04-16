<template>
    <div>
        <banner />
        <div id="contentDiv_38" class="col-12">
            <div id="contentNav_38" class="col-12">
                <div class="col-12 marker">
                    <div style="width:1%; float: left;">
                        <div class="realMaker" style="background-color:#DC0E00; padding:5px;">
                        </div>
                    </div>
                    <div class="allNav" style="width:99%; float: left;">
                        <div class="col-12 allBase">
                            <div class="col-lg-3 col-md-3 col-sm-12 co-l-xs-12 base">
                                <div id="Nav1_38">
                                    <span id="Nav1_38Content">Delivery Information</span>
                                </div>
                            </div> 
                            <div id="Nav2_38" class="col-lg-9 col-md-9 col-sm-12 col-xs-12 base2" style="display: none !important;">
                                <div id="Nav2_38Container" class="col-12">
                                    <div class="col-12 nav2">
                                        <a href="#">All&nbsp;Products</a>
                                        <a href="Desk38.html" class="page">BreakFast</a>
                                        <a href="#">Launch</a>
                                        <a href="#">Dinner</a>
                                        <a href="#">Snacks</a>
                                        <a href="#" class="filter">Filters</a>
                                        <a href="#"><img src="Images/settingIcon.png" width="12" height="12"></a>
                    
                                    </div>
                                </div>
                            </div>
                    
                        </div>

                    </div>
                </div>
                            
            </div>
            <div class="checkout_Nav76 col-12 "> 
                <div class="bill_Nav col-6 col-lg-6 col-md-6 col-xs-12 col-sm-6">
                   <div class="bill_Nav76 col-12">
                        <span class="bill_span span1">Billing Information</span>
                        <div class="form_Nav76">
                            <span>
                                Enter Delievery Date
                                </span>
                            <br/>
                            <input type="date" id="delDate" class="form_Nav76_input" placeholder="DD/MM/YY">
                            <br/>
                            <span>
                                Choose Delivery Location
                                </span>
                            <br>
                            <select name="deliveryLocation" id="deliveryLocation">
                                <option v-for="loc in locations" :key="loc.id" :value="loc.id">{{loc.city}}, {{loc.state}} {{loc.country}}</option>
                                
                            </select>
                            <br/>
                            <span>Enter Delivery Address</span>
                            <br/>
                            <input type="text" id="deliveryAddress" class="form_Nav76_input">
                            <br/>
                            <span>Enter Phone Number</span>
                            <br/>
                            <input type="" id="phonenumber" class="form_Nav76_input">
                        </div>
                    </div>
                </div>
                <div class="pay_Nav col-6 col-lg-6 col-md-6 col-xs-12 col-sm-6 ">
                  <div class="pay_Nav76  col-12 ">
                        <span class="bill_span">
                            Payment Details
                        </span>
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
                        </div>
                        <p style="text-align: center;"><button @click="addCompanyCode2()" class="bill_btn2" >Make Payment</button></p>
                        <span style="display:block;text-align:center">OR</span>
                          <p style="text-align: center;"><button class="bill_btn2" @click="showModal('#div_addCompanyCode')">Add Company Code</button></p>
                    </div>
                </div>
           </div>
        </div>
        <div id="foot" class="col-12">
            <div class="footContent col-12">
                <p class="fContent"><span><a href="#"><img src="../Images/fIcon.png"></a>
                    <a><img src="../Images/tIcon.png"></a>
                    <a><img src="../Images/inicon.png"></a></span>
            <span style="font-size: 15px; font-weight: bold;"> &#9400; 2020 950meals.com</span></p>
            </div>
        </div>
        <div id="divModal" class="modal">
            <div id="div_addCompanyCode" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>ADD COMPANY CODE</h2>
                </div>
                <div class="modal-body">
                    Company code<br>
                        <input type="text" class="modalInput" maxlength="10" placeholder="Enter coupon(10-digit number)" id="companyCode">
                        <br><br>
                        
                        <p style="text-align: center;"><button class="redBtn" @click="addCompanyCode()">Add Code & Complete Order</button></p>
                    </div> 
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import 'checkout.css';
    #contentDiv_38{
            padding:5px 5%;margin-top: 20px;
        }
        #contentNav_38{
            padding:0 2%;
        }
        #contentNav_38{
            padding:0 2%;
        }
        .realMaker{
            height:65px;
        }
        #Nav1_38{
            padding: 20px 0 22px 0px;
        }
         .allNav{
            padding-left:20px; 
        }
        #Nav1_38Content{
            font-size: 21px;
            font-weight: bold;
            padding:10 0 0 0px ;
            color:#2e266f;   
        }
        @media only screen and (max-width:1200px){
            #Nav1_38Content{
                font-size: 17px;
            }        
        }
         @media only screen and (max-width:991px){
            .nav2{
                padding-left: 0 !important;
            }
            .allNav{
                border-bottom: 0;
            }
            .nav2 a{
                font-size: 75% !important;
                padding-right:8% !important;
            }
        }
        .fContent{
    float: right;
    margin-top:0;
    font-size: 120%;
    font-family: Arial, Helvetica, sans-serif;
    color: #000000;
 }
 @media only screen and (max-width:991px){
     .fContent{ 
        font-size: 90%;
    } 
 }
 .fContent span img{
    margin: 0px 15px;
 }
 @media only screen and (max-width:450px){
    .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
    height: 270px !important;

}
 .fContent{
     float: none !important;

}
.fContent span img{
   margin: 0px 3px
}
#subMainContent_38{
    display: none !important;
}
 }
 .footContent{
     padding:5px 8%;
 }

</style>

<script>
  import banner from './banner';
    export default{
        name: 'checkout',
        components:{
            banner
        },
        data() {
            return{
                locations:[],
                url: "http" + "://localhost" +":5000",
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
            if(localStorage.getItem("user")==null){
                location.href="/login?d=checkout";
            }
            localStorage.setItem("isCorporateBuy","0");
            this.getLocations(this.locations)
        },
        methods:{
            getLocations(locations){
                //let dis = this;
                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            
                            let res = JSON.parse(this.responseText);
                            //alert(this.responseText)
                            //locations = [];alert(res.locations.length)
                            for(let i = 0; i < res.locations.length; i++){
                                locations[i] = res.locations[i];
                            }
                        }
                    }
                    xhhtp.open("GET", this.url + '/api/getlocations/', true); 
                    xhhtp.send();
            },
            makePayment(){
                let dt = document.getElementById("delDate").value
                let order = {};
                order.delivery = {};
                order.delivery.date = dt;
                order.delivery.location = Number(document.getElementById("deliveryLocation").value);
                order.delivery.address = document.getElementById("deliveryAddress").value;
                order.delivery.user = Number(localStorage.getItem("userId"));
                order.delivery.email = localStorage.getItem("user");
                order.delivery.number = document.getElementById("phonenumber").value;

                order.cart = {}
                order.cart.isCoupon = localStorage.getItem("isCoupon");
                if(Number(localStorage.getItem("isCoupon"))==1){
                    order.cart.isCoupon = 1;
                    order.cart.coupon = localStorage.getItem("coupon")
                }
                else{
                    order.cart.isCoupon = 0;
                }
                order.cart.amount = localStorage.getItem("totalNum")

                order.orderItem = []
                var cartItem = localStorage.getItem("mealUniqueId950");
                //var allTotal = 0;
                if(cartItem == null || cartItem == ""){
                    //Disable place order button
                } 
                else{
                    //var con= "";
                    //var con2 = "";
                    var cartItemLen = cartItem.split("]|]").length-1;
                    var cartItemArr = [];
                    for(var c = 0; c < cartItemLen; c++){
                        cartItemArr[c] = cartItem.split("]|]")[c];
                    }
                    for (var m = 0; m < cartItemLen ; m++){
                        let cItem = {};
                        cItem.sideMealId = cartItemArr[m].split("~$")[6].split("~%")[1];
                        cItem.drinkId = cartItemArr[m].split("~$")[5].split("~%")[1];
                        cItem.itemId = cartItemArr[m].split("~$")[0].split("~%")[1];
                        cItem.totalQuantity = cartItemArr[m].split("~$")[7];
                        order.orderItem[m] = cItem;
                    }
                }

                if(Number(localStorage.getItem("isCorporateBuy"))==1){
                    order.cart.isCorporateBuy = 1;
                    order.cart.companyCode = localStorage.getItem("CompanyCode")     
                }
                else{
                    order.cart.isCorporateBuy = 0;
                    order.card = {};
                    order.card.cardNumber = document.getElementById("cardNum").value;
                    order.card.expireDate = document.getElementById("expDate").value;
                    order.card.ccv = document.getElementById("ccv").value;
                }
                
                let xhhtp = new XMLHttpRequest();
                //let dis = this;
                xhhtp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                        //alert(this.responseText)
                        let res = JSON.parse(xhhtp.responseText)
                        if(res.status==1){
                            location.href = "/payment-successful";
                        }
                        else if(res.status == 0){
                            location.href = "/payment-failed";
                        }
                        else if(res.status == 2 || res.status == 3){
                            alert(res.message)
                        }
                    }
                }
                xhhtp.open("POST", this.url + '/api/placeorder', true); 
                xhhtp.setRequestHeader("Content-type", "application/json"); 
                xhhtp.send(JSON.stringify(order));
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
            addCompanyCode(){
                localStorage.setItem("isCorporateBuy","1");
                localStorage.setItem("CompanyCode",document.getElementById("companyCode").value)
                this.makePayment();
            },
             addCompanyCode2(){
                localStorage.setItem("isCorporateBuy","0");
                //localStorage.setItem("CompanyCode",document.getElementById("companyCode").value)
                this.makePayment();
            }
        }
    }
</script>
