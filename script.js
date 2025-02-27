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