import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any = {};
  constructor(private dash: DashboardService) {}

  ngOnInit(): void {
    this.dash.getData().subscribe(
      (res) => (this.data = res),
      (err) => console.log(err)
    );
  }
}
