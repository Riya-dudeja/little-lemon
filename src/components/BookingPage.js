import { useReducer } from 'react';
import BookingForm from './BookingForm.js';
import { fetchAPI, submitAPI} from "./bookingAPI.js";
import { useNavigate } from 'react-router-dom';

function updateTimes(slots,date) {
  return{
    ...slots,
    slots: fetchAPI(date)
  }
}
const initializeTime = {
  slots: fetchAPI(new Date())
};

export default function BookingPage(){
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTime);
  const navigate = useNavigate();
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