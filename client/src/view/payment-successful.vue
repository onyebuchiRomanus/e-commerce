<template>
        <div class="content">
            <div>
                <div><img src="../Images/logo.png" width="98" height="106"><br>
                    <p style="display:inline-block;margin:0px" class="vector"><img src="../Images/Vector.png" width="65" height="55"></p></div>
                    <p style="color:#707070;text-align: center;font-size: 20px;font-family: Arial, Helvetica, sans-serif;">Your order was successfull</p>
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
        name:'payment-successful',
        data(){
            return{

            }
        },
        mounted(){
            var c = document.querySelector(".content");
            c.style.height = (screen.availHeight - 50).toString() + "px";
        }
    }
</script>
