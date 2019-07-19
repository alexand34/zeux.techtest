import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError } from 'rxjs/operators'

import { Asset } from '../my-assets/my-assets.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AssetsService implements Resolve<any> {
  assets: any[];
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  async resolve(route: ActivatedRouteSnapshot) : Observable<any> | Observable<never>  {
    const uriAsset = '/api/asset/Get/all';
    if (this.assets == undefined || this.assets.length == 0) {
      return this.http.get<Array<Asset>>(uriAsset).pipe(catchError(error => {
        return EMPTY
      }), mergeMap(assets => {
        if (assets) {
          return of(assets)
        } else {
          return EMPTY;
        }
      })
      )
    }else {
      return this.assets.filter(asset => asset.type.name == route);
    }
  }
}
