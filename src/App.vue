<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    watch: {
      $route(to, from) {
        this.routerMove();
      }
    },
    methods: {
      routerMove() {
        // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
        let isBack = this.$router.isBack;
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
        this.$router.isBack = false;
      }
    }
  }
</script>

<style lang="scss">
  @import './style/common';

  .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
    transform: translateX(0);
    transition: all 0.2s;
    opacity: 1;
    width: 100vw !important;
  }

  .slide-left-enter, .slide-right-leave-to {
    transform: translateX(100vw);
    opacity: 0;
    width: 100vw !important;
  }

  .slide-left-leave-to, .slide-right-enter {
    transform: translateX(-100vw);
    opacity: 0;
    width: 100vw !important;
  }

</style>
