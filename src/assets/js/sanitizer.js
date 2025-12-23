/**
 * HTML Sanitization Utilities
 *
 * Provides functions to sanitize user input and prevent XSS attacks
 * This is a lightweight implementation - for production, consider using DOMPurify
 */

const Sanitizer = {
    /**
     * Escape HTML special characters
     * @param {string} str - String to escape
     * @returns {string} - Escaped string
     */
    escapeHTML: function(str) {
        if (typeof str !== 'string') return '';

        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    /**
     * Sanitize a string for safe HTML insertion
     * @param {string} str - String to sanitize
     * @returns {string} - Sanitized string
     */
    sanitize: function(str) {
        if (typeof str !== 'string') return '';

        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
    },

    /**
     * Sanitize a URL to prevent javascript: and data: URLs
     * @param {string} url - URL to sanitize
     * @returns {string} - Sanitized URL or empty string if dangerous
     */
    sanitizeURL: function(url) {
        if (typeof url !== 'string') return '';

        const trimmedUrl = url.trim().toLowerCase();

        // Block dangerous protocols
        const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
        for (const protocol of dangerousProtocols) {
            if (trimmedUrl.startsWith(protocol)) {
                console.warn('Blocked dangerous URL protocol:', protocol);
                return '';
            }
        }

        // Allow http(s), relative URLs, and anchor links
        if (trimmedUrl.startsWith('http://') ||
            trimmedUrl.startsWith('https://') ||
            trimmedUrl.startsWith('/') ||
            trimmedUrl.startsWith('#') ||
            trimmedUrl.startsWith('./') ||
            trimmedUrl.startsWith('../')) {
            return url;
        }

        // Default to empty for anything else
        console.warn('Blocked potentially unsafe URL:', url);
        return '';
    },

    /**
     * Create a safe text node
     * @param {string} text - Text content
     * @returns {Text} - DOM Text node
     */
    createTextNode: function(text) {
        return document.createTextNode(text || '');
    },

    /**
     * Safely set element text content
     * @param {HTMLElement} element - DOM element
     * @param {string} text - Text to set
     */
    setText: function(element, text) {
        if (element && element.nodeType === 1) {
            element.textContent = text || '';
        }
    },

    /**
     * Safely set element HTML with sanitization
     * Use sparingly - prefer setText when possible
     * @param {HTMLElement} element - DOM element
     * @param {string} html - HTML to set (will be sanitized)
     */
    setHTML: function(element, html) {
        if (!element || element.nodeType !== 1) return;

        // For now, just escape - in production use DOMPurify
        element.innerHTML = this.sanitize(html);
    },

    /**
     * Create a safe product card (specific to this app)
     * @param {Object} product - Product data from database
     * @returns {string} - Safe HTML string
     */
    createProductCard: function(product) {
        // Sanitize all product fields
        const safeName = this.sanitize(product.name || 'Unknown Product');
        const safeCategory = this.sanitize(product.category || 'Gear');
        const safePrice = this.sanitize(String(product.price || '0'));
        const safeImageUrl = this.sanitizeURL(product.image_url || '');
        const safeId = this.sanitize(String(product.id || ''));
        const isFeatured = Boolean(product.is_featured);

        // Build HTML with sanitized values
        return `
            <div class="group flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-300">
                <div class="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    ${isFeatured ? '<span class="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded z-10">Featured</span>' : ''}
                    <button class="absolute top-3 right-3 p-1.5 bg-white/80 dark:bg-black/40 rounded-full text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                        <span class="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                    <img alt="${safeName}"
                        class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        src="${safeImageUrl}"
                        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2224%22 fill=%22%23999%22%3ENo Image%3C/text%3E%3C/svg%3E'" />
                </div>
                <div class="p-4 flex flex-col gap-1 flex-1">
                    <h4 class="text-xs text-gray-500 font-medium uppercase tracking-wide">${safeCategory}</h4>
                    <a class="text-base font-bold text-usa-blue dark:text-white hover:text-primary line-clamp-2"
                        href="./product.html?id=${encodeURIComponent(safeId)}">${safeName}</a>
                    <div class="mt-auto pt-3 flex items-center justify-between">
                        <span class="text-lg font-black text-primary">$${safePrice}</span>
                        <button class="size-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-usa-blue dark:text-white hover:bg-primary hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-[18px]">add</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
};

// Export for use in other scripts
window.Sanitizer = Sanitizer;
