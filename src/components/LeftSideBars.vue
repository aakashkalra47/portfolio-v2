<template>
    <div class="bar">
        <div>
            <svg v-for="icon in icons" :key="icon" class="icon">
                <use v-bind="{'xlink:href':iconsPath+'#'+icon}"></use>
            </svg>
        </div>
         <div class="line">
        </div>
    </div>
</template>
<script>
export default {
    name:'left-side-bar',
    data(){
        return {
            icons:[
                'github','codeforces','linkedin','codechef','instagram'
            ]   
        }
    },
    computed:{
        iconsPath(){
            return require(`../styles/icons/icons.svg`) //eslint-disable-line
        }
    }
}
</script>

<style scoped>
.bar{
    width: 3.9rem;
    position: fixed;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.icon {
  fill: white;
  height: 1.9rem;
  width: 1.9rem;
  margin: 1rem;
  cursor: pointer;
}
.line{
    background:var(--slate);
    width: 1px;
    margin: 0 18px;
    height: 10rem;
    margin-top: 2rem;
}
</style>