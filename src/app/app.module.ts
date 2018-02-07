import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service'


import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LnavComponent } from './lnav/lnav.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PlayerComponent } from './player/player.component';
import { ArtistsComponent } from './library/artists/artists.component';
import { SongsComponent } from './library/songs/songs.component';
import { GenresComponent } from './library/genres/genres.component';
import { PlaylistsComponent } from './library/playlists/playlists.component';
import { StationsComponent } from './library/stations/stations.component';
import { AlbumsComponent } from './library/albums/albums.component';
import { ArtistPageComponent } from './library/artists/artistpage/artistpage.component';
import { AlbumpageComponent } from './library/albums/albumpage/albumpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LnavComponent,
    HomeComponent,
    LibraryComponent,
    PlayerComponent,
    ArtistsComponent,
    SongsComponent,
    GenresComponent,
    PlaylistsComponent,
    StationsComponent,
    AlbumsComponent,
    ArtistPageComponent,
    AlbumpageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
