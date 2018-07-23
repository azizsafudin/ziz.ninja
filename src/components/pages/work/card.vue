<template>
  <div class="tile is-child notification" v-bind:class="['is-' + project.colour]" @click="$emit('clicked', project.id)">
    <h3 class="title">{{project.title}}</h3>
    <h5 class="subtitle" :inner-html.prop="project.subtitle | truncate(100)"></h5>
    <span :inner-html.prop="project.description | truncate(300)"></span>
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
