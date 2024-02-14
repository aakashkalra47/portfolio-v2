<template>
	<section ref="projectsSection" id="projects" :style="{paddingBottom:'5rem', maxWidth: 900}">
		<transition name="fade">
			<div v-show="reveal">
				<div class="d-flex justify-content-center">
					<div class="title">My Projects</div>
				</div>
				<div class="d-flex justify-content-center" :style="{'flex-wrap':'wrap'}">
					<div class="card-container">
						<transition-group name="list">
							<project-card
								v-for="(project, index) in projects"
								:key="project.name" 
								:index="index"
								v-bind="project">
							</project-card>
					</transition-group>
				</div>
			</div>
		</div>
		</transition>
	</section>
</template>
<script setup>
import { useIntersectionObservable } from '@/hooks/intersectionObservable'
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
const projects=[
  {
    name:'Saker',
    description:`
						Saker is a Falkonry’s internal framework built on React, Redux, and React-router.
						I worked on building UI components and wrote unit tests for components using react-testing-library.
						I updated end-to-end tests of all features of v2 to v3 using Cypress.js.
						I also introduced Storybook to the project for documenting core architecture components.
					`,
    techstack:["React", "Redux","Jest","Cypress", "React-testing-library"]
  },
  {
    name:'Ecommerce App',
    description:'It is an eCommerce app for fashion with a frontend written in React.js. For the backend API, I have used Node.js with Express.js framework and MongoDB.',
    techstack:['React', 'Redux','Material-UI','Express'],
    deployement: 'https://github.com/aakashkalra47/ecom-frontend',
    github: 'https://github.com/aakashkalra47/ecom-frontend'
  },
  {
    name:'Weather Prediction Dashboard',
    description:'Implemented in React and Redux by using openweathermap API shows charts for future week weather prediction. It shows the charts of pressure, humidity, and temperature.',
    techstack:['React', 'Redux'],
    deployement: 'https://weather-prediction-05zn.onrender.com/',
    github: 'https://github.com/aakashkalra47/weather-prediction'
  },
  {
    name:'Notes App',
    description:'It is a note taking app in React.js. Users can fetch the notes of a particular month and year by applying filters and can also sort the notes according to the time of creation.',
    techstack:['React', 'Redux', 'Material-UI'],	
    deployement: 'https://notes-snxe.onrender.com/',
    github: 'https://github.com/aakashkalra47/notes-app'	
  },
  {
    name:'Resume',
    description:'It is the first iteration of my portfolio in the form of Resume. I have used HTML and css to build this portfolio.',
    techstack:['HTML', 'CSS'],
    deployement: 'https://aakashkalra47.github.io/Resume/',
    github: 'https://github.com/aakashkalra47/Resume'
  },
]
const projectsSection = ref(null)
const reveal = useIntersectionObservable(projectsSection)
</script>
<style scoped>
.title{
		font-size: 3rem;
		font-weight: 700;
		color: var(--white);
		font-family: var(--font-sans);
		margin: 8rem 0px;
}
.card-container{
		display: flex;
		flex-wrap: wrap;
		width: 75%;
		max-width: 1000px;
		margin: 0 auto;
}
.list-enter-active,
.list-leave-active {
  transition: all 5s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);

}
</style>
