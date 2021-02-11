import { Injectable } from '@angular/core';
import {Breed, Image} from './breed'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  breeds?: Breed[];
  private breedUrl = "https://api.thecatapi.com/v1/breeds/search?"
  private imageUrl = "https://api.thecatapi.com/v1/images/search?"
  private breedHeader = new HttpHeaders({
    "x-api-key": "9e911615-ff9c-4ebe-b2b8-73c845d56ffb"
  })

  constructor(
    private http: HttpClient,
  ) { }


  getBreedsByName(queryString:string): Observable<Breed[]>{
    let apiUrl = this.breedUrl + "q=" + queryString;
    
    return this.http.get<Breed[]>(apiUrl,{
      headers:this.breedHeader
    })
  }

  getBreedById(idString:string): Observable<Image[]>{
    let apiUrl = this.imageUrl +'breed_id=' + idString

    return this.http.get<Image[]>(apiUrl,{
      headers:this.breedHeader
    })
  }
}
