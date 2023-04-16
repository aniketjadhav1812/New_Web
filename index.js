var typed = new Typed('#text1', {
    strings: ['Coder.', 'Developer.', 'Student.'],
    typeSpeed: 50,
    backspeed: 40,
    loop: true,
    loopcount: Infinity,
    smartBackspace: true,
});

const closemenu = () => {
    document.getElementById("side").style.left = "-100%";
    document.getElementById('menu').style.left = "25px";
    document.getElementById('slide').style.top = "-100vh";    

    
}
const openmenu = () => {
    document.getElementById('menu').style.left = "-100%";
    document.getElementById("side").style.left = "0%";
    document.getElementById('slide').style.top = "0";
}


var menubtns = document.getElementsByClassName("menu-btn");
var tabs = document.getElementsByClassName("tabs");
const opentab = (tabname) => {

    for (const menubtn of menubtns) {
        menubtn.classList.remove('active-btn');
    }
    for (const tab of tabs) {
        tab.classList.remove('active');
    }
    event.currentTarget.classList.add('active-btn');
    document.getElementById(tabname).classList.add('active');
}
