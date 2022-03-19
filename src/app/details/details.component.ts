import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  results: any = [];
  credits : any = [];
  video : any = [];
  videoURL = "https://www.youtube.com/watch?v="
  basicUrl = 'https://image.tmdb.org/t/p/original/';
  id: Number = 0;
  constructor(private homeData : HomeDataService,private router : ActivatedRoute) { }
  
  getCredits = () => {
    this.homeData.Moviecredits(this.id)
    .subscribe((response : any) => {
      this.credits = response['cast'];
      console.log(this.credits);
      
    })
  }

  getVideo = () => {
    this.homeData.getMovieVideo(this.id)
    .subscribe((response : any) => {
      this.video = response['results'];
      console.log(this.video);
      
    })
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.homeData.movie(this.id)
      .subscribe((response : any) => {
        this.results = response;
        console.log("Particular Movie",this.results);
      });
      
  });  
  
  this.getCredits();
  this.getVideo();

  }

}
