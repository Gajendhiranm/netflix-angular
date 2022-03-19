import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  results: any = [];
  actionResults: any = [];
  romanticResults : any= [];
  comedyResults : any =[];
  horrorResults : any=[];
  documentaries : any= [];
  loader = true;
  image_url = `https://image.tmdb.org/t/p/original/`;
  basicUrl = 'https://image.tmdb.org/t/p/original/';
  constructor(private homeData: HomeDataService, private route: Router,private title : Title) {}

  gethomeData = () => {
    this.homeData.PopularData().subscribe((response) => {
      this.results = response.results;
      this.loader = false;
    });
  };

  getActionMovies = () => {
    this.homeData.trendingAllData().subscribe((response) => {
      this.actionResults = response.results;
    });
  };

  getRomanticMovies = () => {
     this.homeData.RomanticMovies().subscribe((response) => {
      this.romanticResults = response.results;
    });
  }

  getDocumentaries = () => {
    this.homeData.documentaries().subscribe((response) => {
     this.documentaries = response.results;
     console.log(this.documentaries);
     
   });
 }
  getHorrorMovies = () => {
    this.homeData.HorrorMovies().subscribe((response) => {
     this.horrorResults = response.results;
   });
 }

 getComedyMovies = () => {
  this.homeData.comedyMovies().subscribe((response) => {
   this.comedyResults = response.results;
   console.log(this.romanticResults);  
 });
}
  handleclick(direction: any) {
    console.log(direction);
  }

  getId(e: any) {
    this.homeData.detailMovie(e);
    this.route.navigate([e]);
  }
  getMovieId(e: any) {
    this.homeData.movie(e);
    this.route.navigate(['movies',e]);
  }

  ngOnInit(): void {
    this.title.setTitle('Home Page')
    this.gethomeData();
    this.getActionMovies();
    this.getRomanticMovies();
    this.getHorrorMovies();
    this.getComedyMovies();
    this.getDocumentaries();
  }
}
