import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Renders the Full Name label', () => {
    render(<BookingForm />);
    const nameElement = screen.getByLabelText("Full Name");
    expect(nameElement).toBeInTheDocument();
})
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
