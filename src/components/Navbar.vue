<template>
    <div class="nav d-flex align-center">
        <div class="d-flex flex-1 nav-item-container" style="justify-content: space-between;">
            <div class="font-primary">Icon</div>
            <div class="d-flex align-center">
                <nav class='nav-item d-flex align-center' v-for="(item,index) in items" :key="item">
                    <span class="font-primary nav-item--index">0{{index+1}}.</span>
                    <span class="nav-item--label">{{item}}</span>
                </nav>
                <div class="nav-item nav-btn d-flex align-center">
                    <a class="font-primary font-xs" >Resume</a>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

export default {
    name:'nav-bar',
    data(){
        return{
            items:['Home','Experience','Skills','Projects',]
        }
    }
}
</script>
<style scoped>
.nav{
    height: var(--nav-height);
    width: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    padding: 0 4rem;
    background-color: rgba(var(--navy),0.5);
    box-shadow: 0px 0.2px var(--navy);
}
.nav-item-container{
    height: var(--nav-scroll-height);
}
.nav-item{
    padding: var(--fz-md);
}
.nav-item--index{
    font-size: var(--fz-xs);
    margin-right: 4px;
}
.nav-item--label{
    font-size: var(--fz-xs);
    color: var(--lightest-slate);
}
.nav-item--label:hover{
    color: var(--green);
}
.nav-btn{
    border-radius: var(--border-radius);
    padding:12px var(--fz-md);
    margin-left: var(--fz-md);
    border: var(--green) 1px solid;
}
</style>