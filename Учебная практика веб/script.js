 function openNav() {
            document.getElementById("mySidepanel").style.width = "175px";
        }
function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
}
function changetheme_d(){
   document.getElementById("mySidepanel").style.background = "#eee";
   document.getElementById("body").style.background = "#ffcca9";
   document.getElementById("body").style.color = "#444";
}
function changetheme_l(){
   document.getElementById("mySidepanel").style.background = "#111";
   document.getElementById("body").style.color = "#aaa";
   document.getElementById("body").style.background = "#003356";
}
document.addEventListener('click', function(event) {
        const sidepanel = document.getElementById('mySidepanel');
        const openbtn = document.querySelector('.openbtn');
        if (!sidepanel.contains(event.target) && !openbtn.contains(event.target))
            closeNav();
});
