document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Custom Cursor ---
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // --- 2. Scroll Animation (Fade in sections) ---
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- 3. Smooth Nav Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- 4. Clients Logic (Infinite Scroll & Popup) ---
    const clientsLoop = document.querySelector('.clients-loop');
    
    // CONFIG: Add your clients here
    const clientsData = [
        { name: '@Prismfnr', description: '"Insane energy, huge moves."', occupation: 'PRO', pfp: 'SetImages/prismpfp.jpg', link: 'https://x.com/prismfnr' },
        { name: '@skyszn', description: '"Always watching, always scrolling."', occupation: 'SCROLLS DUO', pfp: 'SetImages/skyszn.jpg', link: 'https://x.com/SkySZN_' },
        { name: '@kirillianfnx', description: '"And Poof... You are gone!"', occupation: 'Best Aimer', pfp: 'SetImages/kirillianpfp.jpg', link: 'https://x.com/kirillianfnx' },
        { name: 'Generic Pro', description: 'Next level plays.', occupation: 'Comp Player', pfp: 'SetImages/default.jpg', link: '#' },
        { name: 'Unknown User', description: 'Hidden talent.', occupation: 'Creative Warrior', pfp: 'SetImages/default.jpg', link: '#' },
        { name: 'Surge Fan', description: 'Big supporter.', occupation: 'Community', pfp: 'SetImages/default.jpg', link: '#' },
        { name: 'MORE', description: '40+ more clients', occupation: '+', pfp: 'SetImages/andmorepfp.jpg', link: 'https://surgefx.space' }
    ];

    // Function to create a client card
    function createClientCard(client) {
        const card = document.createElement('div');
        card.classList.add('client-item');
        
        card.innerHTML = `
            <img src="${client.pfp}" alt="${client.name}" onerror="this.src='https://via.placeholder.com/150'">
            <h3>${client.name}</h3>
            <p style="font-weight:bold; color:var(--dark-blue)">${client.occupation}</p>
            <p>"${client.description}"</p>
        `;

        // Click Event -> Open Popup
        card.addEventListener('click', () => {
            const popup = document.getElementById('client-popup');
            document.getElementById('client-name').textContent = client.name;
            document.getElementById('client-description').textContent = client.description;
            document.getElementById('client-occupation').textContent = client.occupation;
            document.getElementById('client-pfp').src = client.pfp;
            
            // Remove old button if exists, add new one
            const oldBtn = document.getElementById('client-link-btn');
            if(oldBtn) oldBtn.remove();

            const btn = document.createElement('button');
            btn.textContent = "Check it out";
            btn.id = "client-link-btn";
            btn.classList.add('check-out-btn');
            btn.onclick = () => window.open(client.link, '_blank');
            
            popup.appendChild(btn);
            popup.classList.add('active');
        });

        return card;
    }

    // Populate the loop (Double the data for seamless CSS loop)
    // We add the list twice so when it scrolls 50%, it looks like it reset
    [...clientsData, ...clientsData].forEach(client => {
        clientsLoop.appendChild(createClientCard(client));
    });

    // Close Popup Logic
    document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('client-popup').classList.remove('active');
    });

    // --- 5. My Work Logic ---
    const workGallery = document.querySelector('.work-gallery');
    const workImages = [
        'WorkImages/surgework1.jpg', 'WorkImages/surgework2.jpg',
        'WorkImages/surgework3.jpg', 'WorkImages/surgework4.jpg',
        'WorkImages/surgework5.jpg', 'WorkImages/surgework6.jpg',
        'WorkImages/surgework7.jpg', 'WorkImages/surgework8.jpg'
        // Add more filenames here as you add them to the folder
    ];

    workImages.forEach(src => {
        const item = document.createElement('div');
        item.classList.add('work-item');
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Portfolio Work";
        img.onerror = function() { this.style.display='none'; }; // Hide if missing
        item.appendChild(img);
        workGallery.appendChild(item);
    });

    // --- 6. Reviews Logic ---
    const reviewList = document.querySelector('.review-list');
    const reviewsData = [
        {
            name: '@Fraanticc',
            occupation: 'Female Fortnite Player',
            review: "Honestly blown away by the creativity. The design feels alive and matches my brand perfectly. Super fast delivery too!",
            stars: 5,
            pfp: 'SetImages/fraanticpfp.jpg',
            link: 'https://x.com/Fraanticc'
        },
        {
            name: '@higgs',
            occupation: 'Pro Player',
            review: "Cleanest thumbnails in the game. SurgeFX knows exactly how to capture attention. 10/10 recommend.",
            stars: 5,
            pfp: 'SetImages/higgspfp.jpg',
            link: 'https://x.com/BatmanBugha'
        },
        {
            name: '@200Pxmp',
            occupation: 'Pro Player',
            review: "Professional quality that actually stands out. The turnaround time was insane for this level of detail.",
            stars: 5,
            pfp: 'SetImages/pxmppfp.jpg',
            link: 'https://x.com/200_PXMP'
        },
        {
            name: '@Joshreyli',
            occupation: 'Upcoming Prodigy',
            review: "Exactly what I asked for, but better. The animations and color grading are top tier. Def working together again.",
            stars: 5,
            pfp: 'SetImages/joshreylipfp.jpg',
            link: 'https://x.com/Joshreyli'
        },
        {
            name: '@Tjino9',
            occupation: 'Pro Player',
            review: "Unique style that you don't see everyday. Super easy to work with and understood the assignment immediately.",
            stars: 5,
            pfp: 'SetImages/tjinopfp.jpg',
            link: 'https://x.com/Tjino9'
        }
    ];

    reviewsData.forEach(rev => {
        const item = document.createElement('div');
        item.classList.add('review-item');

        const starsHTML = '★'.repeat(rev.stars);
        
        item.innerHTML = `
            <div class="review-header">
                <img src="${rev.pfp}" alt="${rev.name}" onerror="this.src='https://via.placeholder.com/50'">
                <h3>${rev.name}</h3>
                <small>${rev.occupation}</small>
            </div>
            <div class="stars">${starsHTML}</div>
            <p class="review-text">"${rev.review}"</p>
        `;

        // Check it out button
        const btn = document.createElement('button');
        btn.textContent = 'Check it out';
        btn.classList.add('check-out-btn');
        btn.onclick = () => window.open(rev.link, '_blank');
        
        item.appendChild(btn);
        reviewList.appendChild(item);
    });
});