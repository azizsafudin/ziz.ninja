<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        &copy; {{currYear === 2018?'':'2018 - '}} {{currYear}} Abdul Aziz
      </p>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'foot',
    data() {
      return {
        currYear: (new Date()).getFullYear(),
      }
    }
  }
</script>
