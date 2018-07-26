<template>
  <div>
    <section class="section">
      <div class="container">
        <h3 class="title">📚 My Projects</h3>
        <div class="card-container">
          <card
            :project="project"
            :key="project.id"
            @clicked="index = key"
            v-for="(project,key) in projects"
            v-if="!project.deprecated && project.show">
          </card>
        </div>
      </div>
      <modal v-if="index > -1" :project="projects[index]" @close="index = -1"></modal>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title">🕸 Deprecated Projects</h3>
        <div class="card-container">
          <card
                :project="project"
                :key="project.id"
                @clicked="index = key"
                v-for="(project,key) in projects"
                v-if="project.deprecated && project.show"
                :mini="true">
          </card>
        </div>
      </div>
    </section>
  </div>
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

<style>
  .card-container{
    display: flex;
    flex-wrap: wrap;
  }
  .card-container>*{
    flex: 1 1 20em;
  }
</style>
