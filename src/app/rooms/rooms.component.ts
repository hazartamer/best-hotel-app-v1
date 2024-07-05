import { Component, OnInit } from '@angular/core';
import { ListRoomResponse } from '../model/listroomresponse.model';
import { HotelService } from '../services/hotel.service';
import { SharedModule } from '../shared/shared.module';
import { ReservationsService } from '../services/reservations.service';
import { Reservation } from '../model/reservation.model';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  rooms: ListRoomResponse[] = [];
  reservation: Reservation = {
    roomId: 0,
    userId: 0, // Başlangıçta 0, gerçek ID token'dan alınacak
    startDate: '',
    endDate: ''
  };

  showReservationForm = false;
  selectedRoomId: number | null = null;

  constructor(private HotelService:HotelService,
    private ReservationsService:ReservationsService
  )
  {}

  ngOnInit(): void {
      this.findAllRooms();
  }

  private findAllRooms():void{
    this.HotelService.getAllRooms().subscribe(
      (data:ListRoomResponse[]) => {
        this.rooms=data;
      },
      error =>{
        console.error('Error fetching rooms:',error);
      }
    )
  }
  toggleReservationForm(roomId: number): void {
    if (this.selectedRoomId === roomId) {
      this.showReservationForm = !this.showReservationForm;
    } else {
      this.showReservationForm = true;
      this.selectedRoomId = roomId;
    }
  }

  makeReservation(roomId: number): void {
    this.reservation.roomId = roomId;
    this.ReservationsService.addReservation(this.reservation).subscribe(
      (response) => {
        alert('Reservation made successfully');
      },
      error => {
        console.error('Error making reservation:', error);
      }
    );
  }
}
