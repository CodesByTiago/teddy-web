import { describe, it, expect } from 'vitest';
import { theme } from '@styles/theme';
import { Link } from '.';
import { render } from '@helpers/testUtils';

describe('Link component', () => {
  it('renders correctly with default styles', () => {
    const { getByText } = render(<Link to='/test'>Test Link</Link>);
    const linkElement = getByText('Test Link');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveStyle('text-decoration: none');
    expect(linkElement).toHaveStyle('color: #333');
    expect(linkElement).toHaveStyle('padding: 8px 16px');
    expect(linkElement).toHaveStyle('border-radius: 5px');
  });

  it('applies active class styles when active', () => {
    const { getByText } = render(
      <Link to='/test' className='active'>
        Active Link
      </Link>
    );
    const linkElement = getByText('Active Link');

    expect(linkElement).toHaveClass('active');
    expect(linkElement).toHaveStyle(`color: ${theme.font.colors.secondary}`);
    expect(linkElement).toHaveStyle('text-decoration: underline');
  });
});
