import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable()

export class CompanyService {
    protected apiUrl: string = "https://faker-api.milki.space/companies"

    constructor(private _httpClient: HttpClient){}

    getCompanies(): void {
        this._httpClient.get(this.apiUrl).pipe(take(1)).subscribe(result => {
            console.log(result)
        })
    }
}