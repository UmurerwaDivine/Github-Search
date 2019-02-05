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
    searchRequest(){

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
        this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token="+environment.apiKey).toPromise().then(response=>{
            
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
