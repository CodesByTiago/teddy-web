import { render, screen } from '../../helpers/test-utils';
import Login from '.';

describe('Home', () => {
  it('should render home page title', () => {
    render(<Login />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
