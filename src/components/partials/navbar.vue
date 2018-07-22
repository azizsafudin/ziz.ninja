<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <!--🐱‍👤🍣🍱-->
          <span
            @mouseover="showTitle = true"
            @mouseleave="showTitle = false"
            class="has-text-weight-semibold is-size-3">
            🍱
          </span>
        </router-link>
        <transition name="fade">
          <span v-if="showTitle" class="navbar-item has-text-weight-semibold is-size-4-desktop">ziz.ninja</span>
        </transition>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-bind:class="{'is-active':menuIsActive}" @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{'is-active':menuIsActive}">
        <div class="navbar-end" style="margin-right:3em;">
          <router-link to="/work" class="navbar-item">
            Work
          </router-link>
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
          <a href="https://blog.ziz.ninja" class="navbar-item">
            Blog
          </a>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  data(){
    return {
      menuIsActive: false,
      showTitle: false,
    }
  },
  methods: {
    toggleMenu(){
      this.menuIsActive = !this.menuIsActive;
    }
  }
}
</script>
