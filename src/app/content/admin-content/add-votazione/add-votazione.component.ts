import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-votazione',
  templateUrl: './add-votazione.component.html',
  styleUrls: ['./add-votazione.component.css'],
})
export class AddVotazioneComponent implements OnInit {
  imagePath: any;
  imgURL: any;
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
      card1: new FormControl(),
      card2: new FormControl(),
      card3: new FormControl(),
      card4: new FormControl(),
      card5: new FormControl(),
      card6: new FormControl(),
      card7: new FormControl(),
      card8: new FormControl(),
      cards: new FormArray([]),
    });
  }

  preview(files: any) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
    console.log('src/assets/images/' + this.imagePath[0].name);
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
    this.votationForm.reset();
  }
}
