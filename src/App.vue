<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
