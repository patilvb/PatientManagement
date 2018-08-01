import { Component,Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Component({
    selector: 'newpatient',
    templateUrl: './patient.component.html'
})
export class PatientComponent {    

    Name: string;
    Surname: string;
    DOB: string;
    Gender: string;
    CityId: string;
    StateId: string;    

    public cities: City[];
    public states: State[];

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        this.Gender = "-1";
        this.StateId = "-1";
        this.CityId = "-1";
       
        http.get(baseUrl + 'api/setting/states').subscribe(result => {
            this.states = result.json() as State[];
            
        }, error => console.error(error));


    }
   
    public ChangeState(stateid:any) {
        
        this.http.get(this.baseUrl + 'api/setting/' + stateid + '/cities').subscribe(result => {
            this.cities = result.json() as City[];
            
        }, error => console.error(error));

    }

    public SavePatient() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
       

        var newPatient = {
            Name: this.Name,
            Surname: this.Surname,
            DOB: this.DOB,
            Gender: this.Gender,
            Stateid: this.StateId,
            Cityid: this.CityId
        };
        let body = JSON.stringify(newPatient);

        this.http.post(this.baseUrl + 'api/patient/create', body,options).subscribe(
            data => {
                alert('Saved successfully');
            },
            error => {
                console.error(error);
            }
        );
    }

   
}


export interface City {
    id: number;
    name: string;
}  

export interface State {
    id: number;
    name: string;
} 

