<template>
  <div class="tile is-child notification" v-bind:class="['is-' + project.colour]" @click="$emit('clicked', project.id)">
    <div>
    <h3 class="title">{{project.title}}</h3>
    <h5 class="subtitle">{{project.subtitle}}</h5>
    </div>
    <div v-html="project.description"></div>
  </div>
</template>
<script>
  export default {
    name: 'card',
    props: ['project'],
  }
</script>

<style scoped>

</style>
