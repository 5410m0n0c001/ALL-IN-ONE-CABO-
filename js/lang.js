/**
 * Language Management (ES/EN)
 */

window.translations = {
    services: {
        "Yacht Rental": { en: "Yacht Rental", es: "Renta de Yates" },
        "Video Marketing": { en: "Video Marketing", es: "Video Marketing" },
        "Activities": { en: "Activities", es: "Actividades" },
        "Transportation": { en: "Transportation", es: "Transportación" },
        "Helicopter Ride": { en: "Helicopter Ride", es: "Paseo en Helicóptero" },
        "Bachelor & Bachelorette Parties": { en: "Bachelor & Bachelorette Parties", es: "Despedidas de Soltero(a)" },
        "Wedding Planner / Events": { en: "Wedding Planner / Events", es: "Amo mi Boda / Eventos" },
        "Real Estate": { en: "Real Estate", es: "Bienes Raíces" },
        "Fishing": { en: "Fishing", es: "Pesca" },
        "Restaurants": { en: "Restaurants", es: "Restaurantes" },
        "Night Clubs": { en: "Night Clubs", es: "Vida Nocturna" },
        "Golf Rounds": { en: "Golf Rounds", es: "Jugar Golf" },
        "Join the team": { en: "Join the team", es: "Únete al equipo" },
        "⚓ OUR SERVICES – Explore what we offer": { en: "⚓ OUR SERVICES – Explore what we offer", es: "⚓ NUESTROS SERVICIOS – Explora lo que ofrecemos" },
        "🧑‍🤝‍🧑 ASSOCIATES": { en: "🧑‍🤝‍🧑 ASSOCIATES", es: "🧑‍🤝‍🧑 ASOCIADOS" }
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('site_lang') || 'es'; // default ES
        this.langToggleBtn = document.getElementById('langToggle');
        this.langText = document.getElementById('langText');
        
        this.init();
    }

    init() {
        if (this.langToggleBtn) {
            this.langToggleBtn.addEventListener('click', () => this.toggleLanguage());
        }
        this.applyLanguage();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('site_lang', this.currentLang);
        this.applyLanguage();
        
        // Restart tour in new language if available and triggered
        if (window.startTour) {
            // Can optionally trigger startTour() here if we want it to auto-play after lang switch
        }
    }

    applyLanguage() {
        // Update document lang
        document.documentElement.lang = this.currentLang;
        
        // Update toggle button text/flag
        if (this.langText) {
            this.langText.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
            // Alternativamente puedes usar emojis: currentLang === 'es' ? '🇺🇸' : '🇲🇽'
        }

        // 1. Update all elements with .trn tracking data-es and data-en
        const translateElements = document.querySelectorAll('.trn');
        translateElements.forEach(el => {
            const translatedText = el.getAttribute(`data-${this.currentLang}`);
            if (translatedText) {
                el.textContent = translatedText;
            }
        });

        // 2. Specialized dictionaries: Services elements
        this.translateMenuNodes('.services-link');
        this.translateMenuNodes('.associates-link');
        this.translateMenuNodes('.services-header');
        this.translateMenuNodes('.associates-header');
        
        // 3. Update CSS content for pseudo elements like "Services/Servicios" and "Redes/Social"
        const leftMenu = document.querySelector('.collapsible-menu-left .menu-toggle');
        const rightMenu = document.querySelector('.collapsible-menu-right .menu-toggle');
        
        if(leftMenu) {
            leftMenu.setAttribute('data-label', this.currentLang === 'es' ? 'Servicios' : 'Services');
        }
        if(rightMenu) {
            rightMenu.setAttribute('data-label', this.currentLang === 'es' ? 'Redes' : 'Social');
        }
    }

    translateMenuNodes(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // Find text node inside the element
            Array.from(el.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
                    const originalText = node.textContent.trim();
                    // Determine dictionary key: could be currently translated, so we check both ES and EN in our dictionary
                    let matchedKey = null;
                    for (const [key, langs] of Object.entries(window.translations.services)) {
                        if (langs.en === originalText || langs.es === originalText) {
                            matchedKey = key;
                            break;
                        }
                    }
                    if (matchedKey) {
                        node.textContent = ' ' + window.translations.services[matchedKey][this.currentLang] + ' ';
                    }
                }
            });
        });
    }
}

// Initialize on DOM mapped
document.addEventListener('DOMContentLoaded', () => {
    window.langManager = new LanguageManager();
});
