<template>
    <div class="col-12">
        <div class="col-12 content">
            <div class="col-md-2 col-sm-3 col-xs-12 col-lg-2" >
                <div>
                    <ul class="adminList">
                        <li><a id="a_overview" @click="showSelectedMenu('a_overview','#div_overview')"><span></span><img src="../Images/Group527.png" class="img_light"><img src="../Images/Group500.png" class="img_unlight"><span>Overview</span></a></li>
                        <li><a id="a_userMgmt" @click="showSelectedMenu('a_userMgmt','#div_userMgmt')"><span></span><img src="../Images/Group527(2).png" class="img_light"><img src="../Images/Group527(1).png" class="img_unlight"><span>User Management</span></a></li>
                        <li><a id="a_orders" @click="showSelectedMenu('a_orders','#div_orders')"><span></span><img src="../Images/Group5261.png" class="img_light"><img src="../Images/Group526.png" class="img_unlight"><span>Orders</span></a></li>
                        <li><a id="a_meals" @click="showSelectedMenu('a_meals','#div_meals')"><span></span><img width="25" src="../Images/pizza-box2.png" class="img_light"><img width="25" height="25" src="../Images/pizza-box1.png" class="img_unlight"><span>Meals</span></a></li>
                        <li><a id="a_location" @click="showSelectedMenu('a_location','#div_location')"><span></span><img width="25" src="../Images/pizza-box2.png" class="img_light"><img width="25" height="25" src="../Images/pizza-box1.png" class="img_unlight"><span>Location</span></a></li>
                        <li><a id="a_coupons" @click="showSelectedMenu('a_coupons','#div_coupons')"><span></span><img width="25" src="../Images/pizza-box2.png" class="img_light"><img width="25" height="25" src="../Images/pizza-box1.png" class="img_unlight"><span>Coupons</span></a></li>
                        <li><a id="a_banners" @click="showSelectedMenu('a_banners','#div_banners')"><span></span><img width="25" src="../Images/pizza-box2.png" class="img_light"><img width="25" height="25" src="../Images/pizza-box1.png" class="img_unlight"><span>Banners</span></a></li>
                        <li><a id="a_businesses" @click="showSelectedMenu('a_businesses','#div_businesses')"><span></span><img width="25" src="../Images/pizza-box2.png" class="img_light"><img width="25" height="25" src="../Images/pizza-box1.png" class="img_unlight"><span>Businesses</span></a></li>
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
                            <div style="width:178px; height: 173px;background-image: url('../Images/Group499.png');position: absolute;top:-95px;right:0px"></div>
                        </div>
                        <div class="col-12 wycd">
                            <div><div>
                                <h3>Products</h3>
                                <p>Manage and view all products sold.</p>
                                <img src="../Images/g12.png">
                            </div></div>
                            <div><div>
                                <h3>Orders</h3>
                                <p>View all orders.</p>
                                <img src="../Images/g10.png">
                            </div></div>
                            <div><div>
                                <h3>Users</h3>
                                <p>Manage and view all users</p>
                                <img src="../Images/g101.png">
                            </div></div>
                            <div><div>
                                <h3>Customers</h3>
                                <p>View and Manage Customers.</p>
                                <img src="../Images/g101.png">
                            </div></div>
                        </div>
                    </div>
                    <div id="div_userMgmt" class="div_userMgmt div_menu6 div_menu8">
                        <div>
                            <h1>User Management</h1>
                            <button @click="showModal('#div_addUser')" class="adduser">Add User</button>
                            <a style="cursor: pointer;"><img style="margin-left: 30px;" src="../Images/upload.png">&nbsp;&nbsp;Export User Record</a>
                            <img class="mOrderImg" style="right:20px;top:5px;position: absolute;" src="../Images/g101.png">
                        </div>
                        <div class="div_c">
                            <div class="div_filter">
                                <span style="color:#d63031;font-weight: bold;display: inline-block;margin-top:20px;">All Users</span>
                                <div style="float:right"><img src="../Images/Vector(2).png" >&nbsp;<span class="sort">Filter by:</span>&nbsp;&nbsp;
                                    <button class="filter" style="padding: 10px 80px 10px 10px ;">All Users</button>
                                    &nbsp;<img src="../Images/Vector2(2).png">&nbsp;<span class="sort">Sort by:</span>&nbsp;&nbsp;
                                    <button class="filter" style="padding: 10px 40px 10px 10px ;">Name</button>
                                </div>
                            </div>
                            <div class="mFilter">
                                <img src="../Images/Vector(2).png" >&nbsp;<span class="sort">Filter by:</span><br>
                                    <select class="filter" style="padding: 10px 80px 10px 10px ;">
                                        <option value="all">All Orders</option>
                                        <option value="claim">Claimed Orders</option>
                                        <option value="completed">Completed Orders</option>
                                    </select>
                            </div>
                            <div class="uSearch">
                                <span><img src="../Images/search.png"></span> <input type="text" placeholder="Search by name">
                            </div>
                            <table class="userTab">
                                <tr><th>Name</th><th>Email</th><th>Phone Number</th><th>Role</th><th>Action</th></tr>
                                <tr v-for="user in users" :key="user.id"><td>{{user.firstName}}</td><td>{{user.email}}</td><td>{{user.phoneNumber}}</td><td>{{user.userType}}</td><td><a><img src="../Images/edit.png"></a>&nbsp;&nbsp;<a @click="deleteUser(user.id)"><img src="../Images/delete.png"></a></td></tr>                           
                            </table>
                        </div>
                    </div>
                    <div id="div_orders" class="div_userMgmt div_menu6 div_menu8">
                        <div style="padding: 40px 30px 40px 50px">
                            <h1>Orders</h1>
                            <a style="cursor: pointer;"><img src="../Images/upload.png">&nbsp;&nbsp;Export User Record</a>
                            <img class="mOrderImg" style="right:20px;top:10px;position: absolute;" src="../Images/g10.png">
                        </div>
                        <div class="div_c">
                            <div class="div_filter">
                                <span style="color:#d63031;font-weight: bold;display: inline-block;margin-top:20px;">All Orders</span>
                                <div style="padding-left:30px;display:inline-block"><img src="../Images/Vector(2).png" >&nbsp;<span class="sort">Filter by:</span>&nbsp;&nbsp;
                                    <select class="filter" style="padding: 10px 80px 10px 10px ;" id="selOrder2" @change="showOrderTable('#selOrder2')">
                                        <option value="all">All Orders</option>
                                        <option value="pending">Pending Orders</option>
                                        <option value="claim">Claimed Orders</option>
                                        <option value="prepared">Prepared Orders</option>
                                        <option value="picked">Picked Orders</option>
                                        <option value="delivered">Completed Orders</option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="mFilter">
                                <img src="../Images/Vector(2).png" >&nbsp;<span class="sort">Filter by:</span><br>
                                    <select class="filter" style="padding: 10px 80px 10px 10px ;" id="selOrder" @change="showOrderTable('#selOrder')">
                                        <option value="all">All Orders</option>
                                        <option value="pending">Pending Orders</option>
                                        <option value="claimed">Claimed Orders</option>
                                        <option value="prepared">Prepared Orders</option>
                                        <option value="picked">Picked Orders</option>
                                        <option value="delivered">Completed Orders</option>
                                    </select>
                            </div>
                            <div id="orderDiv">
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Order Id</th><th>Customer</th><th>Phone Number</th><th>Address</th><th>Order Date</th><th>Location</th><th>Payment Status</th><th>Status</th><th>Action</th></tr>
                                        <tr v-for="order in orders" :key="order.id"><td>{{order.id}}</td><td>{{order.username}}</td><td>{{order.number}}</td><td>{{order.address}}</td><td>{{order.time}}</td><td>{{order.userLocation}}</td><td>User-Paid</td><td>{{order.status}}</td><td><a class="redLink" @click="viewOrderDetails(order.id)">View Details</a></td></tr>   
                                    </table>
                                </div>
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Order Id</th><th>Customer</th><th>Phone Number</th><th>Address</th><th>Order Date</th><th>Location</th><th>Payment Status</th><th>Status</th><th>Action</th></tr>
                                        <tr v-for="order in pending" :key="order.id"><td>{{order.id}}</td><td>{{order.username}}</td><td>{{order.number}}</td><td>{{order.address}}</td><td>{{order.time}}</td><td>{{order.userLocation}}</td><td>User-Paid</td><td>{{order.status}}</td><td><a class="redLink" @click="viewOrderDetails(order.id)">View Details</a></td></tr>   
                                    </table>
                                </div>
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Order Id</th><th>Customer</th><th>Phone Number</th><th>Address</th><th>Order Date</th><th>Location</th><th>Payment Status</th><th>Status</th><th>Action</th></tr>
                                        <tr v-for="order in claimed" :key="order.id"><td>{{order.id}}</td><td>{{order.username}}</td><td>{{order.number}}</td><td>{{order.address}}</td><td>{{order.time}}</td><td>{{order.userLocation}}</td><td>User-Paid</td><td>{{order.status}}</td><td><a class="redLink" @click="viewOrderDetails(order.id)">View Details</a></td></tr>   
                                    </table>
                                </div>
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Order Id</th><th>Customer</th><th>Phone Number</th><th>Address</th><th>Order Date</th><th>Location</th><th>Payment Status</th><th>Status</th><th>Action</th></tr>
                                        <tr v-for="order in prepared" :key="order.id"><td>{{order.id}}</td><td>{{order.username}}</td><td>{{order.number}}</td><td>{{order.address}}</td><td>{{order.time}}</td><td>{{order.userLocation}}</td><td>User-Paid</td><td>{{order.status}}</td><td><a class="redLink" @click="viewOrderDetails(order.id)">View Details</a></td></tr>   
                                    </table>
                                </div>
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Order Id</th><th>Customer</th><th>Phone Number</th><th>Address</th><th>Order Date</th><th>Location</th><th>Payment Status</th><th>Status</th><th>Action</th></tr>
                                        <tr v-for="order in picked" :key="order.id"><td>{{order.id}}</td><td>{{order.username}}</td><td>{{order.number}}</td><td>{{order.address}}</td><td>{{order.time}}</td><td>{{order.userLocation}}</td><td>User-Paid</td><td>{{order.status}}</td><td><a class="redLink" @click="viewOrderDetails(order.id)">View Details</a></td></tr>   
                                    </table>
                                </div>
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Order Id</th><th>Customer</th><th>Phone Number</th><th>Address</th><th>Order Date</th><th>Location</th><th>Payment Status</th><th>Status</th><th>Action</th></tr>
                                        <tr v-for="order in delivered" :key="order.id"><td>{{order.id}}</td><td>{{order.username}}</td><td>{{order.number}}</td><td>{{order.address}}</td><td>{{order.time}}</td><td>{{order.userLocation}}</td><td>User-Paid</td><td>{{order.status}}</td><td><a class="redLink" @click="viewOrderDetails(order.id)">View Details</a></td></tr>   
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="div_meals" class="div_userMgmt div_menu6 div_menu8">
                        <div style="padding: 40px 30px 40px 50px">
                            <h1>Meals</h1>
                            <button class="mealsBtn" @click="addMealItem('#div_addMealItem')">Add Item</button>
                            <img class="mOrderImg" style="right:20px;top:10px;position: absolute;" src="../Images/g10.png">
                        </div>
                        <div class="div_c">
                            <div class="div_filter">
                                <span class="filName" style="color:#d63031;font-weight: bold;display: inline-block;margin-top:20px;">Meals</span>
                                <div style="display: inline-block;margin-left:20px"><img src="../Images/Vector(2).png" >&nbsp;<span class="sort">Filter by:</span>&nbsp;&nbsp;
                                    <select class="filter" id="selVal" @change="showMealTable('#selVal')" style="padding: 10px 80px 10px 10px ;">
                                        <option value="meals">Meals</option>
                                        <option value="meats">Meats</option>
                                        <option value="drinks">Drinks</option>
                                    </select>
                                    <!--&nbsp;<img src="../Images/Vector2(2).png">&nbsp;<span class="sort">Sort by:</span>&nbsp;&nbsp;
                                    <button class="filter" style="padding: 10px 40px 10px 10px ;">Name</button>-->
                                </div>
                            </div>
                            <div class="mFilter">
                                <img src="../Images/Vector(2).png" >&nbsp;<span class="sort">Filter by:</span><br>
                                    <select class="filter" id="selVal2" @change="showMealTable('#selVal2')" style="padding: 10px 80px 10px 10px ;">
                                        <option value="meals">Meals</option>
                                        <option value="meats">Meats</option>
                                        <option value="drinks">Drinks</option>
                                    </select>
                            </div>
                            <div id="mealDiv">
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Name</th><th>Category</th><th>Date/Time Inserted</th><th>Action</th></tr>
                                        <tr v-for="meal in items" :key="meal.id"><td>{{meal.name}}</td><td>{{meal.mealType}}</td><td>{{meal.time}}</td><td><a class="icn"><img src="../Images/edit.png"></a>&nbsp;&nbsp;<a class="icn" @click="deleteMeal(meal.id)"><img src="../Images/delete.png"></a><span @click="addSMeal(meal.id)" class="icon_add icn">+</span></td></tr> 
                                    </table>
                                </div>
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Name</th><th>Date/Time Inserted</th><th>Action</th></tr>
                                        <tr v-for="meat in meats" :key="meat.id"><td>{{meat.name}}</td><td>{{meat.time}}</td><td><a><img src="../Images/edit.png"></a>&nbsp;&nbsp;<a><img src="../Images/delete.png"></a></td></tr> 
                                    </table>
                                </div>
                                <div>
                                    <table class="orderTab">
                                        <tr><th>Name</th><th>Date/Time Inserted</th><th>Action</th></tr>
                                        <tr v-for="drink in drinks" :key="drink.id"><td>{{drink.name}}</td><td>{{drink.time}}</td><td><a><img src="../Images/edit.png"></a>&nbsp;&nbsp;<a @click="`deleteMeal(${drink.id})`"><img src="../Images/delete.png"></a></td></tr> 
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>                   
                    <div id="div_location" class="div_userMgmt div_menu6 div_menu8">
                        <div style="padding: 40px 30px 40px 50px">
                            <h1>Location</h1>
                            <button class="mealsBtn" @click="showModal('#div_addLocation')">Add Location</button>
                            <img class="mOrderImg" style="right:20px;top:10px;position: absolute;" src="../Images/g10.png">
                        </div>
                        <div class="div_c">
                            <div class="div_filter">
                                <span class="filName" style="color:#d63031;font-weight: bold;display: inline-block;margin-top:20px;">Locations</span>
                                
                            </div>
                            <div>
                                <table class="orderTab">
                                    <tr><th>Country</th><th>Region</th><th>City</th><th>Action</th></tr>
                                    <tr v-for="loc in locations" :key="loc.id"><td>{{loc.country}}</td><td>{{loc.state}}</td><td>{{loc.city}}</td><td><a><img src="../Images/edit.png"></a>&nbsp;&nbsp;<a @click="deleteLoc(loc.id)"><img src="../Images/delete.png"></a></td></tr> 
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="div_coupons" class="div_userMgmt div_menu6 div_menu8">
                        <div style="padding: 40px 30px 40px 50px">
                            <h1>Coupons</h1>
                            <button class="mealsBtn" @click="showModal('#div_addCoupon')">Add Coupon</button>
                            <img class="mOrderImg" style="right:20px;top:10px;position: absolute;" src="../Images/g10.png">
                        </div>
                        <div class="div_c">
                            <div class="div_filter">
                                <span class="filName" style="color:#d63031;font-weight: bold;display: inline-block;margin-top:20px;">Coupons</span>
                                
                            </div>
                            <div>
                                <table class="orderTab">
                                    <tr><th>Coupon Id</th><th>Coupon</th><th>Amount</th><th>Action</th></tr>
                                    <tr v-for="coup in coupons" :key="coup.id"><td>{{coup.id}}</td><td>{{coup.number}}</td><td>{{coup.amount}}</td><td><a><img src="../Images/edit.png"></a>&nbsp;&nbsp;<a @click="deleteCoupon(coup.id)"><img src="../Images/delete.png"></a></td></tr> 
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="div_banners" class="div_userMgmt div_menu6 div_menu8">
                        <div style="padding: 40px 30px 40px 50px">
                            <h1>Meal Banners</h1>
                            <button class="mealsBtn" @click="showModal('#div_addBanner')">Add Banner</button>
                            <img class="mOrderImg" style="right:20px;top:10px;position: absolute;" src="../Images/g10.png">
                        </div>
                        <div class="div_c">
                            <div class="div_filter">    
                            </div>
                            <div>
                                <table class="orderTab">
                                    <tr><th>Banner Id</th><th>Image</th><th>Action</th></tr>
                                    <tr v-for="ban in banners" :key="ban.id"><td>{{ban.id}}</td><td><img style="border-radius: 10px" width="150" :src="require(`../../../storage/Images/banners/${ban.image}`)"/></td><td><a><img src="../Images/edit.png"></a>&nbsp;&nbsp;<a @click="deleteBanner(ban.id)"><img src="../Images/delete.png"></a></td></tr> 
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="div_businesses" class="div_userMgmt div_menu6 div_menu8">
                        <div style="padding: 40px 30px 40px 50px">
                            <h1>Business(es)</h1>
                            <img class="mOrderImg" style="right:20px;top:10px;position: absolute;" src="../Images/g10.png">
                        </div>
                        <div class="div_c">
                            <div class="div_filter">    
                            </div>
                            <div>
                                <table class="orderTab">
                                    <tr><th>Name</th><th>Email</th><th>Phone number</th><th>Code</th><th>Orders Amount</th><th>Settlement Amount</th><th>Last Paid</th><th>Action</th></tr>
                                    <tr v-for="biz in bizs" :key="biz.id"><td>{{biz.firstName}}</td><td>{{biz.email}}</td><td>{{biz.phoneNumber}}</td><td>{{biz.gender}}</td><td>{{biz.totalOrder}}</td><td>{{biz.setAmount}}</td><td>{{biz.lastPaid}}</td><td><a class="icon_add" @click="assignCode(biz.id)">+</a>&nbsp;&nbsp;<a @click="deleteBanner(biz.id)"><img src="../Images/delete.png"></a></td></tr> 
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="myModal" class="modal">
            <div id="div_addUser" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>New User</h2>
                </div>
                <div class="modal-body f_aduser">
                    <span>First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input id="userFirstName" type="text" placeholder="Enter User First Name Here"><br><br><br>
                    <span>Last Name   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input id="userLastName" type="text" placeholder="Enter User Last Name Here"><br><br><br>
                    <span>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input id="userEmail" type="email" placeholder="Enter User Email Here"><br><br><br>
                    <span>Phone Number</span><input id="userPhoneNumber" type="text" placeholder="Enter User Phone Number Here"><br><br><br>
                    <span style="margin-right:80px">Password     </span><input id="userPassword" type="password" placeholder="Enter user password"><br><br><br>
                    <span>Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="radio" name="role" @click="setUserActiveState('chef')" checked="checked"><span class="sp_role">Chef</span><br><input style="margin-left:167px;margin-top:15px" type="radio" name="role" @click="setUserActiveState('rider')"><span class="sp_role">Rider</span>
                    <p><button @click="addUser()">Add User</button></p>
                    <p style="margin: 25px 0px 30px"><a><img src="../Images/importred.png">&nbsp;&nbsp;<span style="color:#dc0e00">Import bulk from CSV Instead</span></a></p>
                </div>
            </div>
            <div id="div_viewOrder" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2 style="color: #252733">Order #001</h2>
                </div>
                <div class="modal-body">
                    <p class="p_order"><span class="ti">Customer Name : </span><span class="va">Daniel Abudu Olaribigbe</span></p>
                    <p class="p_order"><span class="ti">Phone Number : </span><span class="va">08169397366</span></p>
                    <p class="p_order"><span class="ti">Email Address : </span><span class="va">unorthodoxdan@gmail.com</span></p>
                    <p class="p_order"><span class="ti">Shipping Address : </span><span class="va">No 4 Mowe Ibafo Somewhere in the desert</span></p>
                    <div class="p_order col-12">
                        <span class="ti">Ordered Items : </span><span class="va"> </span>
                        <table class="pro_br">
                            <tr><th>&nbsp;&nbsp;&nbsp;&nbsp;Product Name&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;Quantity&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>
                            <tr><td>Jollof Rice</td><td>2</td><td>#2,000</td></tr>
                            <tr><td>Fried Rice</td><td>1</td><td>#2,000</td></tr>
                        </table>
                    </div>
                    <p class="p_order"><span class="ti">Total Amount : </span><span class="va">$4000</span></p>
                    <p class="p_order"><span class="ti">Payment Method : </span><span class="va">Delivery</span></p>
                    <p class="p_order"><span class="ti">Status : </span><span class="va inp_ch">
                        <label class="container">Pending
                            <input runat="server" id="chb_setGen" type="checkbox" value="0">
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Delivering
                            <input runat="server" id="chb_setGen" type="checkbox" value="0">
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Delivered
                            <input runat="server" id="chb_setGen" type="checkbox" value="0">
                          <span class="checkmark"></span>
                        </label>
                    </span></p>
                </div>
            </div>
            <div id="div_viewOrder2" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2 style="color: #252733">Order #001</h2>
                </div>
                <div class="modal-body">
                    <p class="p_order"><span class="ti">Customer Name : </span><span class="va">Daniel Abudu Olaribigbe</span></p>
                    <p class="p_order"><span class="ti">Phone Number : </span><span class="va">08169397366</span></p>
                    <p class="p_order"><span class="ti">Email Address : </span><span class="va">unorthodoxdan@gmail.com</span></p>
                    <p class="p_order"><span class="ti">Shipping Address : </span><span class="va">No 4 Mowe Ibafo Somewhere in the desert</span></p>
                    <div class="p_order col-12">
                        <span class="ti">Ordered Items : </span><span class="va"></span>
                        <table class="pro_br">
                            <tr><th>&nbsp;&nbsp;&nbsp;&nbsp;Product Name&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;Quantity&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>
                            <tr><td>Jollof Rice</td><td>2</td><td>#2,000</td></tr>
                            <tr><td>Fried Rice</td><td>1</td><td>#2,000</td></tr>
                        </table>
                    </div>
                    <p class="p_order"><span class="ti">Total Amount : </span><span class="va">$4000</span></p>
                    <p class="p_order"><span class="ti">Payment Method : </span><span class="va">Delivery</span></p>
                    <p class="p_order"><span class="ti">Status : </span><span class="va inp_ch2">
                        <label class="container">Pending
                            <input runat="server" id="chb_setGen" type="checkbox" value="0">
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Cooking
                            <input runat="server" id="chb_setGen" type="checkbox" value="0">
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Done
                            <input runat="server" id="chb_setGen" type="checkbox" value="0">
                          <span class="checkmark"></span>
                        </label>
                    </span></p>
                </div>
            </div>
            <div id="div_addMealItem" class="modal-content col-12">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>ADD ITEM</h2>
                </div>
                <div class="modal-body col-12">
                    <div style="padding:15px;border-bottom: 1px solid #f2f2f2;margin-bottom: 20px;">
                        <span class="sp_iTxt" style="display: inline-block;">Select Item Type</span>
                        <input type="radio" name="mealType" checked="checked" @click="showItemContent(0)"><span class="sp_iTxt">Meal</span>              
                        <input type="radio" name="mealType" @click="showItemContent(1)"><span class="sp_iTxt">Meat</span>
                        <input type="radio" name="mealType" @click="showItemContent(2)"><span class="sp_iTxt">Drinks</span>
                        <input type="radio" name="mealType" @click="showItemContent(3)"><span class="sp_iTxt">Meal Category</span>
                    </div>
                    <div class="div_addMealContent col-12 condivs">
                        <div id="div_addMeal" class="col-12">
                           <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Name</div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><input id="inp_mealName" type="text" class="modalInput"></div>
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Category</div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><select id="sel_mealCat" class="modalInput">
                                <option value="1">Breakfast</option>
                                <option value="2">Lunch</option>
                                <option value="3">Dinner</option>
                            </select></div>
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Does Item Have Meat?</div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><input type="radio" checked="checked" @click="setItemMeat(1)" name="meatAv">Yes
                                 <input type="radio" @click="setItemMeat(0)" name="meatAv">No
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                Does Item Have Drink?
                            </div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                                <input type="radio" checked="checked" @click="setItemDrink(1)" name="drinkAv">Yes
                                <input type="radio" @click="setItemDrink(0)" name="drinkAv">No
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Is Item Popular?</div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><input type="radio" checked="checked" @click="setItemPopularity(1)" name="itemPopular">Yes
                                <input type="radio" @click="setItemPopularity(0)" name="itemPopular">No
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                Is Item New?
                            </div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                                <input type="radio" @click="setItemNew(1)" checked="checked" name="itemNew">Yes
                                <input type="radio" @click="setItemNew(0)" name="itemNew">No
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Is Item Available?</div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                                <input type="radio" @click="setItemAvailable(1)" checked="checked" name="itemAvailable">Yes
                                <input type="radio" @click="setItemAvailable(0)" name="itemAvailable">No
                            </div><br>
                                <input id="file_meal" type="file">
                            
                            
                            <p style="text-align: center;"><button class="redBtn" v-on:click="addItems">Add Item</button></p>
                            
                        </div>
                        
                        <div id="div_addMeat">
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Name</div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><input type="text" class="modalInput" id="drinkName"></div>
                            <div style="height: 70px;" class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Make Item Available for Order</div>
                            <div style="height: 70px;" class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><input type="radio" name="makeMeatAv" @click="MeatAvailabilityM(1)">Active
                                 <input type="radio" name="makeMeatAv" @click="MeatAvailabilityM(0)">Inactive
                            </div>
                            <p>
                                <input type="file" id="file_meat">
                            </p>
                            <p style="text-align: center;"><button class="redBtn" @click="AddMeat()">Add Meat</button></p>
                        </div>
                        <div id="div_addDrink">                          
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Name</div>
                            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><input type="text" id="meatName" class="modalInput"></div>
                            <div style="height: 70px;" class="col-lg-3 col-md-4 col-sm-4 col-xs-12">Make Item Available for Order</div>
                            <div style="height: 70px;" class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><input type="radio" name="mkDrinkAv" @click="makeDrinkAvailable(1)">Active
                                 <input type="radio" name="mkDrinkAv" @click="makeDrinkAvailable(0)">Inactive
                            </div>
                            <p>
                                <input type="file" id="file_drink">
                            </p>
                            <p style="text-align: center;"><button class="redBtn" @click="AddDrink()">Add Drink</button></p>
                        </div>
                        <div id="div_addCat">
                            Category Name*<br><br>
                            <input type="text" id="catName" class="modalInput"/><br><br>
                            <p style="text-align: center;"><button class="redBtn" @click="AddCategory()">Add Category</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="div_addLocation" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2 >ADD LOCATION</h2>
                </div>
                <div class="modal-body">
                    Select Country*<br>
                    <select class="modalInput" id="locCountry">
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                    </select><br><br>
                    Select Region<br>
                    <select class="modalInput" id="locRegion">
                        <option value="lag">Lagos</option>
                    </select><br><br>
                    City<br>
                    <input type="text" class="modalInput" id="locCity"><br><br>
                    Make Location Available for Orders<br>
                    <input type="radio" name="locAv" @click="makeLocationActive(1)"><span>Active</span>
                    <input type="radio" name="locAv" @click="makeLocationActive(1)"><span>Not Active</span>
                    <p style="text-align: center;"><button class="redBtn" @click="addLocation()">Add Location</button></p>
                </div>
            </div>          
            <div id="div_addSideMeal" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>ADD SIDE MEAL</h2>
                </div>
                  <div class="modal-body">
                    <div class="col-12" style="height:15px;margin-bottom:5px">Name</div>
                        <input type="text" class="modalInput" id="sideMealName">
                        <br><br>
                        <div class="col-12" style="height:180px">
                            Make Side Meals Available for Orders<br>
                            <input type="radio" name="OrderAv" @click="sideMealAvailabilityM(1)">Yes
                            <input type="radio" name="OrderAv" @click="sideMealAvailabilityM(0)">No<br><br>
                            Is Item Popular?<br>
                            <input type="radio" name="sidemeatAv" @click="sideMealMeatAvailabilityM(1)">Yes
                            <input type="radio" name="sidemeatAv" @click="sideMealMeatAvailabilityM(0)">No<br><br>
                            Is Item New?<br>
                            <input type="radio" name="sidemealnew" @click="sideMealNewM(1)">Yes
                            <input type="radio" name="sidemealnew" @click="sideMealNewM(0)">No<br>
                        </div>
                        <br>
                        <input type="file" id="fl_sideMeal">
                        <p style="text-align: center;"><button class="redBtn" @click="addSideMeal()">Add Item</button></p>
                    </div>    
            </div>
            <div id="div_addCoupon" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>ADD COUPON</h2>
                </div>
                <div class="modal-body">
                    Coupon<br>
                        <input type="text" class="modalInput" maxlength="10" placeholder="Enter coupon(10-digit number)" id="coupon">
                        <br><br>
                        Amount<br>
                        <input type="text" class="modalInput" placeholder="Enter coupon amount" id="couponAmt">
                        <br>
                        <p style="text-align: center;"><button class="redBtn" @click="addCoupon()">Add Coupon</button></p>
                    </div> 
            </div>
            <div id="div_addBanner" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>ADD MEAL BANNER</h2>
                </div>
                <div class="modal-body">
                    Banner Image<br>
                        <input type="file" id="bannerImage">
                        <br><br>
                        <p style="text-align: center;"><button class="redBtn" @click="addBanner()">Add Banner</button></p>
                    </div> 
            </div>
            <div id="div_orderDetails" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>ORDER DETAILS</h2>
                </div>
                <div class="modal-body">
                    <div id="div_mainOrderDetails">

                    </div>
                </div>  
            </div>
            <div id="div_addCompanyCode" class="modal-content">
                <div class="modal-header">
                    <span class="close" @click="closeSpan()">&times;</span>
                    <h2>ADD COMPANY CODE</h2>
                </div>
                <div class="modal-body">
                    Company code<br>
                        <input type="text" class="modalInput" maxlength="10" placeholder="Enter coupon(10-digit number)" id="companyCode">
                        <br><br>                
                        <p style="text-align: center;"><button class="redBtn" @click="assignCompanyCode()">Assign Code</button></p>
                    </div> 
            </div>
        </div>
        <div id="myModal2" class="modal2">
            <div id="mobile_nav" class="modal-content2" >
                <div class="modal-header2">
                    <span class="close2" @click="closeSpan2()">&times;</span>
                    <img src="../Images/not_image.png">
                </div>
                <div class="modal-body2"><br />
                    <a onclick="showSelectedMenu(this.id,'#div_overview')">Overview</a>
                    <a onclick="showSelectedMenu(this.id,'#div_userMgmt')">Users</a>
                    <a onclick="showSelectedMenu(this.id,'#div_orders')" >Orders</a>
                    <a onclick="showSelectedMenu(this.id,'#div_deliveries')">Deliveries</a>
                    <a onclick="showSelectedMenu(this.id,'#div_meals')">Meals</a>
                    <a onclick="showSelectedMenu(this.id,'#div_location')">Locations</a>
                     <a onclick="showSelectedMenu(this.id,'#div_coupons')">Coupons</a>
                      <a onclick="showSelectedMenu(this.id,'#div_banners')">Banners</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  /*reading from tommorow*/
    @import 'si.css';
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
.nav > div{width: 320px;right:0px;position: absolute;padding: 30px 20px 20px;padding-right: 0px;background-color: #fff;} 
.nav span{display: inline-block;font-size: 18px;}
#div_overview{padding-left: 50px;padding-top: 40px;padding-right: 40px;}
.div_userMgmt{padding: 30px 40px 50px 60px;}
.div_userMgmt > div:first-child{position: relative;background-color: #d63031;color:#fff;padding: 40px 30px 20px 50px}
#div_overview h1{color:#dc3031}
.wycd{margin-top:60px}
.wycd > div{padding:10px; width: 25%;float: left;}
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
 .condivs > div > div{
     height: 50px
 } 
</style>
<script>
   //import axios from 'axios';
    export default{
        name: 'Admin',
        data(){
            return{
                title: '950Meals Admin',
                url: "http" + "://localhost" +":5000",
                itemMeat: 1,
                itemDrink: 1,
                itemPopularity: 1,
                itemNew: 1,
                itemAvailability: 1,
                sideMealAvailability:1,
                sideMealPopularity: 1,
                sideMealNew: 1,
                meatAvailable: 1,
                drinkAvailable:1,
                userType: 'chef',
                locationActive: 1,
                categoryActive:1,
                items:[], users: [], meats:[], drinks:[], locations: [],coupons:[],
                selMeal: 0,banners:[],orders:[],
                claimed:[],pending:[],prepared:[],picked:[],delivered:[],
                orderId: 0,bizs: [], bizId: 0
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
            this.showSelectedMenu('a_overview','#div_overview');
            this.getAllData(this.items,this.users, this.meats,this.drinks,this.locations, this.coupons,this.banners, this.orders,this.claimed, this.pending, this.prepared, this.picked,this.delivered,this.bizs);          
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
            addMealItem(div){
                this.showModal(div);
                let mealDiv = document.querySelectorAll(".div_addMealContent > div");
                for(let i = 0; i < mealDiv.length; i++){
                    mealDiv[i].style.display = "none";
                }
                mealDiv[0].style.display = "block";
            },
            showItemContent(n){
                let mealDiv = document.querySelectorAll(".div_addMealContent > div");
                for(let i = 0; i < mealDiv.length; i++){
                    mealDiv[i].style.display = "none";
                }
                mealDiv[n].style.display = "block";
            },          
            setItemMeat(n){this.itemMeat = n},
            setItemDrink(n){this.itemDrink = n},
            setItemPopularity(n){this.itemPopularity = n},
            setItemNew(n){this.itemNew = n},
            setItemAvailable(n){this.itemAvailability = n},
            addItems(){
                let mealImg = document.getElementById("file_meal").files[0];
                var inp_mealName = document.getElementById("inp_mealName").value;
                var sel_mealCat = document.getElementById("sel_mealCat").value;
                if(mealImg != null || mealImg != ""){ 
                    let formData = new FormData();
                    formData.append("itemImage", mealImg);
                    formData.append("name",inp_mealName);
                    formData.append("category",sel_mealCat);
                    formData.append("hasMeat",this.itemMeat);
                    formData.append("hasDrink",this.itemDrink);
                    formData.append("isPopular",this.itemPopularity);
                    formData.append("isNew",this.itemNew);
                    formData.append("isActive",this.itemAvailability);

                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            let res = JSON.parse(this.responseText);
                            if(res.status==1){
                                alert(res.message)
                            }
                        }
                    }
                    xhhtp.open("POST", this.url + '/api/additem', true); 
                    xhhtp.send(formData);
                }
                else{
                    alert("Please select a file")
                }
            },
            AddMeat(){
                let drinkName = document.getElementById("drinkName").value;
                let mealImg = document.getElementById("file_meat").files[0]
                if(mealImg != null || mealImg != ""){
                    if(drinkName.length > 0){
                        let formData = new FormData();
                        formData.append("itemImage", mealImg);
                        formData.append("name", drinkName);
                        formData.append("isActive",this.meatAvailable);
                        let xhhtp = new XMLHttpRequest();
                        xhhtp.onreadystatechange = function(){
                            if (this.readyState == 4 && this.status == 200){
                                let res = JSON.parse(this.responseText);
                                if(res.status==1){
                                    alert(res.message)
                                }
                            }
                        }
                        xhhtp.open("POST", this.url + '/api/addmeat', true); 
                        xhhtp.send(formData);
                    }
                    else{
                        alert("Please enter name of a meat");
                    }
                }
                else{
                    alert("Please insert file");
                }
            },
            AddDrink(){
                let drinkName = document.getElementById("meatName").value;
                let mealImg = document.getElementById("file_drink").files[0]
                if(mealImg != null || mealImg != ""){
                    if(drinkName.length > 0){
                        let formData = new FormData();
                        formData.append("itemImage", mealImg);
                        formData.append("name", drinkName);
                        formData.append("isActive",this.makeDrinkAvailable);
                        let xhhtp = new XMLHttpRequest();
                        xhhtp.onreadystatechange = function(){
                            if (this.readyState == 4 && this.status == 200){
                                let res = JSON.parse(this.responseText);
                                if(res.status==1){
                                    alert(res.message)
                                }
                            }
                        }
                        xhhtp.open("POST", this.url + '/api/adddrink', true); 
                        xhhtp.send(formData);
                    }
                    else{
                        alert("Please enter name of drink");
                    }
                }
                else{
                    alert("Please insert file");
                }
            },
            addSideMeal(){
                let sideMealName = document.getElementById("sideMealName").value;
                if(sideMealName.length > 0){
                    let mealImg = document.getElementById("fl_sideMeal").files[0];
                    if(mealImg != null || mealImg != ""){
                        let formData = new FormData();
                        formData.append("itemImage", mealImg);
                        formData.append("name",sideMealName);
                        formData.append("isAvailable",this.sideMealAvailability);
                        formData.append("isNew",this.sideMealNew);
                        formData.append("isPopular",this.sideMealPopularity);
                        formData.append("itemId", this.selMeal);

                        let xhhtp = new XMLHttpRequest();
                        xhhtp.onreadystatechange = function(){
                            if (this.readyState == 4 && this.status == 200){
                                let res = JSON.parse(xhhtp.responseText)
                                if(res.status==1){
                                    alert(res.message)
                                }
                            }
                        }
                        xhhtp.open("POST", this.url + '/api/addsideitem', true);
                        xhhtp.send(formData);
                    }
                }
                else{
                    alert("Please enter name of side meal");
                }
            },
            sideMealAvailabilityM(n){
                this.sideMealAvailability = n;
            },
            sideMealMeatAvailabilityM(n){
                this.sideMealMeatAvailability = n;
            },
            sideMealNewM(n){
                this.sideMealNew = n;
            },
            MeatAvailabilityM(n){
                this.meatAvailable = n;
            },
            makeDrinkAvailable(n){
                this.makeDrinkAvailable = n;
            },
            addUser(){
                let userFirstName = document.getElementById("userFirstName").value;
                let userLastName = document.getElementById("userLastName").value;
                let userEmail = document.getElementById("userEmail").value;
                let userPhoneNumber = document.getElementById("userPhoneNumber").value;
                let userPassword = document.getElementById("userPassword").value;
                if(userFirstName.length > 0 && userLastName.length > 0 && userEmail.length > 0 && userPhoneNumber.length > 0 && userPassword.length > 0){
                        let obj = {"email" : userEmail,"password": userPassword,"firstName":userFirstName,"lastName":userLastName,"phoneNumber":userPhoneNumber,"userType":this.userType};
                        let xhhtp = new XMLHttpRequest();
                        xhhtp.onreadystatechange = function(){
                            if (this.readyState == 4 && this.status == 200){
                                alert(xhhtp.responseText)
                            }
                        }
                        xhhtp.open("POST", this.url + '/api/adduser', true); 
                        xhhtp.setRequestHeader("Content-type", "application/json"); 
                        xhhtp.send(JSON.stringify(obj));
                }
                else{
                    alert("Please fill in all input");
                }
            },
            setUserActiveState(role){
                this.userType = role;
            },
            addLocation(){
                let locCountry = document.getElementById("locCountry").value;
                let locRegion = document.getElementById("locRegion").value;
                let locCity = document.getElementById("locCity").value;
                if(locCity.length > 0 && locRegion.length > 0 && locCountry.length > 0){
                    let obj = {"country" : locCountry,"state": locRegion,"city": locCity,"isActive":this.locationActive};
                        let xhhtp = new XMLHttpRequest();
                        xhhtp.onreadystatechange = function(){
                            if (this.readyState == 4 && this.status == 200){
                                alert(xhhtp.responseText)
                            }
                        }
                        xhhtp.open("POST", this.url + '/api/addlocation', true); 
                        xhhtp.setRequestHeader("Content-type", "application/json"); 
                        xhhtp.send(JSON.stringify(obj));
                }
                else{
                    alert("Please select an option from each select");
                }
            },
            makeLocationActive(n){
                this.locationActive = n;
            },
            getAllData(items, users,meats,drinks,locations,coupons,banners,orders,claimed,pending,prepared,picked,delivered,bizs){
                let dis = this;
                 let xhhtp = new XMLHttpRequest();
                        xhhtp.onreadystatechange = function(){
                            if (this.readyState == 4 && this.status == 200){
                                //alert(this.responseText)
                               let co = JSON.parse(this.responseText);
                               let r = [0,0,0,0,0,0]
                               for(let i = 0; i < co.items.length; i++){
                                   items[i] = co.items[i];
                               }
                               for(let i = 0; i < co.users.length; i++){
                                   users[i] = co.users[i];
                                   
                               }
                               for(let i = 0; i < co.busers.length; i++){
                                   bizs[r[5]++] = co.busers[i];
                               }
                               for(let i = 0; i < co.meats.length; i++){
                                   meats[i] = co.meats[i];
                               }
                               for(let i = 0; i < co.drinks.length; i++){
                                   drinks[i] = co.drinks[i];
                               }
                               for(let i = 0; i < co.locations.length; i++){
                                   locations[i] = co.locations[i];
                               }
                               for(let i = 0; i < co.coupons.length; i++){
                                   coupons[i] = co.coupons[i];
                               }
                               for(let i = 0; i < co.banners.length; i++){
                                   banners[i] = co.banners[i];
                               }
                               for(let i = co.orders.length-1; i>=0; i--){
                                   orders[i] = co.orders[i];
                                    if(co.orders[i].status.localeCompare("claimed")==0){
                                        claimed[r[0]++] = co.orders[i];
                                    }
                                    else if(co.orders[i].status.localeCompare("pending")==0){
                                        pending[r[1]++] = co.orders[i];
                                    }
                                    else if(co.orders[i].status.localeCompare("prepared")==0){
                                        prepared[r[2]++] = co.orders[i];
                                    }
                                    else if(co.orders[i].status.localeCompare("picked")==0){
                                        picked[r[3]++] = co.orders[i];
                                    }
                                    else if(co.orders[i].status.localeCompare("delivered")==0){
                                        delivered[r[4]++] = co.orders[i];
                                    }
                               }
                               dis.showMealTable("#selVal")
                               dis.showOrderTable("#selOrder")
                            }
                        }
                        xhhtp.open("GET", this.url + '/api/getadmindata/', true); 
                        xhhtp.send();
                //axios.get(this.url + '/api/getadmindata').then(res=>(alert(res.users[0].id)))
            },
            AddCategory(){
                let catName = document.getElementById("catName").value;
                if(catName.length > 0){
                    let obj = {"name": catName}
                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            alert(xhhtp.responseText)
                        }
                    }
                    xhhtp.open("POST", this.url + '/api/addcategory', true); 
                    xhhtp.setRequestHeader("Content-type", "application/json"); 
                    xhhtp.send(JSON.stringify(obj));
                }
            },
            showMealTable(n){
                let select = document.querySelector(n);
                let mealDiv = document.querySelectorAll("#mealDiv > div")
                for(let i = 0; i < mealDiv.length; i++){
                    mealDiv[i].style.display = "none";
                           // table += "<tr><td>"+this.items[i].name+"</td><td>"+this.items[i].mealType+"</td><td>"+this.items[i].time+"</td><td><a class='redLink'><i class='material-icons'>Delete</i></a><br><a class='redLink'>Edit_Item</a><br><a class='redLink' @click='shSideItem()'>Add_Side_Item</a></td></tr>";
                }
                mealDiv[select.selectedIndex].style.display = "block";
                //mealDiv.innerHTML = table
            },
            deleteMeal(n){
                let r = confirm("Are you sure you want to delete this item?");
                if(r==true){
                    let dis = this;
                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            let res = JSON.parse(this.responseText);
                            alert(res.message);
                            dis.items = [];
                            for(let i = 0; i < res.items.length; i++){
                                dis.items[i] = res.items[i];
                            }
                        }
                    }
                    xhhtp.open("GET", this.url + '/api/deletemeal/' + n, true); 
                    xhhtp.send();
                }
            },
            addSMeal(n){
                this.selMeal = n;
                this.showModal("#div_addSideMeal");
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
                            dis.users = [];
                            for(let i = 0; i < res.users.length; i++){
                                dis.users[i] = res.users[i];
                            }
                        }
                    }
                    xhhtp.open("GET", this.url + '/api/deleteuser/' + n, true); 
                    xhhtp.send();
                }
            },
            deleteLoc(n){
                let r = confirm("Are you sure you want to delete this location?");
                if(r==true){
                 let dis = this;
                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            let res = JSON.parse(this.responseText);
                            alert(res.message);
                            dis.locations = [];
                            for(let i = 0; i < res.locations.length; i++){
                                dis.locations[i] = res.locations[i];
                            }
                        }
                    }
                    xhhtp.open("GET", this.url + '/api/deletelocation/' + n, true); 
                    xhhtp.send();
                }
            },
            addCoupon(){
                let coup = document.getElementById("coupon").value;
                let amt = document.getElementById("couponAmt").value;
                if(coup.length > 0){
                    let obj = {"number": coup, "amount": amt}
                    let xhhtp = new XMLHttpRequest();
                    let dis = this;
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            //alert(this.responseText)
                            let res = JSON.parse(xhhtp.responseText)
                            alert(res.message);
                            if(res.status==1){
                                dis.coupons = [];
                                for(let i = 0; i < res.coupons.length; i++){
                                    dis.coupons[i] = res.coupons[i]; 
                                }
                            }
                        }
                    }
                    xhhtp.open("POST", this.url + '/api/addcoupon', true); 
                    xhhtp.setRequestHeader("Content-type", "application/json"); 
                    xhhtp.send(JSON.stringify(obj));
                }   
            },
            deleteCoupon(n){
                let r = confirm("Are you sure you want to delete this coupon?");
                if(r==true){
                    let dis = this;
                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            //alert(this.responseText)
                            let res = JSON.parse(this.responseText);
                            alert(res.message);
                            if(res.status== 1){
                                dis.coupons = [];
                                for(let i = 0; i < res.coupons.length; i++){
                                    dis.coupons[i] = res.coupons[i];
                                }
                            }
                        }
                    }
                    xhhtp.open("GET", this.url + '/api/deletecoupon/' + n, true); 
                    xhhtp.send();
                }
            },
            addBanner(){
               let mealImg = document.getElementById("bannerImage").files[0]
                if(mealImg != null || mealImg != ""){              
                    let formData = new FormData();
                    formData.append("itemImage", mealImg);
                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            let res = JSON.parse(xhhtp.responseText)
                            if(res.status==1){
                                alert(res.message);
                            }
                        }
                    }
                    xhhtp.open("POST", this.url + '/api/addbanner', true); 
                    xhhtp.send(formData);
                    
                }
                else{
                    alert("Please insert file");
                } 
            },
            deleteBanner(n){
                let r = confirm("Are you sure you want to delete this banner?");
                if(r==true){
                    let dis = this;
                    let xhhtp = new XMLHttpRequest();
                    xhhtp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200){
                            //alert(this.responseText)
                            let res = JSON.parse(this.responseText);
                            alert(res.message);
                            if(res.status== 1){
                                dis.banners = [];
                                for(let i = 0; i < res.banners.length; i++){
                                    dis.banners[i] = res.banners[i];
                                }
                            }
                        }
                    }
                    xhhtp.open("GET", this.url + '/api/deletebanner/' + n, true); 
                    xhhtp.send();
                }
            },
            showOrderTable(n){         
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
            assignCompanyCode(){
                let xhhtp = new XMLHttpRequest();let obj = {code: document.getElementById("companyCode").value,userId: localStorage.getItem("userId")}
                xhhtp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                        let co = JSON.parse(this.responseText);
                        if(co.status==1){
                            alert(co.message);
                            this.orders = []; this.claimed = []; this.pending = [], this.prepared = [];
                        }
                    }
                }
                xhhtp.open("POST", this.url + '/api/assigncompanycode', true); 
                xhhtp.setRequestHeader("Content-type", "application/json"); 
                xhhtp.send(JSON.stringify(obj));
            },
            assignCode(n){
                this.bizId = n;
                this.showModal("#div_addCompanyCode");
            }
        }
    }
</script>