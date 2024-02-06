<template>
    <div class="card">
        <div class="d-flex" :style="{padding:'2rem'}">
            <img class="folder-icon" :src="require('../styles/icons/folder.svg')" /> 
            <div :style="{flex:1}"></div>
            <div class="icon">github</div>
            <div class="icon">arrow</div>
        </div>
        <div class="card-title">{{name}}</div>
        <div class="card-description">{{description}}</div>
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
    flex: 1 0 40%;
    background-color: var(--light-navy);
    margin-top: 1rem;
    position: relative;
    border-radius: 5px;
    padding: 2rem;
}

.card:nth-child(odd) {
    margin-right: 1rem;
}
.card-title{
    font-size: 2rem;
    color: var(--white);
    margin: 2rem;
}
.card-description{
    font-size: 1.6rem;
    color: var(--lightest-slate);
    margin: 2rem;
}
.tech-stack{
    margin: 2rem;
    font-size: 2.5rem;
    display: flex;
    color: var(--light-slate);
}
.folder-icon{
    height: 4rem;
    width: 4rem;
}
.icon{
    height: 2rem;
    width: 2rem;
}
.skill{
    margin-right: 2rem;
}
</style>