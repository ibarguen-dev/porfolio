gsap.registerPlugin(ScrollTrigger);

gsap.from(".cp",{
    scrollTrigger:{
        trigger:"#student",
        start:"top 500px",
        end:" top 500px",    
    },
    color:"transparent",
    duration:1
})

gsap.from(".cardStudent",{
    scrollTrigger:{
        trigger:"#student",
        start:"top 500px",
        end:" top 500px",  
        
        //markers:true
    },
    background:"transparent",
    rotation:250,
    duration:1
})

gsap.from(".card-port",{
    scrollTrigger:{
        trigger:"#Portafolio",
        start:"top 500px",
        end:" top 500px",
        
    },
    background:"transparent"
})

gsap.to(".hestia",{
    scrollTrigger:{
        trigger:".start",
        // markers:true,
        end:" top ", 
        start:"top 100px",
    },
    background:"transparent",
    color:"white",
    duration:3
})

gsap.to(".pollo",{
    scrollTrigger:{
        trigger:".hestia",
        // markers:true,
        end:" top ", 
        start:"top 100px",
    },
    background:"transparent",
    color:"white",
    rotation:360,
    duration:3
})

gsap.to(".stock",{
    scrollTrigger:{
        trigger:".pollo",
        // markers:true,
        end:" top ", 
        start:"top 100px",
    },
    background:"transparent",
    color:"white",
    rotation:360,
    duration:3
})

gsap.to(".Arbol",{
    scrollTrigger:{
        trigger:".stock",
        // markers:true,
        end:" top ", 
        start:"top 100px",
    },
    background:"transparent",
    color:"white",
    rotation:360,
    duration:3
})