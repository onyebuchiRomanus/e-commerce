<template>
    <div>
        <div class="content">
            <div>
                <div><img src="../Images/logo.png" width="98" height="106"><br>
                    <p style="display:inline-block;margin:0px" class="vector"><img :src="require(`../Images/${imageUrl}`)" width="65" height="55"></p></div>
                    <p style="color:#707070;text-align: center;font-size: 20px;font-family: Arial, Helvetica, sans-serif;" id="p_emVer">Email verified successfully</p>
            </div>
                
        </div>
    </div>   
</template>
<style scoped>
     body{margin:0px !important;padding: 0px !important;}
    *{box-sizing: border-box}
    .content{width:100%;background:rgba(0, 0, 0, 0.5);display: flex; justify-content: center;align-items: center;}
    .content > div{width:428px; height: 335px;border:3px solid #e9e9eb;background-color: #fff;}
    .content > div .vector {background-color: #3bb54a;width:110px;height:110px;border-radius: 50%;padding-top:30px}
    .content > div > div{text-align: center;}
</style>
<script>
    export default{
        name:'email-successful',
        data(){
            return{
                imageUrl:"Vector.png",
                url: "http" + "://localhost" +":5000"
            }
        },
        mounted(){
            var c = document.querySelector(".content");
            c.style.height = (screen.availHeight - 50).toString() + "px";
            if(location.href.indexOf("localhost:8080") > 0){         
                //alert(this.url);
            }
            else{
                //this.url = "https://" + "950Meals.com";
                this.url = process.env.VUE_APP_URL;
            }

            let xhhtp = new XMLHttpRequest();let obj = {id: location.href.split("=")[1]}
            xhhtp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                    let res = JSON.parse(this.responseText);
                     if(res.status==0){
                        this.imageUrl = "Vector2.png";
                        document.getElementById("p_emVer").innerHTML = "Email verification failed";
                    } 
                }
            }
            xhhtp.open("POST", this.url + '/api/confirmuser/', true); 
            xhhtp.setRequestHeader("Content-type", "application/json"); 
            xhhtp.send(JSON.stringify(obj));
        }
    }
</script>
