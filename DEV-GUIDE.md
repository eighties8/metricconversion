# Development Guide - MetricConversion.app

## 🚀 Development Server Options

You now have multiple ways to run the development server, depending on your needs:

### Option 1: Standard Vite Dev Server (Recommended)
```bash
npm run dev
```
- **Port**: 3001
- **URL**: http://localhost:3001
- **Features**: Hot module replacement, fast refresh

### Option 2: Stable Vite Dev Server (If Option 1 has issues)
```bash
npm run dev:stable
```
- **Port**: 3001
- **URL**: http://localhost:3001
- **Features**: Force mode, better error handling

### Option 3: Clean Vite Dev Server (If cache issues)
```bash
npm run dev:clean
```
- **Port**: 3001
- **URL**: http://localhost:3001
- **Features**: Clears Vite cache before starting

### Option 4: Simple Node.js Server (Fallback)
```bash
npm run dev:simple
```
- **Port**: 3000 (falls back to 3001 if busy)
- **URL**: http://localhost:3000 or http://localhost:3001
- **Features**: No HMR, but very stable

## 🔧 Troubleshooting

### If Vite is acting up:
1. **Clear cache**: `npm run dev:clean`
2. **Force restart**: `npm run dev:stable`
3. **Use simple server**: `npm run dev:simple`

### If you get import errors:
1. **Restart the server**: Ctrl+C, then `npm run dev`
2. **Clear node_modules**: `rm -rf node_modules && npm install`
3. **Check file paths**: Make sure all imports are correct

### If the site doesn't load:
1. **Check port**: Make sure nothing else is using port 3001
2. **Try different port**: Edit `vite.config.js` to change port
3. **Use simple server**: `npm run dev:simple` (tries 3000, then 3001)

## 📁 Project Structure
```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Site header with navigation
│   ├── Footer.jsx      # Site footer
│   ├── Converter.jsx   # Main converter component
│   └── Breadcrumb.jsx  # Navigation breadcrumbs
├── pages/              # Individual pages
│   ├── HomePage.jsx    # Home page with universal converter
│   ├── KgToLbs.jsx     # Kilograms to Pounds converter
│   ├── PrivacyPolicy.jsx # Privacy policy page
│   ├── Terms.jsx       # Terms of use page
│   └── About.jsx       # About page
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Tailwind CSS imports
```

## 🎯 Quick Start
1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Open browser**: http://localhost:3001
4. **Make changes**: Files auto-reload
5. **Stop server**: Ctrl+C

## 🛠️ Build for Production
```bash
npm run build
```
This creates optimized files in the `dist/` folder.

## 📱 Testing
- **Desktop**: http://localhost:3001
- **Mobile**: Use your computer's IP address (e.g., http://192.168.1.100:3001)
- **Network**: The server is configured to accept connections from other devices

## 🔄 Hot Reload
- **Vite servers**: Auto-reload on file changes
- **Simple server**: Manual refresh required
- **Console errors**: Check browser developer tools

## 🎨 Styling
- **Framework**: Tailwind CSS
- **Configuration**: `tailwind.config.js`
- **Custom styles**: `src/index.css`

## 🚨 Common Issues & Solutions

### "Module not found" errors:
- Restart the dev server
- Check import paths
- Clear Vite cache: `npm run dev:clean`

### Mobile menu not working:
- Check browser console for errors
- Try different browser
- Use simple server as fallback

### Styling not updating:
- Hard refresh browser (Ctrl+Shift+R)
- Check Tailwind CSS is loading
- Restart dev server

### Port already in use:
- Kill existing process: `pkill -f "vite"`
- Use different port in `vite.config.js`
- Use simple server: `npm run dev:simple`

## 🎉 You're all set!
The development environment is now stable and you have multiple fallback options. Happy coding! 