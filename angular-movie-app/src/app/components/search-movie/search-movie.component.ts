import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-search-movie-1',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css'
})
export class SearchMovieComponent implements OnInit{

  movie!: FormGroup;
  result: any[] = [];
  isVisible: boolean = false;

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.movie = this.fb.group({
      searchMovie: new FormControl('', [Validators.required])
    });
  }


  async onSubmit(){

    this.isVisible = true;
    
    try {

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRmNDJjN2ZmMzQ4ODYyZGQ0NTkxM2VjMTMwNzcxOCIsIm5iZiI6MTczNzEzOTk2NC42MjcsInN1YiI6IjY3OGFhNmZjNTVlNDliZWQ1ZTk3YzMyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VkGKP_6pjj9Bh-i1BB6_Gzp40CGpEJnAFi1lzpw3MPw'
        }
      }
      
      let url = `https://api.themoviedb.org/3/search/movie?query=${this.movie.value.searchMovie}&include_adult=false&language=en-US&page=1`;

      let res = await fetch(url, options);

      if(!res.ok) throw {
        status: res.status,
        statusText: res.statusText || "Error durante la conexión con la api",
        res
      }

      let json = await res.json();
      
      let res2 = await fetch(`https://api.themoviedb.org/3/movie/${json.results[0].id}?language=en-US`, options);

      if(!res2.ok) throw {
        status: res2.status,
        statusText: res2.statusText || "Error durante la conexión con la api",
        res2
      }
      
      let json2 = await res2.json();

      this.result = [json2];

      console.log(this.result);

    } catch (error) {
      console.error(error);
    }
  }

}
