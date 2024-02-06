<template>
    <div>
        <div class="d-flex justify-center">
            <div class="title">My Projects</div>
        </div>
        <div class="d-flex justify-center" :style="{'flex-wrap':'wrap'}">
            <div class="card-container">
                <project-card  v-for="(project) in projects" :key="project.name" :name="project.name" :description="project.description" :techstack="project.techstack"></project-card>
            </div>
        </div>
    </div>
</template>
<script>
import ProjectCard from './ProjectCard.vue'
export default{
    //eslint-disable-next-line
    name:'projects',
    components:{ProjectCard},
    data(){
        return {
            projects:[
                {
                    name:'Ecommerce In React.js And Node.jS',
                    description:' It is an eCommerce app for fashion with a frontend written in React.js. For the backend API, I have used Node.js with Express.js framework and MongoDB.',
                    techstack:['React.js', 'Node.js', 'Redux.js']
                },
                {
                    name:'Weather Prediction Dashboard',
                    description:'Implemented in React and Redux by using openweathermap API shows charts for future week weather prediction. It shows the charts of pressure, humidity, and temperature.',
                    techstack:['React.js', 'Redux.js', 'Chat-2.js']
                
                },
                {
                    name:'Notes App In React',
                    description:'It is a note taking app in React.js. Users can fetch the notes of a particular month and year by applying filters and can also sort the notes according to the time of creation.',
                    techstack:['React.js', 'Redux.js']
                
                },
                {
                    name:'GOT Informative Website',
                    description:'It is an Informative website about the Game of Thrones TV show. It has different pages for different houses and characters.',
                    techstack:['HTML', 'CSS', 'JS']
                
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
    margin: 4rem 0px;
}
.card-container{
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin: 0 auto;
}
</style>
