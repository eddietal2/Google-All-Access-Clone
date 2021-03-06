import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute} from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './library/artists/artists.component';
import { SongsComponent } from './library/songs/songs.component';
import { GenresComponent } from './library/genres/genres.component';
import { PlaylistsComponent } from './library/playlists/playlists.component';
import { StationsComponent } from './library/stations/stations.component';
import { AlbumsComponent } from './library/albums/albums.component';
import { ArtistPageComponent } from './library/artists/artistpage/artistpage.component';
import { AlbumpageComponent } from './library/albums/albumpage/albumpage.component';
import { AllSongsComponent } from './library/artists/artistpage/all-songs/all-songs.component';
import { Top5Component } from './library/artists/artistpage/top5/top5.component';
import { AllAlbumsComponent } from './library/artists/artistpage/all-albums/all-albums.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent,
      children: [
        { path: '', redirectTo: 'artists', pathMatch: 'full' },
        { path: 'artists', component: ArtistsComponent },
        { path: 'albums', component: AlbumsComponent },
        { path: 'genres', component: GenresComponent },
        { path: 'playlists', component: PlaylistsComponent },
        { path: 'songs', component: SongsComponent },
        { path: 'stations', component: StationsComponent }
      ]
  },
  { path: 'artists/:artistName', component: ArtistPageComponent,
    children: [
      {
        path: '',
        outlet: 'artistsongs',
        component: Top5Component
      },
      {
        path: 'top5',
        outlet: 'artistsongs',
        component: Top5Component
      },
      {
        path: 'all-songs',
        outlet: 'artistsongs',
        component: AllSongsComponent
      }
    ]
  },
  { path: 'albums/:albumName', component: AlbumpageComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
