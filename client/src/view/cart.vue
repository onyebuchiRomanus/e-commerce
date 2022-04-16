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
                                    <span id="Nav1_38Content">Cart</span>
                                </div>
                            </div>
                            <!-- 
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
                        -->
                    
                        </div>

                    </div>
                </div>
                            
            </div>
            <div class="checkout_Nav75 col-12">
                <div class="food_Nav75 col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <div class="col-12 carItems" >
                        <div v-for="item,index in cartItems" :key="item.id" class="col-lg-6 col-md-6 col-sm-6 col-xs-12 itemContainer" >
                            <span class="rSide">Your Side meal:&nbsp;<span class="red">{{item.sideMeal}}</span></span> <br>
                            <span class="rDrink">Your Drink:&nbsp;<span class="red">{{item.drink}}</span>
                            </span><div class="foodImage" style="position:relative">
                                <img class="cartImg" :src="require(`../../../storage/Images/Meals/${item.mealImage}`)">
                            <span style="position:absolute; top:-10px;right:-10px;cursor:pointer" class="cancel" @click="cancelMeal(index)"><a>&times;</a></span>
                            </div><div class="foodImage_con"><p>
                            <span id="food_name">{{item.mealName}}</span><span id="food_price"><span class='note'>&#8358;</span>{{item.price}}</span>
                        </p><p class="food_note">{{item.description}}</p></div></div> 
                    </div>
                   
                </div>
                <div class=" cart_Nav75 col-lg-5 col-md-5 col-sm-5 col-xs-12">
                   <div class="col-12" >
                          
                          <div class="Nav75" style="margin:40px 0px;padding-bottom:30px;">
                              
                              <p class="coupon" style="text-align: center;">
                                  <input @input="getCoupon()" id="userCoupon" type="text" placeholder="Reedem Coupon" height="20px"><img src="../Images/reedeemCouppon.png" width="40" height="35">
                              </p>
                          </div> 
                          <div class="Orders">
                              <span>Orders</span>
                          </div>
                          <div class="Menu_Nav76">
                            <p class="Menu_paragraph">
                                <span class="Menu1">Menus</span>
                                <span class="Menu2_span">Total</span>
                            </p>
                            <div class="col-12 orderContent">
                                <p v-for="item,index in calItems" :key="item.id" class="col-12 Menu_paragraph"><span class='Menu1'>{{item.name}}</span><span class='Menu_calc'>
                                    <img src="../Images/calc_sub.png" class="addImg"  @click="calQuantity(index,'sub')">
                                    <span class="number_span numb">{{item.quantity}}</span>
                                    <img src="../Images/calc_add.png" class='addImg' @click="calQuantity(index,'add') "></span>
                                    <span class="Menu2_span right">
                                    &#8358;<span class="numb2">{{item.itemTotal}}</span></span>
                                </p>
                            </div>
                            
                            <p class="Menu_paragraph Total col-12">
                              <span>SUB TOTAL:</span>
                              <span class="Menu2_span ">&#8358;<span class="totalNum">0</span></span>
                           </p>
                           <p style="padding-right: 20px;padding-bottom: 30px;">
                             <button class="col-12 bill_btn" @click="checkOut()" style="text-align: center;">CHECK OUT</button>
                           </p>
                        
                          </div>
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
        
    </div>
</template>

<style>
    @import 'cart.css';
        .cartImg{width:100%;height: 100%;border-radius: 10px 10px 0px 0px;}
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
</style>
    
<script>
    import banner from './banner';
    export default{
        name: 'cart',
        components:{
            banner
        },
        data(){
            return{
                cartItems: [],
                calItems: [],
                coupons: [],
                title: '950Meals Cart',
                url: "http" + "://localhost" +":5000",
            }
        },
        async mounted(){
            if(location.href.indexOf("localhost:8080") > 0){         
                //alert(this.url);
            }
            else{
                //this.url = "https://" + "950Meals.com";
                this.url = process.env.VUE_APP_URL;
            }
            if (localStorage.getItem("user") == null) {
                let hid = document.querySelectorAll(".logB");
                for (let i = 0; i < hid.length; i++) {
                    hid[i].style.display = "none";
                }
            }
            else {
                //var usN = document.querySelector(".log2B");
                //var usN2 = document.querySelector(".log2BB");
                var shw = document.querySelectorAll(".logB");
                let hid = document.querySelectorAll(".logA");
                for (let i = 0; i < shw.length; i++) {
                    hid[i].style.display = "none";
                    shw[i].style.display = "block";
                }
                //usN.innerHTML = "Hi&nbsp;" + localStorage.getItem("userN");
                //usN2.innerHTML = "Hi&nbsp;" + localStorage.getItem("userN")

            }
            //this.cartQuantity2(0);
            try{this.loadCart();}
            catch(er){/* */}
            this.getAllCoupons();
            localStorage.setItem("isCoupon", "0");
            
        },
        methods:{
            loadCart() {
                var cartItem = localStorage.getItem("mealUniqueId950");
                var allTotal = 0;
                if(cartItem == null || cartItem == ""){
                    document.querySelector(".carItems").innerHTML = "<span class='noItem'>No Item in your Cart</span>";
                } 
                else{
                    //var con= "";
                    //var con2 = "";
                    var cartItemLen = cartItem.split("]|]").length-1;
                var cartItemArr = [];
                for(var c = 0; c < cartItemLen; c++){
                    cartItemArr[c] = cartItem.split("]|]")[c];
                } 
                //let carItems = [];
                    for (var m = 0; m < cartItemLen ; m++){
                        let cItem = {};
                        cItem.sideMeal = cartItemArr[m].split("~$")[6].split("~%")[0];
                        cItem.drink = cartItemArr[m].split("~$")[5].split("~%")[0];
                        cItem.mealImage = cartItemArr[m].split("~$")[2];
                        cItem.mealName = cartItemArr[m].split("~$")[0].trim();
                        cItem.price = cartItemArr[m].split("~$")[8];
                        cItem.decription = cartItemArr[m].split("~$")[3];
                        this.cartItems[m] = cItem;
                }

                    for(var n =0; n < cartItemLen; n++){
                        let cItem2 = {};
                        cItem2.name = cartItemArr[n].split("~$")[0];
                        cItem2.quantity = cartItemArr[n].split("~$")[7];
                        cItem2.itemTotal =  (Number(cartItemArr[n].split("~$")[7])*Number(cartItemArr[n].split("~$")[8]));
                        this.calItems[n] = cItem2;
                    }
                    
                    for(var p = 0; p < cartItemLen; p++){
                        allTotal += (Number(cartItemArr[p].split("~$")[7])*(Number(cartItemArr[p].split("~$")[8])));
                    }
                    document.querySelector(".totalNum").innerHTML = allTotal;
                    localStorage.setItem("totalNum",allTotal);
                }
            },
            cartQuantity2(num) {
                var cart = "mealUniqueId950";
                var cartData = localStorage.getItem(cart);
                var cartCount2 = 0;
                if(cartData == null || cartData == ""){/** */
                }
                else{
                    try{
                        cartCount2 = cartData.split("]|]").length -1; 
                    }
                    catch(err){/** */}
                }
                document.querySelector("#cart_38 > span").innerHTML = cartCount2;
                try { document.querySelector(".quantity3").innerHTML = cartCount2;}
                catch(er){/** */}
            
                if (num == 1) {
                    alert("Meal Added successfully");
                } 
            },
            checkOut() {
                let userId = localStorage.getItem("userId");
                if(userId==null){
                    location.href="/login";
                }else{
                    location.href = "checkout";  
                }
            },
            cancelMeal(cn) {
                var cartItem = localStorage.getItem("mealUniqueId950");
                var cartItemLen = cartItem.split("]|]").length - 1;
                var cartItemArr = [];
                var newItem = "";
                for (var c = 0; c < cartItemLen; c++) {
                    cartItemArr[c] = cartItem.split("]|]")[c];
                }
                var arrLen = cartItemArr[0].split("~$").length; 
                for(var m = 0; m < cartItemLen; m++){
                    for(var L = 0; L <arrLen; L++){
                        if(m == cn){
                            break;
                        }   
                        if(L == (arrLen-1)){
                            newItem += cartItemArr[m].split("~$")[L] + "]|]";
                        }
                        else{
                            newItem += cartItemArr[m].split("~$")[L] + "~$";
                        }
                    }
                }
                localStorage.setItem("mealUniqueId950",newItem);
                window.location.reload();
                
            },
            getCoupon(){
                if(localStorage.getItem("isCoupon").localeCompare("0")==0){
                    let couInp = document.getElementById("userCoupon").value;
                    if(couInp.length == 10){ 
                        let isSeen = false;
                        for(let k = 0; k < this.coupons.length; k++){ 
                            if(couInp.localeCompare(this.coupons[k].number)==0){
                                let spanTotal = document.querySelector(".totalNum");
                                let newTotal = Number(spanTotal.innerHTML) - Number(this.coupons[k].amount);
                                spanTotal.innerHTML = newTotal;
                                localStorage.setItem("totalNum",newTotal);
                                isSeen = true;
                                localStorage.setItem("isCoupon", "1");
                                localStorage.setItem("coupon", couInp);
                                alert("Coupon added Successfully")
                                break;
                            }
                        }
                        if(!isSeen){

                            alert("Invalid Coupon")
                        }
                    }
                }
                else{
                    alert("Coupon can only be added once");
                }
            },
            calQuantity(num, cal) {
                var quantity = Number(document.querySelectorAll(".numb")[num].innerHTML);
                var total = 0;
                var quantity2 = Number(document.querySelectorAll(".numb2")[num].innerHTML);

                if (String(cal).localeCompare("add") == 0) {
                    let unitVal = Number(quantity2) / Number(quantity);
                    quantity = Number(quantity) + 1;
                    quantity2 = unitVal * quantity;
                    document.querySelectorAll(".numb")[num].innerHTML = quantity;
                    document.querySelectorAll(".numb2")[num].innerHTML = quantity2;
                    let totalLen = document.querySelectorAll(".numb2").length;
                    for (let i = 0; i < totalLen; i++) {
                        total = Number(total) + Number(document.querySelectorAll(".numb2")[i].innerHTML);
                    }
                    document.querySelector(".totalNum").innerHTML = Number(total);

                }
                else {
                    if (quantity > 1) {
                        //alert(quantity);
                        var unitVal = Number(quantity2) / Number(quantity);
                        quantity = Number(quantity) - 1;
                        quantity2 = unitVal * quantity;
                        document.querySelectorAll(".numb")[num].innerHTML = quantity;
                        document.querySelectorAll(".numb2")[num].innerHTML = quantity2;
                        var totalLen = document.querySelectorAll(".numb2").length;
                        for (var i = 0; i<totalLen; i++) {
                            total = Number(total) + Number(document.querySelectorAll(".numb2")[i].innerHTML);
                        }
                        document.querySelector(".totalNum").innerHTML = Number(total);

                    }
                    else if(quantity == 1){
                        this.cancelMeal(num); 
                    }

                }

                var cartItem = localStorage.getItem("mealUniqueId950");
                var cartItemLen = cartItem.split("]|]").length - 1;
                var cartItemArr = [];
                for (let c = 0; c < cartItemLen; c++) {
                    cartItemArr[c] = cartItem.split("]|]")[c];
                }
                var newItem2 = ""
                for(let q = 0; q < cartItemLen; q++){
                    var cartArrLen = cartItem.split("]|]")[0].split("~$").length;
                    for(let k = 0; k < cartArrLen; k++){
                        if(q == num){
                            if(k == cartArrLen-1){
                                newItem2 += cartItemArr[q].split("~$")[k]+"]|]"; 
                            }
                            else if (k == cartArrLen - 2){
                                newItem2 += quantity+"~$"; 
                            }
                            else{
                                newItem2 += cartItemArr[q].split("~$")[k]+"~$";
                            }
                        }
                        else{
                            if (k == cartArrLen - 1) {
                                newItem2 += cartItemArr[q].split("~$")[k] + "]|]"; 
                            }
                            else {
                                newItem2 += cartItemArr[q].split("~$")[k] + "~$";
                            }
                        }

                    }
                }            
                localStorage.setItem("mealUniqueId950",newItem2);
                 let allTotal = document.querySelector(".totalNum").innerHTML;
                localStorage.setItem("totalNum",allTotal);
                //window.location.reload()
            },
            getAllCoupons(){
                let xhhtp = new XMLHttpRequest();
                let dis = this;
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            let res = JSON.parse(this.responseText);
                            if(res.status == 1){
                                for(let i = 0; i < res.coupons.length; i++){
                                    dis.coupons[i] = res.coupons[i];
                                }
                            }
                        }
                    }
                    xhhtp.open("GET", this.url + '/api/getcoupons', true); 
                    xhhtp.send();
            },
            
        }
    }
</script>