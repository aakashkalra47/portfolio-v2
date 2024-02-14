<template > 
  <div class="background">
    <div class="container">
      <div>
        <navbar/>
        <hero/>
        <left-side-bars/>
        <right-side-bars/>
        <about-me/>
        <experience-section/>
        <projects/>
        <contact-me/>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import LeftSideBars from './components/LeftSideBar.vue'
import RightSideBars from './components/RightSidebar.vue'
import Projects from './components/Projects.vue'
import AboutMe from './components/AboutMe.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactMe from './components/ContactMe.vue'
</script>
<style>
@import './styles/index.css';
</style>
