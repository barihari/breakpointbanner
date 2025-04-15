# Breakpoint Banner Chrome Extension

A Chrome extension that displays a sticky banner showing breakpoints on bankrate.com. The banner changes color and text based on the current viewport width.

## Features

- Sticky banner at the top of the page
- Color-coded breakpoints
- Real-time updates on window resize
- Works only on bankrate.com domains
- Displays current browser width

## Breakpoints

- XS: 320px – 639px (Red: #dc2626)
- SM: 640px – 879px (Orange: #f97316)
- MD: 880px – 1119px (Yellow: #f59e0b)
- LG: 1120px – 1439px (Green: #22c55e)
- XL: 1440px+ (Blue: #2563eb)

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension will now be active on bankrate.com

## Usage

The banner will automatically appear at the top of any bankrate.com page. It will update in real-time as you resize your browser window, showing:
- The current breakpoint name
- The range for that breakpoint
- The current browser width in pixels