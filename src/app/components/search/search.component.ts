import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search = new EventEmitter<any>();
  
  fetchService = inject(ApiService)

  searchLocation :string = "United States";
  searchJob : string = "Web Developer";


  handleLocationChange(e : any) {
    this.searchLocation = e.target.value
  }

  handleJobChange(e:any) {
    this.searchJob = e.target.value;
  }

  buttonHandle() {    
    this.fetchService.searchJob = this.searchJob
    this.fetchService.searchLocation = this.searchLocation
    this.search.emit()
  }
}
