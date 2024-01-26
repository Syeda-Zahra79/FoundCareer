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

  detailJobStatus = false;
  detailJob!: JobProps;

  index :number = 1;

  
}
