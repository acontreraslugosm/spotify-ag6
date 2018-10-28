import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  public songs: any[] = [];

  

  constructor(private api: ApiService) {
    this.api
    .getNewReleases()
        .subscribe((data: any) => {
          this.songs = data;
        })
      
  }

  ngOnInit() {}
}
