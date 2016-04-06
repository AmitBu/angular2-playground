import {Component} from 'angular2/core';
import {Http} from 'angular2/http';


@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.html',
  styleUrls: ['app/components/about/about.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class About {
  public test: string;

  constructor(http: Http) {

  }

  ngOnInit() {
    this.test = 'hey';
  }
}
