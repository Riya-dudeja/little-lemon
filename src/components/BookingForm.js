import { useState, useReducer } from "react";

export default function BookingForm(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const availableTimes = ['17:00','18:00','19:00','20:00','21:00','22:00'];
  // const [state, dispatch] = useReducer(updateTimes, initialTime);

  //  const initialTime = () => {availableTimes};
  // const updateTimes = (availableTimes, action) => {
  //   // if (action.type === '17:00') return {selectedTime: '17:00'};
  //   // if (action.type === '18:00') return {selectedTime: '18:00'};
  //   // if (action.type === '19:00') return {selectedTime: '19:00'};
  //   // if (action.type === '20:00') return {selectedTime: '20:00'};
  //   // if (action.type === '21:00') return {selectedTime: '21:00'};
  //   // if (action.type === '22:00') return {selectedTime: '22:00'};
  //   // return availableTimes;
  // }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return(
  <section className="form">
    <form
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Book your desired table</legend>
          <label htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name here"
          />
          <label htmlFor="email">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
          />
          <label htmlFor="res-date">
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <label htmlFor="res-time">
            Choose desired time slot
          </label>
          <select
            id="res-time"
            value={selectedTime}
            onChange={e => setSelectedTime(e.target.value)}
          >
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>))}
          </select>
          <label htmlFor="guests">
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
          <label htmlFor="occasion">
            Occasion
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={e => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Wedding Reception</option>
            <option>Others</option>
          </select>
          <input
            type="submit"
            value="Make Your reservation"
            disabled={(!date && !selectedTime)}
          />
      </fieldset>
    </form>
  </section>
  )
}