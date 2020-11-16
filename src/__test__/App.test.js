import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

test('Results rendered after submitting', async () => {
  render(<App />);
  // screen.debug();
  // const method = screen.getByLabelText('GET')
  // fireEvent.change(method, { target: { value: "GET" } });
  // const url = screen.getByTestId('url')
  // fireEvent.change(url, { target: {url:{ value: 'https://jsonplaceholder.typicode.com/users' }} })
  // console.log(method.value)

  const button = screen.getByTestId('button');
  fireEvent.submit(button, { target: { elements: { url: { value: 'https://jsonplaceholder.typicode.com/users' }, method: { value: 'GET' } } } })

  const results = await waitFor(() => screen.getByTestId('count'));
  expect(results).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   // screen.debug();
//   const linkElement = screen.getByText(/Get Star Wars People/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('should render the list', () => {
//   const people = [{ name: 'Luke Skywalker', url: 'https://' }];

//   render(<People people={people} />);
//   const items = screen.getAllByRole('listitem');
//   expect(items).toHaveLength(1);
// });