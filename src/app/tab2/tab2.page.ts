import { Component, OnInit } from '@angular/core';
import { NekosService } from '../services/nekos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  images: any[] = [];
  loading: boolean = false;

  constructor(private nekosService: NekosService) { }

  ngOnInit() {
    this.loadImages('neko'); // Cargar categoría por defecto al iniciar
  }

  loadImages(category: string) {
    this.loading = true;
    this.images = [];
    this.nekosService.getImage(category).subscribe({
      next: (res) => {
        if (res.results && res.results.length > 0) {
          this.images = res.results;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar imágenes', err);
        this.loading = false;
      }
    });
  }

  changeCategory(category: string) {
    this.loadImages(category);
  }
}