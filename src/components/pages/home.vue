<template>
  <div>
    <section class="hero is-light is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <!--<div class="column is-one-fifth"></div>-->
            <div class="column is-one-fifth has-text-right-desktop">
              <img src="../../assets/img/profile.png" class="level-item profile is-hidden-mobile is-inline">
              <h1 class="title">
                Abdul Aziz
              </h1>
              <h3 class="subtitle has-text-weight-light">
                Software Developer
              </h3>
            </div>
            <div class="is-divider-vertical"></div>
            <div class="column is-three-fifths">
              <p class="is-size-5-desktop">
                {{cover}}
              </p>
              <div style="margin-top:1em;">
                <router-link to="/work" class="button is-dark is-outlined has-text-weight-semibold">
                  <span>View my work</span>
                  <span class="icon">
                  <i class="fas fa-angle-right"></i>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        cover: `Hi! My name is Abdul Aziz. I am a software developer working mainly in PHP and Javascript.
                I also have experience working with other languages such as C#, Java and Python.
                My primary interests at the moment are linguistics, language processing and computer science.`
      }
    }
  }
</script>
