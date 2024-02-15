import { useReducer } from 'react';
import BookingForm from './BookingForm.js';
import { fetchAPI } from "./bookingAPI.js";

export default function BookingPage(){
  function updateTimes(date) {
    return fetchAPI(date);
  }
  const initialTime = (fetchAPI(new Date()));
  const [availableTimes, dispatch] = useReducer(updateTimes,initialTime);
    return (
      <section className='reserve-table'>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
      </section>
    )
}