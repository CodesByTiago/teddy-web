import { render, screen } from '@helpers/testUtils';
import Home from '.';

describe('Home', () => {
  it('should render home page title', () => {
    render(<Home />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
