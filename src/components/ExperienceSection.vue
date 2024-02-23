<template>
	<section ref="experienceSection" id="experience" class="experience-container">
		<transition name="experience">
			<div v-show="reveal" >
				<div class="header">
					<div><span class="font-primary">0{{ index }}.</span> {{ title }}</div>
					<div class="line"></div>
				</div>
				<div class="company-heading">Associate Software Engineer <a class="font-primary" :style="{fontSize: '2rem'}">@Falkonry</a></div>
				<div class="company-experience">June 2022 - Dec 2023</div>
				<div :style="{width:'80%',textAlign:'justify'}">
					<skills-list :li-width="100" :list="list"/>
				</div>
			</div>
		</transition>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { useIntersectionObservable } from '@/hooks/intersectionObservable';
import SkillsList from './SkillsList.vue';
const title = "Where I’ve Worked"
const index = 2;
const list= [
  'Worked as a frontend engineer on a building application using agile framework for analyzing time-series operational data to predict failures.',
  'Worked on building UI components with config-driven architecture using Vue.js and Vuex.',
  'Worked on writing unit tests using Vue-test-utils and Jest.js.',
  'Worked on writing e2e tests of app using Cypress.js.'
]
const experienceSection = ref(null)
const reveal = useIntersectionObservable(experienceSection)
</script>
<style>
.experience-enter-active {
  transition: all 1s ease-in;
}
.experience-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.experience-container{
    margin: 15rem auto;
    max-width: 900px;
}
.company-heading{
    font-size: 2rem;
    color: var(--lightest-slate);
}
.company-experience{
    font-size: 1.5rem;
    color: var(--slate);
    margin-top: 1rem;
    font-weight: 500;
}
</style>