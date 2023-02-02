let btnBackTop = document.getElementById("btnBackTop");
window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnBackTop.style.display = "flex";
    } else {
      btnBackTop.style.display = "none";
    }
  }

  function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }
  