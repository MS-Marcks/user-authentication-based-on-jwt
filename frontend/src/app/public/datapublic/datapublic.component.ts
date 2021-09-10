import { Component, OnInit } from '@angular/core';
import { DatapublicService } from 'src/app/service/datapublic/datapublic.service';

@Component({
  selector: 'app-datapublic',
  templateUrl: './datapublic.component.html',
  styleUrls: ['./datapublic.component.css']
})
export class DatapublicComponent implements OnInit {

  data: any;
  constructor(
    private datapublicService: DatapublicService
  ) { }

  ngOnInit(): void {
    this.datapublicService.get().subscribe(
      (res: any) => {
        this.data = res;
      }
    )
  }

}
