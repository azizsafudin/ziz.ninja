<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container notification" v-bind:class="['is-' + project.colour]" @click.stop>
          <button class="delete" @click="$emit('close')"></button>
          <h3 class="title">{{project.title}}</h3>
          <h5 class="subtitle" :inner-html.prop="project.subtitle"></h5>
          <div class="columns">
            <div class="column">
              <div class="content" :inner-html.prop="project.description"></div>
              <p class="buttons" style="margin-top:2em;">
                <a v-if="project.github" class="button is-light" :href="'https://github.com/'+project.github" target="_blank">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
                <a v-if="project.gitlab" class="button is-light" :href="'https://gitlab.com/'+project.gitlab" target="_blank">
                  <span class="icon">
                    <i class="fab fa-gitlab"></i>
                  </span>
                  <span>GitLab</span>
                </a>
                <a v-if="project.url" class="button is-light" :href="project.url" target="_blank">
                  <span class="icon">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                  <span>Link</span>
                </a>
              </p>
            </div>
            <div class="column is-5" v-if="project.images.length > 0" >
              <carousel :slides="project.images" ></carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Carousel from './carousel.vue';

  export default {
    name: 'modal',
    components: {Carousel},
    props: ['project']
  }
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .55);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 80%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    max-height: 100vh;
  }
  @media only screen and (max-device-width: 768px) {
    .modal-container {
      width:100%;
      min-height:80%;
      overflow: scroll;
      border-radius:0px;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
