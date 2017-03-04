<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <div class="weui-tab">
      <div class="weui-tabbar">
          <router-link to="/" @click.native='click("home")' class="weui-tabbar__item" :class="on.home">
              <img :src="logoSrc" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">首页</p>
          </router-link>
          <router-link to="/media" @click.native='click("media")' class="weui-tabbar__item" :class="on.media">
              <img :src="logoSrc" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">书影音</p>
          </router-link>
          <router-link to="/team" @click.native='click("team")' class="weui-tabbar__item" :class="on.team">
              <img :src="logoSrc" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">小组</p>
          </router-link>
          <router-link to="/me" @click.native='click("me")' class="weui-tabbar__item" :class="on.me">
              <img :src="logoSrc" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">我的</p>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import logoSrc from './assets/icon_tabbar.png'
// import weui from 'weui.js'

export default {
  name: 'app',
  data () {
    return {
      logoSrc: logoSrc,
      on: {
        'home': 'weui-bar__item_on'
      }
    }
  },
  methods: {
    click: function (data) {
      this.on = {}
      this.on[data] = 'weui-bar__item_on'
    }
  }
}
</script>

<style scoped>
.weui-tabbar {
  position: fixed;  
  bottom: 0;
}
</style>
