import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieSearch } from './movie-search';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class MovieSearchComponent implements OnInit {
  movieSearch: FormGroup = new FormGroup({});
  submitted = false;
  tellUser: string = '';
  constructor(private fb: FormBuilder) { }

  titleOrIdRequired(form: FormGroup) {
    const id = form.get('identifiantTitre.identifiant')?.value;
    const title = form.get('identifiantTitre.titre')?.value;
  
    if (!id && !title) {
      return { titleOrIdRequired: 'Le titre ou l\'identifiant est requis.' };
    } else {
      return null;
    }
  }
  ngOnInit(): void {
    this.tellUser ='';
    this.movieSearch = this.fb.group({
      type: ['series'],
      fiche: [{ value: 'courte', disabled: true },Validators.required],
      identifiantTitre: this.fb.group({
        identifiant: ['', [Validators.pattern('^[0-9]+$')]],
        titre: ['']
      }, { validator: this.identifiantTitreValidator }),
      anneeSortie: ['', [Validators.required, this.rangeDateValidator(1900, 2023)]]
    }, { validator: this.titleOrIdRequired });
    
  
    this.movieSearch.get('identifiantTitre.identifiant')?.valueChanges.subscribe(value => {
      if (value) {
        this.movieSearch.get('fiche')?.enable();
      } else {
        this.movieSearch.get('fiche')?.disable();
      }
    });
  }
  
  identifiantTitreValidator(control: FormGroup) {
    const identifiant = control.get('identifiant')?.value;
    const titre = control.get('titre')?.value;
    const fiche = control.get('fiche')?.value;
    if (identifiant && !titre && fiche) {
      control.get('fiche')?.setErrors({ invalid: true });
    }
  }
  onSubmit() {
  
    this.submitted = true;
    if (this.movieSearch.valid) {
      const movieSearch: MovieSearch = {
        type: this.movieSearch.value.type,
        fiche: this.movieSearch.value.fiche,
        identifiantTitre: {
          identifiant: this.movieSearch.value.identifiantTitre.identifiant,
          titre: this.movieSearch.value.identifiantTitre.titre
        },
        anneeSortie: this.movieSearch.value.anneeSortie
      };
      console.log(JSON.stringify(movieSearch));
      this.tellUser ='';
    } else {
      this.tellUser ="Lun des champs 'Titre' ou 'Identifiant' est requis.";
      console.log("Form is invalid");
      this.titleOrIdRequired(this.movieSearch);
    }
  }

  rangeDateValidator(minYear: number, maxYear: number) {
    return (control: { value: any; }) => {
      const year = control.value;
      const isValid = year >= minYear && year <= maxYear;
      return isValid ? null : { min: { minYear, maxYear } };
    };
  }
}
