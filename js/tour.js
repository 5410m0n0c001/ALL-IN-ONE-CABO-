/**
 * All In One Cabo - Enhanced Guided Tour
 * Digital Business Card Feature Walkthrough
 */

const startTour = () => {
    // Check if device is mobile to optimize popover placement avoids overlap
    const isMobile = window.innerWidth <= 768;
    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        animate: true,
        // Add padding around highlighted elements to prevent overlaps
        stagePadding: isMobile ? 15 : 10,
        steps: [
            { 
                element: '.hero', 
                popover: { 
                    title: '¡Bienvenida Personalizada!', 
                    description: 'Esta portada se adapta totalmente a tu marca. Podemos colocar tu logotipo (incluso animado), nombre y mucho más.', 
                    side: "bottom", 
                    align: 'center' 
                } 
            },
            { 
                element: '.collapsible-menu-left', 
                popover: { 
                    title: 'Nuestros Servicios (Our Services)', 
                    description: 'Navega por todas las opciones de tu sitio web. Aquí tus clientes pueden buscar servicios como Yates, Pesca, Restaurantes y más.', 
                    side: isMobile ? "bottom" : "right", 
                    align: 'center' 
                },
                onActivated: () => {
                    const menu = document.querySelector('.collapsible-menu-left');
                    if (window.AllInOneCabo && window.AllInOneCabo.app.components.collapsibleMenuManager) {
                        window.AllInOneCabo.app.components.collapsibleMenuManager.openMenu(menu);
                    }
                }
            },
            { 
                element: '.collapsible-menu-right', 
                popover: { 
                    title: 'Vínculo Social', 
                    description: 'Facebook, Instagram, TikTok y más en un solo lugar.', 
                    side: isMobile ? "bottom" : "left", 
                    align: 'center' 
                },
                onActivated: () => {
                    const menu = document.querySelector('.collapsible-menu-right');
                    if (window.AllInOneCabo && window.AllInOneCabo.app.components.collapsibleMenuManager) {
                        window.AllInOneCabo.app.components.collapsibleMenuManager.openMenu(menu);
                    }
                }
            },
            { 
                element: '.call-btn', 
                popover: { 
                    title: 'Llamadas Directas', 
                    description: 'Comunícate directamente a nuestro teléfono personal con un solo clic.', 
                    side: isMobile ? "bottom" : "top", 
                    align: 'center' 
                } 
            },
            { 
                element: '.office-btn', 
                popover: { 
                    title: 'Línea de Oficina', 
                    description: 'Llama directamente a los teléfonos de la oficina en horario laboral.', 
                    side: isMobile ? "bottom" : "top", 
                    align: 'center' 
                } 
            },
            { 
                element: '.whatsapp-btn',  
                popover: { 
                    title: 'WhatsApp', 
                    description: '¿Prefieres chatear? Comunicación directa y fluida desde cualquier dispositivo.', 
                    side: isMobile ? "bottom" : "top", 
                    align: 'center' 
                } 
            },
            { 
                element: '.location-btn', 
                popover: { 
                    title: 'Ubicación Exacta', 
                    description: 'Abre nuestra ubicación en Google Maps para que sepan exactamente dónde encontrarte.', 
                    side: isMobile ? "bottom" : "top", 
                    align: 'center' 
                } 
            },
            { 
                element: '.contacts-btn', 
                popover: { 
                    title: 'Guardar en la Agenda', 
                    description: 'Descarga de tu tarjeta de contacto directo a la agenda de tus clientes.', 
                    side: isMobile ? "bottom" : "top", 
                    align: 'center' 
                } 
            },
            { 
                element: '.email-btn', 
                popover: { 
                    title: 'Correo Electrónico', 
                    description: 'Manda un correo con un mensaje predefinido con solo tocar este icono.', 
                    side: isMobile ? "bottom" : "top", 
                    align: 'center' 
                } 
            },
            { 
                element: '.share-btn', 
                popover: { 
                    title: 'Compartir (El botón más poderoso)', 
                    description: 'Uno de los botones más poderosos de nuestra tarjeta, porque permite compartir a CUALQUIER aplicación instalada en tu dispositivo y no te restringe solo a una.', 
                    side: isMobile ? "bottom" : "top", 
                    align: 'center' 
                } 
            },
            { 
                element: '.footer', 
                popover: { 
                    title: 'Sin Fecha de Vencimiento', 
                    description: 'Recuerda que esta tarjeta no tiene vigencia y permanece en línea por tiempo indefinido.', 
                    side: "top", 
                    align: 'center' 
                } 
            }
        ],
        nextBtnText: 'Siguiente',
        prevBtnText: 'Anterior',
        doneBtnText: 'Finalizar',
        onDestroyed: () => {
            // Close any open menus when tour ends
            if (window.AllInOneCabo && window.AllInOneCabo.app.components.collapsibleMenuManager) {
                window.AllInOneCabo.app.components.collapsibleMenuManager.closeAllMenus();
            }
        }
    });

    driverObj.drive();
};

// Start tour after a short delay
window.addEventListener('load', () => {
    setTimeout(startTour, 3000);
});

// Expose startTour for manual trigger
window.startTour = startTour;
