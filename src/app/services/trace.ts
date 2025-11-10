import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TraceMoeResponse {
  result: Array<{
    anilist: number;
    filename: string;
    episode: number;
    from: number;
    to: number;
    similarity: number;
    image: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class TraceService {

  private apiUrl = 'https://api.trace.moe/search';

  constructor(private http: HttpClient) { }

  searchByFile(file: File): Observable<TraceMoeResponse> {
    const formData = new FormData();
    formData.append('image', file, file.name);
    return this.http.post<TraceMoeResponse>(this.apiUrl, formData);
  }
}
