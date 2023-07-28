gsap.registerPlugin(ScrollTrigger);
gsap.from(".student", {
    scrollTrigger: {
        trigger:"#student",
        start:"top 500px",
        end:" top px",  
        scrub:1,
        // markers:true
    }, 
    ease:"none",
    x: -1950,
    duration:9
});

gsap.from(".cardStudent",{
    scrollTrigger:{
        trigger:"#student",
        start:"top 500px",
        end:" top 500px",  
        scrub:1,
        //markers:true
    },
    background:"red",
    rotation:250,
    duration:1
})

gsap.from(".card-port",{
    scrollTrigger:{
        trigger:"#Portafolio",
        start:"top 500px",
        end:" top 500px",
        scrub:1,
    },
    background:"transparent"
})

gsap.from("#Arbol",{
    scrollTrigger:{
        trigger:"#Arbol",
        // markers:true,
        end:" top ", 
        start:"top 100px",
    }
})