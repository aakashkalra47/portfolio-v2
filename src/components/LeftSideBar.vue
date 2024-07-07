<template>
    <transition name="sidebar">
      <div v-show="show" class="bar">
        <div v-for="{name,link} in icons" :key="name">
          <a :href="link" target="_blank">
            <svg class="icon">
                <use v-bind="{'xlink:href':iconsPath+'#'+name}"></use>
            </svg>
          </a>
        </div>
        <div class="line"></div>
      </div>
    </transition>
</template>
<script setup>
import { computed, onMounted, ref } from "vue"
const show = ref(false)
const icons=[
  {
    name:'github',
    link: 'https://github.com/aakashkalra47'
  },
  {
    name:'linkedin',
    link: 'https://www.linkedin.com/in/aakash-kalra-9640a31aa/'
  },
  {
    name:'codechef',
    link:'https://www.codechef.com/users/aakash_kalra'
  },
  {
    name:'leetcode',
    link:'https://leetcode.com/aakashkalra47/'
  }          
]
const iconsPath = computed (()=>{
  return require(`../styles/icons/icons.svg`) //eslint-disable-line
})
onMounted(()=>{
  setTimeout(()=>{
    show.value = true
  }, 2000)
})
</script>
<style scoped>
.sidebar-enter-active {
  transition: var(--transition) ;
}
.sidebar-enter-from {
  opacity: 0;
}
.bar{
    width: 3.9rem;
    position: fixed;
    left: 4rem;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
@media (max-width: 900px){
  .bar{
    left: 1rem;
  }
}
@media (max-width: 480px){
  .bar{
    left: 0rem;
  }
}
.icon {
  fill: var(--lightest-slate);
  height: 1.9rem;
  width: 1.9rem;
  margin: 1rem;
  cursor: pointer;
  transition: 0.3s;
}
.icon:hover{
    fill: var(--green);
    transform: translateY(-3px);
}
.line{
    background:var(--slate);
    width: 1px;
    margin: 0 18px;
    height: 10rem;
    margin-top: 2rem;
}
</style>