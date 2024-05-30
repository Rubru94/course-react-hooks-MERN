import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
import React from 'react';

describe('FirstApp Component - Improved test', () => {
  const title = 'Helloooo';
  const subtitle = 'My subtitle';

  it('should match with snapshot', () => {
    const { container } = render(<FirstApp title={title} num={0} />);

    expect(container).toMatchSnapshot();
  });

  it('should show message "Helloooo"', () => {
    render(<FirstApp title={title} num={0} />);

    // screen.debug(); --> print object
    expect(screen.getByText(title)).toBeTruthy();
  });

  it('should show title into h2 tag', () => {
    render(<FirstApp title={title} num={0} />);

    // getByRole --> get by html tag --> this case h2
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(title);
  });

  it('should show subtitle from props', () => {
    render(<FirstApp title={title} subtitle={subtitle} num={0} />);

    expect(screen.getAllByText(subtitle).length).toBeGreaterThan(0);
  });
});
