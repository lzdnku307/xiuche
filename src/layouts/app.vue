<template>
  <div class="app">
    <div class="app-page">
     <nuxt />
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import footerBar from '@/components/footerBar';

export default {
    components: {
        footerBar,
  },
    data() {
        return {}
    },
    computed: {
        ...mapState('appinfo', [
            'title'
        ])
    },
    methods: {
       
    },
    created() {
        console.log(this.$route.meta)
    }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';
@import '~assets/css/func';
  .app {
    background: #F4F5F7;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
  .app-page {
    overflow: auto;
    flex: 1 1 100%;
  }
</style>
