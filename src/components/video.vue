<script src="/release/libs/hls.min.0.13.2m.js"></script>
<script src="/release/tcplayer.v4.2.2.min.js"></script>
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
        <img
          :src="item.bgimg"
          class="videimg"
          :style="index != CurrentIndex ? shadow : noshadow"
        />
        <span>{{ item.videoTitle }}</span>
        <img
          src="../assets/img/video_big.png"
          class="bo"
          v-if="index != CurrentIndex"
        />

        <transition name="el-fade-in">
          <div
            class="coverage"
            v-if="index == CurrentIndex"
            @click="play(item.videoUrl)"
          >
            <div class="play_button">
              播放视频<img src="../assets/img/video_sit.png" />
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!--视频播放容器-->
    <div class="videoBox" v-if="isshow">
      <div class="vibox">
        <img src="../assets/img/close.png" class="close" @click="close()" />
        <VTcPlayer
          ref="tcPlayer"
          :options="options"
          @load="onLoad"
          @play="onPlay"
          @pause="onPause"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { VTcPlayer } from "v-tcplayer";
export default {
  components: {
    VTcPlayer,
  },
  data() {
    return {

      options: {
        hlsUrl: "https://lib.baomitu.com/hls.js/0.8.9/hls.min.js", // 0.0.5增加
        width: 950,
        height: 600,
        autoplay: true,
        m3u8: "", //动态渲染数据时候<VTcPlayer v-if="isshow" ref="tcPlayer" :options="options" @load="onLoad" @play="onPlay" />
      },
      isshow: false, //加载完成数据后，再绑定为true

      CurrentIndex: -1,
      shadow: "box-shadow:10px 10px 1px #d2dcea",
      noshadow: "box-shadow:2px 2px 5px #d2dcea",
      bodyHeight: "margin-top:" + document.body.clientHeight + "px",
      videoList: [
        {
          bgimg: require("../assets/img/p21.png"),
          videoTitle: "华夏视听宣传片",
          videoUrl:
            "http://1304237668.vod2.myqcloud.com/9355fb32vodtranscq1304237668/cfd6d3e25285890811951141171/v.f100020.mp4",
        },
        {
          bgimg: require("../assets/img/p21.png"),
          videoTitle: "倚天屠龙记",
          videoUrl:
            "http://1304237668.vod2.myqcloud.com/9355fb32vodtranscq1304237668/cfd6d3e25285890811951141171/v.f100021.mp4",
        },
        {
          bgimg: require("../assets/img/p21.png"),
          videoTitle: "封神演绎",
          videoUrl:
            "http://1304237668.vod2.myqcloud.com/9355fb32vodtranscq1304237668/cfd6d3e25285890811951141171/v.f100020.mp4",
        },
      ],
    }; 
  },
  computed: {
    player() {
      // tcPlayer实例

      return this.$refs.tcPlayer.vTcPlayer;
    },
  },

  methods: {
    onLoad() {},
    // 视频点击播放
    onPlay() {},
    // 视频点击暂停
    onPause() {},
    // 切换

    changeMask(index) {
      //鼠标划过
      //console.log(index);

      this.CurrentIndex = index;
    },
    play(url) {
      this.options.m3u8 = url;
      this.isshow = true;
      this.player.play();
    },
    close() {
      this.isshow = false;
    },
  },
};
</script>

<style lang="scss">
@import "/release/tcplayer.min.css";

.videobox {
  width: 100%; 
  background-color: #ffffff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-bottom: 80px;
}

.video_list {
  width: 100%;

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
      img {
        width: 9px;
        height: 11px;
        margin-left: 10px;
      }
    }
  }
}
.videoBox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgb(0 0 0 / 37%);
  display: flex;
  justify-content: center;
  align-items: center;
  .vibox {
    position: relative;
    img {
      position: absolute;
      width: 40px;
      height: auto;
      top: -4%;
      right: -2%;
      z-index: 9;
      cursor: pointer;
    }
  }
}
</style>
