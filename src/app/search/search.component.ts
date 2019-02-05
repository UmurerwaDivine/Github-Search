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
  ngOnInit() {
    interface ApiResponse{
      avatar_url:string;
      name:string;
      location:string;
      public_repos:number;
      followers:number;
       following:number;
       html_url:string
  }
  this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token"+environment.apiKey).subscribe(data=>{
      this.search= new Search(data.avatar_url,data.name,data.location,data.public_repos,data.followers,data.following,data.html_url);
    },err=>{
      this.search= new Search("Never", "never", "never", 0,0,0, "winston churchill")
      console.log("Error occured ")
  })
}

}

 