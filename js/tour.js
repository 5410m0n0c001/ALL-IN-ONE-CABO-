/**
 * All In One Cabo - Enhanced Guided Tour
 * Digital Business Card Feature Walkthrough
 */

const startTour = () => {
    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        steps: [
            { 
                element: '.hero', 
                popover: { 
                    title: '¡Bienvenida Personalizada!', 
                    description: 'Esta portada se adapta totalmente a tu marca. Podemos colocar tu logotipo (incluso animado), nombre y mucho más. Todo es personalizable, incluyendo vídeos y álbumes de fotos.', 
                    side: "bottom", 
                    align: 'start' 
                } 
            },
            { 
                element: '.collapsible-menu-left', 
                popover: { 
                    title: 'Nuestros Servicios (Our Services)', 
                    description: 'Pulsa este botón para navegar por todas las opciones de tu sitio web o permítenos crear uno nuevo para potenciar tu marca. Aquí tus clientes pueden buscar servicios específicos como Yates, Pesca, Restaurantes y más.', 
                    side: "right", 
                    align: 'start' 
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
                    description: 'Conecta todas tus redes sociales en un solo lugar. Al desplegarse, tus clientes pueden elegir su plataforma favorita para seguirte: Facebook, Instagram, TikTok y más.', 
                    side: "left", 
                    align: 'start' 
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
                    description: 'Comunícate con nosotros al instante con un solo clic. Ideal para reservas rápidas.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.whatsapp-btn', 
                popover: { 
                    title: 'WhatsApp', 
                    description: '¿Prefieres chatear? El botón de WhatsApp permite una comunicación directa y fluida desde cualquier dispositivo.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.location-btn', 
                popover: { 
                    title: 'Ubicación Exacta', 
                    description: 'Abre nuestra ubicación en Google Maps para que tus clientes sepan exactamente dónde encontrarte.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.contacts-btn', 
                popover: { 
                    title: 'Guardar en la Agenda', 
                    description: 'Permite que tus clientes descarguen tu tarjeta de contacto directamente a su agenda telefónica sin escribir nada.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.share-btn', 
                popover: { 
                    title: 'Compartir (El botón más poderoso)', 
                    description: 'Este botón permite compartir tu tarjeta a CUALQUIER aplicación instalada (WhatsApp, Facebook, Instagram, Telegram, Email). Incluye un mensaje precargado para que el receptor sepa de qué trata inmediatamente.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.footer', 
                popover: { 
                    title: 'Sin Fecha de Vencimiento', 
                    description: 'Como nota final, recuerda que esta tarjeta no tiene vigencia y permanece en línea por tiempo indefinido. ¡Tu negocio siempre estará a un clic de distancia!', 
                    side: "top", 
                    align: 'start' 
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
    if (!localStorage.getItem('tour_seen')) {
        setTimeout(startTour, 3000);
        localStorage.setItem('tour_seen', 'true');
    }
});

// Expose startTour for manual trigger
window.startTour = startTour;
