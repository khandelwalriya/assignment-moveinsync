import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = 'https://devices.moveinsync.com:9443/shuttle-service/dashboard/bookings?buid=preprod1-Test1&routeStartTimeMin=1547188898997&routeEndTimeMin=1547200263504&routeStartTimeMax=1547200263504&routeEndTimeMax=1547200263504';
  
  getData() {
  	return this.http.get(this.url);
	}
}
