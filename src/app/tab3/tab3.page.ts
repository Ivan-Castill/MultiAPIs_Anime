import { Component } from '@angular/core';
import { TraceService } from '../services/trace';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  results: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  // Función que abre la cámara o galería
  async selectImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 80,
        resultType: CameraResultType.DataUrl, // Retorna base64
        source: CameraSource.Photos // O CameraSource.Camera
      });

      if (image && image.dataUrl) {
        this.searchAnime(image.dataUrl);
      }
    } catch (err) {
      console.error('Error al seleccionar imagen', err);
      this.error = 'No se pudo seleccionar la imagen';
    }
  }

  // Función que llama a la API Trace.moe
  searchAnime(imageDataUrl: string) {
    this.loading = true;
    this.error = '';
    this.results = [];

    // Convertir base64 a Blob
    const blob = this.dataURLtoBlob(imageDataUrl);
    const formData = new FormData();
    formData.append('image', blob, 'image.png');

    this.http.post<any>('https://api.trace.moe/search', formData)
      .subscribe({
        next: (res) => {
          this.results = res.result.map((r: any) => ({
            anilist: r.anilist,
            episode: r.episode,
            from: r.from,
            similarity: r.similarity,
            filename: r.filename,
            image: r.image
          }));
          this.loading = false;
        },
        error: (err) => {
          console.error('Error trace.moe', err);
          this.error = 'Error al buscar el anime';
          this.loading = false;
        }
      });
  }

  // Convertir DataURL a Blob
  private dataURLtoBlob(dataurl: string) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
}