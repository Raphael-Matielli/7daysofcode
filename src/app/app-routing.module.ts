import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { HomeComponent } from './home/home.component';
import { NaveComponent } from './nave/nave.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Filmes', component: FilmesComponent },
  { path: 'Nave', component: NaveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
