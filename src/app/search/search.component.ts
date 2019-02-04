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
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      gravatar_id:string;
      name:string;
      location:string;
      public_repos:number;
      followers:number;
       following:number;
       repos_url:string
  }
  this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token"+environment.apiKey).subscribe(data=>{
      this.search= new Search(data.gravatar_id,data.name,data.location,data.public_repos,data.followers,data.following,data.repos_url)
  })
}

}

 