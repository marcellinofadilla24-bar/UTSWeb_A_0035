window.onload = function () {

    alert("Selamat Datang di Urban Coffee Company");

}

document
.getElementById("darkModeBtn")
.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});

function tambahProduk(){

    let container =
    document.getElementById("produkContainer");

    let produk = document.createElement("div");

    produk.className = "col-md-4";

    produk.innerHTML = `

    <div class="card shadow">

        <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
        class="card-img-top">

        <div class="card-body">

            <h5>Signature Coffee</h5>

            <p>Menu Baru Urban Coffee</p>

        </div>

    </div>

    `;

    container.appendChild(produk);

}

document
.getElementById("topBtn")
.addEventListener("click", function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});