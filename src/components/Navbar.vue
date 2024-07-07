<template>
  <transition name="fade">
    <nav v-if="width > 768"  v-show="show" ref="nav" class="nav d-flex align-items-center">
      <div class="d-flex flex-1 nav-item-container" style="justify-content: space-between;">
        <transition name="list">
          <div v-show="show" class="d-flex align-items-center">
            <div 
              @click="reload" 
              :style="{fontSize: '1.6rem', color: 'var(--lightest-slate)', cursor: 'pointer'}"
            >
              Home
            </div>
          </div>
        </transition>
        <div class="d-flex align-items-center">
          <transition-group name="list">
            <div v-for="(item,index) in renderItems" :key="item.id" :style="{transitionDelay:`${(index+1)*100}ms`}">
              <div class='nav-item d-flex align-items-center'>
                <a :href="`#${item.id}`">
                  <span class="font-primary nav-item--index">0{{index+1}}.</span>
                  <span class="nav-item--label">{{item.name}}</span>
                </a>
              </div>
            </div>
          </transition-group>
          <transition name="list">
            <a v-show="show" 
              target="_blank"
              href="https://drive.google.com/file/d/1ZXFR99Tb2D95A7RTKxu9G3bkW-52BDKg/view?usp=sharing"
              :style="{transitionDelay:'500ms'}"
            >
              <div class="nav-item nav-btn d-flex align-items-center font-primary">
                Resume
              </div>
            </a>
          </transition>
        </div>
      </div>
    </nav>
    <div v-else class="nav d-flex  align-items-center" v-show="show" ref="nav">
      <div class="d-flex flex-1 nav-item-container align-items-center" style="justify-content: space-between;">
        <transition class="flex-1" name="list">
          <div v-show="show" class="d-flex align-items-center">
            <div 
              @click="reload" 
              :style="{fontSize: '1.6rem', color: 'var(--lightest-slate)', cursor: 'pointer'}"
            >
              Home
            </div>
          </div>
        </transition>
        <button 
          :style="{width:'30px',height:'2px'}" 
          class="d-flex align-items-center justify-content-center"
          @click="toggleMenu"
        >
          <div class="hamburger"></div>
        </button>
      </div>
    </div>
  </transition>
  <menu-nav v-if="showMobileNav"
    :showMenu="showMobileNav"
    :items="renderItems"
    @toggle.stop="toggleMenu"
  ></menu-nav>
</template>
<script setup>
import { onBeforeMount, onUnmounted, ref, onMounted, defineEmits } from 'vue'
import { useWindowWidth } from './../composables/screenWidth'
import useOnClickOutside from '@/composables/useOnClickOutside';
import MenuNav from './MenuNav.vue'
const emit = defineEmits(['menu'])
let lastScrollPostiionY = 0
let ticking = false
let navVisible = true
let show = ref(false)
const nav = ref(null)
const renderItems=ref([])
const width = useWindowWidth()
const showMobileNav = ref(false)
const toggleMenu = ()=>{  
  showMobileNav.value = !showMobileNav.value
  emit('menu', showMobileNav.value)
}
const closeMenu = ()=>{
  showMobileNav.value = false
  emit('menu', false)
}

const items = [
  {
    name:'About',
    id:'about'
  },
  { 
    name:'Experience',
    id:'experience'
  },
  { 
    name:'Projects',
    id:'projects'
  },
  { 
    name:'Contact',
    id:'contact'
  }
]
onMounted(()=>{
  setTimeout(()=>{
    show.value = true
    items.map((ele)=>{
      renderItems.value.push(ele)
    })
  }, 0)
})
useOnClickOutside(nav, closeMenu)
const reload = ()=> { 
  window.location.reload() 
}
onBeforeMount(()=>{
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll)
})
function handleScroll(){
  const currentScrollPostion= window.scrollY
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animateNavbar(currentScrollPostion);
      ticking = false;
      lastScrollPostiionY = currentScrollPostion
    });
    ticking = true;
  }
}
function animateNavbar(currentScrollPostion){
  if(currentScrollPostion > lastScrollPostiionY && navVisible){
    nav.value.style.transform = 'translateY(-100px)'
    navVisible = false
  }
  else if (currentScrollPostion < lastScrollPostiionY && !navVisible){
    nav.value.style.transform = 'translateY(0)'
    navVisible = true
  }
  if(!currentScrollPostion){
    nav.value.style.paddingTop = '1rem'
    nav.value.style.backgroundColor = 'var(--navy)' 
    nav.value.style.boxShadow = 'none'
  }
  else{
    nav.value.style.paddingTop = 0
    nav.value.style.backgroundColor = 'var(--navy-opacity)' 
    nav.value.style.boxShadow = 'var(--navy-shadow) 0px 10px 30px -10px'
  }
}
</script>
<style>
.fade-enter-active {
  transition: opacity 1s ease-in;
}
.fade-enter-from {
  opacity: 0;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 100ms ease-in;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.list-leave-active {
  position: absolute;
}

.nav{
  width: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  padding: 10px 5rem 0;
  backdrop-filter: blur(10px);
  background-color: var(--navy);
  transition: 0.3s;
}
.nav-item-container{
  height: var(--nav-scroll-height);
}
.nav-item{
  font-size: var(--fz-md);
  padding: var(--fz-md);
  cursor: pointer;
}
.nav-item--index{
  font-size: var(--fz-xs);
  margin-right: 4px;
}
.nav-item--label{
  font-size: var(--fz-xs);
  color: var(--lightest-slate);
  font-family: var(--font-mono);    
}
.nav-item--label:hover{
  color: var(--green);
}
.nav-btn{
  border-radius: var(--border-radius);
  padding: 10px var(--fz-md);
  margin-left: var(--fz-md);
  border: var(--green) 1px solid;
  font-family: var(--font-mono); 
  font-size: var(--fz-xs);
}
.hamburger{
  height: 2px;
  width: 30px;
  background-color: var(--green);
  cursor: pointer;
  position: relative;
}
.hamburger::after{
  content: "";
  position: absolute;
  top: 10px;
  right: 0;
  height: 2px;
  width: 80%;
  background-color: var(--green);
}
.hamburger::before{
  content: "";
  position: absolute;
  top: -10px;
  right: 0;
  height: 2px;
  width: 120%;
  background-color: var(--green);
}
button{
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
</style>