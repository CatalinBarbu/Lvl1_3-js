let gallery = document.getElementById("gallery");
gallery.innerHTML =
  '<figure><img src="https://picsum.photos/300/300"><figcaption>Fig.1</figcaption></figure>';
gallery.innerHTML +=
  '<figure><img src="https://picsum.photos/300/300"><figcaption>Fig.2</figcaption></figure>';
gallery.innerHTML +=
  '<figure><img src="https://picsum.photos/300/300"><figcaption>Fig.3</figcaption></figure>';
gallery.style.display = "flex";
