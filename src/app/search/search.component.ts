import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Search} from '../search'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
      this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token"+environment.apiKey).toPromise().then(response=>{
          
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
              this.search.name="winston churchill"
              reject(error)
          }
      )
  })

  return promise
}

  ngOnInit() {
    this.searchRequest()
//     interface ApiResponse{
//       avatar_url:string;
//       name:string;
//       location:string;
//       public_repos:number;
//       followers:number;
//        following:number;
//        html_url:string
//   }
//   this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token"+environment.apiKey).subscribe(data=>{
//       this.search= new Search(data.avatar_url,data.name,data.location,data.public_repos,data.followers,data.following,data.html_url);
//     },err=>{
//       this.search= new Search("Never", "never", "never", 0,0,0, "winston churchill")
//       console.log("Error occured ")
//   })
 }

}

 