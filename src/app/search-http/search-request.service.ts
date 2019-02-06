import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Search} from '../search';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
  search: Search;
  constructor(private http:HttpClient) { 
    this.search=new Search("","","",0,0,0,"")
    }
    searchRequest(inputName){
      var userInput = inputName

      interface ApiResponse{
              avatar_url:string;
              name:string;
              location:string;
              public_repos:number;
              followers:number;
               following:number;
               html_url:string
    
      }
      let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/users/"+  userInput + "?access_token=00bf308a17184122f00a61435313f7db6fad87b8").toPromise().then(response=>{
            
            this.search.avatar_url=response.avatar_url
            this.search.name=response.name
            this.search.location=response.location
            this.search.public_repos=response.public_repos
            this.search.followers=response.followers
            this.search.following=response.following
            this.search.html_url=response. html_url
  
  
  
  
  
  
            resolve()
        },
        error=>{
                this.search.avatar_url="Never, never, never give up."
                this.search.name="Divine"
                reject(error)
            }
        )
    })
  
    return promise
  }
      
}
