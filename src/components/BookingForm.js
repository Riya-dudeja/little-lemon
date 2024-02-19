import { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';

export default function BookingForm(props){
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.submitForm(e);
  }

  const handleDateChange = (e) =>{
    // setDate(e.target.value);
    let stringDate = e.target.value;
    const date = new Date(stringDate);
    props.updateTimes(date);
    // setSelectedTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return(
  <section className="form">
    <Formik
      initialValues= {
          {name: "", email: "", date: "", time: "",guests: 1, occasion: "Birthday"}
      }
      validate={(values) => {
        const errors = {};
        if(!values.name){
          errors.name = "Name is Required."
        }
        if(!values.email){
          errors.name = "Email Required."
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ){
          errors.email = "Invalid email address";
        }
        if(!values.date){
          errors.date = "Choose date for reservation"
        }
        if(!values.time){
          errors.time = "Choose your desired time slot"
        }
        if(values.guests < 0 ){
          errors.guests = "Minimum 1 guest is required"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({isSubmitting}) => (
        <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            Book your desired table
          </legend>
            <label htmlFor="name"> Name </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
              required
              aria-required
            />
            <ErrorMessage
              name="name"
              component="section"
              className="errors"
            />
            <label htmlFor="email"> Email </label>
            <Field
              type="email"
              id="email"
              name="email"
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              required
              aria-required
            />
            <ErrorMessage
              name="email"
              component="section"
              className="errors"
            />
            <label htmlFor="res-date">
              Choose date
            </label>
            <Field
              type="date"
              id="res-date"
              name="date"
              required
              aria-required
              // onChange={handleDateChange}
            />
            <ErrorMessage
              name="date"
              component="section"
              className="errors"
            />
            <label htmlFor="res-time">
              Choose desired time slot
            </label>
            <select
              id="res-time"
              name="time"
              required
              aria-required
            >
              {props.availableTimes.map(
                (times) => <option>{times}</option>)
              }
            </select>
            <label htmlFor="guests">
              Number of guests
            </label>
            <Field
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              // onChange={(e) => setGuests(parseInt(e.target.value))}
            />
            <ErrorMessage
              name="guests"
              component="section"
              className="errors"
            />
            <label htmlFor="occasion">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              // onChange={e => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Kitty Party</option>
              <option>Others</option>
            </select>
            <input
              type="submit"
              aria-label="Submit reservation form"
              value="Make Your reservation"
              disabled={isSubmitting}
            />
        </fieldset>
      </Form>
      )

      }
    </Formik>
  </section>
  )
}