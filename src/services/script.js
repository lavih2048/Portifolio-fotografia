function toggleDropdown(event) {
    event.preventDefault();
    document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
  // Fecha o dropdown ao clicar fora
  window.onclick = function(e) {
    if (!e.target.matches('a')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("show");
      }
    }
  };
  