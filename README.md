# MultiAPI Anime App

## Nombre: Ivan Andres Castillo Caiza

## Descripción
Acontinuacion el link del video de tiktok para ver la presentacion del funcionamiento de la App:  https://vm.tiktok.com/ZMAWBHN7h/


El hosting: 

**MultiAPI Anime App** es una aplicación móvil híbrida desarrollada con **Ionic y Angular**, que permite a los usuarios explorar, buscar y descubrir animes mediante diferentes APIs de manera interactiva y estética.  
La app cuenta con tres pestañas principales, cada una con funcionalidades específicas:

1. **Tab 1 - Buscar Anime**
   - Permite buscar animes por nombre usando la API de **Jikan (MyAnimeList API no oficial)**.
   - Muestra resultados en **cards modernas** con:
     - Imagen del anime
     - Título
     - Episodios
     - Puntaje
     - Sinopsis
     - Botón para abrir el anime en MyAnimeList
   - Incluye **animes por defecto** al abrir la app para dar una experiencia inicial atractiva.

2. **Tab 2 - Imágenes de Anime / Nekos**
   - Muestra imágenes y GIFs de estilo anime usando la API de **Nekos.best**.
   - Categorías disponibles: `smug`, `blush`, `neko`, `waifu`, y más.
   - Los usuarios pueden navegar y ver imágenes de manera estética y organizada en **cards**.

3. **Tab 3 - Buscar tu Anime**
   - Permite al usuario subir una **imagen o tomar una foto** para identificar el anime, episodio y similitud mediante la API de **Trace.moe**.
   - Funcionalidades:
     - Selección de imagen desde galería o cámara (compatible con Android).
     - Spinner de carga mientras se realiza la búsqueda.
     - Resultados presentados en **cards con overlay**, mostrando:
       - Anime ID
       - Episodio
       - From (segundos en el episodio)
       - Similitud
       - Nombre del archivo de la imagen
       - Imagen de preview
       - Botón para abrir el anime en AniList

---

## Tecnologías Utilizadas

- **Frameworks y Librerías**
  - Ionic 6
  - Angular 15
  - Capacitor (para compilar APK y acceder a cámara/archivos)
- **APIs externas**
  - [Jikan API](https://jikan.moe/) → Para buscar animes
  - [Nekos.best API](https://docs.nekos.best/) → Para obtener imágenes/GIFs de estilo anime
  - [Trace.moe API](https://soruly.github.io/trace.moe-api/) → Para reconocer animes a partir de imágenes
- **Firebase**
  - Inicializado con AngularFire
  - Se puede usar para:
    - Autenticación de usuarios
    - Firestore para guardar favoritos o historial
    - Storage para guardar imágenes

---

## Características principales

- UI moderna y responsive con **cards estéticas y overlays**.
- Funcionalidad completa en Android mediante Capacitor:
  - Acceso a **cámara** y **galería**
  - Permisos correctamente declarados en `AndroidManifest.xml`
- Spinner de carga mientras se realizan llamadas a APIs.
- Manejo de errores con mensajes claros al usuario.
- Botones estilizados y consistentes en toda la app.
- Compatible con **APK Android** y **navegador web**.

---

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/multiapi-anime-app.git
cd multiapi-anime-app
