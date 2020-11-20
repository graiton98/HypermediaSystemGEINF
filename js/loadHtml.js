/*fetch("../includes/topNavbar.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector(".top-navbar").innerHTML = data;
});

fetch("../includes/nav.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector(".navigationBar").innerHTML = data;
  $(function(){
    var url = window.location.href;
    $("#navbarResponsive a").each(function() {
      if(url == (this.href)) {
        $(this).closest("li").addClass("active");
      }
    });
  });
});

fetch("../includes/footer.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("footer").innerHTML = data;
});
*/



document.querySelector(".top-navbar").innerHTML = topNavbar;
document.querySelector(".navigationBar").innerHTML = navigationBar;
document.querySelector("footer").innerHTML = footer;



$(function(){
  var url = window.location.href;
  $("#navbarResponsive a").each(function() {
    if(url == (this.href)) {
      $(this).closest("li").addClass("active");
    }
  });
});