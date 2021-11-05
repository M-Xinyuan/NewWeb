<template>
  <div class="selectBox">
    <div class="kid_title">
      <span>媒体知识产权精选</span>
      <span>Selection Of Media IP</span>
    </div>

    <!-- <el-carousel :interval="4000" type="card" height="431px !important" id="selectscu">
    <el-carousel-item v-for="item in selsctList" :key="item">
        <img :src='item.imgUrl'>
    </el-carousel-item>
  </el-carousel> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
        selsctList:[
            {
                imgUrl:require("../assets/img/p21.png"),
                selTitle:"雍正皇帝",
                type:"清宫爱情（IP储备剧）",
                viator:"筹备中"
                
            },
            {
                imgUrl:require("../assets/img/p21.png"),
                selTitle:"雍正皇帝",
                type:"清宫爱情（IP储备剧）",
                viator:"筹备中"
                
            },
            {
                imgUrl:require("../assets/img/p21.png"),
                selTitle:"雍正皇帝",
                type:"清宫爱情（IP储备剧）",
                viator:"筹备中"
                
            }
        ]
    }
  }
}

</script>

<style lang="scss">
.selectBox {
  width: 100%;
  background-image: url(../assets/img/sele_bg.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: #ffffff;
}
.kid_title {
  width: 100%;
  height: auto;
  text-align: center;
  padding: 79px 0;
  :nth-child(1) {
    font-size: 36px;
    font-family: PingFang SC, PingFang SC-Medium;
    font-weight: 500;
    color: #FFFFFF;
    margin-right: 21px;
  }
  :nth-child(2) {
    opacity: 0.3;
    font-size: 30px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #FFFFFF;
  }
}

 #selectscu .el-carousel__item{
    text-align: center;
  }
  
   #selectscu .el-carousel__item:nth-child(2n) {

  }
  
   #selectscu .el-carousel__item:nth-child(2n+1) {

  }

  #selectscu{
  width: 1184px;
  position: relative;
  left:50%;
margin-left: -592px;
  }
  #selectscu .el-carousel__mask{
      opacity:0;

  }
</style>
