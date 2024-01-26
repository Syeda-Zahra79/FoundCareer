import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { JobProps } from '../types/job-props';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  jobsList: JobProps[] = [];
  http = inject(HttpClient);
  index: number = 1;
  searchLocation : string = 'United States';
  searchJob: string = 'Web Developer';

  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b0b46caeafmsh69569385f88b74cp18a61cjsn08b69ba5fe93',
      'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com',
    },
  };

  
  getHardCodedResults() {
    return this.http.get<any>('/assets/data.json')
  }
  
  getResults() {
    let url = `https://jobs-api14.p.rapidapi.com/list?query=${this.searchJob}&location=${this.searchLocation}&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=${this.index}`;
   

    return this.http.get<any>(url, this.options)
  }

  getSpecificRequest() {
    let url = `https://jobs-api14.p.rapidapi.com/list?query=${this.searchJob}&location=${this.searchLocation}&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=${this.index}`;
    
    return this.http.get<any>(url, this.options)
  }

  getNextPage() {
    this.index = this.index + 1;
    let url = `https://jobs-api14.p.rapidapi.com/list?query=${this.searchJob}&location=${this.searchLocation}&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=${this.index}`;
    return this.http.get<any>(url, this.options)
  }

  getPrevPage() {
    if (this.index != 1) {
      this.index = this.index - 1;
      let url = `https://jobs-api14.p.rapidapi.com/list?query=${this.searchJob}&location=${this.searchLocation}&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&emplyomentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=${this.index}`;
    return this.http.get<any>(url, this.options)
    } else {
      return this.getResults()
    }
  }
}
