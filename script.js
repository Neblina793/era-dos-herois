function showMsg() {
            const box = document.getElementById('msgBox');
            box.classList.remove('hidden');
            setTimeout(() => {
                box.classList.add('hidden');
            }, 3000);
        }

        // Suave Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });