import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helloworld';

  books = [];
  constructor(private appService:AppService){
  }
  ngOnInit(): void {

    this.getBooks();

  }
  getBooks(): void {
    this.appService.getBooks()
    .subscribe(books => this.books = books);
  }
}
