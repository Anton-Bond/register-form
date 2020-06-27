import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  // football teams
  private fTeams: string[] = ['Барселона', 'Ювентус', 'Манчестер Юнайтед', 'Манчестер Сити', 'Бавария', 'Металург', 'Арсенал'];
  // pan brands
  private pBrands: string[] = ['Tefal', 'Rondell', 'Ballarini', 'Taller'];

  // for football teams
  get footballTeams(): string[] {
    return this.fTeams;
  }

  // for pan brands
  get panBrands(): string[] {
    return this.pBrands;
  }

}
