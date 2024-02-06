<template > 
<div class="background">
  <div class="container">
    <left-side-bars></left-side-bars>
      <navbar></navbar>
      <hero></hero>
      <projects></projects>
    <right-side-bars></right-side-bars>
  </div>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import LeftSideBars from './components/LeftSideBars.vue'
import RightSideBars from './components/RightSidebar.vue'
import Projects from './components/Projects.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    LeftSideBars,
    RightSideBars,
    Projects
  }
}
</script>

<style>
@import './styles/index.css';
</style>
