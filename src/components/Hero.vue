<template>
    <section href="#" class="d-flex align-items-center hero">
        <div >
            <div class="font-primary hero-item">Hi, my Name is</div>
            <h2 class="name big-heading hero-item">Aakash Kalra.</h2>
            <h3 class="frontend-dev big-heading hero-item">Frontend Developer </h3>
            <h4 class="description hero-item">
                I’m a software engineer specializing in building webssites.
                Currently, I’m focused on building accessible, human-centered products at <a href="https://falkonry.com/" class="font-primary link">Falkonry</a>.
            </h4>
            <div class="hero-item d-flex">
                <a class="font-primary btn" style="font-size=var(--fz-md)" >Say Hello !!</a>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    //eslint-disable-next-line
    name:'Hero'
}
</script>
<style scoped>
.hero{
    margin: 0px auto;
    max-width: 1000px;
    font-family: var(--font-sans);
    height: 100vh;
} 
.hero-item{
    margin-top: 1rem;
    font-size:var(--fz-md)
}
.big-heading{
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    font-family: var(--font-sans);
    letter-spacing: -1  px;
    word-spacing: 0px;
}
.name{
    color: var(--lightest-slate);
    font-weight: 600;
}
.frontend-dev{
    color: var(--light-slate);
    font-weight: 600;
}
.description{
    color: var(--light-slate);
    font-weight: 100;
    max-width: 500px;
    font-size: var(--fz-md);
    word-wrap: break-word;
}
.btn{
    border-radius: var(--border-radius);
    padding:1.5rem var(--fz-md);
    border: var(--green) 1px solid;
    margin-top:2rem;
    font-size: var(--fz-md);
}
</style>
