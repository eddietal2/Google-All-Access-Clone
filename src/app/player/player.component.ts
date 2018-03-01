import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from './../data.service';
import { SharedService } from './../shared.service';


@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  songInfo: any = "lol";

  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {
     sharedService.changeEmitted$.subscribe(
      song => {
          this.songInfo = song;
          console.log(this.songInfo)
      });

    }

  ngOnInit() {
  }

}
