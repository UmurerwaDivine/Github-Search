import { Component, OnInit } from '@angular/core';
import {Search} from '../search';
import {SearchRequestService} from '../search-http/search-request.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[SearchRequestService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 search: Search;
 inputName=""

submitRepos(){
  this.searchService.searchRequest(this.inputName)
  console.log(this.inputName)
}
  constructor(private searchService:SearchRequestService) { }

  ngOnInit(){
    this.searchService.searchRequest("UmurerwaDivine")
    this.search=this.searchService.search
  }
}