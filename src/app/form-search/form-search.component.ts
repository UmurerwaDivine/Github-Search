import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Repos } from '../repos';
import { Search } from '../search';
import {SearchRequestService} from '../search-http/search-request.service'


@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
