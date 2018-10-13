import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class API {

  public static ENDPOINT: String = 'http://10.83.1.36:6789/api'
  public static getPageable(page, pageSize, sortField, sortOrder) {
    return '?page=' + page + '&size=' + pageSize + '&sort=' + sortField + ',' + sortOrder;
}
}