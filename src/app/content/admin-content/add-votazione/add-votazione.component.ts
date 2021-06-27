import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { VoteService } from 'src/app/vote.service';
import { Votation } from 'src/app/votation.model';
import { VoteCard } from 'src/app/vote-card.model';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-votazione',
  templateUrl: './add-votazione.component.html',
  styleUrls: ['./add-votazione.component.css'],
})
export class AddVotazioneComponent implements OnInit {
  imagePath: any[] = ['', ''];
  imgURL: any[] = ['', ''];

  message!: string;
  desc: string = '';
  votationForm: any;
  constructor(private voteService: VoteService) {}

  staticAlertClosed = true;
  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;

  ngOnInit(): void {
    this.votationForm = new FormGroup({
      title: new FormControl(),
      descrizione: new FormControl(''),
      dateStart: new FormControl(),
      dateEnd: new FormControl(),
      partito1: new FormControl(),
      partito2: new FormControl(),
      partitoImg1: new FormControl(),
      partitoImg2: new FormControl(),
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
    this.imagePath.splice(index, 1, files);
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL.splice(index, 1, reader.result);
    };
  }

  onAddCard() {
    const group = new FormGroup({
      partito: new FormControl(null, Validators.required),
      partitoImg: new FormControl(null, Validators.required),
    });

    (<FormArray>this.votationForm.get('cards')).push(group);
    this.imgURL.push('');
    this.imagePath.push('');
  }

  onDeleteCard(index: number) {
    this.votationForm.get('cards').removeAt(index);
    this.imgURL.splice(index + 2, 1);
    this.imagePath.splice(index + 2, 1);
  }

  checkCardsLength() {
    return this.votationForm.get('cards').controls.length >= 6;
  }

  onSubmit() {
    const arrayControls = this.votationForm.get('cards') as FormArray;
    let voteCards = [];

    for (let i = 0; i < arrayControls.controls.length; i++) {
      const path = 'assets/images/' + this.imagePath[i + 2][0].name;
      const card = new VoteCard(path, arrayControls.at(i).value.partito);
      voteCards.push(card);
    }

    var path1 = 'assets/images/' + this.imagePath[0][0].name;
    var path2 = 'assets/images/' + this.imagePath[1][0].name;

    this.voteService.addVotation(
      new Votation(
        this.votationForm.get('title').value,
        this.votationForm.get('descrizione').value,
        this.votationForm.get('dateStart').value,
        this.votationForm.get('dateEnd').value,
        false,
        '',
        new VoteCard(path1, this.votationForm.get('partito1').value),
        new VoteCard(path2, this.votationForm.get('partito2').value),
        voteCards
      )
    );
    console.log(this.voteService.getVotations());
    this.imgURL = ['', ''];
    this.imagePath = ['', ''];
    for (let i = 0; this.votationForm.get('cards').controls.length; i++) {
      this.votationForm.get('cards').removeAt(0);
    }

    this.staticAlertClosed = false;
    setTimeout(() => {
      this.staticAlertClosed = true;
      this.staticAlert.close();
    }, 4000);
  }
}
