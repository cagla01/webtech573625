import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Data} from "../../../shared/data";
import { Location } from '@angular/common';

@Component({
  selector: 'ck-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: Data;
  @Output() updateEvent = new EventEmitter<Data>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        titelControl: ['', Validators.required],
        autorControl: ['', Validators.required],
        genreControl: ['', Validators.required],
        statusControl: ['', Validators.required],
        bewertungControl: ['', Validators.required],
        notizControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.data?.id,
      titelControl: this.data?.titel,
      autorControl: this.data?.autor,
      genreControl: this.data?.genre,
      statusControl: this.data?.status,
      bewertungControl: this.data?.bewertung,
      notizControl: this.data?.notiz
    });
  }

  onSubmit(): void {
    const values = this.form.value;
    this.data.id = values.idControl;
    this.data.titel = values.titelControl;
    this.data.autor = values.autorControl;
    this.data.genre = values.genreControl;
    this.data.status = values.statusControl;
    this.data.bewertung = values.bewertungControl;
    this.data.notiz = values.notizControl;
    this.updateEvent.emit(this.data);
  }

  cancel(): void {
    this.location.back();
  }

}
