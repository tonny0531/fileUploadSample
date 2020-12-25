import { FileService } from './../file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-origin-uploader',
  templateUrl: './origin-uploader.component.html',
  styleUrls: ['./origin-uploader.component.css']
})
export class OriginUploaderComponent implements OnInit {

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
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
