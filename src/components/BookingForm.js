import { useState } from "react";

export default function BookingForm(props){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(props.availableTimes.map((times) => <option>{times}</option>));
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.submitForm(e);
  }

  const handleDateChange = (e) =>{
    setDate(e.target.value);
    let stringDate = e.target.value;
    const date = new Date(stringDate);
    props.updateTimes(date);
    setSelectedTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return(
  <section className="form">
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Book your desired table</legend>
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name here"
          />
          <label htmlFor="email">
            Email
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
            onChange={handleDateChange}
          />
          <label htmlFor="res-time">
            Choose desired time slot
          </label>
          <select
            id="res-time" required>
            { /* value={selectedTime}
             onChange={e => setSelectedTime(e.target.value)} */ }
            {selectedTime}
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