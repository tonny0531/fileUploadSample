import { TestFilePickerAdapter } from './test-file-picker-adapter';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-uplodaer',
  templateUrl: './ngx-uplodaer.component.html',
  styleUrls: ['./ngx-uplodaer.component.css'],
  providers: [TestFilePickerAdapter]
})
export class NgxUplodaerComponent implements OnInit {

  constructor(private _Adapter :TestFilePickerAdapter) { }
  adapter = this._Adapter;
  ngOnInit(): void {
  }

}
