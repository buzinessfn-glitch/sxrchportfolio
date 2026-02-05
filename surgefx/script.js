document.addEventListener('DOMContentLoaded', function() {
    // Animated cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Button effects
    const buttons = document.querySelectorAll('a');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Text block and image animations when scrolling down
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
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(section);
    });

    // Navigation effects (smooth scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Populate client loop
    const clientsLoop = document.querySelector('.clients-loop');
    const clients = [
        { name: '@Prismfnr', description: '"fortnite professional or something"', occupation: 'PRO', pfp: 'SetImages/prismpfp.jpg', socialMediaLink: 'https://x.com/prismfnr' },
        { name: '@skyszn', description: 'Watch out for him...', occupation: 'SCROLLS DUO', pfp: 'SetImages/skyszn.jpg', socialMediaLink: 'https://x.com/SkySZN_' },
        { name: '@kirillianfnx', description: 'And Poof... You are gone!', occupation: 'Best Aimer', pfp: 'SetImages/kirillianpfp.jpg', socialMediaLink: 'https://x.com/kirillianfnx' },
        { name: 'MORE', description: '40+ more', occupation: '+', pfp: 'SetImages/andmorepfp.jpg', socialMediaLink: 'https://surgefx.space' },
        // Add more clients as needed
    ];

    clients.forEach(client => {
        const clientItem = document.createElement('div');
        clientItem.classList.add('client-item');

        const name = document.createElement('h3');
        name.textContent = client.name;

        const description = document.createElement('p');
        description.textContent = client.description;

        const occupation = document.createElement('p');
        occupation.textContent = client.occupation;

        const pfpImg = document.createElement('img');
        pfpImg.src = client.pfp;
        pfpImg.alt = 'Profile Picture';
        pfpImg.style.width = '50px';
        pfpImg.style.height = '50px';
        pfpImg.style.borderRadius = '50%';

        clientItem.appendChild(pfpImg);
        clientItem.appendChild(name);
        clientItem.appendChild(occupation);
        clientItem.appendChild(description);

        clientItem.addEventListener('click', () => {
            const popup = document.getElementById('client-popup');
            document.getElementById('client-name').textContent = client.name;
            document.getElementById('client-description').textContent = client.description;
            document.getElementById('client-occupation').textContent = client.occupation;
            document.getElementById('client-pfp').src = client.pfp;
            // Add the social media button
            const checkItOutBtn = document.createElement('button');
            checkItOutBtn.textContent = 'Check it out';
            checkItOutBtn.onclick = function() {
                window.open(client.socialMediaLink, '_blank');
            };
            // Clear previous button if any
            const existingBtn = document.getElementById('check-it-out-btn');
            if (existingBtn) {
                existingBtn.remove();
            }
            checkItOutBtn.id = 'check-it-out-btn';
            popup.appendChild(checkItOutBtn);
            popup.classList.add('active');
        });

        clientsLoop.appendChild(clientItem);
    });

    // Close popup
    document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('client-popup').classList.remove('active');
    });

    // Populate work gallery from WorkImages folder
    const workGallery = document.querySelector('.work-gallery');
    // This part would typically be done using a build tool or server-side script
    // For simplicity, we'll assume you have a list of image paths
    const workImages = [
        'WorkImages/surgework1.jpg',
        'WorkImages/surgework2.jpg',
        'WorkImages/surgework3.jpg',
        'WorkImages/surgework4.jpg',
        'WorkImages/surgework5.jpg',
        'WorkImages/surgework6.jpg',
        'WorkImages/surgework7.jpg',
        'WorkImages/surgework8.jpg',
        'WorkImages/surgework9.jpg',
        'WorkImages/surgework10.jpg'
        // Add more image paths as needed
    ];

    workImages.forEach(imagePath => {
        const workItem = document.createElement('div');
        workItem.classList.add('work-item');

        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Work Image';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';

        workItem.appendChild(img);
        workGallery.appendChild(workItem);
    });

    // Populate review list
    const reviewList = document.querySelector('.review-list');
    const reviews = [
        {
            name: '@Fraanticc',
            review: "Absolutely loved the creative approach! The design was stunning and really captured the essence of what we were looking for. Highly recommend!",
            stars: 5,
            occupation: 'Female Fortnite Player',
            pfp: 'SetImages/fraanticpfp.jpg',
            socialMediaLink: 'https://x.com/Fraanticc'
        },
        {
            name: '@higgs',
            review: "The work was efficient and the thumbnails were clean. Really appreciated the attention to detail and the fast turnaround. Great work!",
            stars: 5,
            occupation: 'Pro Player',
            pfp: 'SetImages/higgspfp.jpg',
            socialMediaLink: 'https://x.com/BatmanBugha'
        },
        {
            name: '@200Pxmp',
            review: "The quality of work was exceptional. It really was up to par and professional-looking. Very satisfied!",
            stars: 5,
            occupation: 'Pro Player',
            pfp: 'SetImages/pxmppfp.jpg',
            socialMediaLink: 'https://x.com/200_PXMP'
        },
        {
            name: '@Joshreyli',
            review: "Professional and delivered on time. The results were exactly what I asked for. Will definitely work with again!",
            stars: 5,
            occupation: 'Upcoming Prodigy',
            pfp: 'SetImages/joshreylipfp.jpg',
            socialMediaLink: 'https://x.com/Joshreyli'
        },
        {
            name: '@Tjino9',
            review: "Innovative and unique approach. It was exactly what I was looking for.",
            stars: 5,
            occupation: 'Pro Player',
            pfp: 'SetImages/tjinopfp.jpg',
            socialMediaLink: 'https://x.com/Tjino9'
        }
    ];

    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        const pfpImg = document.createElement('img');
        pfpImg.src = review.pfp;
        pfpImg.alt = 'Profile Picture';
        pfpImg.style.width = '50px';
        pfpImg.style.height = '50px';
        pfpImg.style.borderRadius = '50%';

        const stars = document.createElement('div');
        stars.innerHTML = '★'.repeat(review.stars);

        const name = document.createElement('h3');
        name.textContent = review.name;

        const occupation = document.createElement('p');
        occupation.textContent = review.occupation;

        const reviewText = document.createElement('p');
        reviewText.textContent = review.review;

        const checkItOutBtn = document.createElement('button');
        checkItOutBtn.textContent = 'Check it out';
        checkItOutBtn.onclick = function() {
            window.open(review.socialMediaLink, '_blank');
        };

        reviewItem.appendChild(pfpImg);
        reviewItem.appendChild(name);
        reviewItem.appendChild(occupation);
        reviewItem.appendChild(stars);
        reviewItem.appendChild(reviewText);
        reviewItem.appendChild(checkItOutBtn);

        reviewList.appendChild(reviewItem);
    });
});
