<template>
    <div class="bar">
        <div class="email">
            aakashkalra47@gmail.com
        </div>
        <div class="line">
        </div>
    </div>
</template>
<script>
export default {
    name:'right-side-bar',
}
</script>

<style scoped>
.bar{
    color: white;
    right: 4rem;
    left: auto; 
    bottom: 0px;   
    width: 3.9rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.email{
    font-size: 1.3rem;
    color: white;
    transform: rotate(90deg);
    margin-bottom: 18rem;
}
.line{
    background:var(--slate);
    width: 1px;
    margin: 0 18px;
    height: 10rem;
}
</style>