<template>
    <ul>
        <li v-for="element in list" :key="element" :style="{width:`${liWidth}%`}">
               {{ element }} 
        </li>
    </ul>
</template>
<script setup>
const { liWidth , list }= defineProps({
  liWidth:{
    type: Number,
    default:50
  },
  list:{
    type:Array,
    default: ()=>[]
  }
})
</script>
<style scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    margin-left: 1rem;
    list-style-type: none;
}
li{
    color:var(--slate);
    font-size: 1.5rem;
    line-height: 2.5rem;
    padding-left: 1rem;
    font-weight: 300;
}
li::marker{
    color: var(--green);
    content: "▹";
}
</style>