import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'POSTERING';
  screenHeight: any;
  screenWidth: any;
  isHandset: boolean;

  @ViewChild('drawer', {static: false}) public drawer: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches), shareReplay()
  );

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit() {
    this.detectScreenSize();

    this.isHandset$.subscribe(result => {
      this.isHandset = result;
    });
  }

  @HostListener('window:resize', [])
  detectScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
