import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {

  constructor(
      private dataService: DataService,
      private route: ActivatedRoute
  ) { }

  artistData = this.dataService.data;

  getArtistInfo() {
    
  }

  ngOnInit() {
    console.log(this.route);
  }

}
