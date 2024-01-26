import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobProps } from '../../types/job-props';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss',
})
export class CardDetailComponent {
  @Input() job!: JobProps;
  @Output() closeDetail = new EventEmitter<any>();
  
  textList: string[] = [];
  descriptionList: string[] = [];
  needTextList = false;

  ngOnInit() {    
    if (!this.job.description.includes("•")) {
      this.needTextList = true
      this.textList.push(this.job.description)
    } else {
      this.descriptionList = this.job.description.split('•');
      let firstElem = this.descriptionList.shift()
      if (firstElem) this.textList.push(firstElem)
      let length = this.descriptionList.length;
      let beforeLength = this.descriptionList[length-1].indexOf('.');
      let string = this.descriptionList[length - 1].slice(0, beforeLength);
      let afterString = this.descriptionList[length - 1].slice(beforeLength + 1, this.descriptionList[length - 1].length)
      this.descriptionList.pop();
      this.descriptionList.push(string);
      this.textList.push(afterString);
    }
  }

  close() {
    this.closeDetail.emit()
  }
}
