import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
  name: Yup.string().required("* Required"),
  email: Yup.string().required("* Email is required.").email(" Email address not valid!"),
  date: Yup.string().required("Please choose date for reservation"),
  time: Yup.string().required("Please specify desired time slot"),
  guests: Yup.number().min(1).max(10, "Can't exceed 10 guests"),
})

export default function BookingForm(props){
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.submitForm(e);
  }

  return(
  <section className="form">
    <Formik
      initialValues= {
          {name: "", email: "", date: "", time: props.availableTimes[0], guests: 1, occasion: "Birthday"}
      }
      validationSchema={validateSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({isSubmitting, isValid, setFieldValue}) => (
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
              onChange={e => {
                setFieldValue("date", e.target.value, true)
                const date = new Date(e.target.value);
                props.updateTimes(date);
                setFieldValue("time", props.availableTimes.slots.map(
                  (times) => <option value={times} key={times}>{times}</option>
                ), false
                );
              }
              }
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
              {props.availableTimes.slots.map(
                (time) => <option value={time} key={time}>{time}</option>)
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
            <Field
              type="submit"
              data-testid="submit"
              aria-label="Submit reservation form"
              value="Make Your Reservation"
              disabled={!isValid && isSubmitting}
            />
        </fieldset>
      </Form>
      )

      }
    </Formik>
  </section>
  )
}