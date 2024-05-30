import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
import React from 'react';

describe('CounterApp Component', () => {
  const initialValue = 999;
  it('should match with snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);

    expect(container).toMatchSnapshot();
  });

  it('should show initialValue from props', () => {
    render(<CounterApp value={initialValue} />);

    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${initialValue}`);
    expect(screen.getAllByText(initialValue).length).toBeGreaterThan(0);
  });

  it('should increase counter with button "+1"', () => {
    render(<CounterApp value={initialValue} />);

    // fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByTestId('+1'));

    // screen.debug();
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  it('should decrease counter with button "-1"', () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText('-1'));

    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  it('should reset counter with button "Reset"', () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
