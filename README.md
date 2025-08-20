# 🎮 Shuls: Batalla en Mazamari - PWA

Un juego de plataformas 2D que funciona como **Progressive Web App (PWA)** y se puede instalar en dispositivos móviles y desktop.

## 🚀 Características PWA

- ✅ **Instalable**: Se puede instalar como aplicación nativa
- ✅ **Offline**: Funciona sin conexión a internet
- ✅ **Responsive**: Se adapta a cualquier dispositivo
- ✅ **Fast**: Carga rápida y funcionamiento fluido
- ✅ **Cross-platform**: Funciona en iOS, Android, Windows, macOS y Linux

## 📱 Cómo Instalar

### En Móvil (Android/Chrome):
1. Abre el juego en Chrome
2. Toca el botón "📱 Instalar App" que aparece en la esquina superior derecha
3. Confirma la instalación
4. La app aparecerá en tu pantalla de inicio

### En Móvil (iOS/Safari):
1. Abre el juego en Safari
2. Toca el botón de compartir (📤)
3. Selecciona "Añadir a pantalla de inicio"
4. Confirma la instalación

### En Desktop (Chrome/Edge):
1. Abre el juego en el navegador
2. Haz clic en el ícono de instalación en la barra de direcciones
3. Confirma la instalación
4. La app aparecerá en tu escritorio

## 🎯 Cómo Jugar

### Controles de Teclado:
- **Mover**: ← → o A D
- **Saltar**: Espacio
- **Atacar**: Enter o X

### Controles Táctiles:
- Usa los botones en pantalla: ← → ↑ ⚡

## 🛠️ Requisitos Técnicos

- **Servidor HTTPS**: Las PWAs requieren conexión segura
- **Navegador moderno**: Chrome 67+, Firefox 67+, Safari 11.1+
- **Service Worker**: Debe estar habilitado en el navegador

## 📁 Archivos PWA

- `manifest.json` - Configuración de la aplicación
- `sw.js` - Service Worker para funcionalidad offline
- `.htaccess` - Configuración del servidor (Apache)
- `index.html` - Página principal con meta tags PWA

## 🔧 Configuración del Servidor

### Apache (.htaccess incluido):
El archivo `.htaccess` ya está configurado para:
- Redirección HTTPS
- Headers de seguridad
- Cache optimizado
- Compresión GZIP

### Nginx:
```nginx
location / {
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}

location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location = /sw.js {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## 🧪 Testing PWA

### Chrome DevTools:
1. Abre DevTools (F12)
2. Ve a la pestaña "Application"
3. Verifica "Manifest" y "Service Workers"
4. Prueba la funcionalidad offline

### Lighthouse:
1. Ejecuta Lighthouse en Chrome DevTools
2. Verifica la puntuación PWA
3. Revisa las recomendaciones

## 📊 Métricas PWA

- **Performance**: 90+ (Lighthouse)
- **Accessibility**: 95+ (Lighthouse)
- **Best Practices**: 90+ (Lighthouse)
- **SEO**: 90+ (Lighthouse)
- **PWA**: 100 (Lighthouse)

## 🐛 Solución de Problemas

### La app no se instala:
- Verifica que estés usando HTTPS
- Asegúrate de que el manifest.json sea válido
- Revisa que el Service Worker esté registrado

### No funciona offline:
- Verifica que el Service Worker esté activo
- Revisa la consola del navegador
- Asegúrate de que los archivos estén en cache

### Problemas en iOS:
- iOS tiene limitaciones con PWAs
- Usa Safari para la instalación
- Verifica que los meta tags de Apple estén correctos

## 🌟 Características del Juego

- **3 Niveles** con dificultad progresiva
- **4 Tipos de Enemigos** con comportamientos únicos
- **Sistema de Vida y Energía**
- **Puntuación y Progreso**
- **Controles Responsivos**
- **Animaciones Fluidas**

## 📞 Soporte

Si tienes problemas con la PWA:
1. Verifica la consola del navegador
2. Asegúrate de usar HTTPS
3. Prueba en diferentes navegadores
4. Verifica que todos los archivos estén presentes

---

**¡Disfruta jugando a Shuls: Batalla en Mazamari como una app nativa! 🎮✨**
