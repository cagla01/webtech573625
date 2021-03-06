import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from "./buchliste/create/create.component";
import {UpdateComponent} from "./buchliste/update/update.component";
import {ReadComponent} from "./buchliste/read/read.component";
import {DeleteComponent} from "./buchliste/delete/delete.component";
import {DoneComponent} from "./buchliste/done/done.component";

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'update/:id', component: ReadComponent },
  { path: 'read', component: ReadComponent },
  { path: 'read/:id', component: ReadComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'done', component: DoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
