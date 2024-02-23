import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import BookingPage from './components/BookingPage.js';
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const TestWrap = () => {
  return (
    <BrowserRouter>
        <BookingPage />
    </BrowserRouter>
  )
}

const time = 10000

beforeAll(() => jest.setTimeout(time))

test('Renders the BookingForm heading', () => {
    render(<TestWrap />);
    const headingElement = screen.getByText("Book your desired table");
    expect(headingElement).toBeInTheDocument();
})

test('shows selected occasion when selected', async() => {
  render(<TestWrap />)
  const occasion = await screen.findByTestId('birthday')
  expect(occasion).toBeInTheDocument()
  fireEvent.click(occasion)
  expect(screen.getByDisplayValue('Birthday')).toBeInTheDocument()
})

test('displays notice to enter time slot when absent', async() => {
  render(<TestWrap />)
  const confirm = screen.getByTestId('submit')
  fireEvent.click(confirm)
  const expected = await screen.findByText('Choose desired time slot')
  expect(expected).toBeInTheDocument()
})

test('name field is required', async() => {
  render(<TestWrap />)
  const field = await screen.findByTestId('name')
  expect(field).toHaveAttribute('required')
})

test('email field is required', async() => {
  render(<TestWrap />)
  const field = await screen.findByTestId('email')
  expect(field).toHaveAttribute('required')
})

test('time slot field is required', async() => {
  render(<TestWrap />)
  const field = await screen.findByTestId('time-slot')
  expect(field).toHaveAttribute('required')
})