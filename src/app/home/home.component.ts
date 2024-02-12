import { Component, OnInit } from '@angular/core';
import { OccupationInfoComponent } from "./occupation-info/occupation-info.component";
import { NameInfoComponent } from "./name-info/name-info.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [OccupationInfoComponent, NameInfoComponent]
})
export class HomeComponent implements OnInit {

  ngOnInit(): void { }

}
