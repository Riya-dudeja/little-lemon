import { useReducer } from 'react';
import BookingForm from './BookingForm.js';
import Header from './Header.js';
export default function BookingPage(){
  const reservationSlots = ['17:00','18:00','19:00','20:00','21:00','22:00'];
  const initializeTimes = (() => reservationSlots);
  const updateTimes = (availableTimes, action) => {
    if (action.type === '17:00') return {availableTimes: '17:00'};
    if (action.type === '18:00') return {availableTimes: '18:00'};
    if (action.type === '19:00') return {availableTimes: '19:00'};
    if (action.type === '20:00') return {availableTimes: '20:00'};
    if (action.type === '21:00') return {availableTimes: '21:00'};
    if (action.type === '22:00') return {availableTimes: '22:00'};
    return availableTimes;
  }
  const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);
    return (
      <section className='reserve-table'>
      <BookingForm/>
      </section>
    )
}