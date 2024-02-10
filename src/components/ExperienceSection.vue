<template>
    <section id="experience" class="experience-container">
        <div class="header">
            <div><span class="font-primary">0{{ index }}.</span> {{ title }}</div>
            <div class="line"></div>
        </div>
        <div class="company-heading">Associate Software Engineer <a class="font-primary">@Falkonry</a></div>
        <div class="company-experience">June 2022 - Dec 2023</div>
        <div :style="{width:'80%',textAlign:'justify'}">
            <skills-list :li-width="100" :list="list"/>
        </div>
    </section>
</template>
<script setup>
import SkillsList from './SkillsList.vue';
const title="Where I’ve Worked"
const index=2;
const list= [
    'Worked as a frontend engineer on a building application using agile framework for analyzing time-series operational data to predict failures.',
    'Worked on building UI components with config-driven architecture using React.js and Redux.js.',
    'Worked on writing unit tests using React-testing-library and Jest.js.',
    'Worked on writing e2e tests of app using Cypress.js.'
]
</script>
<style>
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