<template>
  <div class="carousel-view" v-if="items.length != 0">
    <transition-group
      class="carousel"
      tag="div">
      <div
        v-for="item in items"
        class="slide"
        :key="item.src">
        <img :src="item.src">
        <span v-if="item.caption" class="caption"> {{ item.caption }} </span>
      </div>
    </transition-group>
    <div class="carousel-controls">
      <span class="icon is-size-4" @click="previous" style="margin-right:2em;">
        <i class="fas fa-chevron-left"></i>
      </span>
      <span class="icon is-size-4" @click="next" style="margin-left:2em;">
        <i class="fas fa-chevron-right"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['slides'],
    data () {
      return {
        items: [],
      }
    },
    mounted(){
      this.items = [].concat(this.slides);
    },
    methods: {
      next () {
        const first = this.items.shift();
        this.items = this.items.concat(first)
      },
      previous () {
        const last = this.items.pop();
        this.items = [last].concat(this.items)
      }
    }
  }
</script>

<style scoped>
  .carousel-view {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 20em;
    padding-bottom:1em;
  }
  .slide {
    position:relative;
    flex: 0 0 20em;
    height: 17em;
    width: 25em;
    display: block;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
  }
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .caption {
    position:absolute;
    width: 100%;
    line-height: 1.2em;
    padding: 0.5em;
    color: black;
    bottom: 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.6);
  }
  .carousel-controls{
    align-items: center;
    margin-top: 0.5em;
  }
  .slide:first-of-type {
    opacity: 0;
  }
  .slide:last-of-type {
    opacity: 0;
  }
  @media only screen and (max-device-width: 768px) {

  }
</style>
