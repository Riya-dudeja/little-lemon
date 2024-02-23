import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import BookingPage from '../pages/BookingPage.js';
import GlobalProvider from '../providers/GlobalProvider'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import React from 'react'

const TestWrap = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <BookingPage />
      </GlobalProvider>
    </BrowserRouter>
  )
}

const MemoryWrap = () => {
  return (
  <MemoryRouter>
    <GlobalProvider>
      <BookingPage />
    </GlobalProvider>
  </MemoryRouter>)
}

const time = 10000

beforeAll(() => jest.setTimeout(time))

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book your desired table");
    expect(headingElement).toBeInTheDocument();
})

test('shows selected time slot when selected', async() => {
  render(<BookingPage />)
  const button = await screen.findByTestId('7:30 PM')
  expect(button).toBeInTheDocument()
  fireEvent.click(button)
  expect(screen.getByDisplayValue('7:30 PM')).toBeInTheDocument()
})

test('displays notice to enter time slot when absent', async() => {
  render(<BookingPage />)
  const confirm = screen.getByText('Make your reservation')
  fireEvent.click(confirm)
  const expected = await screen.findByText('Choose desired time slot')
  expect(expected).toBeInTheDocument()
})

test('name field is required', async() => {
  render(<BookingPage />)
  const field = await screen.findByTestId('name')
  expect(field).toHaveAttribute('required')
})

test('email field is required', async() => {
  render(<BookingPage />)
  const field = await screen.findByTestId('email')
  expect(field).toHaveAttribute('required')
})

test('time slot field is required', async() => {
  render(<BookingPage />)
  const field = await screen.findByTestId('time-slot')
  expect(field).toHaveAttribute('required')
})