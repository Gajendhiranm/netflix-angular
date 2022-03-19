import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeDataService } from '../home-data.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private series : HomeDataService,private route: Router) { }
  seriesResults : any =[];
  count : any = [];
  basicUrl = 'https://image.tmdb.org/t/p/original/';
  getSeries = () => {
    this.series.seriesAtpage(2)
    .subscribe(
      response => {
        this.seriesResults = response.results;
        console.log(this.seriesResults);
        
      }
    )
  }


  handleclick(e : any){
     console.log(e);
     
  }
  getId(e: any) {
    this.series.detailMovie(e);
    this.route.navigate(['series',e]);
  }

  ngOnInit(): void {
         this.getSeries();
  }

}
