<template>
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor card-content">
        <div class="tile is-vertical is-parent">
          <memoplusplus></memoplusplus>
          <div class="tile is-child notification is-warning">
            <p class="title">Two</p>
          </div>
          <div class="tile is-child notification is-warning">
            <p class="title">Two</p>
          </div>
          <div class="tile is-child notification is-warning">
            <p class="title">Two</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Memoplusplus from "./memoplusplus.vue";

  export default {
    components: {Memoplusplus},
    name: 'work',
    data() {
      return {

      }
    }
  }
</script>
