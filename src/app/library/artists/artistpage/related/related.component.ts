import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './../../../../data.service';

@Component({
  selector: 'related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {

  header = "Related Artists";
  artistName: any;
  artistData = this.dataService.data.artists;
  artistInfo: any;
  artistGenre: string;
  relatedArtists: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getArtistInfo(artistName: any) {
    return this.artistData.filter( artist => artist.artistName === artistName );
  }

  getRelatedArtists(artistGenre: string) {
    return this.artistData.filter( artist => artist.genre === artistGenre)
  }

  // Goes to this artists page
  goToDetailPage(x){
    this.router.navigate(['artists', x.artistName ])
  }


  ngOnInit() {
    this.artistName = this.route.snapshot.params['artistName'];
    this.artistInfo = this.getArtistInfo(this.artistName);
    this.artistGenre = this.artistInfo[0].genre;
    this.relatedArtists = this.getRelatedArtists(this.artistGenre)
    console.log(this.relatedArtists)
    console.log(this.artistGenre)
  }

}
