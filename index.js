var typed = new Typed('#text1', {
    strings: ['Coder.', 'Developer.','Student.'],
    typeSpeed: 50,
    backspeed: 40,
    loop: true,
    loopcount : Infinity,
    smartBackspace: true,
});

var menubtns = document.getElementsByClassName("menu-btn");
var tabs = document.getElementsByClassName("tabs");
const opentab = (tabname) =>{
    
    for (const menubtn of menubtns) {
     menubtn.classList.remove('active-btn');   
    }
    for (const tab of tabs) {
        tab.classList.remove('active');
    }
    event.currentTarget.classList.add('active-btn');
    document.getElementById(tabname).classList.add('active');
}
