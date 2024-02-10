<template > 
  <div class="background">
    <div class="container">
      <left-side-bars/>
      <navbar/>
      <hero/>
      <about-me/>
      <experience-section/>
      <projects/>
      <contact-me/>
      <right-side-bars/>
    </div>
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import LeftSideBars from './components/LeftSideBars.vue'
import RightSideBars from './components/RightSidebar.vue'
import Projects from './components/Projects.vue'
import AboutMe from './components/AboutMe.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactMe from './components/ContactMe.vue'
</script>
<style>
@import './styles/index.css';
</style>
