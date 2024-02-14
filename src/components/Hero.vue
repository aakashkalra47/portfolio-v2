<template>
    <section href="#" class="d-flex align-items-center hero">
      <div>
        <transition-group name="hero-list">
          <div v-for="(item, index) in renderItems" v-html="item" :key="item" 
            :style="{transitionDelay:`${(index+1)*100}ms`}"
          >
          </div>
        </transition-group>
      </div>
    </section>
</template>
<script setup>
import { ref, onMounted} from "vue";
const items=[
  '<div class="font-primary hero-item">Hi, my Name is</div>',
  '<h2 class="name big-heading hero-item">Aakash Kalra</h2>',
  '<h3 class="frontend-dev big-heading hero-item">Frontend Developer </h3>',
  `
    <h4 class="description hero-item">
      I’m a software engineer specializing in building complex websites.
      I have 1.5 years of working experience as Front-end developer in <a class="font-primary link" href="https://falkonry.com/">Falkonry</a>. 
    </h4>
  `,
  `
    <div class="hero-item d-flex">
      <a class="font-primary btn" style="font-size=var(--fz-md)" href="https://www.linkedin.com/in/aakash-kalra-9640a31aa/">Get In Touch</a>
    </div>
  `
]
const renderItems = ref([])
onMounted(()=>{
  setTimeout(()=>{
    items.map(e=>renderItems.value.push(e))
  }, 1000)
})
</script>
<style>

.hero{
    margin: 0px auto;
    max-width: 1000px;
    font-family: var(--font-sans);
    height: 100vh;
} 
.hero-item{
    margin-top: 1rem;
    font-size:var(--fz-md);
}
.big-heading{
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    font-family: var(--font-sans);
    letter-spacing: -1  px;
    word-spacing: 0px;
}
.name{
    color: var(--lightest-slate);
    font-weight: 600;
}
.frontend-dev{
    color: var(--light-slate);
    font-weight:600;
}
.description{
    color: var(--light-slate);
    font-weight: 100;
    max-width: 500px;
    font-size: var(--fz-md);
    word-wrap: break-word;
}
.btn{
    border-radius: var(--border-radius);
    padding:1.5rem var(--fz-md);
    border: var(--green) 1px solid;
    margin-top:2rem;
    font-size: var(--fz-md);
    text-decoration: none;
}
.hero-list-enter-active,
.hero-list-leave-active {
  transition: var(--transition);
}
.hero-list-enter-from,
.hero-list-leave-to {
  opacity: 0;
  transform: translateY(10px);

}
</style>
