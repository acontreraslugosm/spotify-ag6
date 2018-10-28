import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  
  private accessToken = 'BQAPmQf2YpFCMwEJY3ycz0NTILg4odcwKppth7A3LAXXitG5dBZRS2Lfe-TwY97GdF-ht5esenxG4aZg_AKo9Fo8kHySLMreCWhg4gUoZNgA_dauTwFe4uoCLAuJG3WT5STawhK8n97HNY1Rp1ZtRGB8YnJAiM9XIL8vqMrXAb_LjCzlEgBy';

  constructor(private http: HttpClient) {
    this.getNewReleases();
  }

  Query(query: String){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.accessToken}`
    }); 

    return this.http.get(url, {headers});
  }
  
  getNewReleases() {
    return this.Query('browse/new-releases?limit=42')
        .pipe(map(data => data['albums'].items)
        );
        
  }

  getArtists(element: string) {
    return this.Query(`search?q=${element}&type=artist&limit=15`)
        .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.Query(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.Query(`artists/${id}/top-tracks?country=us`)
                .pipe(map(data => data['tracks']));
  }
}