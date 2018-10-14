import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from './Api';

/*
  Generated class for the SpendingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpendingProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SpendingProvider Provider');
  }

  createExpense(obj){
    return this.http.post(API.ENDPOINT+"/spending", obj);
  }

  getExpense(){
    return this.http.get(API.ENDPOINT+'/spending?page=0&size=99999');
  }

  deleteExpense(id){
    return this.http.delete(API.ENDPOINT+'/spending/'+id);
  }

  getExpenseDetail(id){
    return this.http.get(API.ENDPOINT + '/spending/'+ id + '/detail');
  }

  getUsers(){
    return this.http.get(API.ENDPOINT + '/user/');
  }

}
