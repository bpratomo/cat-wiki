import { Injectable } from '@angular/core';
import {Breed, Image} from './breed'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
}
