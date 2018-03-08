import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RecentService } from './../recent.service';
import { SharedService } from './../shared.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

songInfo: any;

  constructor(
    private dataService: DataService,
    private  sharedService: SharedService,
    private recentService: RecentService) {
      recentService.changeEmitted$.subscribe(
        song => {
          this.songInfo = song;
        }
      );
    }

  artistData = this.dataService.data;

  ngOnInit() {
  }

}
