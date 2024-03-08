import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
    providedIn:'root'
})
export class apiService{
    constructor(private http:HttpClient){}
    get() :Observable<any[]>{
        let url = "127.0.0.1:2000/main";
        return this.http.get<any[]>(url)
    }
}