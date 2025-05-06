function formuGonder() {
    const isim = document.getElementById("isim").value;
    const email = document.getElementById("email").value;
    alert(`Teşekkürler ${isim}! Size ${email} üzerinden ulaşacağım.`);
  }
  function temaDegistir() {
    document.body.classList.toggle("dark-mode");
  
    // Buton yazısını değiştir
    const btn = document.getElementById("temaButonu");
    if (document.body.classList.contains("dark-mode")) {
      btn.innerText = "Light Mode";
    } else {
      btn.innerText = "Dark Mode";
    }
  }
  