import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  videoSource: String = 'src\assets\handrail-boardslide.mp4';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( data => {
      this.users = data
      console.log(this.users)
    })
  }

  firstClick(){
    this.data.firstClick();
  }

  @ViewChild('videoPlayer',{static: false}) videoplayer: ElementRef;

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
}
