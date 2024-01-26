import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobProps } from '../../types/job-props';
import { CardDetailComponent } from '../card-detail/card-detail.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardDetailComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() job !: JobProps;
  @Output() JobDetail = new EventEmitter<any>();

  openDetail() {
    this.JobDetail.emit(this.job)
  }

}
