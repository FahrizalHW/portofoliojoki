    const reviewsList = document.getElementById("reviewsList");
    const usernameInput = document.getElementById("username");
    const commentInput = document.getElementById("userComment");
    const submitButton = document.getElementById("submitReview");

    // Load Ulasan dari LocalStorage
    function loadReviews() {
        reviewsList.innerHTML = "";
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.forEach(({ name, comment, rating }) => {
            const reviewEl = document.createElement("div");
            reviewEl.classList = "p-4 bg-gray-800 rounded-lg";
            reviewEl.innerHTML = `
                <p class="font-semibold text-indigo-400">${name}</p>
                <p class="text-sm text-gray-300">${comment}</p>
                <p class="text-yellow-400">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</p>
            `;
            reviewsList.appendChild(reviewEl);
        });
    }

    submitButton.addEventListener("click", () => {
        const name = usernameInput.value.trim();
        const comment = commentInput.value.trim();
        const rating = 5; // Default rating bintang penuh (bisa dibuat dinamis)

        if (name && comment) {
            const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
            reviews.push({ name, comment, rating });
            localStorage.setItem("reviews", JSON.stringify(reviews));

            usernameInput.value = "";
            commentInput.value = "";
            loadReviews();
        }
    });

    loadReviews();    
    
    
    document.getElementById('menu-toggle').addEventListener('click', function() {
        console.log('Menu toggle clicked'); // Tambahkan log ini
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
        console.log('Hidden class toggled: ', !mobileMenu.classList.contains('hidden')); // Log status
    });

    function toggleMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    }

    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let serviceElement = document.getElementById('service');
        let service = serviceElement.options[serviceElement.selectedIndex].text;
        let orderDetails = document.getElementById('orderDetails').value.trim();
        let phoneNumber = '6285212836306';
    
        if (!name || !email || !service || !orderDetails) {
            alert("Harap isi semua kolom sebelum mengirim pesan!");
            return;
        }
    
        let message = `*FORMULIR PEMESANAN JASA*
        ------------------------------
        *Nama:* ${name}
        *Email:* ${email}
        *Jasa:* ${service}
        
        *DETAIL PESANAN:*
        ${orderDetails}
        
        ------------------------------
        Terima kasih telah memilih layanan kami. Tim kami akan segera memproses pesanan Anda.`;
        
            let encodedMessage = encodeURIComponent(message);

            let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            console.log(whatsappURL);

            window.open(whatsappURL, '_blank');
    });

