<template>
  <div class="notification" v-bind:class="['is-' + project.colour]" @click="$emit('clicked', project.id)" style="cursor:pointer; margin: 0.5em;">
    <h3 class="title">{{project.title}}</h3>
    <h5 class="subtitle" :inner-html.prop="project.subtitle | truncate(60)"></h5>
    <div class="content" :inner-html.prop="project.description | truncate(300)" v-if="!mini"></div>
  </div>
</template>
<script>
  export default {
    name: 'card',
    props: ['project', 'mini'],
  }
</script>

<style scoped>

</style>
