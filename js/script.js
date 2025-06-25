// toggle Class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// kirim pesan ke whatsaap
function kirimWA(){
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var nohp = document.getElementById("nohp").value;

  var url = "https://wa.me/6285769865922?text="
    + "Halo TaskSmart!%0A"
    + "Nama  :" + nama + "%0A"
    + "Email :" + email + "%0A"
    + "No Hp :" + nohp;

  window.open(url, '_blank').focus();
}

