import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchMovie } from './search-movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  searchMovie!: FormGroup;
  movie: SearchMovie = new SearchMovie();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.searchMovie= this.formBuilder.group({
      identifiant: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      type: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      fiche: ['', [Validators.required]]
    });
  }

onSubmit(){
  console.log('submitted',this.searchMovie)
}
}
