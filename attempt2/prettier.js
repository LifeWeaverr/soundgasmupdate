
/*reddit logos animation*/
const tl=gsap.timeline();
var pref=document.getElementById("prefred");

pref.addEventListener("click", function(){
if(window.getComputedStyle(pref).left=="0px"){
    tl.fromTo(pref, {left:"0rem"},{left:"7.1rem", duration: 1})
    tl.fromTo(pref,{rotation:"0deg"}, {rotation:"360deg",duration: 1}, '<')
    tl.fromTo(document.querySelector("#clone"),{width:"9rem"}, {width:"0rem",duration:1},'<')
    tl.fromTo(document.querySelector("#clone"),{left:"0rem"}, {left:"7rem",duration:1},'<')
}

});


const t2=gsap.timeline();
var auth=document.getElementById("authred");

auth.addEventListener("click", function(){
if(window.getComputedStyle(auth).left=="0px"){
    t2.fromTo(auth, {left:"0rem"},{left:"7.1rem", duration: 1})
    t2.fromTo(auth,{rotation:"0deg"}, {rotation:"360deg",duration: 1}, '<')
    t2.fromTo(document.querySelector("#clone2"),{width:"9rem"}, {width:"0rem",duration:1},'<')
    t2.fromTo(document.querySelector("#clone2"),{left:"0rem"}, {left:"7rem",duration:1},'<')
}

});

/*spotify logo animation*/
const t3=gsap.timeline();
var spot=document.getElementById("prefspot");

spot.addEventListener("click", function(){
    
if(window.getComputedStyle(spot).left=="-14.4px"){
    t3.fromTo(spot, {left:"0rem"},{left:"6.1rem", duration: 1})
    t3.fromTo(spot,{rotation:"0deg"}, {rotation:"360deg",duration: 1}, '<')
    t3.fromTo(document.querySelector("#clone4"),{width:"9rem"}, {width:"0rem",duration:1},'<')
    t3.fromTo(document.querySelector("#clone4"),{left:"0rem"}, {left:"7rem",duration:1},'<')
}

});

/*twitter logo animation*/
const t4=gsap.timeline();
var twit=document.getElementById("preftwit");

twit.addEventListener("click", function(){
    
if(window.getComputedStyle(twit).left=="0px"){
    t4.fromTo(twit, {left:"0rem"},{left:"7.1rem", duration: 1})
    t4.fromTo(twit,{rotation:"0deg"}, {rotation:"360deg",duration: 1}, '<')
    t4.fromTo(document.querySelector("#clone3"),{width:"9rem"}, {width:"0rem",duration:1},'<')
    t4.fromTo(document.querySelector("#clone3"),{left:"0rem"}, {left:"7rem",duration:1},'<')
}

});