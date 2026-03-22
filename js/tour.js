/**
 * All In One Cabo - Enhanced Guided Tour
 * Digital Business Card Feature Walkthrough
 */

const startTour = () => {
    // Check if device is mobile to optimize popover placement avoids overlap
    const isMobile = window.innerWidth <= 768;
    const lang = localStorage.getItem('site_lang') || 'es';
    
    // Traducciones de la visita guiada
    const t = {
        es: {
            next: 'Siguiente', prev: 'Anterior', done: 'Finalizar',
            heroTitle: '¡Bienvenida Personalizada!',
            heroDesc: 'Esta portada se adapta totalmente a tu marca. Podemos colocar tu logotipo (incluso animado), nombre y mucho más.',
            servTitle: 'Nuestros Servicios',
            servDesc: 'Pulsa este botón para navegar a las diversas secciones del sitio web. En caso de que no cuentes con un sitio, nosotros podemos crearte uno para potencializar tus funnels de conversión.',
            socTitle: 'Vínculo Social',
            socDesc: 'Facebook, Instagram, TikTok y más en un solo lugar.',
            callTitle: 'Llamadas Directas',
            callDesc: 'Comunícate directamente a nuestro teléfono personal con un solo clic.',
            officeTitle: 'Línea de Oficina',
            officeDesc: 'Llama directamente a los teléfonos de la oficina en horario laboral.',
            waTitle: 'WhatsApp',
            waDesc: '¿Prefieres chatear? Comunicación directa y fluida desde cualquier dispositivo.',
            locTitle: 'Ubicación Exacta',
            locDesc: 'Abre nuestra ubicación en Google Maps para que sepan exactamente dónde encontrarte.',
            saveTitle: 'Guardar en la Agenda',
            saveDesc: 'Descarga de tu tarjeta de contacto directo a la agenda de tus clientes.',
            emailTitle: 'Correo Electrónico',
            emailDesc: 'Manda un correo con un mensaje predefinido con solo tocar este icono.',
            shareTitle: 'Compartir (El botón más poderoso)',
            shareDesc: 'Uno de los botones más poderosos de nuestra tarjeta, porque permite compartir a CUALQUIER aplicación instalada en tu dispositivo y no te restringe solo a una.',
            footerTitle: 'Sin Fecha de Vencimiento',
            footerDesc: 'Recuerda que esta tarjeta no tiene vigencia y permanece en línea por tiempo indefinido.'
        },
        en: {
            next: 'Next', prev: 'Previous', done: 'Finish',
            heroTitle: 'Personalized Welcome!',
            heroDesc: 'This cover entirely adapts to your brand. We can display your logo (even animated), name, and much more.',
            servTitle: 'Our Services',
            servDesc: 'Tap this button to navigate through various website sections. If you don\'t have a website, we can create one to boost your conversion funnels.',
            socTitle: 'Social Media',
            socDesc: 'Facebook, Instagram, TikTok, and more, all in one place.',
            callTitle: 'Direct Calls',
            callDesc: 'Call our personal line directly with just one click.',
            officeTitle: 'Office Line',
            officeDesc: 'Call our office phones directly during business hours.',
            waTitle: 'WhatsApp',
            waDesc: 'Prefer chatting? Direct and fluid communication from any device.',
            locTitle: 'Exact Location',
            locDesc: 'Open our location in Google Maps so they know exactly where to find you.',
            saveTitle: 'Save Contact',
            saveDesc: 'Direct download to your clients\' contact book.',
            emailTitle: 'Email',
            emailDesc: 'Send a pre-written email by just tapping this icon.',
            shareTitle: 'Share (The Most Powerful Tool)',
            shareDesc: 'One of the most powerful buttons on our card because it lets you share through ANY app installed on your device, not restricted to just one.',
            footerTitle: 'No Expiration Date',
            footerDesc: 'Remember that this card never expires and stays online indefinitely.'
        }
    };

    const dic = t[lang];
    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        animate: true,
        stagePadding: isMobile ? 15 : 10,
        nextBtnText: dic.next,
        prevBtnText: dic.prev,
        doneBtnText: dic.done,
        steps: [
            { 
                element: '.hero', 
                popover: { title: dic.heroTitle, description: dic.heroDesc, side: "bottom", align: 'center' } 
            },
            { 
                element: '.collapsible-menu-left', 
                popover: { title: dic.servTitle, description: dic.servDesc, side: isMobile ? "bottom" : "right", align: 'center' },
                onActivated: () => {
                    const menu = document.querySelector('.collapsible-menu-left');
                    if (window.AllInOneCabo && window.AllInOneCabo.app.components.collapsibleMenuManager) {
                        window.AllInOneCabo.app.components.collapsibleMenuManager.openMenu(menu);
                    }
                }
            },
            { 
                element: '.collapsible-menu-right', 
                popover: { title: dic.socTitle, description: dic.socDesc, side: isMobile ? "bottom" : "left", align: 'center' },
                onActivated: () => {
                    const menu = document.querySelector('.collapsible-menu-right');
                    if (window.AllInOneCabo && window.AllInOneCabo.app.components.collapsibleMenuManager) {
                        window.AllInOneCabo.app.components.collapsibleMenuManager.openMenu(menu);
                    }
                }
            },
            { element: '.call-btn', popover: { title: dic.callTitle, description: dic.callDesc, side: isMobile ? "bottom" : "top", align: 'center' } },
            { element: '.office-btn', popover: { title: dic.officeTitle, description: dic.officeDesc, side: isMobile ? "bottom" : "top", align: 'center' } },
            { element: '.whatsapp-btn', popover: { title: dic.waTitle, description: dic.waDesc, side: isMobile ? "bottom" : "top", align: 'center' } },
            { element: '.location-btn', popover: { title: dic.locTitle, description: dic.locDesc, side: isMobile ? "bottom" : "top", align: 'center' } },
            { element: '.contacts-btn', popover: { title: dic.saveTitle, description: dic.saveDesc, side: isMobile ? "bottom" : "top", align: 'center' } },
            { element: '.email-btn', popover: { title: dic.emailTitle, description: dic.emailDesc, side: isMobile ? "bottom" : "top", align: 'center' } },
            { element: '.share-btn', popover: { title: dic.shareTitle, description: dic.shareDesc, side: isMobile ? "bottom" : "top", align: 'center' } },
            { element: '.footer', popover: { title: dic.footerTitle, description: dic.footerDesc, side: "top", align: 'center' } }
        ],
        onDestroyed: () => {
            if (window.AllInOneCabo && window.AllInOneCabo.app.components.collapsibleMenuManager) {
                window.AllInOneCabo.app.components.collapsibleMenuManager.closeAllMenus();
            }
        }
    });

    driverObj.drive();
};

window.startTour = startTour;
