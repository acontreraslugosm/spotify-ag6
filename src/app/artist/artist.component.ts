import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  topTracks: any[] = [];
  artist: any = {};

  constructor(private router: ActivatedRoute, private api: ApiService) {
  
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });  
  }

  getArtist(id: string){
      this.api.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          });
  }

  getTopTracks(id: string){
    this.api.getTopTracks(id)
         .subscribe(topTracks => {
          this.topTracks = topTracks;
        });
  }
}
