import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  isSearchActive = false;
  searchQuery = '';

  constructor() {}

  ngOnInit(): void {}

  toggleSearch(): void {
    this.isSearchActive
      ? (this.isSearchActive = false)
      : (this.isSearchActive = true);
  }
}
