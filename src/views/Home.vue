<template>
  <div class="home">
    <Banner></Banner>
    <VideoH></VideoH>
    <div class="higherBox">
      <div class="title">
        <span>高等教育</span>
        <span>HIGHER EDUCATION</span>
      </div>
      <div class="higherContent">
        <div class="divbg"></div>
        <!-- <el-image
          style="width: 611px; height: 462px"
          src="http://www.cathaymedia.com/meiyu/046.png"
          fit="cover"
        ></el-image> -->
        <div class="rightFont">
          <p class="rightTitle">
            <span>南京传媒学院</span><span>进入学校></span>
          </p>
          <div class="fontCont">
            <p>
              南京传媒学院是经国家教育部批准，以独立法人新型民办大学的办学模式，于2004年在江苏省南京市设立的一所独立学院，也是江苏省唯一一所传媒艺术类应用型大学。董事会坚持公益办学、回报社会的初心宗旨，期冀将南广办成中国一流的传媒大学、具有国际影响力的百年名校。
            </p>

            <p>
              作为江苏省唯一一所传媒类应用型本科高校和国内传媒艺术应用型人才培养的重镇，南广学院现已拥有全日制本科生1.3万人，为行业培养输送了3万多名毕业生。毕业生年均就业率达99%以上，就业竞争力连续6年位居江苏同类院校首位。其中，涌现出一批以知名演员倪妮、白客等为代表的文艺新星，以“福布斯亚洲地区30岁以下商业领袖”郑超为代表一批创业明星校友，更有一大批优秀校友在央视等国家级媒体及知名文化传媒机构就业。学校招生成绩常年位居全国艺术类院校前茅，2017年学校艺术类专业校考报名人数达5.8万人、艺术类专业录取率达4%，2015/2016、
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 美育中心 -->
    <div class="kidBox">
      <div class="title">
        <span>美育中心</span>
        <span>CATHAY KIDS</span>
      </div>
      <div class="kidContent">
        
        <div class="leftfont">
          <p>
            华夏视听艺术少儿教育是华夏视听教育生态的重要板块。以艺术启蒙和美育教育为载体，致力于为中国孩子提供优质的艺术教育服务，推动素质教育发展。
          </p>
          <p>
            华夏视听艺术成长中心 （Cathay
            Kids）汇聚儿童教育领域专家及国内外专业艺术院校人才，根据儿童身心发展规律，创新研发系统化的戏剧、音乐、舞蹈、钢琴、美术等综合艺术课程，激发孩子对艺术的向往与热爱，提高感受美、欣赏美，创造美的能力，提升审美鉴赏力与艺术素养。
            同时，华夏视听艺术成长中心 （Cathay
            Kids）通过丰富的小剧团、合唱团、画展、艺术节等形式，为孩子提供丰富艺术呈现的舞台，让每个孩子在艺术中表达自我、自信成长！
          </p>
        </div>
        <div class="rightbg"></div>
      </div>
    </div>

    <Selection></Selection>
  </div>
</template>

<script>
import Banner from "../components/banner.vue";
import Selection from '../components/selection.vue';
import VideoH from "../components/video.vue";
export default {
  components: {
    Banner,
    VideoH,
    Selection,
  },
};
</script>
<style lang="scss">
.title {
  width: 100%;
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
.higherBox {
  width: 100%;
  background-image: url(../assets/img/higher_bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.higherContent {
  width: 100%;
  min-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  .divbg {
    width: 611px;
    height: 462px;
    transition: all 0.4s;
    -moz-transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    background-image: url(../assets/img/higbg.png);
    background-repeat: no-repeat; /* 不会重复 */
    background-position: center;
    background-size: 100% 100%;
  }
  .divbg:hover {
    background-size: 110% 110%;
  }
}
.rightFont {
  width: 669px;
  height: 420px;
  margin-left: 92px;
  .rightTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    :nth-child(1) {
      font-size: 40px;
      font-family: PingFang SC, PingFang SC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #213080;
    }
    :nth-child(2) {
      font-size: 24px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #213080;
    }
  }
  .fontCont {
    height: 286px;
    margin-top: 76px;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
    line-height: 30px;
    letter-spacing: 0px;
    overflow: hidden;
    p {
      text-indent: 2rem;
    }
  }
}
.kidBox {
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 81px;
}
.kidContent {
  width: 1420px;
  height: auto;
  background-image: url(../assets/img/kidbg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 35px 37px 107px;
  box-sizing: border-box;
  position: relative;
  left:50%;
  margin-left: -710px;
  .rightbg {
    width: 589px;
    height: 401px;
    transition: all 0.4s;
    -moz-transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    background-image: url(../assets/img/kid_01.png);
    background-repeat: no-repeat; /* 不会重复 */
    background-position: center;
    background-size: 100% 100%;
  }
  .rightbg:hover {
    background-size: 110% 110%;
  }
  .leftfont {
    width: 539px;
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
    line-height: 30px;
    letter-spacing: 0px;
    p{
      text-indent: 2rem;
    }
  }
}
</style>
