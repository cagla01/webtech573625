import { Component, OnInit } from '@angular/core';
import {Data} from "../../shared/data";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../shared/backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ck-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  selectedId: number;
  buchliste: Data[];
  buch: Data;
  error: HttpErrorResponse;
  form: FormGroup;

  constructor(private cs: BackendService,
              private route: ActivatedRoute,
              private router: Router,
              config: NgbModalConfig,
              private fb: FormBuilder,) {
    // Konfiguration des modalen Dialogs
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Formular fuer delete
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        titelControl: ['', Validators.required],
        autorControl: ['', Validators.required],
        bewertungControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
  }


  trackByData(index: number, data: Data): number { return data.id; }

  readAll(): void {
    this.cs.getAll().subscribe(
      (response: Data[]) => {
        console.log(response);
        return this.buchliste = response;  },
      error => console.log(error)
    );
  }
}
