import { FileService } from './file.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fileService: FileService){

  }
  file: File;
  title = 'FontEnd';

  fileToUpload: File = null;


  handleFileInput(file: FileList) {
    console.log(file);
    this.fileToUpload = file.item(0);
  }
  submit(): void {
    console.log('upload');
    this.fileService.upload(this.fileToUpload).subscribe(v => {
      console.log('finish');
    });
  }


}
