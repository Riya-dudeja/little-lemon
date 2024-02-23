import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Email is required.").email("Please enter a valid email address"),
  date: Yup.string().required("Choose date for reservation"),
  time: Yup.string().required("Choose desired time slot"),
  guests: Yup.number().min(1).max(10, "Can't exceed 10 guests"),
})

export default function BookingForm(props){
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.submitForm(e);
  }

  const handleDateChange = (e) =>{
    const date = new Date(e.target.value);
    props.updateTimes(date);
    // (props.availableTimes.map((times) => <option>{times}</option>));
  }

  return(
  <section className="form">
    <Formik
      initialValues= {
          {name: "", email: "", date: "", time: "",guests: 1, occasion: "Birthday"}
      }
      validationSchema={validateSchema}
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
              aria-label= "name"
              placeholder="Enter your name here"
              required
              aria-required
              data-testid="name"
            />
            <ErrorMessage
              name="name"
              component="section"
              className="errors"
              role="alert"
            />
            <label htmlFor="email"> Email </label>
            <Field
              type="email"
              id="email"
              name="email"
              aria-label= "Email address"
              placeholder="Enter your email here"
              required
              aria-required
              data-testid="email"
            />
            <ErrorMessage
              name="email"
              component="section"
              className="errors"
              role="alert"
            />
            <label htmlFor="res-date">
              Choose date
            </label>
            <Field
              type="date"
              id="res-date"
              name="date"
              // onChange={handleDateChange}
              required
              aria-required
            />
            <ErrorMessage
              name="date"
              component="section"
              className="errors"
              role="alert"
            />
            <label htmlFor="res-time">
              Choose desired time slot
            </label>
            <Field
              as="select"
              name="time"
              required
              aria-required
              data-testid="time-slot"
            >
              {props.availableTimes.map(
                (times) => <option value={times} key={times}>{times}</option>)
              }
            </Field>
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
              data-testid="guests"
            />
            <ErrorMessage
              name="guests"
              component="section"
              className="errors"
              role="alert"
            />
            <label htmlFor="occasion">
              Occasion
            </label>
            <Field
              as="select"
              id="occasion"
              name="occasion"
              data-testid="occasion"
            >
              <option data-testid="birthday">Birthday</option>
              <option data-testid="anniversary">Anniversary</option>
              <option>Kitty Party</option>
              <option>Others</option>
            </Field>
            <input
              type="submit"
              data-testid="submit"
              aria-label="Submit reservation form"
              value="Make Your Reservation"
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