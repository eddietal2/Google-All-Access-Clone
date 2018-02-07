import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './../../../data.service';

@Component({
  selector: 'artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})

export class ArtistPageComponent implements OnInit{

  artistId= '';
  artistData = this.dataService.data;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ){  }

  ngOnInit(){
     this.artistId = this.route.snapshot.params.artistId;
     console.log(this.artistId);
  }


}
