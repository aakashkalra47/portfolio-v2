<template>
	<section id="about" class="about-me-container">
		<div ref="container" >
			<transition name="fade">
				<div v-show="reveal">
					<div class="header">
						<div><span class="font-primary">0{{ index }}.</span> {{ title  }}</div>
						<div class="line"></div>
					</div>
					<div class="flex-container">
						<div>
							<div class="description-container">
								I'm Aakash, a Frontend Developer with 1.6 years of experience in working with React.js and Redux.js.
								I'm a computer science undergraduate like to work with different aspects of software developement.
								I have knowledge of multiple programming languages, Web technologies and Database management. I also enjoy doing competitive programming.
							</div>
							<div class="description-container">
								Here are a few technologies I’ve been working with recently:
							</div>
							<div>
									<skills-list :list="skils"/>
							</div>
						</div>
						<div class="flex-container" :style="{justifyContent:'center'}">
							<div class="picture-container">
								<div :style="{position:'relative',height:'25rem',width:'25rem'}">
									<div class="picture">
										<img src="Aakash.jpeg" height="250" width="250" />
									</div>
								</div>
							</div>
						</div>
					</div>				
				</div>
			</transition>
		</div>
	</section>
</template>
<script setup>
import { ref } from 'vue';
import SkillsList from './SkillsList.vue';
const skils=['JavaScript (ES6+)','React.js','Redux.js', 'React-testing-library', 'HTML','CSS', 'Jest', 'Git','Node.js','Express.js','MongoDB','Vue.js']
import { useIntersectionObservable } from '../composables/intersectionObservable'
defineProps({
  index:{
    type:Number,
    default:1
  },
  title:{
    type: String,
    default:'About Me'
  }
})
const container = ref(null)
const reveal = useIntersectionObservable(container)
</script>
<style>
.fade-enter-active {
  transition: all 1s ease-in;
}
.fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.about-me-container{
	margin: 5rem auto;
	max-width: 800px;
	width: 60%;
	display: flex;
	justify-content: center;
}
.description-container{
	margin-bottom: 2rem;
	flex-basis: 60%;
	color: var(--slate);
	font-size: 1.6rem;
	line-height: 2.5rem;
	text-align: justify;
	margin-right: 2rem;
}
@media (max-width: 1080px){
	.about-me-container{
		width: 80%;
	}
}
@media (max-width: 900px){
	.flex-container{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.description-container{
		margin-right: 0;
	}
}
.flex-container{
	display: flex;
}
@media (max-width:768px){
	.about-me-container{
		width:90%;
	}
}
.header{
	font-size: 4.5rem;
	font-weight: 700;
	color: var(--lightest-slate);
	font-family: var(--font-sans);
	margin: 2.5rem 0;
	display: flex;
	align-items: center;
	width:100%
}
.line{
	width: 40%;
	margin-left: 1rem;
	height: 1px;
	background-color: var(--slate);
	opacity: 0.5;
}
.picture-container{
	width: 40%;
	display: flex;
	justify-content: center;
}
.picture{
	height: 25rem;
	width: 25rem;
	border-radius: 6px;
	z-index: 2;
	position: relative;
}
.picture::before{
	content: "";
	background-color: var(--green);
	opacity: 0.4;
	z-index: 1;
	position: absolute;
	height: 25rem;
	width: 25rem;
	left: 0;
	top: 0;
	border-radius: 6px;
	transition: 0.5s;
}
.picture::after{
	content: "";
	border: 2px solid var(--green);
	border-radius: 6px;
	height: 25rem;
	width: 25rem;
	position: absolute;
	bottom: -2rem;
	right: -2rem;
	z-index: -1;
	transition: 0.3s;
}
.picture:hover::before{
	background-color: transparent;
}
.picture:hover::after{
	bottom: -1.5rem;
	right: -1.5rem;
}
</style>