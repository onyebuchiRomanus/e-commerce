<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted(){
    window.onclick = function (event) {
    var modal = document.querySelector(".modal");
    var modalContent = document.querySelectorAll(".modal-content");
    if (event.target == modal) {
        modal.style.display = "none";
        for (let i = 0; i < modalContent.length; i++) {
            modalContent[i].style.display = "none";
        }
    }
    var modal2 = document.querySelector(".modal2");
    var modalContent2 = document.querySelectorAll(".modal-content2");
    if (event.target == modal2) {
        modal2.style.display = "none";
        for (let i = 0; i < modalContent2.length; i++) {
            modalContent[i].style.display = "none";
        }
    }
}
  },
  methods:{
    

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
