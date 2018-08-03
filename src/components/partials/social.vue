<template>
  <div class="content">
    <span class="icon tooltip is-tooltip-top-desktop" v-bind:class="['is-size-' + size]" data-tooltip="xmodulus">
      <a href="https://github.com/xmodulus" class="fab fa-github-alt"></a>
    </span>
    <span class="icon tooltip is-tooltip-top-desktop" v-bind:class="['is-size-' + size]" data-tooltip="xmodulus">
      <a href="https://linkedin.com/in/xmodulus" class="fab fa-linkedin-in"></a>
    </span>
    <!--<span class="icon tooltip is-tooltip-top-desktop" v-bind:class="['is-size-' + size]" data-tooltip="@codertweets">-->
      <!--<a href="https://twitter.com/codertweets" class="fab fa-twitter"></a>-->
    <!--</span>-->
    <span class="icon tooltip is-tooltip-top-desktop" v-bind:class="['is-size-' + size]" data-tooltip="modulus#1400">
      <a class="fab fa-discord"></a>
    </span>
    <span class="icon tooltip is-tooltip-top-desktop" v-bind:class="['is-size-' + size]" data-tooltip="me@ziz.ninja">
      <a href="mailto:me@ziz.ninja" class="fas fa-at"></a>
    </span>
    <span class="icon tooltip is-tooltip-top-desktop" v-bind:class="['is-size-' + size]" data-tooltip="@modulus">
      <a href="https://t.me/modulus" class="fab fa-telegram-plane"></a>
    </span>
    <span class="icon tooltip is-tooltip-top-desktop" v-bind:class="['is-size-' + size]" data-tooltip="Hamilton, New Zealand">
      <a class="fas fa-map-pin"></a>
    </span>
  </div>
</template>

<script>
  export default{
    props: {
      size: {
        type: Number,
        default: 3
      }
    },
    name: 'social'
  }
</script>

<style scoped>
  .icon {
    margin:0.25em 0.5em;
  }
</style>
