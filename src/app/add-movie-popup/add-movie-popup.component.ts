import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from
  '@angular/material/dialog';
import { MainService } from '../main.service';
@Component({
  selector: 'app-add-movie-popup',
  templateUrl: './add-movie-popup.component.html',
  styleUrls: ['./add-movie-popup.component.scss']
})
export class AddMoviePopupComponent implements OnInit {
  genders = ['male', 'female'];
  movieForm: any = FormGroup;
  forbiddenUserNames = ['geetha', 'puja'];
  toppings = new FormControl('');
  LocationValues: string[] = ['Bangalore', 'Tirupathi', 'vizag', 'Mumbai', 'Srikalahasti', 'Chennai'];
  location = '';

  constructor(public dialogRef: MatDialogRef<AddMoviePopupComponent>,
    private mainService: MainService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.movieForm = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'cast': new FormControl(null, [Validators.required]),
      'genre': new FormControl(null, [Validators.required]),
      'language': new FormControl(null, [Validators.required]),
      locations: new FormControl([''])
    });
    if (this.data) {
      this.data.locations = this.data.location.map((obj: any) => {
        return obj.name;
      })
      this.movieForm.patchValue(this.data);
    }
  }

  onSubmit() {
    this.movieForm.value.locations = this.movieForm.value.locations.map((obj: any) => {
      return {
        name: obj,
        available: true
      };
    });
    if (this.data) {
      this.mainService.updateMovie(this.movieForm.value);
    } else {
      this.mainService.addMovie(this.movieForm.value);
    }
    this.dialogRef.close(this.mainService.MOVIE_DATA);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


}



