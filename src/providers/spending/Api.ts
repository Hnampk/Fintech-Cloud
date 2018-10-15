import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class API {

  public static ENDPOINT: String = 'http://192.168.43.18:6789/api'
  public static getPageable(page, pageSize, sortField, sortOrder) {
    return '?page=' + page + '&size=' + pageSize + '&sort=' + sortField + ',' + sortOrder;
}
}