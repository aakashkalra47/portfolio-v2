<template>
	<section id="contact" ref="container">
		<transition name="contact">
			<div v-show="reveal" class="d-flex align-items-center" :style="{ maxWidth: 900, flexDirection:'column'}">
				<div :style="{padding:'10rem 0',flexDirection:'column'}" class="d-flex align-items-center" >
					<div class="font-primary" :style="{fontSize:'1.5rem'}">04. What's next ?</div>
					<div class="title">Get In Touch</div>
					<div class="text">
						I’m currently looking for SDE-1 opportunities, and my inbox is always open.
					</div>
					<div class="text">
					Whether you have a question or just want to say hi, I’ll try my best to get back to you!
					</div>
					<div>
						<button class="btn">
							<a href="https://www.linkedin.com/in/aakash-kalra-9640a31aa/" class="font-primary"  target="_blank">Say Hello</a>
						</button>
					</div>
				</div>
				<div :style="{padding:'3rem',flexDirection:'column'}" class="d-flex align-content-center">
					<div :style="{margin:' 0.5rem 0'}" class="d-flex justify-content-center">
						<a class="contributor-link" href="https://github.com/bchiang7/v4" target="_blank">Built by Aakash Kalra</a>
					</div>
					<div :style="{margin:' 0.5rem 0'}" class="d-flex justify-content-center">
						<a class="contributor-link" href="https://github.com/bchiang7/v4" target="_blank">Design Inspired from Brittany Chiang</a>
					</div>
				</div>
			</div>
		</transition>
	</section>
</template>
<script setup>
import { useIntersectionObservable } from "@/hooks/intersectionObservable";
import { ref } from "vue";
const container = ref(null)
const reveal = useIntersectionObservable(container)
</script>
<style>
.contact-enter-active {
  transition: all 2s ease-in;
}
.contact-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.title{
	font-size: 3rem;
	font-weight: 700;
	color: var(--light-slate);
	font-family: var(--font-sans);
	margin: 2rem 0px;
}
.text{
	font-size: 1.45rem;
	margin-bottom: 0.5rem;
	color: var(--lightest-slate);
	text-align: center;
}
.btn{
	border-radius: var(--border-radius);
	padding:1.5rem;
	border: var(--green) 1px solid;
	margin-top:2rem;
	background-color: transparent;
}
.btn > a{
	text-decoration: none;
	font-size: var(--fz-md);
}
.contributor-link{
	color: var(--lightest-slate);
	font-size: var(--fz-xs);
	text-decoration: none;
	font-family: var(--font-mono);
}
.contributor-link:hover{
	color: var(--green);
}
</style>