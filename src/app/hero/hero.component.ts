import { Component, OnInit } from '@angular/core';
import { BreedService } from '../breed.service';
import { Breed } from "../breed";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  isSearchActive = false;
  searchQuery = '';

  breeds: Breed[] = [];

  constructor(private breedservice: BreedService) {}

  ngOnInit(): void {
    console.log(this.breeds)
  }

  toggleSearch(): void {
    this.isSearchActive
      ? (this.isSearchActive = false)
      : (this.isSearchActive = true);
  }

  getBreeds(): void {
    console.log("get breeds triggered!")
    this.breedservice
      .getBreedsByName(this.searchQuery)
      .subscribe((breeds) => (this.breeds = breeds));
  }
}
