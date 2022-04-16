const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dbc = require('./dbcom');
const security = require('./security')

app.use(cors())
app.use(bodyParser.json());
let isSet = true; //Set this to false to reconfigure database
let isSeed = false; //Set this to true to seed database
const db = new dbc();
if(!isSet){  
    //Reconfigure db here
    db.writeDbSchema();
}
if(isSeed){  
    db.seedDb();//Seed db here
}
 
security.limitRequest(app,15,100);



//Define routes 
app.post('/login',(req,res)=>{
    db.loginUser(req,res);
})
app.post('/api/auth/register',(req,res)=>{
    db.registerUser(req,res);
})

app.get('/api/getadmindata',(req,res)=>{
    db.getAllAdminData(req,res);
})

app.post('/api/additem',(req,res) =>{
    db.addItem(req,res);
})
app.post('/api/addsideitem',(req,res)=>{
    db.addSideItem(req,res)
})
app.post('/api/adddrink',(req,res)=>{
    db.addDrink(req,res);
})
app.post('/api/addMeat',(req,res)=>{
    db.addMeat(req,res);
})
app.post('/api/adduser',(req,res)=>{
    db.addUser(req,res);
})
app.post('/api/addlocation',(req,res)=>{
    db.addLocation(req,res);
})
app.post('/api/addcategory',(req,res)=>{
    db.addCategory(req,res)
})
app.get('/api/getmeals',(req,res)=>{
    db.getMeals(req,res);
})
app.get('/api/deletemeal/:id',(req,res)=>{
    db.deleteMeal(req,res);
})
app.get('/api/deleteuser/:id',(req,res)=>{
    db.deleteUser(req,res);
})
app.get('/api/deletelocation/:id',(req,res)=>{
    db.deleteLocation(req,res);
})
app.get('/api/getlocations/',(req,res)=>{
    db.getLocations(req,res);
})
app.get('/api/getcoupons',(req,res)=>{
    db.getCoupons(req,res);
})
app.post('/api/addcoupon',(req,res)=>{
    db.addCoupon(req,res);
})  
app.get('/api/deletecoupon/:id',(req,res)=>{
    db.deleteCoupon(req,res);
})
app.post('/api/placeorder',(req,res)=>{
    db.placeOrder(req,res);
})
app.post('/api/addbanner',(req,res)=>{
    db.addBanner(req,res);
})
app.get('/api/deletebanner/:id',(req,res)=>{
    db.deleteBanner(req,res);
})
app.get('/api/getchefdata/:id',(req,res)=>{
    db.getChefData(req,res);
})
app.get('/api/getriderdata/:id',(req,res)=>{
    db.getRiderData(req,res);
})
app.post('/api/claimorder',(req,res)=>{
    db.claimOrder(req,res);
})
app.post('/api/readyorder',(req,res)=>{
    db.readyOrder(req,res);
})
app.post('/api/pickorder',(req,res)=>{
    db.pickOrder(req,res);
})
app.post('/api/deliveredorder',(req,res)=>{
    db.deliveredOrder(req,res);
})
app.get('/api/getallbusinessdata/:id',(req,res)=>{
    db.getAllBusinessData(req,res);
})
app.post('/api/assigncompanycode',(req,res)=>{
    db.assignCompanyCode(req,res);
})
app.post('/api/addcuser',(req,res)=>{
    db.addCompanyUser(req,res);
})
app.get('/api/deletecuser/:id',(req,res)=>{
    db.deleteCompanyUser(req,res);
})
app.post('/api/makesettlement',(req,res)=>{
    db.makeSettlement(req,res);
})
app.post('/api/confirmuser',(req,res)=>{
    db.confirmUser(req,res);
})
app.get('/*', (req,res) =>{ 
    //res.send('<h1>HELLO WORLD!m</h1>');
    //res.redirect('http://localhost:8080')
    
    res.sendFile(path.join(__dirname,'server/public','index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () =>{console.log(`Server started on port ${port}`)})