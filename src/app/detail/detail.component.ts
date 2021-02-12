import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BreedService } from '../breed.service';
import { Breed, Image } from '../breed';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private breedService: BreedService
  ) {}

  image?: Image;
  images?: Image[];

  ngOnInit(): void {
    this.getBreed();
    this.getImages();
  }

  getBreed(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      console.log('triggered!')
      this.breedService
        .getBreedById(id)
        .subscribe((image) => (this.image = image[0]));
      console.log('updated!');
    } else {
      console.log("invalid page")
    }
  }

  getImages(): void{
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      console.log('triggered!')
      this.breedService
        .getImagesbyBreedId(id,'8')
        .subscribe((images) => (this.images = images));
    } else {
    }

  }
}
