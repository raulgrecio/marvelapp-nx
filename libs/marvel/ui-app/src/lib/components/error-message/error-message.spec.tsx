import * as React from 'react';
import { render } from '@testing-library/react-native';

import ErrorScreen from './error-message';

describe('ErrorScreen', () => {
  it('should render successfully', () => {
    const { container } = render(
      <ErrorScreen message={'Oops! Something went wrong. Please try again.'} />
    );
    expect(container).toBeTruthy();
  });
});
