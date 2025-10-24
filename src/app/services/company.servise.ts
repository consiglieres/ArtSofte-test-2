import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ICompany } from '../interfaces/company.interface';

@Injectable()

export class CompanyService {
    protected apiUrl: string = "https://faker-api.milki.space/companies"

    private companiesSubject = new BehaviorSubject<ICompany[]>([])
    public companies$ = this.companiesSubject.asObservable()
    

    constructor(private _httpClient: HttpClient){}

    getCompanies(): void {
        this._httpClient.get<{ data: ICompany[] }>(this.apiUrl)
        .pipe(take(1)).subscribe({
            next: (response) => {
                this.companiesSubject.next(response.data)
                console.log(response.data)
            },
            error: (error) => {
                console.error('Ошибка загрузки компаний:', error);
            }
        })
    }

    getCompanyById(companyId: number) {
        return this._httpClient.get<ICompany>(`${this.apiUrl}/${companyId}`);
    }
}