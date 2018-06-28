<template>
  <section class="section is-medium">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <!--@clicked="showModal"-->
          <card :project="projects[0]"></card>
        </div>
      </div>
    </div>
    <modal v-if="show" :project="projects[index]" @close="hideModal"></modal>
  </section>
</template>

<script>
  import Modal from "./modal.vue";
  import Card from "./card.vue";
  import projects from "./projects";

  export default {
    components: {Card, Modal},
    name: 'work',
    data() {
      return {
        projects: projects,       //  load projects
        show: false,              //  show modal or nah
        index: 0,                 //  which project to show in modal
      }
    },
    methods: {
      hideModal(){
        this.show = false;
      },
      showModal(id){
        this.index = id;
        this.show = true;
      }
    }
  }
</script>
