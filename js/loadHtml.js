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


function linieaMenu(){
  var url_string = window.location.href;
  
  var urlParams = new URLSearchParams(url_string);

  var exist = urlParams.has('n');
  var e;
  var s;
  var url;
  if(exist){
    url = new URL(url_string);
    e = url.searchParams.get("e");
    s = url.searchParams.get("s");
  }
  $("#navbarResponsive a").each(function() {
    if(exist){
      var aux = this.textContent.replace(/\s/g, '').toLocaleLowerCase();
      if(aux === n || aux === s) $(this).closest("li").addClass("active");
    }else if(url_string == (this.href)) $(this).closest("li").addClass("active");
  });

}
