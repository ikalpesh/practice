import { Component } from '@angular/core';
import { DetailsService } from './details.service';
import { FormsModule } from '@angular/forms';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Mainhead = 'practice';
  postArray: any = [];
  userid: any;
  tittle: any;
  body: any;
  id: any;

  // tslint:disable-next-line: variable-name
  constructor(private _dataservice: DetailsService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.getdetails();
  }
  getdetails() {
    this._dataservice.getApicall('posts')
    .subscribe(data => {
      this.postArray = data;
      console.log(data);
      });
  }

addPost() {
  const jsonBody = {};
  // tslint:disable-next-line: no-string-literal
  jsonBody['title'] = this.title;
  // tslint:disable-next-line: no-string-literal
  jsonBody['body'] = this.body;
  // tslint:disable-next-line: no-string-literal
  jsonBody['userid'] = this.userid;
  console.log(jsonBody);
  this._dataservice.postApicall({ url: 'posts', jsonBody })
  .subscribe(data => {
      jQuery('#addModal').modal('hide');
  });
}

}
