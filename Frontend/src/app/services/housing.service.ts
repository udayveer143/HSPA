import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties(): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=>{
          const propertiesArray:Array<IProperty>=[];
          for(const id in data){
            if(data.hasOwnProperty(id)){
              propertiesArray.push(this.data[id]);
            }
          }
          return propertiesArray;
        })
    );
  }
}
