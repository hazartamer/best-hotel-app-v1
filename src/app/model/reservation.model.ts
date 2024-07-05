export interface Reservation {
    id?: number; // Opsiyonel, backend'de oluşturulacak
    roomId: number;
    userId: number;
    startDate: string;
    endDate: string;
  }