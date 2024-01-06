import { render } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Typography variant="h1">Lorem ipsum dolor sit emet</Typography>,
    );

    expect(baseElement).toBeTruthy();
  });
});
