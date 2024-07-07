<template>
    <transition name="menu">
    <div v-show="showMenu" class="menu d-flex flex-direction-column justify-content-center"
    >
      <button 
        class="d-flex align-items-center justify-content-center ham-position"
        @click="$emit('toggle')"
      >
        <div class="ham" :class="{open:showMenu}"></div>
      </button>
      <div 
        v-for="(item,index) in items"
        :key="item.id" 
      >
        <div class='nav-item d-flex justify-content-center flex-1'>
          <a :href="`#${item.id}`">
            <div class="d-flex flex-direction-column align-items-center" @click="closeMenu">
              <div class="font-primary nav-item--index" :style="{marginBottom:'1rem'}">0{{index+1}}.</div>
              <div class="nav-item--label" :style="{fontSize:'1.5rem'}">{{item.name}}</div>
            </div>
          </a>
        </div>
      </div>
      <div class='nav-item d-flex justify-content-center'>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1ZXFR99Tb2D95A7RTKxu9G3bkW-52BDKg/view?usp=sharing"
        >
          <div class="nav-item nav-btn d-flex align-items-center font-primary">
            Resume
          </div>
        </a>
      </div>
    </div>
  </transition>
</template>
<script setup>
const { items, showMenu } = defineProps(['items', 'showMenu'])
</script>
<style scoped>
.menu{
  pointer-events: none;
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 60%;
  background: var(--navy);
  padding: 5rem;
  box-shadow: var( --navy-shadow);
  align-items: center;
  
}
.menu-enter-active,
.menu-leave-active{
  transition: transform 300ms ease-in-out;
}
.menu-enter-from,
.menu-leave-to {
  transform: translateX(100%);
}
.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  right:0;
}
.ham-position{
  top: 4rem;
  position: fixed;
  right: 4rem;
}
.ham{
  height: 3px;
  width: 30px;
  cursor: pointer;
}
.open::before{
  content: "";
  width: 100%;
  transform: rotate(135deg);
  transition: all 300ms ease-in-out;
  top: 0;
  height: 3px;
  display: block;
  position: absolute;
  background-color: var(--green);

}
.open::after{
  content: "";
  width: 100%;
  top:0;
  transform: rotate(-135deg);
  transition: all 300ms ease-in-out;
  height: 3px;
  display: block;
  position: absolute;
  background-color: var(--green);
}
.open{
  z-index: 100000;
  height: 0px;
  position: relative;
}
</style>