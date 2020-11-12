import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../seguridad/user';
import { AuthenticationService } from '../services/serviciosRocha/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {




  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x );
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    var udateTime = function () {
      var Hours: string;
      var Minutes: string;
      var Seconds: string;
      var Day: string;
      var Month: string;

      // tslint:disable-next-line:prefer-const
      let currentDate = new Date(),
        // tslint:disable-next-line:prefer-const
        hours = currentDate.getHours(),
        // tslint:disable-next-line:prefer-const
        minutes = currentDate.getMinutes(),
        // tslint:disable-next-line:prefer-const
        seconds = currentDate.getSeconds(),
        // tslint:disable-next-line:prefer-const
        day = currentDate.getDate(),
        // tslint:disable-next-line:prefer-const
        month = currentDate.getMonth() + 1,
        // tslint:disable-next-line:prefer-const
        year = currentDate.getFullYear();

      Day = (day < 10) ? "0" + day + "/" : day.toString() + "/";
      Month = (month < 10) ? "0" + month + "/" : month.toString() + "/";
      document.getElementById('day').textContent = Day;
      document.getElementById('month').textContent = Month;
      document.getElementById('year').textContent = year.toString();
      Hours = (hours < 10) ? "0" + hours + ":" : hours.toString() + ":";
      Minutes = (minutes < 10) ? "0" + minutes + ":" : minutes.toString() + ":";
      Seconds = (seconds < 10) ? "0" + seconds : seconds.toString();
      document.getElementById('hours').textContent = Hours;
      document.getElementById('minutes').textContent = Minutes;
      document.getElementById('seconds').textContent = Seconds;
    };
    udateTime();
    setInterval(udateTime, 1000);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
