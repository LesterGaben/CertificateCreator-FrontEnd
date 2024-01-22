import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'download-created-certificate',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    PdfViewerModule
  ],
  templateUrl: './download-created-certificate.component.html',
  styleUrls: ['./download-created-certificate.component.scss']
})
export class DownloadCreatedCertificateComponent implements OnInit {
  pdfSrc: string | undefined;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const url = `https://localhost:7110/certificates/download?id=${id}`;
      this.http.get(url, { responseType: 'blob' }).subscribe((response: Blob) => {
        // Тут ми перетворюємо Blob на безпечний URL, який можна використати в <pdf-viewer>
        this.pdfSrc = URL.createObjectURL(response);
      }, error => {
        console.error("Error fetching PDF", error);
      });
    } else {
      console.error("Certificate ID not found in route");
    }
  }

  downloadCertificate() {
    if(this.pdfSrc) {
      const link = document.createElement('a');
      link.href = this.pdfSrc;
      link.download = "certificate.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    else {
      console.error("PDF source is not aviable to download");
    }
  }
}