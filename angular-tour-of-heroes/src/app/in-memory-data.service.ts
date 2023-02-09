import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nicei' },
      { id: 13, name: 'Bombastoi' },
      { id: 14, name: 'Celeritasi' },
      { id: 15, name: 'Magnetai' },
      { id: 16, name: 'RubberMani' },
      { id: 17, name: 'Dynamai' },
      { id: 18, name: 'Dr. IQi' },
      { id: 19, name: 'Magmai' },
      { id: 20, name: 'Tornadoi' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}