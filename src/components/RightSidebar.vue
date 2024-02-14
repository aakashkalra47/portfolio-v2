<template>
  <transition name="sidebar">
    <div v-show="show" class="bar">
      <a class="email" href="mailto:aakashkalra47@gmail.com">aakashkalra47@gmail.com</a>
      <div class="line">
      </div>
    </div>
  </transition>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const show = ref(false)
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
    color: var(--slate);
    right: 4rem;
    left: auto; 
    bottom: 0px;   
    width: 3.9rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.email{
    font-size: 1.3rem;
    color: var(--slate);
    transform: rotate(90deg);
    margin-bottom: 18rem;
    font-family: var(--font-mono);
    transition: 0.3s;
    display: block;
    text-decoration: none;
}
.email:hover{
    color: var(--green);
    transform: rotate(90deg) translateX(-3px);
}
.line{
    background:var(--slate);
    width: 1px;
    margin: 0 18px;
    height: 10rem;
}
</style>