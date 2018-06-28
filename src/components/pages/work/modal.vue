<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container notification" v-bind:class="['is-' + project.colour]" @click.stop>
          <button class="delete" @click="$emit('close')"></button>
          <h3 class="title">{{project.title}}</h3>
          <p>{{project.description}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      project: {
        type: Object,
        default : {
          title       : 'Project title',
          subtitle    : 'Project subtitle',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget finibus nisl. Aliquam finibus id nisi a interdum. Duis malesuada euismod gravida. Fusce viverra massa quis mi suscipit, sed cursus tortor tincidunt. Praesent pulvinar, enim porta convallis tempus, urna lectus tempus eros, in placerat erat nisi eu ante. Donec maximus, mauris ut ultrices euismod, velit ipsum imperdiet dui, eu eleifend magna ante hendrerit enim. Vivamus et nibh rhoncus, mattis lacus vitae, blandit diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vitae pharetra ex. Suspendisse mollis lectus id leo egestas, et aliquet neque suscipit. Quisque pharetra ornare urna sit amet sollicitudin. Aenean et nisl lectus. Quisque tristique nisi orci, at porta sapien porta sit amet.',
          date_start  : '2018-01-01',
          date_end    : '2019-01-01',
          img_url     : '',
          colour      : 'warning',
        }
      }
    },
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
