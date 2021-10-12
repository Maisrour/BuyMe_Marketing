import { HttpHeaders } from '@angular/common/http';
export abstract class  BaseService {
    protected  options = {
      headers: new HttpHeaders().set( 'Authorization',`Bearer ${localStorage.getItem('auth_token')}`)
    };
}