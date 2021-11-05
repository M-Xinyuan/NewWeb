<template>
 <div class="banner">

    <el-carousel indicator-position="none" id="bannerscu">
      <el-carousel-item v-for="item in 4" :key="item"> </el-carousel-item>
    </el-carousel>
    <div class="botbut">
      <img src="../assets/img/bombut.png">
      <span>向下滑动了解更多</span>
      </div>
  </div>
</template>

<style lang="scss">
.el-carousel,
.el-carousel__container {
  height: 100% !important;
}
#bannerscu .el-carousel__item {
  width: 100%;
  min-height: 100%;
  background-image: url(../assets/img/banner1.png);
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
.banner {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
}
.botbut{
  width:120px;
  height:auto;
  position:absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -60px;
  z-index: 99;
  text-align:center;
  span{
    display: block;
    font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
font-weight: 400;
text-align: center;
color: #ffffff;
line-height: 36px;
  }
  img{
    width: 48px;
    height:auto;
  }
}

</style>
