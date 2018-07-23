<template>
  <section class="section is-medium">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <card v-for="(project,key) in projects" :project="project" :key="project.id" @clicked="index = key"></card>
        </div>
      </div>
    </div>
    <modal v-if="index > -1" :project="projects[index]" @close="index = -1"></modal>
  </section>
</template>

<script>
  import Modal from "./modal.vue";
  import Card from "./card.vue";
  import projects from "./projects";

  export default {
    components: {Card, Modal },
    name: 'work',
    data() {
      return {
        projects: projects,       //  load projects
        show: false,              //  show modal or nah
        index: -1,                 //  which project to show in modal
      }
    },
  }
</script>
