import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-votazione',
  templateUrl: './add-votazione.component.html',
  styleUrls: ['./add-votazione.component.css'],
})
export class AddVotazioneComponent implements OnInit {
  imagePath: any[] = [];
  imgURL: any[] = [];

  message!: string;
  desc: string = '';
  votationForm: any;
  constructor() {}

  ngOnInit(): void {
    this.votationForm = new FormGroup({
      title: new FormControl(),
      descrizione: new FormControl(''),
      dateStart: new FormControl(),
      dateEnd: new FormControl(),
      partito1: new FormControl(),
      partito2: new FormControl(),
      partito3: new FormControl(),
      partito4: new FormControl(),
      partito5: new FormControl(),
      partito6: new FormControl(),
      partito7: new FormControl(),
      partito8: new FormControl(),
      partitoImg1: new FormControl(),
      partitoImg2: new FormControl(),
      partitoImg3: new FormControl(),
      partitoImg4: new FormControl(),
      partitoImg5: new FormControl(),
      partitoImg6: new FormControl(),
      partitoImg7: new FormControl(),
      partitoImg8: new FormControl(),
      cards: new FormArray([]),
    });
  }

  preview(e: any, index: number): void {
    let files = e.files;
    if (files.length === 0) return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    this.imagePath.splice(index - 1, 1, files);
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL.splice(index - 1, 1, reader.result);
    };
  }

  onAddCard() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.votationForm.get('cards')).push(control);
  }

  onDeleteCard(index: number) {
    this.votationForm.get('cards').removeAt(index);
  }
  checkCardsLength() {
    return this.votationForm.get('cards').controls.length >= 6;
  }

  onSubmit() {
    console.log(this.votationForm);
    /*     this.votationForm.reset();
    this.votationForm.patchValue({
      descrizione: '',
    }); */
  }
}
