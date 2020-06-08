import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {
    
    protected apiControllerUrl;
    
    //colocar a url da api nesta var
    private readonly urlGet = environment._Api;

    constructor(protected http: HttpClient, rota: String) {
        this.apiControllerUrl = this.urlGet;
        
    }
}