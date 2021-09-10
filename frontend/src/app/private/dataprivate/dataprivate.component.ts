import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataprivateService } from './../../service/dataprivate/dataprivate.service';

@Component({
  selector: 'app-dataprivate',
  templateUrl: './dataprivate.component.html',
  styleUrls: ['./dataprivate.component.css']
})
export class DataprivateComponent implements OnInit {

  data: any;
  constructor(
    private dataprivateService: DataprivateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dataprivateService.get().subscribe(
      (res: any) => {
        this.data = res;
      }, (err: any) => {
        if(err.statusText === "Forbidden"){
          localStorage.clear();
          this.router.navigate(['login']);
        }
      }
    )
  }

}
