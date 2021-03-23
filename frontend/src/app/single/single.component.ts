import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../shared/data.service';
import {Data} from '../shared/data';

@Component({
  selector: 'ck-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent implements OnInit {
  singleFormGroup: FormGroup;
  id: string;
  data: Data;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private ds: DataService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.data = this.ds.getSingleId(this.id);
    this.singleFormGroup = this.createFormGroup();
    this.singleFormGroup.setValue({
      titelControl: this.data.titel,
      autorControl: this.data.autor,
      genreControl: this.data.genre,
      statusControl: this.data.status,
      bewertungControl: this.data.bewertung,
      notizControl: this.data.notiz
    });
  }

  createFormGroup(): FormGroup {
    return this.fb.group({
      titelControl: ['', Validators.required],
      autorControl: ['', Validators.required],
      genreControl: ['', Validators.required],
      statusControl: ['', Validators.required],
      bewertungControl: ['', Validators.required],
      notizControl: ['', Validators.required]
    });
  }

  onSubmit(formData): void {
    this.singleFormGroup.reset();
    console.warn('Submitted: ', formData);
  }

}
