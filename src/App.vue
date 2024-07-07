<template > 
  <div class="background" :class="{'disbaleScroll':overlay}">
    <div v-show="overlay" class="overlay" ></div>
    <navbar @menu="toggleOverlay"/>
    <left-side-bars/>
    <right-side-bars/>
    <div class="container">
      <hero/>
      <about-me/>
      <experience-section/>
      <projects/>
      <contact-me/>
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
import { ref } from 'vue'
const overlay = ref(false)
const toggleOverlay = (val)=>{
  const all = document.querySelectorAll('.container > *')
  // const contentContainer = document.querySelector('.container')
  // contentContainer.style.overflow = 'hidden'
  if(val){
    all.forEach((e)=>{
      e.style.filter = 'blur(5px) brightness(0.7)'
      e.style.pointerEvents = 'none'
    })
  }
  else{
    all.forEach((e)=>{
      e.style.filter = 'unset'
      e.style.pointerEvents = 'unset'
    })
  }
  overlay.value = val
}
</script>
<style>
@import './styles/index.css';
.overlay{
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 11;
  background: var(--navy-opacity);
  box-shadow: var(--navy-shadow) 0px 10px 30px -10px;
}
.disbaleScroll{
  /* backdrop-filter: blur(10px); */
  filter: blur(0px) brightness(1);
  /* pointer-events:none; */
  user-select: none;
}
</style>
