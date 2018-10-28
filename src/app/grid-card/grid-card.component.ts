import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
  providers : [ApiService]
})

export class GridCardComponent implements OnInit {

  @Input() items: any[] = [];
  
    constructor(private router: Router) { 

  }
  
  showArtist(item: any ){
    let artistId;

    if (item.type === 'artist'){
      artistId = item.id;
    }else{
      artistId = item.artists[0].id;
    }
    
    this.router.navigate(['/artist', artistId]);
  }
  
  ngOnInit() {
    
  }

}
