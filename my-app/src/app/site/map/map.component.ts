import { Component, OnInit } from '@angular/core';
import { ResultService} from '../../site/results/_services/results.service';
import { Result } from 'app/site/shared/_models/result';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [ResultService],
})
export class MapComponent implements OnInit {
  results: Array<Result>;

  title= 'lille';
  lat= 50.63;
  lng= 3.06;


  constructor(private resultService: ResultService) { }

  ngOnInit() { const that = this;
    const json = that.resultService.getListResults().subscribe((data) => {
      this.results = JSON.parse(data['_body']);
      console.log(this.results);
    });
  }

}
