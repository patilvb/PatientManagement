import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'patientlist',
    templateUrl: './patientlist.component.html'
})
export class PatientListComponent {
    public patients: Patient[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/patient/all').subscribe(result => {
            this.patients = result.json() as Patient[];
        }, error => console.error(error));
    }
}

interface Patient {
    id: number;
    name: string;
    surname: string;
    dob: string;
    gender: string;
    cityname: string;
    statename: string;

}
