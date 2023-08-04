gsap.registerPlugin(ScrollTrigger);
gsap.from(".name", { x: -100, duration: 4,color:"transparent"});
gsap.from(".dev", { x: -100, duration: 4,color:"transparent"});
// gsap.from(".about", { x: 100, duration: 4,color:"transparent"});

gsap.from(".about", {
    scrollTrigger: {
        trigger:".about",
        start:"top 500px",
        end:" top ",  
        scrub:1,
        // markers:true
    }, 
    ease:"none",
    x: -190,
    duration:1
});

gsap.from(".h-t",{
    scrollTrigger:{
        trigger:".hestia-t",
        start:"top center",
        end:" top center",  
        scrub:1,
        // markers:true
    },
    color:"transparent",
    duration:1,
    x:-450
})

gsap.from(".p-h",{
    scrollTrigger:{
        trigger:".p-h",
        start:"top center",
        end:" top center",  
        scrub:1,
        // markers:true
    },
    color:"transparent",
    duration:1,
    x:-470
})


gsap.from(".s-h",{
    scrollTrigger:{
        trigger:".s",
        start:"top center",
        end:" top center",  
        scrub:1,
        // markers:true
    },
    color:"transparent",
    duration:1,
    x:-450
})
gsap.from(".s-a",{
    scrollTrigger:{
        trigger:".f",
        start:"top center",
        end:" top center",  
        scrub:1,
        // markers:true
    },
    color:"transparent",
    duration:1,
    x:-450
})


// gsap.from(".card-port",{
//     scrollTrigger:{
//         trigger:"#Portafolio",
//         start:"top 500px",
//         end:" top 500px",
//         scrub:1,
//     },
//     background:"transparent"
// })

// gsap.from("#Arbol",{
//     scrollTrigger:{
//         trigger:"#Arbol",
//         // markers:true,
//         end:" top ", 
//         start:"top 100px",
//     }
// })