let page1 = document.querySelector(".page1")
let cursor = document.querySelector(".cursor")

document.querySelector(".main").addEventListener("mousemove", function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
    } )
})

let img1 = document.querySelector(".img1 img")

img1.addEventListener("mouseenter", function(){
    cursor.innerHTML = `<video src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z3FP3ZbqstJ984Gl_RIVIANCleanEscape-1080p-.mp4" muted loop autoplay style="height:100%; width:180%"></video>`
    gsap.to(cursor,{
        scale:6
    })
})

img1.addEventListener("mouseleave", function(){
    cursor.innerHTML = `<video src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z3FP3ZbqstJ984Gl_RIVIANCleanEscape-1080p-.mp4" muted loop autoplay style="height:100%; width:180%; opacity:0"></video>`
    gsap.to(cursor,{
        scale:1
    })
})

let boximg1 = document.querySelector(".leftimg img")
let boximg2 = document.querySelector(".rightimg img")

boximg1.addEventListener("mouseenter", function(){
    cursor.innerHTML = `<video src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z3xbLZbqstJ99GKJ_01-OURA-Video2.mp4" muted autoplay loop style="height:100%; cursor:pointer"></video>`
    cursor.style.borderRadius = "0%",
    cursor.style.height = "7vw"
    gsap.to(cursor,{
        scale:3
    })
})
boximg2.addEventListener("mouseenter", function(){
    cursor.innerHTML = `<video src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z22K2ZbqstJ981uv_RJ-CS-MP01.mp4" muted loop autoplay style="height:100%"></video>`
    cursor.style.borderRadius = "0%",
    cursor.style.height = "7vw"
    gsap.to(cursor,{
        scale:3
    })
})
boximg1.addEventListener("mouseleave", function(){
    cursor.innerHTML = `<video src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z3xbLZbqstJ99GKJ_01-OURA-Video2.mp4" muted autoplay loop style="height:100%; cursor:pointer; opacity:0"></video>`
    cursor.style.borderRadius = "50%",
    cursor.style.height = "5vw"
    gsap.to(cursor,{
        scale:1
    })
})
boximg2.addEventListener("mouseleave", function(){
    cursor.innerHTML = `<video src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z22K2ZbqstJ981uv_RJ-CS-MP01.mp4" muted loop autoplay style="opacity:0; height:100%"></video>`
    cursor.style.borderRadius = "50%",
    cursor.style.height = "5vw"
    gsap.to(cursor,{
        scale:1
    })
})


function swiperanim(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
    
    let swip1 = document.querySelector(".swiper-wrapper")
    
    swip1.addEventListener("mouseenter", function(){
        cursor.innerHTML = "Drag",
        cursor.style.fontSize = "2vw"
        gsap.to(cursor, {
            scale:2
        })
    })
    swip1.addEventListener("mouseleave", function(){
        cursor.innerHTML = "",
        cursor.style.fontSize = ""
        gsap.to(cursor, {
            scale:1
        })
    })
}

swiperanim()

let tl1 = gsap.timeline()


tl1.from("h2 .first", {
    y:50,
    duration:1,
    stagger:0.15,
    opacity:0,
    delay:1
})


tl1.to(".black",{
    opacity:0,
    // delay:1,
    duration:3
})

tl1.from("h1 .first", {
    y:200,
    duration:1,
    stagger:0.15,
    opacity:0,
    // delay:1
})

gsap.from(".textarea2 h1", {
    y:50,
    duration:1,
    stagger:0.15,
    opacity:0,
    delay:1,
    scrollTrigger: {
        trigger: ".textarea2 h1",
        scroller: "body",
        start: "0% 50%",
        end: "0% 55%",
        scrub: 3,
        // markers:true
    }
})

let tl2 = gsap.timeline()


tl2.from(".textarea1 h2", {
    y:50,
    duration:1,
    stagger:0.15,
    opacity:0,
    delay:1,scrollTrigger: {
        trigger: ".textarea1 h2",
        scroller: "body",
        start: "0% 50%",
        end: "0 55%",
        scrub: 3,
        // markers:true
    }
})
tl2.from(".textarea3 h2", {
    y:50,
    duration:0.5,
    stagger:0.15,
    opacity:0,
    scrollTrigger: {
        trigger: ".textarea2 h2",
        scroller: "body",
        start: "0% 50%",
        end: "0 55%",
        scrub: 3,
        // markers:true
    }
})
tl2.from(".textarea4 h2", {
    y:50,
    duration:0.5,
    stagger:0.15,
    opacity:0,
    scrollTrigger: {
        trigger: ".textarea2 h2",
        scroller: "body",
        start: "0% 50%",
        end: "0 55%",
        scrub: 3,
        // markers:true
    }
})
tl2.from(".textarea5 h2", {
    y:50,
    duration:0.5,
    stagger:0.15,
    opacity:0,
    scrollTrigger: {
        trigger: ".textarea2 h2",
        scroller: "body",
        start: "0% 50%",
        end: "0 55%",
        scrub: 3,
        // markers:true
    }
})
tl2.from(".textarea6 h2", {
    y:50,
    duration:0.5,
    stagger:0.15,
    opacity:0,
    scrollTrigger: {
        trigger: ".textarea2 h2",
        scroller: "body",
        start: "0% 50%",
        end: "0% 55%",
        scrub: 3,
        // markers:true
    }
})

tl3 = gsap.timeline()

tl3.from(".textarea10 h2", {
    y:50,
    duration:0.5,
    stagger:0.3,
    opacity:0,
    scrollTrigger: {
        trigger: ".textarea10 h2",
        scroller: "body",
        start: "0% 50%",
        end: "0 55%",
        scrub: 3,
        // markers:true
    }
})

gsap.to(".vid8 video", {
    // y:70,
    duration:1,
    // opacity:0,
    // height:"0",
    width:"90vw",
    scrollTrigger: {
        trigger: ".vid8 video",
        scroller: "body",
        start: "30% 40%",
        end: "30% 20%",
        scrub: 3,
        // markers:true
    }
})