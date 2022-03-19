import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  results: any = [];
  basicUrl = 'https://image.tmdb.org/t/p/original';
  id: Number = 0;
  credits : any = [];
  constructor(private homeData : HomeDataService,private route : ActivatedRoute) { }


  getCast = () => {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.homeData.credits(this.id)
      .subscribe((response : any) => {
        this.credits = response['cast'];
        console.log("credits",this.credits);
        

      });
      
  }); 
  }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.id = params['id'];
      this.homeData.detailMovie(this.id)
      .subscribe((response : any) => {
        this.results = response;
        
        console.log("Particular Movie",this.results);

      });
      
  });  
  this.getCast();
      
  }

}
