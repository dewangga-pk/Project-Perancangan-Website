function displayNav() {
  document.getElementById("SideNav").style.height="150px";
}
function closeNav() {
  document.getElementById("SideNav").style.height = "0";
};

function navClick() {
  var x = document.getElementById("SideNav");
  if (x.className == "Sidenavbar") {
    x.className += " open";
    displayNav();
  } else {
    x.className = "Sidenavbar";
    closeNav();
  }
}

let a1 = document.querySelectorAll(".jumbotron,.container,.testimoni,footer");
for (let i =0 ,len = a1.length;i<len;i++){
  a1[i].addEventListener('click',function(){
    closeNav();
  });
  a1[i].addEventListener('scroll',function(){
    closeNav();
  });
};