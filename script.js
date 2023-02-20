function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// Tampilkan tombol ketika pengguna menggulung jauh dari atas halaman
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Ketika pengguna mengeklik tombol, gulung kembali ke atas halaman
scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
});
