import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { JobProps } from '../../types/job-props';
import { CardDetailComponent } from '../../components/card-detail/card-detail.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, RouterLink, CardDetailComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  fetchApi = inject(ApiService);
  detailJobStatus = false;
  detailJob!: JobProps;

  jobs: JobProps[] = [];

  ngOnInit() {
    this.fetchApi.getHardCodedResults().subscribe((res: any) => {
      this.jobs = res.jobs;
    });
  }

  openDetail(job: any) {
    this.detailJobStatus = true;
    this.detailJob = job;
  }

  closeDetail() {
    this.detailJobStatus = false;
  }
}
