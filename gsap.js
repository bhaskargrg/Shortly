var tl=gsap.timeline()

tl.from('.navv .navv2,.navv .navv1,.navv .navv1 img ',{
    opacity:0,
    duration:1,
    duration:0.5,
    y:-100,
    stagger:0.5,
})
tl.from('.working',{
    opacity:0,
    x:-100
})
tl.from('.work',{
    opacity:0,
    x:-100,
    stagger:0.5,
})
tl.from('.work2',{
    opacity:0,
    x:-100,
})
tl.from('.work3',{
    opacity:0,
    x:-100,
})

gsap.from('#advanced',{
y:-100,
scrollTrigger:{
    trigger:'#advanced',
    scroller:'body'
}
})