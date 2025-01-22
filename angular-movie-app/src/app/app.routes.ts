import { Routes } from '@angular/router';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { Error404NotFoundComponent } from './components/error404-not-found/error404-not-found.component';

export const routes: Routes = [
    {path: 'search', component: SearchMovieComponent},
    {path: '', redirectTo: 'search', pathMatch: "full"},
    {path: '**', component: Error404NotFoundComponent}
];
