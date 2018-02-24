import { Component, OnInit, Input, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './../../../../data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { ArtistPageComponent } from './../artistpage.component';

@Component({
  selector: 'top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {

  artistName: any = null;
  artistInfo: any = null;
  albumsToDisplay: any = null;
  artistData = this.dataService.data.artists;
  dataFromArtistPage: any = this.artistPageData;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private  cdRef:ChangeDetectorRef,

    // Have to inject ArtistPageComponent's data into the Top5Component
    // Needs ArtistPageComponent's param.snapshot from the Artist's Name
    // ArtistPageComponent = Parent Component
    // Top5 = Child component
    private artistPageData: ArtistPageComponent
  ){  }

  // Get all the albums in the entire database
  getAlbums = this.artistData.reduce(
    (acc: any, next: any) => {
      next.albums.forEach(album => {
        acc.push(album);
      });
    return acc;
  }, []);

  // This component's artistName property is equal to an
  // object of an Artist in the dataService
  getArtistInfo(artistName: any) {
    return this.artistData.filter( artist => artist.artistName === artistName );
  }

  ngOnInit() {
    // gets the artistName of the ArtistPageComponent, which is
    // a snapshot of its params in the route
    this.artistName = this.dataFromArtistPage.artistName
    this.artistInfo = this.getArtistInfo(this.artistName);
    console.log(this.artistInfo);
    console.log(" ^  -- This is all the artists' info in the DataService for the Top-5 Section")
    console.log(this.dataFromArtistPage.artistName);
    console.log( ' ^  -- This is the name of the artist from the ArtistPageComponent for the Top-5 Section')
  }

}
