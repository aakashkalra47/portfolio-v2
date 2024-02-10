<template>
    <div class="card">
        <div class="d-flex align-items-center">
            <img class="folder-icon" :src="require('../styles/icons/folder.svg')" /> 
            <div :style="{flex:1}"></div>
            <div :style="{'margin-right': '1rem'}">
                <a href="https://github.com/">
                    <img class="icon" :src="require('../styles/icons/github.svg')"/>
                </a>
            </div>
            <div>
                <a href="https://github.com/">
                    <img class="icon" :src="require('../styles/icons/external-link.svg')"/>
                </a>
            </div>
        </div>
        <div class="card-title">{{name}}</div>
        <div class="card-description">{{description}}</div>
        <div :style="{flex:1}"></div>
        <div class="tech-stack">
            <div v-for="skill in techstack" :key="skill" class="skill">{{skill}}</div>
        </div>
    </div>
</template>
<script>

export default {
    //eslint-disable-next-line
    name:'project-card',
    props:{
        name:{
            type:String,
            default:''
        },
        description:{
            type:String,
            default:''
        },
        techstack:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>
<style scoped>
.card{
    width: 31%;
    background-color: var(--light-navy);
    position: relative;
    border-radius: 5px;
    padding: 3rem 2.5rem;
    margin: 0 1.5rem 1.5rem 0;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
}  
.card:hover{
    transform: translateY(-5px);
} 
.card-title{
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--lightest-slate);
    margin: 2rem 0;
}
.card:hover > .card-title{
    color: var(--green);
}
.card-description{
    font-size: 1.45rem;
    color: var(--light-slate);
    overflow-wrap: break-word;
    hyphens: auto;
    margin-bottom: 2rem;
    color: var(--slate);
    /* text-align: justify; */
}
.tech-stack{
    display: flex;
    font-size: 2.5rem;
    display: flex;
    color: var(--slate);
    word-wrap: normal;
    flex-wrap: wrap;
}
.folder-icon{
    height: 4rem;
    width: 4rem;
}
.icon{
    height: 2rem;
    width: 2rem;
    cursor: pointer;
}
.skill{
    margin-right: 2rem;
    margin-top: 0.5rem;
    font-size: 1.25rem;
}
</style>