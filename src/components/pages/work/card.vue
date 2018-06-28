<template>
  <div class="tile is-child notification" v-bind:class="['is-' + project.colour]" @click="$emit('clicked', project.id)">
    <div>
    <h3 class="title">{{project.title}}</h3>
    <h5 class="subtitle">{{project.subtitle}}</h5>
    </div>
    <p>
      {{project.description}}
    </p>
  </div>
</template>
<script>
  export default {
    name: 'card',
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

<style scoped>

</style>
