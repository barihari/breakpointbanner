// Check if banner already exists
if (!document.querySelector('.treasuryBreakpointBanner')) {
    // Create the banner element
    const banner = document.createElement('div');
    banner.className = 'treasuryBreakpointBanner';
    banner.innerHTML = `
        <span class="treasuryBreakpointBanner-xs">
            <strong>XS Breakpoint:</strong>
            320px – 639px | Current: 320px
        </span>
    `;

    // Add the banner to the page
    document.body.insertBefore(banner, document.body.firstChild);

    // Function to update banner text based on window width
    function updateBannerText() {
        const width = window.innerWidth;
        let text = '';
        
        if (width < 640) {
            text = `<strong>XS Breakpoint:</strong> 320px – 639px | Current: ${width}px`;
        } else if (width < 880) {
            text = `<strong>SM Breakpoint:</strong> 640px – 879px | Current: ${width}px`;
        } else if (width < 1120) {
            text = `<strong>MD Breakpoint:</strong> 880px – 1119px | Current: ${width}px`;
        } else if (width < 1440) {
            text = `<strong>LG Breakpoint:</strong> 1120px – 1439px | Current: ${width}px`;
        } else {
            text = `<strong>XL Breakpoint:</strong> 1440px+ | Current: ${width}px`;
        }
        
        banner.innerHTML = text;
    }

    // Update banner on load and resize
    updateBannerText();
    window.addEventListener('resize', updateBannerText);
} 