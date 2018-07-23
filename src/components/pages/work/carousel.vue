<template>
  <div style="padding:0 1em;">
    <carousel
      :perPage="1"
      :autoplay="true"
      :autoplayHoverPause="true"
      :autoplayTimeout="3000"
      :navigationEnabled="true"
      :navigationClickTargetSize="12"
      :navigationNextLabel="nextLabel"
      :navigationPrevLabel="prevLabel">
      <slide v-for="image in slides" :key="image.url">
        <img :src="image.src">
        <span v-if="image.caption" class="caption"> {{ image.caption }} </span>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel';
  export default {
    props: ['slides'],
    components: {Carousel, Slide},
    data () {
      return {
        items: [],
        nextLabel: `<span class="icon is-size-4">
                      <i class="fas fa-chevron-right"></i>
                    </span>`,
        prevLabel: `<span class="icon is-size-4">
                      <i class="fas fa-chevron-left"></i>
                    </span>`,
      }
    },
    mounted(){
      this.items = [].concat(this.slides);
    },
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 45vh;
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
  @media only screen and (max-device-width: 768px) {

  }
</style>
