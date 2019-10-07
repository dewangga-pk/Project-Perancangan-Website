function myFunction() {
    var x = document.getElementById("SideNav");
    if (x.className == "Sidenavbar") {
      x.className += " responsive";
    } else {
      x.className = "Sidenavbar";
    }
  }