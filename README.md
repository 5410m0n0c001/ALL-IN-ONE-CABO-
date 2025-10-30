# All In One Cabo - Digital Business Card

A minimal, luxurious single-page digital business card for All In One Cabo, featuring a black and gold iPhone-inspired aesthetic. Built with vanilla HTML, CSS, and JavaScript for optimal performance and GitHub Pages deployment.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with flawless desktop experience
- **Video Integration**: Optimized hero, background, and footer videos
- **Interactive Elements**: Call, WhatsApp, location, email, and contact management
- **Social Media Integration**: Pinned social strip with comprehensive platform support
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Lazy loading, video optimization, and minimal bundle size
- **Smooth Animations**: CSS animations with `prefers-reduced-motion` support

## 📁 Project Structure

```
all-in-one-cabo/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── script.js           # Main JavaScript file
└── assets/
    ├── allinonecabo.vcf    # Contact vCard
    ├── hero.mp4           # Hero video
    ├── footer.mp4         # Footer video
    ├── video.mp4          # Background video
    ├── actividades.jpg    # Activities image
    ├── poster-hero.svg    # Hero video poster
    ├── poster-bg.svg      # Background video poster
    └── icons/
        ├── call.svg
        ├── office.svg
        ├── whatsapp.svg
        ├── location.svg
        ├── contacts.svg
        ├── email.svg
        ├── facebook.svg
        ├── instagram.svg
        └── youtube.svg
```

## 🎯 Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. For live development, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

### GitHub Pages Deployment

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: All In One Cabo Digital Business Card"
   git remote add origin https://github.com/yourusername/all-in-one-cabo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to Pages section
   - Source: Deploy from a branch
   - Branch: main (or master)
   - Folder: / (root)
   - Click Save

3. **Access Your Site**:
   - URL: `https://yourusername.github.io/all-in-one-cabo`
   - Custom domain: Configure in Pages settings

### Replace Video Assets

To optimize videos for web deployment, use these FFmpeg commands:

```bash
# Convert MP4 to optimized MP4 (H.264)
ffmpeg -i hero.mp4 -c:v libx264 -crf 23 -preset medium -movflags +faststart -pix_fmt yuv420p assets/hero.mp4

# Convert MP4 to WebM fallback
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 -pix_fmt yuv420p assets/hero.webm

# Generate poster images from videos
ffmpeg -i hero.mp4 -ss 00:00:01 -vframes 1 -q:v 2 -vf "scale=800:600" assets/poster-hero.jpg
ffmpeg -i fondo.mp4 -ss 00:00:01 -vframes 1 -q:v 2 -vf "scale=800:600" assets/poster-bg.jpg

# Generate multiple poster sizes for responsive design
ffmpeg -i hero.mp4 -ss 00:00:01 -vframes 1 -q:v 2 -vf "scale=400:300" assets/poster-hero-small.jpg
ffmpeg -i hero.mp4 -ss 00:00:01 -vframes 1 -q:v 2 -vf "scale=800:600" assets/poster-hero-medium.jpg
ffmpeg -i hero.mp4 -ss 00:00:01 -vframes 1 -q:v 2 -vf "scale=1200:900" assets/poster-hero-large.jpg

# Batch process all videos
for video in hero.mp4 footer.mp4 fondo.mp4; do
    echo "Processing $video..."
    ffmpeg -i "$video" -c:v libx264 -crf 23 -preset medium -movflags +faststart -pix_fmt yuv420p "assets/$video"
    ffmpeg -i "$video" -c:v libvpx-vp9 -b:v 0 -crf 30 -pix_fmt yuv420p "assets/${video%.mp4}.webm"
done
```

## 🔧 Customization

### Update Business Information

Edit the following files to customize business details:

**Contact Information in `index.html`**:
- Phone: Replace `+52 624 137 8636` in call buttons
- Email: Update `allinonecabo@hotmail.com` in email links
- Name: Update "CHRISTIAN" in contact details

**Social Media Links in `index.html`**:
- Facebook: `https://facebook.com/allinonecabo`
- Instagram: `https://instagram.com/allinonecabo`
- YouTube: `https://www.youtube.com/@AllIn1cabo`
- Add/modify social links in the social strip section

**vCard File (`assets/allinonecabo.vcf`)**:
```
BEGIN:VCARD
VERSION:3.0
FN:Christian Garcia  # Update name
N:Garcia;Christian;;;
ORG:All In One Cabo  # Update organization
TITLE:Owner
TEL;TYPE=WORK,VOICE:+52 624 137 8636  # Update phone
EMAIL;TYPE=INTERNET:allinonecabo@hotmail.com  # Update email
URL:https://allin1cabo.com  # Update website
ADR;TYPE=WORK:;;Cabo San Lucas;Los Cabos;Baja California Sur;Mexico  # Update address
NOTE:All In One Cabo - Tours & Activities
END:VCARD
```

### Color Scheme

Update CSS variables in `css/styles.css`:

```css
:root {
  --bg: #000000;           /* Background color */
  --accent: #C49A3A;       /* Primary gold color */
  --accent-light: #D4AF37; /* Light gold color */
  --text-primary: #FFFFFF; /* Primary text */
  --text-secondary: #CCCCCC; /* Secondary text */
  /* ... other variables ... */
}
```

### Business Data

All business links and contact information are stored in JavaScript configuration in `js/script.js`:

```javascript
const CONFIG = {
    PHONE_NUMBER: '+52 624 137 8636',
    PHONE_DIGITS: '526241378636',
    VCARD_PATH: 'assets/allinonecabo.vcf',
    WHATSAPP_MESSAGE: 'Hi%2C%20I%20would%20like%20to%20book%20...',
    // ... other config
};
```

## 📱 Button Functionality

### Call Button
- **Mobile**: Opens native dialer
- **Desktop**: Shows modal with number and copy button

### WhatsApp Button
- **Mobile**: Opens WhatsApp app
- **Desktop**: Opens WhatsApp Web
- **Message**: Pre-filled booking inquiry

### Location Button
- **Mobile**: Opens Google Maps app
- **Desktop**: Opens Google Maps in browser

### Add to Contacts
- Downloads vCard file
- Shows success notification
- Mobile: Additional instructions for manual import

### Email Button
- Opens default email client
- Pre-filled subject and body

### Social Media Links
- Open in new tab
- Track clicks for analytics
- Platform-specific tracking

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators
- **Motion Preferences**: Respects `prefers-reduced-motion`
- **Color Contrast**: WCAG AA compliant
- **Alt Text**: Descriptive alt attributes for images

## 📊 Performance Optimizations

- **Lazy Loading**: Images and videos load on demand
- **Video Optimization**: Multiple formats with fallbacks
- **Efficient CSS**: Optimized selectors and minimal reflows
- **JavaScript Bundling**: Modular, deferred loading
- **Asset Compression**: Minified and optimized resources

## 🔍 SEO Features

- **Meta Tags**: Proper Open Graph tags
- **Semantic HTML**: Proper heading structure
- **Image Alt Text**: Descriptive alt attributes
- **Fast Loading**: Optimized performance scores

## 🚀 Performance Tips

1. **Video Optimization**:
   - Keep videos under 5MB
   - Use H.264 codec for best compatibility
   - Add WebM fallback for modern browsers
   - Always include poster images

2. **Image Optimization**:
   - Use WebP format when possible
   - Compress images to 80-90% quality
   - Provide multiple sizes for responsive design

3. **Loading Strategy**:
   - Critical CSS inlined
   - Non-critical resources deferred
   - Lazy loading for below-fold content

## 📋 Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support (with vendor prefixes)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet

## 🛠️ Development Tools

### Recommended VS Code Extensions:
- Live Server
- HTML CSS Support
- Auto Rename Tag
- Prettier
- ESLint

### Testing Commands:
```bash
# Check HTML validity
npx html-validate index.html

# Check CSS validity
npx stylelint css/styles.css

# Check JavaScript
npx eslint js/script.js

# Performance testing
npx lighthouse https://your-github-pages-url
```

## 📞 Contact

For questions or customization requests, contact:
- **Name**: Christian Garcia
- **Email**: allinonecabo@hotmail.com
- **Phone**: +52 624 137 8636
- **Website**: https://allin1cabo.com

## 📄 License

This project is created for All In One Cabo. All rights reserved.

---

**Last Updated**: October 30, 2025  
**Version**: 1.0.0  
**Compatibility**: GitHub Pages, Static Hosting