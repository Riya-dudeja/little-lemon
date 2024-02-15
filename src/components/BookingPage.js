import { useReducer } from 'react';
import BookingForm from './BookingForm.js';
import { fetchAPI, submitAPI} from "./bookingAPI.js";
import { useNavigate } from 'react-router-dom';

export default function BookingPage(){
  const [availableTimes, dispatch] = useReducer(updateTimes,initialTime);

  function updateTimes(date) {
    return {availableTimes: (fetchAPI(new Date()))};
  }
  const initialTime = {availableTimes: (fetchAPI(new Date()))};

  const navigate = useNavigate();
  function submitForm(formData){
    if(submitAPI(formData)){
      navigate("/confirmed")
    }
  }
    return (
      <section className='reserve-table'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </section>
    )
}