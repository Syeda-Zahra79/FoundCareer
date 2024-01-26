import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { JobProps } from './types/job-props';
import { CardComponent } from './components/card/card.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    CardComponent,
    CardDetailComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'job-board';
  http = inject(HttpClient);

  searchValue :string = "";
  searchJob : string = ""

  jobsList!: JobProps[];

  detailJobStatus = false;
  detailJob!: JobProps;

  index :number = 1;

  ngOnInit() {
    this.http.get('/assets/data.json').subscribe((res: any) => {
      this.jobsList = res.jobs;
    });
    // const url =
    //   'https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'b0b46caeafmsh69569385f88b74cp18a61cjsn08b69ba5fe93',
    //     'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com',
    //   },
    // };

    // return this.http.get<any>(url, options).subscribe((res: any) => {
    //   console.log(res);
    //   this.jobsList = res.jobs;
    // });
  }

  openDetail(job: any) {
    // console.log('I got the job', job);
    this.detailJobStatus = true;
    this.detailJob = job;
  }

  closeDetail() {
    this.detailJobStatus = false;
  }

  handleInputChange(e : any) {
    this.searchValue = e.target.value  
  }

  handleInputJob(e:any) {
    this.searchJob = e.target.value  
  }

  check() {
    console.log(this.searchValue);
  }

  getRequest() {
    const url =
      `https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=${this.searchValue}s&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b0b46caeafmsh69569385f88b74cp18a61cjsn08b69ba5fe93',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com',
      },
    };

    return this.http.get<any>(url, options).subscribe((res: any) => {
      console.log(res);
      this.jobsList = res.jobs;
    });
  }


  getJobRequest() {
    const url =
      `https://jobs-api14.p.rapidapi.com/list?query=${this.searchJob}&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b0b46caeafmsh69569385f88b74cp18a61cjsn08b69ba5fe93',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com',
      },
    };

    return this.http.get<any>(url, options).subscribe((res: any) => {
      console.log(res);
      this.jobsList = res.jobs;
    });
  }

  getNextPage() {
    this.index = this.index + 1;
    const url =
      `https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=${this.index}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b0b46caeafmsh69569385f88b74cp18a61cjsn08b69ba5fe93',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com',
      },
    };

    return this.http.get<any>(url, options).subscribe((res: any) => {
      console.log(res);
      this.jobsList = res.jobs;
    });
  }
  getPrevPage() {
    this.index = this.index - 1;
    const url =
      `https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=${this.index}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b0b46caeafmsh69569385f88b74cp18a61cjsn08b69ba5fe93',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com',
      },
    };

    return this.http.get<any>(url, options).subscribe((res: any) => {
      console.log(res);
      this.jobsList = res.jobs;
    });
  }

  
}
