<template>
  <div id="app">
    <div id="nav">
      <span @click="langChange('zh')"></span><span
        @click="langChange('en')"
        ></span
      >
    </div>
    <!-- <div>内容：{{$t('publicHearder.tab1')}}</div> -->
    <router-view />
  </div>
</template>
<script>
export default {
  // 语言切换
  methods: {
  langChange(e) {
    console.log(e);
    localStorage.setItem("lang", e);
    this.$i18n.locale = e;
  },
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body,#app,.home{
  height: 100%;
}

</style>
