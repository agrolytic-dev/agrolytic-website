// Load Certifications// Content Loader - Dynamically loads content from content.js into HTML
// This runs when the page loads to populate all text content

document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.siteContent === 'undefined') {
        console.error('Site content not loaded. Make sure content.js is included.');
        return;
    }
    
    const content = window.siteContent;
    
    // Load Navigation
    loadNavigation(content.navigation, content.company.name);
    
    // Load Hero Section
    loadHeroSection(content.hero);
    
    // Load Access Section (now first)
    loadAccessSection(content.access);
    
    // Load Certifications Section (renamed from Trust)
    loadCertificationsSection(content.certifications);
    
    // Load Contact Section
    loadContactSection(content.contact);
    
    // Load Footer
    loadFooter(content.footer);
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    console.log('✅ All content loaded successfully');
});

function loadNavigation(nav, companyName) {
    // Company name in navbar
    const navLogo = document.querySelector('.nav-logo h2');
    if (navLogo) navLogo.textContent = companyName;
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navItems = [nav.home, nav.access, nav.certifications, nav.contact];
    
    navLinks.forEach((link, index) => {
        if (navItems[index]) {
            link.textContent = navItems[index];
        }
    });
}

function loadHeroSection(hero) {
    // Hero title and subtitle
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    
    if (heroTitle) heroTitle.textContent = hero.title;
    if (heroSubtitle) heroSubtitle.textContent = hero.subtitle;
    if (ctaButton) ctaButton.textContent = hero.ctaButton;

    // Hero In Numbers (integrated into hero)
    const heroNumbersGrid = document.querySelector('.hero-numbers-grid');
    if (heroNumbersGrid && hero.inNumbers) {
        heroNumbersGrid.innerHTML = '';
        hero.inNumbers.stats.forEach(stat => {
            const heroNumberCard = createHeroNumberCard(stat.number, stat.label);
            heroNumbersGrid.appendChild(heroNumberCard);
        });
    }
}

function loadCertificationsSection(certifications) {
    // Section title and subtitle
    const certificationsTitle = document.querySelector('#certifications .section-title');
    const certificationsSubtitle = document.querySelector('#certifications .section-subtitle');
    
    if (certificationsTitle) certificationsTitle.textContent = certifications.title;
    if (certificationsSubtitle) certificationsSubtitle.textContent = certifications.subtitle;
    
    // Credential categories
    const categories = document.querySelectorAll('.credential-category');
    
    // Team Certifications
    if (categories[0]) {
        const title = categories[0].querySelector('h3');
        const certList = categories[0].querySelector('.cert-list');
        
        if (title) title.textContent = certifications.teamCertifications.title;
        if (certList) {
            certList.innerHTML = '';
            certifications.teamCertifications.items.forEach(cert => {
                const certItem = createCertItem(cert.badge, cert.title);
                certList.appendChild(certItem);
            });
        }
    }
    
    // Company Standards
    if (categories[1]) {
        const title = categories[1].querySelector('h3');
        const certList = categories[1].querySelector('.cert-list');
        
        if (title) title.textContent = certifications.companyStandards.title;
        if (certList) {
            certList.innerHTML = '';
            certifications.companyStandards.items.forEach(cert => {
                const certItem = createCertItem(cert.badge, cert.title);
                certList.appendChild(certItem);
            });
        }
    }
    
    // Statistics
    if (categories[2]) {
        const title = categories[2].querySelector('h3');
        const statsGrid = categories[2].querySelector('.stats-grid');
        
        if (title) title.textContent = certifications.stats.title;
        if (statsGrid) {
            statsGrid.innerHTML = '';
            certifications.stats.items.forEach(stat => {
                const statItem = createStatItem(stat.number, stat.label);
                statsGrid.appendChild(statItem);
            });
        }
    }
    
    // Certification Logos (new section)
    const logosTitle = document.querySelector('.logos-title');
    const certificationLogos = document.querySelector('.certification-logos');
    
    if (logosTitle && certifications.certificationLogos) {
        logosTitle.textContent = certifications.certificationLogos.title;
    }
    
    if (certificationLogos && certifications.certificationLogos) {
        certificationLogos.innerHTML = '';
        certifications.certificationLogos.logos.forEach(logo => {
            const logoElement = createCertificationLogo(logo);
            certificationLogos.appendChild(logoElement);
        });
    }
}

function loadInNumbersSection(inNumbers) {
    // This function is no longer used as In Numbers moved to Hero
    console.log('In Numbers section moved to Hero section');
}

function loadAccessSection(access) {
    // Section title and subtitle
    const accessTitle = document.querySelector('#access .section-title');
    const accessSubtitle = document.querySelector('#access .section-subtitle');
    
    if (accessTitle) accessTitle.textContent = access.title;
    if (accessSubtitle) accessSubtitle.textContent = access.subtitle;
    
    // Terms content
    const termsTitle = document.querySelector('.consent-box h3');
    const consentText = document.querySelector('.consent-text');
    
    if (termsTitle) termsTitle.textContent = access.terms.title;
    if (consentText) {
        consentText.innerHTML = `
            <p><strong>${access.terms.content.header}</strong></p>
            <p>${access.terms.content.intro}</p>
            <ul>
                ${access.terms.content.clauses.map(clause => `<li>${clause}</li>`).join('')}
            </ul>
            <p><strong>Confidentiality:</strong> ${access.terms.content.confidentiality}</p>
            <p><strong>Compliance:</strong> ${access.terms.content.compliance}</p>
            <p>${access.terms.content.disclaimer}</p>
        `;
    }
    
    // Consent checkbox and button
    const consentLabel = document.querySelector('.consent-checkbox');
    const accessButton = document.querySelector('.access-button');
    
    if (consentLabel) {
        const labelText = consentLabel.querySelector('span:not(.checkmark)');
        if (labelText) labelText.textContent = access.consentText;
    }
    if (accessButton) accessButton.textContent = access.accessButton;
}

function loadContactSection(contact) {
    // Section title and subtitle
    const contactTitle = document.querySelector('#contact .section-title');
    const contactSubtitle = document.querySelector('#contact .section-subtitle');
    
    if (contactTitle) contactTitle.textContent = contact.title;
    if (contactSubtitle) contactSubtitle.textContent = contact.subtitle;
    
    // Contact info items
    const contactItems = document.querySelectorAll('.contact-item');
    const infoKeys = ['email', 'phone', 'office'];
    
    contactItems.forEach((item, index) => {
        const infoKey = infoKeys[index];
        if (contact.info[infoKey]) {
            const icon = item.querySelector('.contact-icon');
            const title = item.querySelector('h4');
            const details = item.querySelector('p');
            
            if (icon) icon.textContent = contact.info[infoKey].icon;
            if (title) title.textContent = contact.info[infoKey].title;
            if (details) details.innerHTML = contact.info[infoKey].details;
        }
    });
    
    // Form fields
    loadContactForm(contact.form);
}

function loadContactForm(form) {
    // Form field labels
    Object.keys(form.fields).forEach(fieldName => {
        const field = form.fields[fieldName];
        const label = document.querySelector(`label[for="${fieldName}"]`);
        const input = document.querySelector(`#${fieldName}`);
        
        if (label) label.textContent = field.label;
        if (input && field.placeholder) input.placeholder = field.placeholder;
        
        // Handle select options
        if (fieldName === 'subject' && input.tagName === 'SELECT') {
            input.innerHTML = '';
            field.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.text;
                input.appendChild(optionElement);
            });
        }
        
        // Handle textarea rows
        if (input.tagName === 'TEXTAREA' && field.rows) {
            input.rows = field.rows;
        }
    });
    
    // Submit button
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) submitButton.textContent = form.submitButton;
}

function loadFooter(footer) {
    const footerTitle = document.querySelector('.footer-left h3');
    const footerTagline = document.querySelector('.footer-left p');
    const footerCopyright = document.querySelector('.footer-right p');
    
    if (footerTitle) footerTitle.textContent = footer.company;
    if (footerTagline) footerTagline.textContent = footer.tagline;
    if (footerCopyright) footerCopyright.textContent = footer.copyright;
}

// Helper functions
function createCertItem(badge, title) {
    const certItem = document.createElement('div');
    certItem.className = 'cert-item';
    certItem.innerHTML = `
        <div class="cert-badge">${badge}</div>
        <span>${title}</span>
    `;
    return certItem;
}

function createStatItem(number, label) {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';
    statItem.innerHTML = `
        <div class="stat-badge">SLA</div>
        <div class="stat-content">
            <div class="stat-number">${number}</div>
            <div class="stat-label">${label}</div>
        </div>
    `;
    return statItem;
}

function createNumberCard(number, label, description) {
    const numberCard = document.createElement('div');
    numberCard.className = 'number-card';
    numberCard.innerHTML = `
        <div class="number-display">${number}</div>
        <div class="number-label">${label}</div>
        <div class="number-description">${description}</div>
    `;
    return numberCard;
}

function createHeroNumberCard(number, label) {
    const heroNumberCard = document.createElement('div');
    heroNumberCard.className = 'hero-number-card';
    heroNumberCard.innerHTML = `
        <div class="hero-number-display">${number}</div>
        <div class="hero-number-label">${label}</div>
    `;
    return heroNumberCard;
}

function createCertificationLogo(logo) {
    const logoElement = document.createElement('div');
    logoElement.className = 'cert-logo';
    
    // Check if image exists, otherwise show placeholder
    const img = new Image();
    img.onload = function() {
        logoElement.innerHTML = `
            <img src="${logo.imageUrl}" alt="${logo.altText}" class="cert-logo-image">
            <div class="cert-logo-name">${logo.name}</div>
        `;
    };
    img.onerror = function() {
        logoElement.innerHTML = `
            <div class="cert-logo-placeholder">🏆</div>
            <div class="cert-logo-name">${logo.name}</div>
        `;
    };
    img.src = logo.imageUrl;
    
    // Set placeholder initially
    logoElement.innerHTML = `
        <div class="cert-logo-placeholder">🏆</div>
        <div class="cert-logo-name">${logo.name}</div>
    `;
    
    return logoElement;
}

function initializeThemeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    // Check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
}