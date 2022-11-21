function myFunction() {
    // fungsi untuk menampilkan menu burger
    var x = document.getElementById("burger__menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }