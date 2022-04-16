<template>
    <div class="col-12">
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
                                    <span id="Nav1_38Content">Meals Available</span>
                                </div>
                            </div>
                            <div id="Nav2_38" class="col-lg-9 col-md-9 col-sm-12 col-xs-12 base2">
                                <div id="Nav2_38Container" class="col-12">
                                    <div class="col-12 nav2">
                                        <a class="nav2A" @click="loadMeals(0)">All&nbsp;Products</a>
                                        <a class="nav2A" @click="loadMeals(1)">BreakFast</a>
                                        <a class="nav2A" @click="loadMeals(2)">Lunch</a>
                                        <a class="nav2A" @click="loadMeals(3)">Dinner</a>
                                        <!--<a class="nav2A" onclick="loadOtherData2(4)">Snacks</a>
                                        <a class="filter">Filters</a>
                                        <a ><img src="Images/settingIcon.png" width="18" height="18"></a>-->
                                    </div>
                                </div>
                            </div>                
                        </div>
                
                    </div>
                </div>
            </div>
            <div id="mainContent_38" class="col-12 mealsCon">
                <div class="mainContent_38 col-12">                  
                    <div v-for="item in Obj" :key="item.id"  class="contentImg1 col-lg-4 col-md-4 col-sm-6 col-xs-12"> 
                       <div><div class="myImg0" >
                            <span class="mealType">{{item.mealType}}</span>
                            <img :src="require(`../../../storage/Images/Meals/${item.image}`)"/>
                       </div>
                       <div class="col-12" style="height:130px"><p><span class="food myFood0">{{item.name}}&nbsp;</span>
                        <span class="closeR">closes by 10pm</span><span><img onclick="newWish(0,0)" class="wish myWish0" src="Images/wish.png" width="12" height="12"></span><span class="price myPrice0">&#8358;{{item.amount}}</span></p><p class="flex-container"><span class="Order myOrder0" @click="newOrder(item.id)">Order Now</span><span class="detail myDetail0">{{item.description}}</span></p>
                    </div>
                </div>
                    </div>               
                </div>
                <div class="mainContent_38 col-12">
                    <div v-for="item in Obj1" :key="item.id"  class="contentImg1 col-lg-4 col-md-4 col-sm-6 col-xs-12"> 
                       <div><div class="myImg0" >
                            <span class="mealType">{{item.mealType}}</span>
                            <img :src="require(`../../../storage/Images/Meals/${item.image}`)"/>
                       </div>
                       <div class="col-12" style="height:130px"><p><span class="`food myFood0$`">{{item.name}}</span>
                        <span class="closeR">closes by 10pm</span><span><img onclick="newWish(item.id)" class="wish myWish0" src="Images/wish.png" width="12" height="12"></span><span class="price myPrice0">&#8358;{{item.amount}}</span></p><p class="flex-container"><span class="Order myOrder0" @click="newOrder(item.id)">Order Now</span><span class="detail myDetail0">{{item.description}}</span></p>
                    </div>
                </div>
                    </div> 
                </div>
                <div class="mainContent_38 col-12">
                    <div v-for="item in Obj2" :key="item.id"  class="contentImg1 col-lg-4 col-md-4 col-sm-6 col-xs-12"> 
                       <div><div class="myImg0" >
                            <span class="mealType">{{item.mealType}}</span>
                            <img :src="require(`../../../storage/Images/Meals/${item.image}`)"/>
                       </div>
                       <div class="col-12" style="height:130px"><p><span class="food myFood0">{{item.name}}&nbsp;</span>
                        <span class="closeR">closes by 10pm</span><span><img onclick="newWish(0,0)" class="wish myWish0" src="Images/wish.png" width="12" height="12"></span><span class="price myPrice0">&#8358;{{item.amount}}</span></p><p class="flex-container"><span class="Order myOrder0" @click="newOrder(item.id)">Order Now</span><span class="detail myDetail0">{{item.description}}</span></p>
                    </div>
                </div>
                    </div> 
                </div>
                <div class="mainContent_38 col-12">
                     <div v-for="item in Obj3" :key="item.id"  class="contentImg1 col-lg-4 col-md-4 col-sm-6 col-xs-12"> 
                       <div><div class="myImg0" >
                            <span class="mealType">{{item.mealType}}</span>
                            <img style="border-radius: 10px 10px 0px 0px" :src="require(`../../../storage/Images/Meals/${item.image}`)"/>
                       </div>
                       <div class="col-12" style="height:130px"><p><span class="food myFood0">{{item.name}}&nbsp;</span>
                        <span class="closeR">closes by 10pm</span><span><img onclick="newWish(0,0)" class="wish myWish0" src="Images/wish.png" width="12" height="12"></span><span class="price myPrice0">&#8358;950</span></p><p class="flex-container"><span class="Order myOrder0" @click="newOrder(item.id)">Order Now</span><span class="detail myDetail0">{{item.description}}</span></p>
                    </div>
                     </div>
                    </div> 
                </div>
                <div class="mainContent_38 col-12"></div>             
            </div>
        </div>
        <div class="col-12">
            <span class="docPage"></span><br>
            <p class="pagination">
               
            </p>
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
        <form class="modal-content white2" id="orderModal">
            <div class="mContent">
                <span class="fPrice"></span>
                <span class="fImg"></span>
                <span data-id="" class="fName"></span><span class="myfloat" @click="closeSpan()">&#10006;</span>
                <p class="fDetail"></p>
                <div>
                    <span class="kind">KINDLY CHOOSE YOUR SIDE MEAL</span><br>
                    <span>minimum 1 and maximum 1</span><br>
                    <div class="sideOption">
                        <span v-for="item in sideMeals" :key="item.id"><input type="radio" name="side" :id="item.id" :value="item.name" class="mySide">&nbsp;&nbsp;<span>{{item.name}}</span></span><br>                    
                    </div>
                </div>
                <div><br>
                    <span class="kind">KINDLY CHOOSE YOUR DRINK</span><br>
                    <span>minimum 1 and maximum 1</span><br>
                <div class="drinkOption">
                    <span v-for="item in drinks" :key="item.id"><input  type="radio" name="drink" :id="item.id" :value="item.name" class="myDrink">&nbsp;&nbsp;<span>{{item.name}}</span></span><br>
                </div>
                </div>
                <br> 
            </div>
            <hr class="cartLine">
            <br>
            <p class="cartPara"><a class="toCart2" @click="addToCart2()">Add to Cart</a><a class="toCart" @click="proceedToCart2()">Proceed to Cart</a></p>
            <br><br>
        </form>
    </div>
    </div>
</template>

<style scoped>
    @import 'locationAll.css';
        .mealsCon > div:not(:first-child){display:none}
        a{cursor: pointer !important;}
        #firstNav_38{
            padding: 0 20px;
        }
        #logo_38{
            padding-left: 60px;
        }
        #mylogo_38{
            cursor: pointer;
        }
        #locIcon > img{
            position:absolute;
            top:22px !important;
            padding-left:30px;
            width:45px;
            height:22px;
        }
        #locIcon > span{
            position:absolute;
            top:23px !important;
            padding-left:25px;
            margin-left:25px; 
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
        }

        .logoNav_38{
            float: right;
            margin-right: 40px;
            margin-top: 22px;
        }
        .red{
            color:#DC0E00 !important;
            font-family: Arial, Helvetica, sans-serif !important;
        }
        .logoNav_38{
            padding-top: 8px;
        }
        #log_38 > a:nth-child(1){
            padding:8px 17px;
            
            border-radius: 5px;
            border:1px solid #DC0E00;
            margin-top:5px
        }
        #log_38 > a:nth-child(2){
            padding:9px 15px;
            margin-right:20px !important;
            border-radius: 5px;
            color:white !important;
            background-color: #DC0E00;;
            margin-top:5px;
            
        }
        #cart_38 > a{ 
            position: absolute;
            right:300px;
            top:25px;
        }
        #cart_38 > span{ 
            position: absolute;
            right:290px;
            top:18px;
            background-color: #31A24C;
            border-radius: 50%;
            padding-top:1px;
            color:white;
            width: 20px;
            height:20px;
            text-align: center;
        }

        #secondNav_38{
            background-color: #171A29;
            padding:30px 10px;
        max-height: 350px;
            display:flex;
            overflow-x: scroll;
            height: 340px;
        
        }

        #secondNav_38::-webkit-scrollbar{
            display: none !important;
        }
        #secondNav_38{
            -ms-overflow-style:none !important;
        }
        #secondNav_38 img{
        padding:0 17px;
        min-width: 320px;
            height:280px;
            line-height: 280px; 
            text-align: center;
        
        }
        #contentDiv_38{
            padding:5px 5%;
        }
        #contentNav_38{
            padding:0 2%;
            

        }

        #Nav1_38Content{
            font-size: 21px;
            font-weight: bold;
            padding:10 0 0 0px ;
            font-family: Arial, Helvetica, sans-serif;
            color:#2e266f;
            
        }
        #Nav2_38Container{
            padding-left: 10%
        }
        @media only screen and (max-width:991px){
        #Nav2_38Container{
            padding-left: 0 !important;
        } 
        }
        #Nav2_38Container > .nav2{
        min-width: 90%; 
            padding-left: 20%;
            margin:15px 0;
            display:flex;
            overflow-x: auto;

        }
        #Nav2_38Container > .nav2::-webkit-scrollbar{
            display:none !important;
            width: 0 !important;
        }
        #Nav2_38Container > .nav2{
            -ms-overflow-style:none !important;
        }

        #Nav2_38Container > .nav2 a{
        padding-right: 5%;
            text-align: right;
        
        }
        .allBase{ 
            border-bottom:1px solid #E9E9EB;
        }

        @media only screen and (max-width:1105px){
        
        #Nav1_38Content{
            font-size: 125%;   
        }

        }
        @media only screen and (max-width:991px){
        
        }
        @media only screen and (max-width:890px){
            
        #Nav1_38Content{
            font-size: 115% !important;   
        }
        

        }
        #Nav2_38Container > .nav2 a{
            color:#757884;   
        }


        .allNav{
                padding-left:20px;
        }

        #Nav1_38{
                padding: 20px 0 22px 20px;

        }
        #Nav2_38Container > ul li:last-child{
        padding:0 !important;
        }

        #mainContent_38{
            margin-top: 20px;
            padding: 5px 0;
        }
        .contentImg1{
            padding:1px 5% 1px 0;
            margin-top:20px;
            margin-bottom: 25px;
        }
        .contentImg1 > div > div:nth-child(2){
            padding:0 10px 10px 10px;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;
            box-shadow: 0px 5px 2px lightgrey;
        }
        
        .contentImg1 > div:nth-child(2) p{
            padding:10px 0;
            margin-top:5px;
        }
        .food{
            font-size: 18px;
            font-weight: bold;
            color:#2E266F;
            font-family: Arial, Helvetica, sans-serif;
        }
        .close{
            padding: 5PX 10px;
            font-size: 80%;
            background-color: #FFEDDE;
            border-radius: 4px;
            color:#2e266f;
            font-weight: bold;
        }
        .price{
            float:right;
            font-weight: bold;
            color:#DC0E00;
            padding-top:5px;
        }
        p > .Order{
            float: right;
            font-size: 16px;
            background-color: #DC0E00;
            color:white;
            padding:10px;
            border-radius: 5px;
            cursor: pointer !important;
        }
        #contentDiv_38{
            margin-top:20px;
        }
        
        #subMainContent_38{
            margin-top: 20px;
            padding: 5px 0;
        }
        .contentImg2{
            padding:10px 3% 10px 0;
            margin-top:20px;
            margin-bottom: 25px;
        }
        .contentImg2 > div > div:nth-child(2){
            padding:0 10px 10px 10px;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;
            box-shadow: 0px 5px 2px lightgrey;
        }
        
        .contentImg2 > div:nth-child(2) p{
            padding:10px 0;
            margin-top:5px;
        }
        .most{
            font-size: 170%;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            color:#2E266F;
            float:left;
        }
        .redPad{
        padding:5px 0px;
        float: left;


        }
        .redSq{
            padding: 0.01px 6px;
            background-color: #DC0E00;
            width:5px;
            height: 5px;
            
        }
        .mealType{
            background-color: #DC0E00;
            color:white;
            float: right;
            padding:5px 15px;
            font-family: Arial, Helvetica, sans-serif;
            border-top-right-radius: 20px;
            font-size: 12px;
        }
        .footContent{
            padding:5px 8%;
        
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
        /* Beginning of armBurger Css*/
        .burger{
            position:absolute;
            right:0px;
            top:15px;
            width: 200px;
            display: none;
        }
        .armBurger{
            float: right;
            font-size: 25px;
            margin-right: 20px;
            color:#DC0E00 !important;
            cursor: pointer;
        }
        .burgerContent{
            margin-top:54px;
            background-color: #fff;
            padding:10px 30px 10px 5px;
            border-top:2px solid #DC0E00;
            display: none;
        }
        .burgerContent ul{
            padding-left: 5px;
            list-style-type: none;
        }
        .burgerContent ul li{
            font-size:15px;
            color: #DC0E00;
            padding:10px;

        }
        .burgerContent ul li a{
            cursor:  pointer !important; color: #DC0E00;
        }
        @media only screen and (max-width:767px){
        
        #locIcon{
            display: none;
        }
        #logoNav_38 > span > span:first-child, #logoNav_38 span > span:nth-child(2){
            display: none ;
        }
        #logoNav_38 .burger{
            display: block !important;
        }
        #logo_38{
            padding-left:2%;
        }
        .quantity2{
            display: block !important;
        }
        #locDetails2{
            display: inline-block !important;
            margin:5px 0;
            font-size: 12px;
            font-weight: bold;
        
        }
        .quantity2{
        background-color: #31A24C;
            border-radius: 50%;
            width: 17px;
            height:17px;
            color:white;
        position: absolute;
        top:85px;
        right:153px;
        padding: 1px 1px 5px 1px;
        }
        }
        .log2, .sign2{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
        }
        @media only screen and (max-width:1000px){
            .close{
                font-size: 70%;
            }
        }
        /* End of armBurger Css*/
        .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
            height: 250px !important;

        }
        @media only screen and (max-width:1220px){
            .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
            height: 230px !important;
        }
        .close{
            font-size: 9px;
        }
        .price{
            font-size: 13px;
        }
        .detail{
            font-size: 80%;
        }
        } 
        @media only screen and (max-width:1125px){
            .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
            height: 200px !important;

        } 
        }
        @media only screen and (max-width:991px){
            .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
            height: 260px !important;

        }
        }
        @media only screen and (max-width:700px){
            .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
            height: 330px !important;

        }
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
        @media only screen and (max-width:350px){
            .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
            height: 220px !important;

        }
        .close{
            font-size: 8px !important;
        }
        .food{
            font-size: 14px !important;
        }
        } 
        @media only screen and (max-width:290px){
            .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
            height: 200px !important;

        }
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
                font-size: 80%;
            }
        }
        @media only screen and (max-width:1200px){
            #Nav2_38Container > .nav2 div{
                padding:0 2.2% ; 
            }
            #Nav2_38Container > .nav2 a{
                font-size: 90%;
            }
        
        
        }

        .contentImg1,.contentImg2{
            padding:1px 2%;
            margin-top:15px;
            margin-bottom: 25px;
        }
        .myMost{
            padding: 1px 2%;
        }
        #Nav2_38{
            float: right;
        }
        .realMaker{
                height:65px;
            }
        .detail{
            font-size: 90%;
            color:#707070;
            }
            @media only screen and (max-width:500px){
            .close{
                font-size: 10px;
            } 
            .food{
                font-size: 16px;
            }
            .price{
                font-size: 80%;
            }
            .detail{
                font-size: 80%;
            }
            .realMaker{
                height:50px;
            } 
        }
        .close{
            float: left;
        }
        .food{
            float: left;
        }
        .wish{
            margin-top:5px;
        
        }

        #Nav1_38{
            padding-left: 0 !important;
        }
        @media only screen and (max-width:991px){
            .allBase{
            border-bottom: none !important; 
            }
        }
        .myfloat{
            float:right !important;
            cursor: pointer;
        }
        .fName{
            font-size: 160%;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bolder;
            color: #2a2a2a;
        }
        .mContent{
            padding:20px 6% 4% 6%;
        }
        .cartLine{ 
            border-top:0.04cm solid rgba(204,204,204,0.1);
            width:100%;
        
        }
        .cartPara{
            margin-top: 20px;
            padding:1px 4%;
        }
        .toCart{
            text-align: center;
            padding:9px 3%;
            background-color: #DC0E00;
            border-radius: 5px;
            color:white;
            cursor: pointer;
            font-size: 13px !important;
            border: none !important;
            margin-left: 5px;
            float: right;
        }
        .toCart2{
            float: left;;
            text-align: center;
            padding:9px 3%;
            background-color: white;
            border-radius: 5px;
            color:#DC0E00;
            cursor: pointer;
            font-size: 12px !important;
            border: 1px solid #DC0E00;
            margin-right: 5px;
            margin-bottom: 20px;
        }
        .kind{
            color:#2a2a2a;
            font-weight:bold;
        }
        @media only screen and (max-width:501px){
            .cartPara{
                text-align: center !important;
            }
        }

        @media only screen and (max-width:700px){
        .Order{
                margin-left: 70% !;
                width:100px !important; 
            } 

        }
        @media only screen and (max-width:500px){
            .flex-container{
            display: flex;
            flex-direction: column-reverse;
        }
        .realDetail{
            float:right;
        }
        .Order{
            margin-left: 68% !important;
        width:100px !important; 
        }
        .kind{    
                font-size:13px !important;
            } 
        }
        .close,.wish{
            margin-left: 2.0%;
        }
        @media only screen and (min-width:991px) and (max-width:1100px){
            .food{
                font-size: 15px;
            }
        }
        @media only screen and (max-width:400px){
        .Order{
                margin-left: 55% !important;
                width:100px !important;
                margin-top: 5px; 
            }
            .food{
                font-size: 15px;
            }
        }
        .contentImg1 > div > div:first-child,.contentImg2 > div > div:first-child{
            border-top-left-radius:10px !important ;
            border-top-right-radius: 10px !important;

        }
        .contentImg1 > div > div:nth-child(2),.contentImg2 > div > div:nth-child(2){
            border-bottom-left-radius:10px !important ;
            border-bottom-right-radius: 10px !important;
        }
        .mealType{
            border-top-right-radius: 10px !important;
        }
        .close{
            font-family: Arial, Helvetica, sans-serif;
            font-style: normal;
            font-weight: light;
        }
        @media only screen and (max-width:767px){
            .quantity2{
        background-color: #31A24C;
            border-radius: 50%;    
            color:white;
        position: absolute;
        top:85px;
        right:153px;
        font-size: 12px;
        text-align: center;
        
        }
        }
        @media only screen and (max-width:767px){
        .nav2 a{
            font-size: 75% !important;
        }
        #subMainContent_38{
            display: none;
        } 
        }

        .pagination {
            text-align: center;
        }
        .pagination > span{
            padding:5px 7px;
            margin:0px 3px 0 0;
            /*background-color:  #FFEDDE;*/
            color:#2E266F;
            border: 1px solid #DC0E00;
            cursor: pointer;
        }
        .highLightPage{
            background-color:  #FFEDDE imp !important;
            color:#DC0E00 !important; 
        }
        .page{
            color:#DC0E00 !important;
        }
        .docPage{
            display: none;
        }
        .contentImg1 > div >div:first-child{
            background-size: cover !important;
            background-repeat: no-repeat !important;
        }

        .fPrice,.fImg{
            display: none !important;
        }
        #modalDiv{
            position: fixed;
            z-index: 10000000;
            padding-left: 20%;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.2) !important;
        }
        .modal-content2{
            height: 100%;
            position: relative;
            right: 0px;
            background-color: #dc0e00;
            margin: auto;
            padding: 20px 40px;
            width: 100%;
            -webkit-animation-name: animatetop2;
            -webkit-animation-duration: 0.4s;
            animation-name: animatetop2;
            animation-duration: 0.4s
        }
        .modal-head{
            position: relative;
        }
        .quantity3{
            position: absolute;
            width:20px;
            height: 20px;
            border-radius: 50%;
            background-color: #31A24C;
            color:white;
            text-align: center;
            left: 20px;
            padding-top: 2px;
            top:0;

        }
        .modalLog{
            color:white;
            padding:10px 15px;
            border-radius: 5px;
            margin-right: 10px;
            font-size: 17px;
            border:1px solid white;
        }

        .modalSign{
            color:#DC0E00;
            background-color: white;
            padding:11px;
            border-radius: 5px;
            margin-right: 10px;
            font-size: 17px;
            
        }
        .modalList{
            margin:0px;
            padding:0px;
            list-style-type:none;

        }
        .modalList li{
            padding:10px 0 10px 0;
            border-bottom: 1px solid white;
        }
        .modalList li a{
            color: white;
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
        }
        .modalCon{
            margin-top:30px;
        }
        .modalCon2{
            margin-top:50px;
        }
        .closeBtn{
            font-size: 30px;
            color:white;
            float:right;
            cursor: pointer;
        }
        .modal2{
            display: none;
        }
        .modal-content2{
            display: none;
        }
        @media only screen and (max-width:350px){
        .modalLog{
            margin-right: 0px;
            font-size: 15px;
        }
            .modalSign{
            
            font-size: 15px;
        }
        .modal-content2{
            padding:20px;
        }

        }
        @-webkit-keyframes animatetop2 {
            from {right: -300px;opacity: 0}
            to {right: 0;opacity: 1}
        }
        @keyframes animatetop2 {
            from {right: -300px;opacity: 0}
            to {right: 0;opacity: 1}
        }
        .sign2{
            color:white;
            background-color:#DC0E00;
            padding:10px;
            margin-left: 20px;
            border-radius: 5px;
        }
        .log2{
            color:#DC0E00;
            background-color:#fff;
            padding:10px;
        
            border-radius: 5px;
            border:1px solid #DC0E00;
        }

        .log2BB{
            border:none !important;
            padding-left: 0;
        }
        .log2B{
            border:none !important;
        }

        .otherContainer{
            position: absolute;
            margin-top: 20px;
            margin-left: 40%;
        }
        .otherContainer a{
        padding: 0 12px 0 0;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif; 
        }
        @media only screen and (max-width:991px){
        .otherContainer a{
        padding: 0 5px 0 0;
        font-size: 15px;
        }
        .otherContainer{       
            margin-top: 26px;
            margin-left: 38%;
        }
        }
        #firstNav_38{
        padding-right: 0px; 
        }
        .logoNav_38{
            margin-right: 20px;
            margin-top: 15px;
        }
        #cart_38 > a{ 
            position: absolute;
            right:250px;
            top:19px;
        }
        #cart_38 > span{ 
            position: absolute;
            right:240px;
            top:14px;
            background-color: #31A24C;
            border-radius: 50%;
            padding-top:1px;
            color:white;
            width: 20px;
            height:20px;
            text-align: center;
        }
        @media only screen and (max-width:767px){        
        .otherContainer{
            display: none;
        } 
        .logBB{
            display: none !important;
        }
        }
        .modalSign{
            margin-top: 20px;
        }
        .modalUl{
            list-style-type: none;
            padding:0 !important;
            margin:0 !important;
        }      
        .modalUl li{
            margin-top:13px;
        }
 
</style>

<script>
    import banner from './banner';
    export default{
        name:'Meals',
        components:{
            banner
        },
        data(){
            return{
                Obj: [],
                Obj1: [],
                Obj2: [],
                Obj3: [],
                sideMeals:[],
                drinks: [],
                selMeal: 1,
                url: "http" + "://localhost" +":5000",
                urll: "http://localhost:8080",
            }
        },
        async mounted(){
            if(location.href.indexOf("localhost:8080") > 0){         
                //alert(this.url);
            }
            else{
               // this.url = "https://" + "950Meals.com";
               this.url = process.env.VUE_APP_URL;
            }
            let content = document.querySelectorAll(".mealsCon > div");
            for(let i = 2; i < content.length; i++){
                content[i].style.display = "none";
            }
           // content[1].style.display = "block";
            this.loadAllData();
        },
        methods:{
        loadAllData(){
            let ob = this.Obj;let ob1 = this.Obj1;
            let ob2 = this.Obj2; let ob3 = this.Obj3;
            let dis = this.drinks;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                
                if (this.readyState == 4 && this.status == 200) {
                   //alert(xhttp.responseText);
                   let res = JSON.parse(xhttp.responseText);                   
                    //ob[0] = res[0],
                    let r = [0,0,0,0]
                    let res1 = res.meals;
                    for(let i = 0; i < res1.length; i++){
                       ob[i] = res1[i]; //ob1[i] = res[i];
                       if(res1[i].category==1){//alert("good")
                           ob1[r[0]++] = res1[i]; 
                       }
                       else if(res1[i].category==2){
                           ob2[r[1]++] = res1[i];
                       }
                        else if(res1[i].category==3){
                            ob3[r[2]++] = res1[i];
                        }
                    }
                    for(let k = 0; k < res.drinks.length; k++){
                        
                        dis[k] = res.drinks[k];//alert(dis[k].name)
                    }
                    //Remove pagination
                    /*var datLen = res1.length;
                    var page = "";
                    var pageNo = datLen / 9;
                    if (datLen % 9 > 0) {
                        pageNo = parseInt(pageNo) + 1;
                         for (var j = 0; j < pageNo; j++) {
                            var noJ = j + 1;
                            page += "<span class=\"contentPage0\" onclick=pageNumber(" + noJ + "," + pageNo + ",0)>";
                            page += j + 1;
                            page += "</span>";
                        }
                        document.querySelector(".pagination").innerHTML = page;
                        document.querySelectorAll(".contentPage0")[0].classList.add("highLightPage");
                        document.querySelectorAll(".nav2A")[0].classList.add("page");
                    }
                    else {
                        pageNo = parseInt(pageNo);
                    } */   
                      document.querySelectorAll(".nav2A")[0].classList.add("page");    
                }
            }
             xhttp.open("GET", this.url + '/api/getmeals', true);
            xhttp.setRequestHeader("content-type", "application/json");
            xhttp.send();
        },
        loadMeals(n){
            let content = document.querySelectorAll(".mealsCon > div");
            for(let i = 0; i < content.length; i++){
                content[i].style.display = "none";
            }
           content[n].style.display = "block";
           let nav2 = document.querySelectorAll(".nav2A");
           for(let i = 0; i < nav2.length; i++){
               nav2[i].classList.remove("page");
           }
           document.querySelectorAll(".nav2A")[n].classList.add("page");
           //alert(content[n].innerHTML)
        },
        loadOtherData(meal){
            try {
                var allResult = this.Obj;
                var datLen = allResult.data.length;
                var linkLen = document.querySelectorAll(".nav2A").length;
                var page2 = "";
                var content2 = "";
                for (var m = 0; m < linkLen; m++) {
                    document.querySelectorAll(".nav2A")[m].classList.remove("page");
                    document.querySelectorAll(".mainContent_38")[m].style.display = "none";
                }
                document.querySelectorAll(".nav2A")[meal].classList.add("page");
                document.querySelectorAll(".mainContent_38")[meal].style.display = "block";
                var mealLen = 0;
                var mealLength = 0;
                for (var k = 0; k < datLen; k++) {
                    if (allResult.data[k].itemcategory_id == meal) {
                        mealLen++;
                    }
                }
                var pageNo = mealLen / 9;
                if (mealLen % 9 > 0) {
                    pageNo = parseInt(pageNo) + 1;
                }
                else {
                    pageNo = parseInt(pageNo);
                }
                //alert(pageNo);
                for (var j = 0; j < pageNo; j++) {
                    var noJ = j + 1;
                    page2 += "<span class=\"contentPage" + meal + "\" onclick=pageNumber(" + noJ + "," + pageNo + "," + meal + ")>";
                    page2 += j + 1;
                    page2 += "</span>";
                }
                for (var i = 0; i < datLen; i++) {
                    if (allResult.data[i].itemcategory_id == meal) {

                        if (mealLength == 0) {
                            let nPage = 1;
                            content2 += "<div class=\"col-12 n" + meal + "Page" + nPage + "\">";
                        }
                        else if (mealLength != 0 && mealLength % 9 == 0) {
                            let nPage = parseInt(mealLength / 9) + 1;
                            content2 += "<div class=\"col-12 n" + meal + "Page" + nPage + "\">";
                        }
                        content2 += "<div class=\"contentImg1 col-lg-4 col-md-4 col-sm-6 col-xs-12\"> ";
                        content2 += "<div>";
                        content2 += "<div class=\"myImg" + meal + "\"style=\"background-image: url(Images/" + allResult.data[i].image + ") \">";
                        /*
                        content2 += "<span class=\"mealType\">";
                        content2 += mealType;
                        content2 += "</span>";
                        */
                        content2 += "</div>";
                        content2 += "<div class=\"col-12\">";
                        content2 += "<p>";
                        content2 += "<span class=\"food myFood" + meal + "\">";
                        content2 += allResult.data[i].name;
                        content2 += "</span>";
                        content2 += "<span class=\"close\">";
                        content2 += "closes by 10pm";
                        content2 += "</span>";
                        content2 += "<span><img onclick=\"newWish(" + meal + "," + mealLength + ")\" class=\"wish myWish" + meal + "\" src=\"Images/wish.png\" width=\"12\" height=\"12\">";
                        content2 += "</span>";
                        content2 += "<span class=\"price myPrice" + meal + "\">";
                        content2 += "$9.99";
                        content2 += "</span>";
                        content2 += "</p>";
                        content2 += "<p class=\"flex-container\">";
                        content2 += "<span class=\"Order myOrder" + meal + "\" onclick=\"newOrder(" + meal + "," + mealLength + ")\">";
                        content2 += "Order Now";
                        content2 += "</span>";
                        content2 += "<span class=\"detail myDetail" + meal + "\">";
                        content2 += "Lorem lpsum Dolor Sit Amet Consectetur Adipiscing Elit Adipiscin";
                        content2 += "</span>";
                        content2 += "</p>";
                        content2 += "</div>";
                        content2 += "</div></div>";
                        if (mealLength % 9 == 8) {
                            content2 += "</div>";
                        }
                        mealLength++;
                    }
                }
                document.querySelector(".docPage").innerHTML = meal;
                document.querySelector(".pagination").innerHTML = page2;
                for (var n = 0; n < 5; n++) {
                    document.querySelectorAll(".mainContent_38")[n].style.display = "none";
                }
                document.querySelectorAll(".mainContent_38")[meal].style.display = "block";
                //alert(content2);
                document.querySelectorAll(".mainContent_38")[meal].innerHTML = content2;
                for (var L = 1; L < pageNo + 1; L++) {
                    var LL = L - 1;
                    document.querySelector(".n" + meal + "Page" + L).style.display = "none";
                    document.querySelectorAll(".contentPage" + meal)[LL].classList.remove("highLightPage");
                }
                document.querySelector(".n" + meal + "Page1").style.display = "block";
                document.querySelectorAll(".contentPage" + meal)[0].classList.add("highLightPage");
                return false;
            }
            catch (er) {/* */}
        },
        pageNumber(num,num2,num3) {
            document.querySelector(".docPage").innerHTML = num3;
            num2++;
            for (var L = 1; L < num2; L++) {
                var LL = L-1; 
                document.querySelectorAll(".contentPage" + num3)[LL].classList.remove("highLightPage"); 
                document.querySelector(".n"+num3+"Page" + L).style.display = "none";
            }
            var myNum = num-1;
            document.querySelector(".n"+num3+"Page"+num).style.display = "block";
            document.querySelectorAll(".contentPage" + num3)[myNum].classList.add("highLightPage");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0; 
        
        },
        newWish(num,cnt) {
            var wishCnt = document.querySelectorAll(".myWish"+num)[cnt].getAttribute("backgroundColor");
            if (wishCnt == null || wishCnt == "") {
                document.querySelectorAll(".myWish"+num)[cnt].style.backgroundColor = '#DC0E00';
                document.querySelectorAll(".myWish"+num)[cnt].setAttribute("backgroundColor", "#DC0E00");
            }
            else {
                document.querySelectorAll(".myWish" + num)[cnt].style.backgroundColor = '';
                document.querySelectorAll(".myWish" + num)[cnt].setAttribute("backgroundColor", "");
            } 
        },
        newOrder(cnt) {
            this.selMeal = cnt;
            let foodName;// = document.querySelectorAll(".myFood")[cnt].innerHTML;
            let foodDetail;// = document.querySelectorAll(".myDetail")[cnt].innerHTML;
            let foodPrice;// = document.querySelectorAll(".myPrice")[cnt].innerHTML.split("$")[1];
            let foodImg;let foodId//= document.querySelectorAll(".myImg")[cnt].style.backgroundImage.slice('5','-2');
            for(let i = 0; i < this.Obj.length; i++){
                if(this.Obj[i].id == cnt){
                    foodName = this.Obj[i].name;
                    foodDetail = this.Obj[i].description; 
                    foodPrice = this.Obj[i].amount;
                    foodImg = this.Obj[i].image
                    foodId = this.Obj[i].id;
                    this.sideMeals = [];
                    for(let k = 0; k < this.Obj[i].sideMeals.length; k++){
                        this.sideMeals[k] = this.Obj[i].sideMeals[k];
                    }
                }
            }
            document.querySelector(".fName").innerHTML = foodName;
            document.querySelector(".fName").setAttribute("data-id",foodId);
            document.querySelector(".fDetail").innerHTML = foodDetail;
            document.querySelector(".fPrice").innerHTML = foodPrice;
            document.querySelector(".fImg").innerHTML = foodImg;
            //alert(foodImg);
            this.showModal("#orderModal");
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
        },
        addToCart2() {   
            let drinkLen = document.querySelectorAll(".myDrink").length;
            let drinkCount = 0;
            let driDec = false;
            let sideLen = document.querySelectorAll(".mySide").length;
            let sideCount = 0;
            let sideDec = false;
            for(var n = 0;n < drinkLen; n++){
                driDec = document.querySelectorAll(".myDrink")[n].checked;
                drinkCount = n;
                if(driDec == true){
                    break;
                }
            }
            for (let m = 0; m < sideLen; m++) {
                sideDec = document.querySelectorAll(".mySide")[m].checked;
                sideCount = m;
                if (sideDec == true) {
                    break;
                }
            }
            if(driDec == false || sideDec == false){
                alert("Please select your Drink And your Side");
                return false;
            }
            let d = new Date();
            let mealDay = d.getDate();
            let mealMonth = d.getMonth() + 1;
            let mealYear = d.getFullYear();
            let mealSide = document.querySelectorAll(".mySide")[sideCount].value;
            let sideMId = document.querySelectorAll(".mySide")[sideCount].id;
            let mealDrink = document.querySelectorAll(".myDrink")[drinkCount].value;
            let drinkId =  document.querySelectorAll(".myDrink")[drinkCount].id;
            let mealDate = mealDay + "/" + mealMonth + "/" + mealYear;
            let mealCatId = document.querySelector(".docPage").innerHTML;
            let mealId = document.querySelector(".fName").innerHTML;
            let mealPrice = document.querySelector(".fPrice").innerHTML;
            let mealImg = document.querySelector(".fImg").innerHTML;
            let mealDes = document.querySelector(".fDetail").innerHTML;
            let mealCount = 1;
            let fudId = document.querySelector(".fName").getAttribute("data-id");
            let mDetails = mealId + "~%" + fudId + "~$" + mealCatId + "~$" + mealImg + "~$" + mealDes + "~$" + mealDate + "~$"+mealDrink + "~%"+drinkId+"~$"+mealSide + "~%" +sideMId+"~$"+mealCount+"~$" + mealPrice + "]|]";
            
            //localStorage.clear();
            //alert("clear");
            
            var cart = "mealUniqueId950";
            var cartStore = localStorage.getItem(cart);
            
            if(cartStore == null || cartStore == "" ){
                cartStore = mDetails;
                localStorage.setItem(cart, cartStore);
                //alert(cartStore + "/" + 2);
            } 
            else{
                cartStore = cartStore + mDetails;
                localStorage.setItem(cart, cartStore);
                //alert(cartStore + "/" + 1);
            }
             
            this.closeDiv();
            //this.cartQuantity2(1); 
            alert("Meal Added successfully");
        },
        closeDiv() {
            let modal = document.querySelector(".modal");
            let modalContent = document.querySelectorAll("modal-content")
            modal.style.display = "none";
            for (var i = 0; i < modalContent.length; i++) {
                modalContent[i].style.display = "none";
            }
        },
        cartQuantity2(num) {
            var cart = "mealUniqueId950";
            var cartData = localStorage.getItem(cart);
            var cartCount2 = 0;
            if(cartData == null || cartData == ""){/* */
            }
            else{
                try{
                    cartCount2 = cartData.split("]|]").length -1; 
                }
                catch(err){/* */}
            }
            document.querySelector("#cart_38 > span").innerHTML = cartCount2;
            try { document.querySelector(".quantity3").innerHTML = cartCount2;}
            catch(er){/* */}
        
            if (num == 1) {
                alert("Meal Added successfully");
            } 
        }
      }
    }
</script>
