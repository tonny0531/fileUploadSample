import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  upload(fileToUpload: File): Observable<boolean>{
    const endpoint = 'https://localhost:5001/api/upload';
    const formData: FormData = new FormData();
    // files.forEach(file => {
    //   formData.append('file', file, file.name);
    // });
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData).pipe(
        map(() => { return true; })
      );
  }
}
