const mysql = require('mysql');
const datetime = require('node-datetime');
const security = require('./security');
const multer = require('multer');
const crypt = require('bcryptjs');
const payment = require('./payment')
const mailer = require('./mailer')
class dbc{
        //Database connection credentials
    //Change this credentials to your server database credentials
    db = mysql.createConnection({
        host: 'localhost',
        user:'root',
        passsword: '',
        database: 'users'
    })
    dbc(){       
        db.connect((err) =>{
            if(err){
                throw err;
            }
            console.log('MySql Connected...');
        })
    }
    writeDbSchema(){
        let sql = `CREATE TABLE users(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255),phoneNumber VARCHAR(20), email VARCHAR(255), password VARCHAR(255), isEmailConfirmed SMALLINT(1), locationId int, gender VARCHAR(10), userType VARCHAR(255), isActive SMALLINT(1), time datetime, PRIMARY KEY (id));`;
        this.db.query(sql, (err, result) =>{ });
        //sql = `CREATE TABLE userAddress(id int AUTO_INCREMENT, userId int, country VARCHAR(255), state VARCHAR(225),address VARCHAR(255), PRIMARY KEY (id), FOREIGN KEY (userId) REFERENCES users(id));`; //This table might be remove
        //this.db.query(sql, (err, result) =>{ })
        sql = `CREATE TABLE userAddresses(id int AUTO_INCREMENT, userId int, locationId int,address VARCHAR(255), PRIMARY KEY (id), FOREIGN KEY (userId) REFERENCES users(id), FOREIGN KEY(locationId) REFERENCES locations(id));`;
        this.db.query(sql, (err, result) =>{ })
        sql = `CREATE TABLE itemCategory(id int AUTO_INCREMENT, name VARCHAR(255), isActive SMALLINT(1), time datetime, PRIMARY KEY (id));`;   
        this.db.query(sql, (err, result) =>{ })
        sql = `CREATE TABLE items(id int AUTO_INCREMENT, name VARCHAR(255), image VARCHAR(150), amount VARCHAR(255), description VARCHAR(255), isActive SMALLINT(1), category int, time datetime, isNew SMALLINT(1), orderCnt BIGINT, hasMeat SMALLINT(1), hasDrink SMALLINT(1), isPopular SMALLINT(1), PRIMARY KEY (id), FOREIGN KEY (category) REFERENCES itemCategory(id));`; 
        this.db.query(sql, (err, result) =>{})
        sql = `CREATE TABLE sideItems(id int AUTO_INCREMENT, name VARCHAR(255), image VARCHAR(150), itemId int, isAvailable SMALLINT(1), isNew SMALLINT(1), isPopular SMALLINT(1),time datetime, PRIMARY KEY(id), FOREIGN KEY (itemId) REFERENCES items(id));`;   
        this.db.query(sql, (err,result)=>{})
        sql = `CREATE TABLE drinks(id int AUTO_INCREMENT, name VARCHAR(255), image VARCHAR(150), isActive SMALLINT(1), time datetime, PRIMARY KEY(id));`;
        this.db.query(sql, (err,result)=>{});
        sql = `CREATE TABLE meats(id int AUTO_INCREMENT, name VARCHAR(255), image VARCHAR(150), isActive SMALLINT(1), time datetime, PRIMARY KEY(id));`;
        this.db.query(sql, (err, result)=>{});
        sql = `CREATE TABLE locations(id int AUTO_INCREMENT, country VARCHAR(80), state VARCHAR(80), city VARCHAR(80), isActive SMALLINT(1), time datetime, PRIMARY KEY(id));`;
        this.db.query(sql,(err,result)=>{})
        sql = `CREATE TABLE orders(id int AUTO_INCREMENT, number VARCHAR(20), amount VARCHAR(255), isCouponApplied SMALLINT(1), coupon VARCHAR(20), isCorporateBuy SMALLINT(1), userId int, locationId int,address VARCHAR(200), time datetime, status VARCHAR(150), deliverytime datetime, transRef VARCHAR(255), asPaid SMALLINT(1), PRIMARY KEY(id), FOREIGN KEY (userId) REFERENCES users(id), FOREIGN KEY (locationId) REFERENCES locations(id));`;
        this.db.query(sql,(err,result)=>{})
        sql = `CREATE TABLE orderDetails(id int AUTO_INCREMENT, totalQuantity int, orderId int, itemId int, sideMealId int, meatId int, drinkId int, PRIMARY KEY(id),FOREIGN KEY(orderId) REFERENCES orders(id), FOREIGN KEY(itemId) REFERENCES items(id), FOREIGN KEY(sideMealId) REFERENCES sideItems(id), FOREIGN KEY(meatId) REFERENCES meats(id), FOREIGN KEY(drinkId) REFERENCES drinks(id));`;
        this.db.query(sql,(err,result)=>{})
        sql = `CREATE TABLE payment(id int AUTO_INCREMENT, transRef VARCHAR(100), time datetime, userId int, isSuccessful SMALLINT(1), PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id));`;
        this.db.query(sql,(err,result)=>{})
        sql = `CREATE TABLE businessWorkers(id int AUTO_INCREMENT, userId int, userEmail VARCHAR(150), PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id));`;
        this.db.query(sql, (err,result)=>{})
        sql = `CREATE TABLE businessSettlement(id int AUTO_INCREMENT, userId int, amount VARCHAR(255), time datetime, PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id));`;
        this.db.query(sql, (err,result)=>{});
        sql = `CREATE TABLE businessOrder(id int AUTO_INCREMENT, orderId int, businessCode VARCHAR(255), isSettled SMALLINT(1), PRIMARY KEY(id), FOREIGN KEY(orderId) REFERENCES orders(id));`;
        this.db.query(sql, (err,result)=>{})
        sql = `CREATE TABLE bannerImages(id int AUTO_INCREMENT, image VARCHAR(200),time datetime, PRIMARY KEY(id));`;
        this.db.query(sql,(err,result)=>{})
        sql = `CREATE TABLE coupons(id int AUTO_INCREMENT, number VARCHAR(25), amount VARCHAR(30), time datetime, PRIMARY KEY(id));`;
        this.db.query(sql,(err,result)=>{})
        sql = `CREATE TABLE claimedOrders(id int AUTO_INCREMENT, userId int, orderId int, claimedTime datetime, doneTime datetime, PRIMARY KEY(id), FOREIGN KEY(orderId) REFERENCES orders(id), FOREIGN KEY(userId) REFERENCES users(id));`;
        this.db.query(sql,(err,result)=>{});
        sql =  `CREATE TABLE logistics(id int AUTO_INCREMENT, userId int, orderId int, pickupTime datetime, deliveryTime datetime, PRIMARY KEY(id), FOREIGN KEY(orderId) REFERENCES orders(id), FOREIGN KEY(userId) REFERENCES users(id));`;
        this.db.query(sql,(err,result)=>{}); 
        sql = `CREATE TABLE businessCodes(id int AUTO_INCREMENT, userId int, code VARCHAR(200), isActive SMALLINT(1), PRIMARY KEY(id), FOREIGN KEY(userId) REFERENCES users(id));`;
        this.db.query(sql,(err,result)=>{})
    }
    updateDbSchema(){

    }
    async seedDb(){
        //Uncomment this to seed the database with default categories
        /*let dt = datetime.create();
        let cat = {};
        cat.name="breakfast";
        cat.isActive = 1;
        cat.time = dt.format('Y-m-d H:M:S');
        let sql = 'INSERT INTO itemCategory SET ?';
        this.db.query(sql,cat,(err,result)=>{})
        cat.name="lunch"
        sql = 'INSERT INTO itemCategory SET ?';
        this.db.query(sql,cat,(err,result)=>{})
        cat.name="dinner"
        sql = 'INSERT INTO itemCategory SET ?';
        this.db.query(sql,cat,(err,result)=>{})
        cat.name="snack"
        sql = 'INSERT INTO itemCategory SET ?';
        this.db.query(sql,cat,(err,result)=>{})*/
        let pwd = await security.hashString("romanus99");
    
        let dt = datetime.create();
        let newUser = {firstName: "Flux",gender: 'male',phoneNumber:"0900000000",
            email: "romanusonyebuchi99@gmail.com", password: pwd, time: dt.format('Y-m-d H:M:S'), isEmailConfirmed: 1, userType: "Admin"}
        let sql = 'INSERT INTO users SET ?';
        this.db.query(sql,newUser,(err,result)=>{
            if(err) throw err;
            console.log(result.insertId)        
        })
        
    }
    async registerUser(req,res){
        let dis = this;
        let sql = `SELECT * FROM users WHERE email='${req.body.email}';`;
        let pwd = await security.hashString(req.body.password);
        this.db.query(sql,(err, result)=>{
            if(err) throw err
            if(result.length == 0){
                let dt = datetime.create();
                let newUser = {firstName: req.body.fullName,gender: req.body.gender,phoneNumber:req.body.phoneNumber,
                    email: req.body.email, password: pwd, time: dt.format('Y-m-d H:M:S'), isEmailConfirmed: 0, userType: req.body.userType}
                sql = 'INSERT INTO users SET ?';
                dis.db.query(sql,newUser,(err,result)=>{
                    if(err) throw err;
                    console.log(result.insertId);
                    //Send email here
                    crypt.hash(result.insertId.toString(),10, (err, result)=>{
                        console.log(result)
                        /*let mailSender = mailer();
                        let lk = "https://950meals.com/email-confirmation?d=" + qu;
                        let em = "<p>Thank you for signing up in 950Meals. Click <a href='"+lk+"'>here</a> to confirm your email</p>"
                        mailSender.sendmail(to,"EMAIL VERIFICATION", em)*/
                    })
                    res.status(200).json({
                        status: 1,
                        message: 'Registration Successful'
                    });
                })
            }else{
                res.status(200).json({
                    status: 0,
                    message: 'Action Failed. Email Already Exist'
                })
            }
        })       
    }
    async loginUser(req,res){
        let sql = `SELECT * FROM users WHERE email='${req.body.email}';`; 
        
        this.db.query(sql, (err,result)=>{
            if(err) throw err
            if(result.length > 0){
                //console.log(result[0].password)
                let res2 = result[0] 
                crypt.compare(req.body.password,result[0].password,function(err,result){
                    if(err) throw err
                    if(result){
                        res.status(200).json({
                            status:1,
                            message:'Login Successful',
                            user: res2
                        })
                    }
                    else{
                        res.status(200).json({
                            status:0,
                            message: 'Login Failed'
                        })
                    }
                })               
            }
        })
    }
    addCategory(req,res){
        let sql = "SELECT * FROM itemCategory WHERE name = '"+req.body.name+"'";
        let dbOb = this.db;
            this.db.query(sql,(err,result)=>{ if(err) throw err
            if(result.length > 0){
                res.status(200).json({
                    status:0,
                    message: "Action Failed. Category already exist"
                })
            }
            else{
                let dt = datetime.create();
                req.body.time = dt.format('Y-m-d H:M:S');
                let sql = 'INSERT INTO itemCategory SET ?';
                dbOb.query(sql,req.body,(err,result)=>{
                    if(err) throw err;
                    res.status(200).json({
                        status: 1,
                        message: "Category saved successfully"
                    })
                })
            }
        })
    }
    saveForm(req,res,table,path){
        let dt = datetime.create();
        let sql = "SELECT id FROM " + table;
        let result2 = 0;let dbOb = this.db;
        this.db.query(sql, (err, result) =>{
            if(result.length == 0){
                result2 = 0;
            }else{
                result2 = result[result.length-1].id
            }  
                const fileStorageEngine = multer.diskStorage({
                    destination: (req,file,cb)=>{
                        cb(null,path);
                    },
                    filename: (req,file,cb) =>{
                        cb(null,`${result2+1}.` + file.originalname.split('.')[1]);
                        req.body.image = `${result2+1}.` + file.originalname.split('.')[1];
                        req.body.time = dt.format('Y-m-d H:M:S');
                    },
                });
                
                const upload = multer({storage: fileStorageEngine}).single('itemImage');
                upload(req,res, function(err){
                    if(err)throw err
                    sql = 'INSERT INTO '+table+' SET ?';
                    dbOb.query(sql,req.body,(err,result)=>{
                        if(err) throw err
                    })
                    res.status(200).json({
                        status: 1,
                        message: table.slice(0,-1) + " added successfully"
                    });
                })               
        })
    }
    addItem(req,res){
        this.saveForm(req,res,"items","./storage/Images/Meals")   
    }
    addSideItem(req,res){
        this.saveForm(req,res,"sideItems","./storage/Images/SideMeals")
    }
    addDrink(req,res){
        this.saveForm(req,res,"drinks","./storage/Images/Drinks")
    }
    addMeat(req,res){
        this.saveForm(req,res,"meats","./storage/Images/Meats")
    }
    addBanner(req,res){
        this.saveForm(req,res,"bannerImages","./storage/Images/banners");
    }
    addUser(req,res){
        let sql = "SELECT * FROM users WHERE email = '"+req.body.email+"' AND userType='"+req.body.userType+"'"
        let dbOb = this.db;
            this.db.query(sql,(err,result)=>{ if(err) throw err
            if(result.length > 0){
                res.status(200).json({
                    status:0,
                    message: "Action Failed. User already exist"
                })
            }
            else{
                let dt = datetime.create();
                req.body.isEmailConfirmed = 1;req.body.time = dt.format('Y-m-d H:M:S');
                let sql = 'INSERT INTO users SET ?';
                dbOb.query(sql,req.body,(err,result)=>{
                    if(err) throw err;
                    res.status(200).json({
                        status: 1,
                        message: "User saved successfully"
                    })
                })
            }
        })
    }
    addLocation(req,res){
        let sql = "SELECT * FROM locations WHERE country = '"+req.body.country+"' AND state='"+req.body.state+"' AND city='"+req.body.city+"'";
        let dbOb = this.db;
            this.db.query(sql,(err,result)=>{ if(err) throw err
            if(result.length > 0){
                res.status(200).json({
                    status:0,
                    message: "Action Failed. Location already exist"
                })
            }
            else{
                let dt = datetime.create();
                req.body.time = dt.format('Y-m-d H:M:S');
                let sql = 'INSERT INTO locations SET ?';
                dbOb.query(sql,req.body,(err,result)=>{
                    if(err) throw err;
                    res.status(200).json({
                        status: 1,
                        message: "Location saved successfully"
                    })
                })
            }
        })
    }
    getAllAdminData(req,res){
        let jsRes = {};let cat;let sMeals; let busers = [];let bizSet
        let sql = `SELECT * FROM businessSettlement`;
        this.db.query(sql,(err,result)=>{
            bizSet = result;
            
        })
        sql = 'SELECT * FROM itemCategory';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            cat = result
        })
        sql = 'SELECT * FROM meats';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.meats = result;
        })
        sql = 'SELECT * FROM users';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.users = result; let cnt = 0;
            for(let i = 0; i < result.length; i++){
                if(result[i].userType=='business'){
                    let re = result[i];
                    console.log(re)
                    re.orderCnt = 0;re.lastPaid = null;
                    re.totalOrder = 0;
                    re.setCnt = 0;
                    re.setAmount = 0;
                    
                    for(let e = 0; e < bizSet.length; e++){
                        if(bizSet[e].userId==result[i].id){
                            re.setCnt++;
                            re.setAmount += bizSet[e].amount;
                            re.lastPaid = bizSet[e].time;
                        }
                    }
                    busers[cnt++] = re;
                }
            }       
        })     
        sql = 'SELECT * FROM sideItems';
        this.db.query(sql, (err,result)=>{
            if(err) throw err; 
            sMeals = result
        })
        sql = 'SELECT * FROM coupons';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.coupons = result
        })
        sql = 'SELECT * FROM drinks';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.drinks = result;
        })
        sql = 'SELECT * FROM locations';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.locations = result;
        })
        sql = 'SELECT * FROM bannerImages';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.banners = result;
        })
        sql = 'SELECT * FROM items';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            let js = result
            
            for(let i = 0; i < js.length; i++){
                js[i].sideMeals = [];
                for(let j = 0; j < cat.length; j++){
                    if(js[i].category == cat[j].id){
                        js[i].mealType = cat[j].name;
                        break;
                    } 
                }let ct = 0;
                for(let j = 0; j < sMeals.length; j++){
                    if(js[i].id == sMeals[j].itemId){
                        js[i].sideMeals[ct++] = sMeals[j];
                    }
                }
            }
            jsRes.items = js;
        })
        sql = 'SELECT * FROM orders';let dbob = this.db;
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            if(result.length > 0){//console.log("Entered")
                let ord = result;
                for(let i = 0; i < result.length; i++){  
                    if(result[i].isCorporateBuy==1){
                        sql = `SELECT businessCode FROM businessOrder WHERE orderId=${result[i].id}`;
                        dbob.query(sql,(err,result)=>{
                            if(err)throw err
                            if(result.length > 0)
                            for(let u = 0; u < busers.length; u++){console.log(result[0].businessCode)
                                console.log(busers[u].gender)
                                if(result[0].businessCode == busers[u].gender){
                                    busers[u].orderCnt++;console.log("goos2")
                                    busers[u].totalOrder += ord[i].amount;
                                }
                            }
                        })
                    }
                    sql = `SELECT * FROM locations where id=${ord[i].locationId}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].userLocation = result[0].city + ", " + result[0].state + " " + result[0].country;
                    })  
                    sql = `SELECT * FROM users where id=${ord[i].userId}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].username = result[0].firstName + " " + result[0].lastName
                    })
                    sql = `SELECT * FROM orderDetails where orderId=${ord[i].id}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err 
                        ord[i].orderDetails = [];
                        for(let k = 0; k < result.length; k++){
                            ord[i].orderDetails[k] = result[k];
                        }
                        if(i == ord.length-1){
                            jsRes.orders = ord;
                            jsRes.busers = busers;
                            res.status(200).json(jsRes);
                        }
                    })            
                }
            }
            else{
                jsRes.orders = result;
                res.status(200).json(jsRes);
            }
        })   
    }
    getChefData(req,res){
        let jsRes = {};let dbob = this.db;let sMeals;
        let sql = 'SELECT * FROM sideItems';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            sMeals = result
        })
        sql = 'SELECT * FROM drinks';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.drinks = result;
        })
        sql = `SELECT * FROM users WHERE id=${req.params.id}`;
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.user = result;
        })
        sql = 'SELECT * FROM items';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            let js = result
            for(let i = 0; i < js.length; i++){
                js[i].sideMeals = [];
                let ct = 0;
                for(let j = 0; j < sMeals.length; j++){
                    if(js[i].id == sMeals[j].itemId){
                        js[i].sideMeals[ct++] = sMeals[j];
                    }
                }
            }
            jsRes.items = js;
        })
        
        sql = `SELECT * FROM orders`;
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            if(result.length > 0){//console.log("Entered")
                let ord = result;
                for(let i = 0; i < result.length; i++){  
                    sql = `SELECT * FROM locations where id=${ord[i].locationId}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].userLocation = result[0].city + ", " + result[0].state + " " + result[0].country;
                    })
                    sql = `SELECT * FROM claimedOrders where userId=${req.params.id} AND orderId=${ord[i].id}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        if(result.length > 0){
                            ord[i].isChefOrder = 1;
                        }
                        else{
                            ord[i].isChefOrder = 0;
                        }
                    })
                    sql = `SELECT * FROM orderDetails where orderId=${ord[i].id}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].orderDetails = [];
                        for(let k = 0; k < result.length; k++){
                            ord[i].orderDetails[k] = result[k];
                        }
                        if(i == ord.length-1){
                            jsRes.orders = ord;
                            res.status(200).json(jsRes);
                        }
                    })
                    
                }
            }
            else{
                jsRes.orders = result;
                res.status(200).json(jsRes);
            }
        })
    }
    getOrders(scMsg,failedMsg,res, dbs,req){
        let jsRes = {};let dbob = this.db;
        let sql = `SELECT * FROM orders`;
        dbob.query(sql, (err,result)=>{
            if(err) throw err;
            if(result.length > 0){//console.log("Entered")
                let ord = result;
                for(let i = 0; i < result.length; i++){  
                    sql = `SELECT * FROM locations where id=${ord[i].locationId}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].userLocation = result[0].city + ", " + result[0].state + " " + result[0].country;
                    })
                    sql = `SELECT * FROM ${dbs} where userId=${req.body.userId} AND orderId=${ord[i].id}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        if(result.length > 0){
                            ord[i].isChefOrder = 1;
                        }
                        else{
                            ord[i].isChefOrder = 0;
                        }
                    })
                    sql = `SELECT * FROM orderDetails where orderId=${ord[i].id}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].orderDetails = [];
                        for(let k = 0; k < result.length; k++){
                            ord[i].orderDetails[k] = result[k];
                        }
                        if(i == ord.length-1){
                            jsRes.status = 1;
                            jsRes.message = scMsg;
                            jsRes.orders = ord;
                            res.status(200).json(jsRes);
                        }
                    })
                    
                }
            }
            else{
                jsRes.status = 0;
                jsRes.message = failedMsg
                jsRes.orders = result;
                res.status(200).json(jsRes);
            }
        })
    }
    claimOrder(req,res){
        let dt = datetime.create();
        let claimedOrder = {};let dis = this;
        claimedOrder.userId = req.body.userId;
        claimedOrder.orderId = req.body.orderId;
        claimedOrder.claimedTime = dt.format('Y-m-d H:M:S');
        let sql = 'INSERT INTO claimedOrders SET ?';let dbob = this.db;
        this.db.query(sql, claimedOrder,(err,result)=>{
            let sql = `UPDATE orders SET status = 'claimed' WHERE id=${req.body.orderId}`;
            dbob.query(sql,(err,result)=>{
                dis.getOrders("Order claimed successfully", "Action Failed. Order cannot be claimed",res, "claimedOrders",req);
            })         
        })
    }
    readyOrder(req,res){
        let dt = datetime.create();let dis = this;
        let sql = `UPDATE claimedOrders SET doneTime = '${dt.format('Y-m-d H:M:S')}' WHERE userId=${req.body.userId} AND orderId=${req.body.orderId}`;let dbob = this.db;
        this.db.query(sql,(err,result)=>{
            let sql = `UPDATE orders SET status = 'prepared' WHERE id=${req.body.orderId}`;
            dbob.query(sql,(err,result)=>{
                dis.getOrders("Order preparation set successfully", "Action Failed. Order preparation couldn't be set",res, "claimedOrders",req);
            })         
        })
    }
    getRiderData(req,res){
        let jsRes = {};let dbob = this.db;let sMeals;
        let sql = 'SELECT * FROM sideItems';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            sMeals = result
        })
        sql = 'SELECT * FROM drinks';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.drinks = result;
        })
        sql = `SELECT * FROM users WHERE id=${req.params.id}`;
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            jsRes.user = result;
        })
        sql = 'SELECT * FROM items';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            let js = result
            for(let i = 0; i < js.length; i++){
                js[i].sideMeals = [];
                let ct = 0;
                for(let j = 0; j < sMeals.length; j++){
                    if(js[i].id == sMeals[j].itemId){
                        js[i].sideMeals[ct++] = sMeals[j];
                    }
                }
            }
            jsRes.items = js;
        })
        sql = `SELECT * FROM orders`;
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            if(result.length > 0){//console.log("Entered")
                let ord = result;
                for(let i = 0; i < result.length; i++){  
                    sql = `SELECT * FROM locations where id=${ord[i].locationId}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].userLocation = result[0].city + ", " + result[0].state + " " + result[0].country;
                    })
                    sql = `SELECT * FROM users where id=${ord[i].userId}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].username = result[0].firstName + " " + result[0].lastName
                    })
                    sql = `SELECT * FROM logistics where userId=${req.params.id} AND orderId=${ord[i].id}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        if(result.length > 0){
                            ord[i].isChefOrder = 1;
                        }
                        else{
                            ord[i].isChefOrder = 0;
                        }
                    })
                    sql = `SELECT * FROM orderDetails where orderId=${ord[i].id}`;
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err
                        ord[i].orderDetails = [];
                        for(let k = 0; k < result.length; k++){
                            ord[i].orderDetails[k] = result[k];
                        }
                        if(i == ord.length-1){
                            jsRes.orders = ord;
                            res.status(200).json(jsRes);
                        }
                    })
                    
                }
            }
            else{
                jsRes.orders = result;
                res.status(200).json(jsRes);
            }
        })
    }
    pickOrder(req,res){
        let dt = datetime.create();
        let claimedOrder = {};
        claimedOrder.userId = req.body.userId;
        claimedOrder.orderId = req.body.orderId;let dis = this;
        claimedOrder.pickupTime = dt.format('Y-m-d H:M:S');
        let sql = 'INSERT INTO logistics SET ?';let dbob = this.db;
        this.db.query(sql, claimedOrder,(err,result)=>{
            let sql = `UPDATE orders SET status = 'picked' WHERE id=${req.body.orderId}`;
            dbob.query(sql,(err,result)=>{
                dis.getOrders("Order picked successfully", "Action Failed. Order cannot be picked",res, "logistics",req);
            })         
        })
    }
    deliveredOrder(req,res){
        let dt = datetime.create();let dis = this;
        let sql = `UPDATE logistics SET deliveryTime = '${dt.format('Y-m-d H:M:S')}' WHERE userId=${req.body.userId} AND orderId=${req.body.orderId}`;let dbob = this.db;
        this.db.query(sql,(err,result)=>{
            let sql = `UPDATE orders SET status = 'delivered' WHERE id=${req.body.orderId}`;
            dbob.query(sql,(err,result)=>{
                dis.getOrders("Order delivering set successfully", "Action Failed. Order delivering couldn't be set",res,"logistics",req);
            })         
        })
    }
    getMeals(req,res){ 
        let cat; let sMeals; let fDrinks;
        let sql = 'SELECT * FROM itemCategory';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            cat = result
        })
        sql = 'SELECT * FROM sideItems';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            sMeals = result
        })
        sql = 'SELECT * FROM drinks';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            fDrinks = result
        })
        sql = 'SELECT * FROM items';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            let js = result
            for(let i = 0; i < js.length; i++){
                for(let j = 0; j < cat.length; j++){
                    if(js[i].category == cat[j].id){
                        js[i].mealType = cat[j].name;
                        break; 
                    } 
                }
                let cnt = 0; js[i].sideMeals = [];
                for(let k = 0; k < sMeals.length;k++){
                    if(sMeals[k].itemId == js[i].id){
                        js[i].sideMeals[cnt++] = sMeals[k];
                    }
                }
            }
            res.status(200).json({            
                drinks: fDrinks,
                meals: js,
            });
        })
    }
    deleteMeal(req,res){
        let dis = this;
        let cat;
        let sql = 'SELECT * FROM itemCategory';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            cat = result
        })
        sql = `DELETE FROM items WHERE id=${req.params.id}`;
        this.db.query(sql, (err,result)=>{
        if(err) throw err;
        sql = `SELECT * FROM items`;
        dis.db.query(sql,(err,result)=>{
            if(err) throw err;
            let js = result
            for(let i = 0; i < js.length; i++){
                for(let j = 0; j < cat.length; j++){
                    if(js[i].category == cat[j].id){
                        js[i].mealType = cat[j].name;
                        break;
                    } 
                }
            }
            res.status(200).json({
                status: 1,
                message: 'Item deleted successfully',
                items: js 
            })
        })
    })
    }
    deleteUser(req,res){
        let sql = `DELETE FROM users WHERE id=${req.params.id}`;
        let dis = this;
        this.db.query(sql,(err,result)=>{
            if(err){
                res.status(200).json({
                    status:0,
                    message: 'Unable to delete user'
                })
            }
            let sql = 'SELECT * FROM users';
            dis.db.query(sql, (err,result)=>{
                if(err) {
                    res.status(500).json({
                        status:0,
                        message: 'Server error'
                    })
                }
                res.status(200).json({
                    status:1,
                    message: 'User deleted successfully',
                    users: result
                })
            })
        })
    }
    deleteCompanyUser(req,res){
        let sql = `DELETE FROM businessWorkers WHERE id=${req.params.id}`;
        let dis = this;
        this.db.query(sql,(err,result)=>{
            if(err){
                res.status(200).json({
                    status:0,
                    message: 'Unable to delete user'
                })
            }
            let sql = 'SELECT * FROM businessWorkers';
            dis.db.query(sql, (err,result)=>{
                if(err) {
                    res.status(500).json({
                        status:0,
                        message: 'Server error'
                    })
                }
                res.status(200).json({
                    status:1,
                    message: 'User deleted successfully',
                    users: result
                })
            })
        })
    }
    deleteLocation(req,res){
        let sql = `DELETE FROM locations WHERE id=${req.params.id}`;
        let dis = this;
        this.db.query(sql,(err,result)=>{
            if(err){
                res.status(200).json({
                    status:0,
                    message: 'Unable to delete location'
                })
            }
            let sql = 'SELECT * FROM locations';
            dis.db.query(sql, (err,result)=>{
                if(err) {
                    res.status(500).json({
                        status:0,
                        message: 'Server error'
                    })
                }
                res.status(200).json({
                    status:1,
                    message: 'Location deleted successfully',
                    locations: result
                })
            })
        })
    }
    getLocations(req,res){
        let sql = 'SELECT * FROM locations';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            res.status(200).json({
                status:1,
                locations:result
            })
        })
    }
    getCoupons(req,res){
        let sql = 'SELECT * FROM coupons';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            res.status(200).json({
                status:1,
                coupons:result
            })
        })
    }
    addCoupon(req,res){
        let sql = "SELECT * FROM coupons WHERE number = '"+req.body.number+"'";
        let dbOb = this.db;
            this.db.query(sql,(err,result)=>{ if(err) throw err
            if(result.length > 0){
                res.status(200).json({
                    status:0,
                    message: "Action Failed. Category already exist"
                })
            }
            else{
                let dt = datetime.create();
                req.body.time = dt.format('Y-m-d H:M:S');
                let sql = 'INSERT INTO coupons SET ?';
                dbOb.query(sql,req.body,(err,result)=>{
                    if(err) throw err;
                    sql = 'SELECT * FROM coupons';
                    dbOb.query(sql,(err,result)=>{
                        //if(err) throw err
                        res.status(200).json({
                            status: 1,coupons: result,
                            message: "Coupon added successfully",
                            
                        }) 
                    })                 
                })
            }
        })
    }
    deleteCoupon(req,res){
        let sql = `DELETE FROM coupons WHERE id=${req.params.id}`;
        let dis = this;
        this.db.query(sql,(err,result)=>{
            if(err){
                res.status(200).json({
                    status:0,
                    message: 'Unable to delete coupon'
                })
            }
            let sql = 'SELECT * FROM coupons';
            dis.db.query(sql, (err,result)=>{
                if(err) {
                    res.status(500).json({
                        status:0,
                        message: 'Server error'
                    })
                }
                res.status(200).json({
                    status:1,
                    message: 'coupon deleted successfully',
                    coupons: result
                })
            })
        })
    }
    deleteBanner(req,res){
        let sql = `DELETE FROM banners WHERE id=${req.params.id}`;
        let dis = this;
        this.db.query(sql,(err,result)=>{
            if(err){
                res.status(200).json({
                    status:0,
                    message: 'Unable to delete coupon'
                })
            }
            let sql = 'SELECT * FROM banners';
            dis.db.query(sql, (err,result)=>{
                if(err) {
                    res.status(500).json({
                        status:0,
                        message: 'Server error'
                    })
                }
                res.status(200).json({
                    status:1,
                    message: 'banner deleted successfully',
                    banners: result
                })
            })
        })
    }
    placeOrder(req,res){
        let dt = datetime.create();
        let order = {}
            order.amount = req.body.cart.amount;
            order.isCouponApplied = req.body.cart.isCoupon;
            order.coupon = req.body.cart.coupon;
            order.isCorporateBuy = req.body.cart.isCorporateBuy;
            order.userId = req.body.delivery.user;
            order.status = "pending";
            order.time =  dt.format('Y-m-d H:M:S');
            order.locationId = req.body.delivery.location;
            order.deliverytime = req.body.delivery.date;
            order.number = req.body.delivery.number
            order.address = req.body.delivery.address;

        if(req.body.cart.isCorporateBuy==1){
            //Check if business code exist and if the employee is eligible before
            //doing the following
            let bizOrder = {}; let dbob = this.db;
            bizOrder.isSettled = 0;
            bizOrder.businessCode = req.body.cart.companyCode;

            let sql = `SELECT * FROM users WHERE userType='business' AND gender='${req.body.cart.companyCode}'`;
            this.db.query(sql,(err,result)=>{
                if(result.length > 0){
                    sql = `SELECT * FROM businessWorkers WHERE userId=${result[0].id} AND userEmail='${req.body.delivery.email}'`;
                    dbob.query(sql,(err,result)=>{
                        if(result.length > 0){
                            sql = 'INSERT INTO orders SET ?';  
                            dbob.query(sql,order,(err,result)=>{
                                    if(err) throw err;
                                    bizOrder.orderId = result.insertId;      
                                    sql = 'INSERT INTO businessOrder SET ?';
                                    dbob.query(sql,bizOrder,(err,result)=>{})
                                    for(let k = 0; k < req.body.orderItem.length; k++){
                                        req.body.orderItem[k].orderId = result.insertId;
                                        let sql2 = 'INSERT INTO orderDetails SET ?';
                                        dbob.query(sql2,req.body.orderItem[k],(err,result)=>{})
                                    }
                                    res.status(200).json({
                                        status:1
                                    })
                                });
                        }
                        else{
                            res.status(200).json({
                                status:3,
                                message: "Action Failed, user have not been assigned to company"
                            })
                        }
                    })
                }
                else{
                    res.status(200).json({
                        status:2,
                        message: "Action Failed. Business with code does not exit"
                    })
                }
            })
        }
        else{
            order.asPaid = 0;

            //Most likely data you will need
            var data = {}
            data.email = req.body.delivery.email;
            data.cardNumber = req.body.card.cardNumber;
            data.expireDate = req.body.card.expireDate;
            data.ccv = req.body.card.ccv;
            data.amount = req.body.cart.amount;
            //NB: Please don't redirect, just set isSuccessful and transaction reference
            //If you must redirect let me know
            data.successUrl = "/payment-successful";
            data.failedUrl = "/payment-failed"

            //Alter the two lines below for your payment
            let userpayment = new payment(data);
            userpayment.verifyPayment(userpayment.transactionRef)
            //
            if(userpayment.isSuccessful){
                order.asPaid = 1;
                order.transRef = userpayment.transactionRef;

                let sql = 'INSERT INTO orders SET ?';
                let dbob = this.db;
                this.db.query(sql,order,(err,result)=>{
                    if(err) throw err;

                    for(let k = 0; k < req.body.orderItem.length; k++){
                        req.body.orderItem[k].orderId = result.insertId;
                        let sql2 = 'INSERT INTO orderDetails SET ?';
                        dbob.query(sql2,req.body.orderItem[k],(err,result)=>{})
                    }
                    res.status(200).json({
                        status:1
                    })
                });
            }
            else{
                res.status(200).json({
                    status:0
                })
            }
        }
    }
    getAllBusinessData(req,res){
        let jsRes = {};let dbob = this.db;let uss;
        let sql = 'SELECT * FROM users';
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            uss = result
        })
        sql = `SELECT * FROM users WHERE id=${req.params.id}`;
        this.db.query(sql, (err,result)=>{
            if(err) throw err;
            if(result.length > 0){
                let us = result
                sql = `SELECT * FROM businessWorkers WHERE userId=${req.params.id}`;
                dbob.query(sql, (err,result)=>{
                    if(err) throw err;
                    jsRes.users = result;
                })       
                    if(us[0].gender != null){
                        //us[0].code = us[0].gender;
                        let cd = result[0].gender;
                        jsRes.user = us; //console.log(cd + "g")
                        //Sql JOIN query not working for my local sql server
                        //sql = `SELECT orderId FROM businessOrder WHERE businessCode='${result[0].code}' RIGHT JOIN orders ON businessOrder.orderId=orders.id`;
                        sql = 'SELECT * FROM orders';
                        dbob.query(sql,(err,result)=>{
                            let ords = result;
                            sql = `SELECT * FROM businessOrder WHERE businessCode='${cd}'`;
                            dbob.query(sql, (err,result)=>{
                                if(err) throw err;
                                jsRes.orders = []; 
                                let orderCnt = 0;let totalAmount = 0; //console.log(result.length)
                                for(let k = 0; k < result.length; k++){ //console.log("good")
                                    for(let e = 0; e < ords.length; e++){
                                        if(result[k].orderId==ords[e].id){
                                            for(let j = 0; j < uss.length; j++)
                                                if(uss[j].id == ords[e].userId)
                                                    ords[e].email = uss[j].email;
                                                
                                            jsRes.orders[orderCnt] = ords[e];
                                            
                                            orderCnt++;
                                            totalAmount += ords[e].amount;
                                        }
                                    }
                                } 
                                let settle = {}
                                settle.orderCnt = orderCnt;
                                settle.totalOrder = totalAmount;
                                let setCnt = 0; let setAmount = 0; let lastPaid = null;
                                sql = `SELECT * FROM businessSettlement WHERE userId=${req.params.id}`;
                                dbob.query(sql,(err,result)=>{
                                    if(err)throw err
                                    for(let u = 0; u < result.length; u++){
                                        setCnt++;
                                        setAmount += result[u].amount;
                                        lastPaid = result[u].time
                                    }
                                    settle.setCnt = setCnt;
                                    settle.setAmount = setAmount;
                                    settle.lastPaid = lastPaid;
                                    jsRes.settlement = settle;
                                    res.status(200).json(jsRes)
                                })
                            })
                        })    
                    }
                    else{
                        us[0].code = null; 
                        jsRes.user = us;
                        let settle = {}
                        settle.orderCnt = 0;settle.lastPaid = null;
                        settle.totalOrder = 0;
                        settle.setCnt = 0;
                        settle.setAmount = 0;
                        
                        jsRes.settlement = settle;
                        res.status(200).json(jsRes)
                    }
                
            }
            else{
                res.status(200).json({
                    status:0,
                    message: 'Action Failed. User does not exist'
                })
            }
        })      
    }
    addCompanyUser(req,res){
        let sql = "SELECT * FROM businessWorkers WHERE userEmail = '"+req.body.userEmail+"'";
        let dbob = this.db;
            this.db.query(sql,(err,result)=>{ if(err) throw err
            if(result.length > 0){
                res.status(200).json({
                    status:0,
                    message: "Action Failed. User already exist"
                })
            }
            else{
                let bizcode = {};
                bizcode.userId = req.body.userId;
                bizcode.userEmail = req.body.userEmail;
                sql = 'INSERT INTO businessWorkers SET ?';
                dbob.query(sql,bizcode,(err,result)=>{
                    if(err) throw err;
                    sql = "SELECT * FROM businessWorkers";
                    dbob.query(sql,(err,result)=>{
                        if(err) throw err;
                        res.status(200).json({
                            status: 1,
                            users: result,
                            message: "Business user added successfully"
                        })
                    })
                })
            }
        })
    }
    assignCompanyCode(req,res){
        let bizcode = {};
        bizcode.userId = req.body.userId;
        bizcode.code = req.body.code;
        bizcode.isActive = 1;
        let sql = `UPDATE users SET gender = '${req.body.code}' WHERE id=${req.body.userId}`;
        this.db.query(sql,(err,result)=>{
            if(err) throw err;
            res.status(200).json({
                status: 1,
                message: "Business code assigned successfully"
            })
        })
    }
    makeSettlement(req,res){
        let data = {}
        data.email = req.body.email;
        data.cardNumber = req.body.cardNumber;
        data.expireDate = req.body.expireDate;
        data.ccv = req.body.ccv;

        //Alter the two lines below for your payment
        let userpayment = new payment(data);
        userpayment.verifyPayment(userpayment.transactionRef)
        //
        if(userpayment.isSuccessful){
            let dt = datetime.create();
            let bizSet = {}
            bizSet.time =dt.format('Y-m-d H:M:S');
            bizSet.amount = req.body.amount;
            bizSet.userId = req.body.userId;
            let sql = 'INSERT INTO orders SET ?';
            this.db.query(sql,(err,result)=>{
                if(err)throw err
                res.status(200).json({
                    status:1,
                    message: "Payment made successfully"
                })
            })
        }
        else{
            res.status(200).json({
                status: 1,
                message: 'Action Failed. Payment could not be made, please try again later'
            })
        }
    }
    async confirmUser(req,res){
        let sql = `SELECT * FROM users`;
        this.db.query(sql,(err,result)=>{
            let re = result;
            for(let i = 0; i < result.length; i++){
                let id = result[i].id
                crypt.compare(id.toString(),req.body.id,function(err,result){
                    if(err) throw err
                    if(result){
                        let sql =  `UPDATE users SET isEmailConfirmed=1 WHERE id=${id}`;
                        this.db.query(sql,(err,result)=>{
                            if(err)throw err
                            if(result.length > 0){
                                res.status(200).json({
                                    status:1
                                })
                            }
                        })
                    }
                    else{
                        if(i == re.length-1){
                            res.status(200).json({
                                status: 0
                            })
                        }
                    }
                })
            }
        })
    }
}

module.exports = dbc;

//module.exports = db;