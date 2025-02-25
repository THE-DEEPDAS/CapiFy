var loader = document.querySelector("#loader")
// set timeout basically dalay in execution
setTimeout(function(){
    loader.style.top = "-100%";
},3500)

const menuItems = {
    individual: {
        title: "Individual",
        items: [
            { name: "Budget Tracker", link: "https://capify-webchefs.vercel.app/budget-tracker" },
            { name: "Balance Tracker", link: "https://capify-webchefs.vercel.app/budget" },
            { name: "Personalized Recommendations", link: "https://recommendationcapify.vercel.app/" },
            { name: "Stock Market Prediction", link: "https://stockpredicto.streamlit.app/" },
            { name: "Resources", link: "https://resources-section.vercel.app/" },
            { name: "Blogs", link: "https://blogs-section-three.vercel.app/" },
            { name: "Financial Health Quiz", link: "https://financial-calculators-seven.vercel.app/" }
        ]
    },
    groupUser: {
        title: "Group User",
        items: [{ name: "Split Smart", link: "https://capify-webchefs.vercel.app//splitwise" }]
    },
    smallBusiness: {
        title: "Small Business",
        items: [{ name: "Invoice Analyzer", link: "https://invoice-analyser.streamlit.app/" }]
    },
    login: {
        title: "Login",
        items: [{ name: "Dashboard", link: "https://capify-webchefs.vercel.app/" }]
    }
};

let activeDropdown = null;
let isMobileMenuOpen = false;

function createNavItems() {
    const navItemsContainer = document.getElementById('navItems');
    if (!navItemsContainer) return;

    Object.entries(menuItems).forEach(([key, { title, items }]) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';

        const button = document.createElement('button');
        button.className = 'nav-button';
        button.innerHTML = `
            <span>${title}</span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `;

        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown';
        
        items.forEach(({ name, link }) => {
            const anchor = document.createElement('a');
            anchor.href = link;
            anchor.className = 'dropdown-item';
            anchor.textContent = name;
            anchor.target = "_blank"; // Opens in new tab
            dropdown.appendChild(anchor);
        });

        button.addEventListener('click', () => {
            if (activeDropdown === key) {
                dropdown.classList.remove('active');
                button.querySelector('.chevron').classList.remove('rotate');
                activeDropdown = null;
            } else {
                if (activeDropdown) {
                    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
                    document.querySelectorAll('.chevron').forEach(c => c.classList.remove('rotate'));
                }
                dropdown.classList.add('active');
                button.querySelector('.chevron').classList.add('rotate');
                activeDropdown = key;
            }
        });

        navItem.appendChild(button);
        navItem.appendChild(dropdown);
        navItemsContainer.appendChild(navItem);
    });
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createNavItems();
    
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const navItems = document.getElementById('navItems');

    if (mobileMenuButton && navItems) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            isMobileMenuOpen = !isMobileMenuOpen;
            navItems.classList.toggle('mobile-active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-items') && !event.target.closest('.mobile-menu-button')) {
            if (window.innerWidth <= 768) {
                navItems.classList.remove('mobile-active');
                isMobileMenuOpen = false;
            }
            // Close dropdowns
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
            document.querySelectorAll('.chevron').forEach(c => c.classList.remove('rotate'));
            activeDropdown = null;
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navItems = document.getElementById('navItems');
        if (navItems) {
            navItems.classList.remove('mobile-active');
            isMobileMenuOpen = false;
        }
    }
});

window.addEventListener('load', () => {
    const gradientDiv = document.getElementById('gradientBackground');

    // Example function to change gradient dynamically
    function changeGradient(color1, color2) {
        gradientDiv.style.background = `radial-gradient(${color1}, ${color2})`;
    }

    // Change the gradient after 3 seconds for demonstration
    // setTimeout(() => {
    //     changeGradient( "#000000","#000000");
    // }, 3000);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(this);

    // Send form data using Fetch API
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show success message
            document.getElementById('formResponse').style.display = 'block';
            document.getElementById('formResponse').innerHTML = '<h4 class="text-success">Thank you for your message. We will get back to you soon!</h4>';
            this.reset(); // Reset form fields
        } else {
            // Show error message
            document.getElementById('formResponse').style.display = 'block';
            document.getElementById('formResponse').innerHTML = '<h4 class="text-danger">There was a problem with the submission. Please try again later.</h4>';
        }
    }).catch(error => {
        console.error('Error:', error);
        // Show error message
        document.getElementById('formResponse').style.display = 'block';
        document.getElementById('formResponse').innerHTML = '<h4 class="text-danger">There was an error sending your message. Please try again later.</h4>';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let visitCount = localStorage.getItem('page_hits');

    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount);
    }

    visitCount += 1;
    localStorage.setItem('page_hits', visitCount);

    document.getElementById('hit-counter').textContent = visitCount;
});
