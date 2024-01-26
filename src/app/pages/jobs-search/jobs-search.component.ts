import { Component, inject } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { JobProps } from '../../types/job-props';
import { NgClass } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { CardDetailComponent } from '../../components/card-detail/card-detail.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-jobs-search',
  standalone: true,
  imports: [SearchComponent, NgClass, CardComponent, CardDetailComponent],
  templateUrl: './jobs-search.component.html',
  styleUrl: './jobs-search.component.scss',
})
export class JobsSearchComponent {
  jobsList: JobProps[]= [];

  detailJobStatus = false;
  detailJob!: JobProps;

  fetchService = inject(ApiService);

  ngOnInit() {
    this.fetchService.getResults().subscribe((res: any) => {
      this.jobsList = res.jobs;
    });
  }

  getResults() {  
    this.fetchService.getSpecificRequest().subscribe((res: any) => {
      this.jobsList = res.jobs;
    });
  }

  openDetail(job: any) {
    this.detailJobStatus = true;
    this.detailJob = job;
  }

  closeDetail() {
    this.detailJobStatus = false;
  }

  getNext() {
    this.fetchService.getNextPage().subscribe((res: any) => {
      this.jobsList = res.jobs;
    });
  }
  getPrev() {
    this.fetchService.getPrevPage().subscribe((res: any) => {
      this.jobsList = res.jobs;
    });
  }
}
