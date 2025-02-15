import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class UserService{
    private Users = [
        {id:1, name:'Bheemesh'},
        {id:2, name:'Chandru'},
        {id:3, name:'Raam'},
        {id:4, name:'Ramesh'},
    ];

    getUsers(){
        return of(this.Users);
    }
    
    getUserByID(id:number){
        const user = this.Users.find(item => item.id === id);
        return of(user); //
        //  Wraps the user in an Observable, so it can be used in an RxJS-based environment
        //  (e.g., HTTP requests, reactive forms, async operations).
        // of() is an RxJS operator that creates an Observable from a value.
        // It ensures the function behaves asynchronously even when the data is available instantly.
        // Useful for working with RxJS and Angular's HttpClient.

    }
}