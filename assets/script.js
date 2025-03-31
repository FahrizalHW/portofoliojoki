
    // Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });

    // Form submission
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Ambil data dari form
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let serviceElement = document.getElementById('service');
        let service = serviceElement.options[serviceElement.selectedIndex].text;
        let orderDetails = document.getElementById('orderDetails').value.trim();
        let phoneNumber = '6285212836306'; // Nomor WhatsApp tujuan dalam format internasional
    
        // Cek apakah ada field yang kosong
        if (!name || !email || !service || !orderDetails) {
            alert("Harap isi semua kolom sebelum mengirim pesan!");
            return;
        }
    
        // Buat pesan WhatsApp tanpa encoding manual
        let message = `*FORMULIR PEMESANAN JASA*
        ------------------------------
        *Nama:* ${name}
        *Email:* ${email}
        *Jasa:* ${service}
        
        *DETAIL PESANAN:*
        ${orderDetails}
        
        ------------------------------
        Terima kasih telah memilih layanan kami. Tim kami akan segera memproses pesanan Anda.`;
        
            // Encode seluruh pesan
            let encodedMessage = encodeURIComponent(message);
            
            // Buat URL WhatsApp yang benar
            let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
            // Debug URL sebelum membuka
            console.log(whatsappURL);
        
            // Arahkan ke WhatsApp
            window.open(whatsappURL, '_blank');
    });
    