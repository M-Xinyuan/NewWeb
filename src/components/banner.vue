<template>
    <!-- <div class="banner">
            </div> -->
    <el-carousel indicator-position="none">
    <el-carousel-item v-for="item in 4" :key="item">
     
    </el-carousel-item>
  </el-carousel>

</template>



<style lang="scss">
.el-carousel,.el-carousel__container{
    height: 100% !important;
}
.el-carousel__item{
 width: 100%;
    min-height:100%;
    background-image:url(../assets/img/banner1.png);
    overflow:hidden;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
}
.el-carousel__item h3 {

    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.banner{
    width: 100%;
    min-height:100%;
    background-image:url(../assets/img/banner1.png);
    overflow:hidden;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
}
</style>