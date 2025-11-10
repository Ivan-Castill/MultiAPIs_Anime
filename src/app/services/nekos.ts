import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface NekosResponse {
  results: { url: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class NekosService {

  constructor(private http: HttpClient) { }

  getImage(category: string = 'neko', amount: number = 1): Observable<NekosResponse> {
    const url = `https://nekos.best/api/v2/${category}?amount=${amount}`;
    return this.http.get<NekosResponse>(url);
  }
}
