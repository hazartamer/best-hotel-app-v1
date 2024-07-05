import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListRoomResponse } from '../model/listroomresponse.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:8080/rooms/allRooms'; // API base URL

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<ListRoomResponse[]> {
    return this.http.get<ListRoomResponse[]>(`${this.apiUrl}`);
  }
}