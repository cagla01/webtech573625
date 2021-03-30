import { Injectable } from '@angular/core';
import {Data} from "./data";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data[];

  constructor() {}

  getAll(): Data[] {
    return this.data;
  }

  getSingleId(id: string): Data {
    return this.data.find(data => (data.id.toString() === id));
  }
}
