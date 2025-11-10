import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  searchControl = new FormControl('');
  animes: any[] = [];
  loading = false;
  error = '';

  // Animes por defecto (datos estáticos para evitar muchas llamadas a la API)
  defaultAnimes = [
    {
      title: 'Naruto',
      episodes: 220,
      score: 7.9,
      synopsis: 'Un joven ninja con sueños de convertirse en Hokage...',
      image_url: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
      url: 'https://myanimelist.net/anime/20/Naruto'
    },
    {
      title: 'One Piece',
      episodes: 1000,
      score: 8.8,
      synopsis: 'Las aventuras de Monkey D. Luffy y su tripulación...',
      image_url: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
      url: 'https://myanimelist.net/anime/21/One_Piece'
    },
    {
      title: 'Attack on Titan',
      episodes: 75,
      score: 9.0,
      synopsis: 'La humanidad lucha contra gigantes devoradores de hombres...',
      image_url: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
      url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin'
    },
    {
      title: 'My Hero Academia',
      episodes: 88,
      score: 8.1,
      synopsis: 'En un mundo de superhéroes, Izuku sueña con ser el mejor...',
      image_url: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
      url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia'
    },
    {
      title: 'Demon Slayer',
      episodes: 26,
      score: 8.7,
      synopsis: 'Tanjiro busca venganza contra demonios que mataron a su familia...',
      image_url: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba'
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Cargamos los animes por defecto
    this.animes = this.defaultAnimes;

    // Observa cambios en el input
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(query => {
        if (query && query.trim() !== '') {
          this.searchAnime(query.trim());
        } else {
          // Restauramos los animes por defecto si el input está vacío
          this.animes = this.defaultAnimes;
          this.error = '';
        }
      });
  }

  searchAnime(query: string) {
    this.loading = true;
    this.error = '';
    this.animes = [];

    this.http.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=10`)
      .subscribe({
        next: (res: any) => {
          this.animes = res.data.map((anime: any) => ({
            title: anime.title,
            episodes: anime.episodes,
            score: anime.score,
            synopsis: anime.synopsis,
            image_url: anime.images.jpg.image_url,
            url: anime.url
          }));
          this.loading = false;
        },
        error: () => {
          this.error = 'Error al obtener los datos del anime';
          this.loading = false;
        }
      });
  }
}