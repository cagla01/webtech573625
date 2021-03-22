import { Injectable } from '@angular/core';
import {Data} from "./data";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data[];

  constructor() {
    /*
    this.data = [
      {
        id: 1,
        firstname: 'Catherine',
        lastname: 'Williams',
        email: 'cwilliamsl@360.cn'
      },
      {
        id: 2,
        firstname: 'Adam',
        lastname: 'Anderson',
        email: 'aanderson8@google.fr'
      },
      {
        id: 3,
        firstname: 'Susan',
        lastname: 'Andrews',
        email: 'sandrewsn@google.co.jp'
      },
      {
        id: 4,
        firstname: 'Catherine',
        lastname: 'Andrews',
        email: 'candrewsp@noaa.gov'
      },
      {
        id: 5,
        firstname: 'Alan',
        lastname: 'Bradley',
        email: 'abradley1c@globo.com'
      },
      {
        id: 6,
        firstname: 'Anne',
        lastname: 'Brooks',
        email: 'abrooks16@bravesites.com'
      },
      {
        id: 7,
        firstname: 'Russell',
        lastname: 'Brown',
        email: 'rbrownq@nifty.com'
      },
      {
        id: 8,
        firstname: 'Ryan',
        lastname: 'Burton',
        email: 'rburton18@foxnews.com'
      },
      {
        id: 9,
        firstname: 'Roy',
        lastname: 'Campbell',
        email: 'rcampbell1@geocities.com'
      },
      {
        id: 10,
        firstname: 'Russell',
        lastname: 'Campbell',
        email: 'rcampbell17@eventbrite.com'
      },
      {
        id: 11,
        firstname: 'Bonnie',
        lastname: 'Coleman',
        email: 'bcoleman11@fc2.com'
      },
      {
        id: 12,
        firstname: 'Ernest',
        lastname: 'Coleman',
        email: 'ecoleman15@businessweek.com'
      },
      {
        id: 13,
        firstname: 'Richard',
        lastname: 'Cruz',
        email: 'rcruz7@unc.edu'
      },
      {
        id: 14,
        firstname: 'Sean',
        lastname: 'Cruz',
        email: 'scruz10@answers.com'
      },
      {
        id: 15,
        firstname: 'Rebecca',
        lastname: 'Cunningham',
        email: 'rcunninghamd@mac.com'
      }
    ];
    */
  }

  getAll(): Data[] {
    return this.data;
  }

  getSingleId(id: string): Data {
    return this.data.find(data => (data.id.toString() === id));
  }
}
