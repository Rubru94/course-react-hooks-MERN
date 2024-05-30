import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
import React from 'react';

describe('FirstApp Component', () => {
  // Unnecessary in development. It is useful when the component does not change.
  xit('should match with snapshot', () => {
    const title = 'Helloooo';

    const { container } = render(<FirstApp title={title} num={0} />);

    expect(container).toMatchSnapshot();
  });

  it('should show title into h2 tag', () => {
    const title = 'Helloooo';

    const { container, getByText } = render(<FirstApp title={title} num={0} />);

    // expect(getByText('Holaaaaa')).toBeTruthy(); // --> Not found in snapshot (template)
    expect(getByText(title)).toBeTruthy();

    // container --> DOM
    const h2 = container.querySelector('h2');
    expect(h2?.innerHTML).toContain(title);
  });

  it('should get title by data attribute', () => {
    const title = 'Helloooo';

    const { getByText, getByTestId } = render(<FirstApp title={title} num={0} />);

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  it('should show subtitle from props', () => {
    const title = 'Helloooo';
    const subtitle = 'My subtitle';

    // getAllByText --> return array --> We test for one or more subtitles.
    const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle} num={0} />);

    expect(getAllByText(subtitle).length).toBeGreaterThan(0);
  });
});
