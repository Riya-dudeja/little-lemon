import { useReducer } from 'react';
import BookingForm from './BookingForm.js';
import { fetchAPI, submitAPI} from "./bookingAPI.js";
import { useNavigate } from 'react-router-dom';

export default function BookingPage(){
  const navigate = useNavigate();
  function updateTimes(date) {
    return fetchAPI(date);
  }
  const initializeTime = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTime);
  function submitForm(formData){
    if(submitAPI(formData)){
      navigate("/confirmed")
    }
  }
    return (
      <section className='reserve-table'>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm} />
      </section>
    )
}