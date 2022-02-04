import Button from './Button';
import { render, screen } from '@testing-library/react';


test('Button', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByRole('button', { name: /hello/i })).toBeInTheDocument();
});