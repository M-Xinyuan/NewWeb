<template>
  <div class="videobox" :style="bodyHeight">
    <div class="title">
      <span>光影留声</span>
      <span>VIDEO</span>
    </div>
    <div class="video_list">
      <div
        v-for="(item, index) in videoList"
        :key="index"
        @mouseenter="changeMask(index)"
        @mouseleave="CurrentIndex = -1"
      >
        <img :src="item.bgimg" class="videimg" />
        <span>{{ item.videoTitle }}</span>
        <img
          src="../assets/img/video_big.png"
          class="bo"
          v-if="index != CurrentIndex"
        />

        <transition name="el-zoom-in-bottom">
          <div class="coverage" v-if="index == CurrentIndex" @click="goDetail(index)">
            <div class="play_button">播放视频<img src="../assets/img/video_sit.png"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      CurrentIndex: -1,
      bodyHeight: "margin-top:" + document.body.clientHeight + "px",
      videoList: [
        {
          bgimg: require("../assets/img/p21.png"),
          videoTitle: "华夏视听宣传片",
        },
        {
          bgimg: require("../assets/img/p21.png"),
          videoTitle: "倚天屠龙记",
        },
        {
          bgimg: require("../assets/img/p21.png"),
          videoTitle: "封神演绎",
        },
      ],
    };
  },
  methods: {
    goDetail(index) {
      //播放视频
      console.log(index);
    },
    changeMask(index) {
      //鼠标划过
      console.log(index);
      this.CurrentIndex = index;
    },
  },
};
</script>

<style lang="scss">
.videobox {
  width: 100%;
  min-width: 1300px;
  height: 100%;
  background-color: #ffffff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.title {
  width: 100%;
  min-width: 1300px;
  height: auto;
  text-align: center;
  padding: 79px 0;
  :nth-child(1) {
    font-size: 36px;
    font-family: PingFang SC, PingFang SC-Medium;
    font-weight: 500;
    color: #000000;
    margin-right: 21px;
  }
  :nth-child(2) {
    opacity: 0.3;
    font-size: 30px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #000000;
  }
}
.video_list {
  width: 100%;
  min-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/img/video_bg.png);
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: 1470px auto;
  background-position-x: center;
  padding-bottom: 50px;
  div {
    width: 442px;
    height: auto;
    margin-right: 38px;
    position: relative;
    .videimg {
      width: 442px;
      height: 249px;
      border-radius: 10px;
      box-shadow: 10px 10px 1px #d2dcea;
    }
    .bo {
      width: 25px;
      height: 31px;
      position: absolute;
      top: 106px;
      left: 50%;
      margin-left: -12.5px;
    }
    span {
      font-size: 18px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #000000;
      line-height: 50px;
      letter-spacing: 9px;
      display: block;
      margin-top: 32px;
    }
    .coverage {
      width: 442px;
      height: 249px;
      border-radius: 10px;
      box-shadow: 10px 10px 1px #d2dcea;
      position: absolute;
      background: rgba(43, 42, 42, 0.6);
      left: 0;
      top: 0px;
    }
    .play_button {
      width: 144px;
      height: 38px;
      background: #ebebeb;
      border-radius: 19px;
      position: absolute;
      left: 60%;
      top: 80%;
      font-size: 14px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      color: #000000;
      text-align: center;
      line-height: 38px;
      cursor: pointer;
      img{
        width: 9px;
        height: 11px;
        margin-left: 10px;
      }
    }
  }
}
</style>
