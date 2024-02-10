<template>
    <section id="projects" :style="{paddingBottom:'5rem', maxWidth: 900}">
        <div class="d-flex justify-content-center">
            <div class="title">My Projects</div>
        </div>
        <div class="d-flex justify-content-center" :style="{'flex-wrap':'wrap'}">
            <div class="card-container">
                <project-card  v-for="(project) in projects" 
                    :key="project.name" 
                    :name="project.name" 
                    :description="project.description"
                    :techstack="project.techstack">
                </project-card>
            </div>
        </div>
    </section>
</template>
<script>
import ProjectCard from './ProjectCard.vue'
export default{
    //eslint-disable-next-line
    name:'Projects',
    components:{ProjectCard},
    data(){
        return {
            projects:[
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
                    name:'Ecommerce In React And Node',
                    description:'It is an eCommerce app for fashion with a frontend written in React.js. For the backend API, I have used Node.js with Express.js framework and MongoDB.',
                    techstack:['React', 'Redux','Material-UI','Node','Express']
                },
                {
                    name:'Weather Prediction Dashboard',
                    description:'Implemented in React and Redux by using openweathermap API shows charts for future week weather prediction. It shows the charts of pressure, humidity, and temperature.',
                    techstack:['React', 'Redux']
                
                },
                {
                    name:'Notes App In React',
                    description:'It is a note taking app in React.js. Users can fetch the notes of a particular month and year by applying filters and can also sort the notes according to the time of creation.',
                    techstack:['React', 'Redux', 'Material-UI']
                
                },
                {
                    name:'GOT Informative Website',
                    description:'It is an Informative website about the Game of Thrones TV show. It has different pages for different houses and characters.',
                    techstack:['HTML', 'CSS', 'Javascript']
                
                }
            ]
        }
    }
}
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
</style>
