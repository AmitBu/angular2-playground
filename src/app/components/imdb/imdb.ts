import {Component} from 'angular2/core';
import {Http} from 'angular2/http';


@Component({
  selector: 'imdb',
  templateUrl: 'app/components/imdb/imdb.html',
  styleUrls: ['app/components/imdb/imdb.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Imdb {
  public test: string;

  constructor(http: Http) {

  }

  ngOnInit() {
    this.test = 'hey';
  }
}
