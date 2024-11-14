import { expect, it } from 'vitest';
import { render } from '@helpers/testUtils';
import { Col, Container } from '.';

describe('Styled Components Grid', () => {
  it('should render Container with fluid width when fluid is true', () => {
    const { container } = render(<Container $fluid />);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle('max-width: 100%');
  });

  it('should render Container with default max-width when fluid is false', () => {
    const { container } = render(<Container />);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle('max-width: 1140px');
  });

  it('should render Col with correct flex-basis for $col prop', () => {
    const { container } = render(<Col $col={6} />);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle('flex: 0 0 50%');
    expect(div).toHaveStyle('max-width: 50%');
  });

  it('should render Col with correct flex-basis for $xs prop on small screens', () => {
    const { container } = render(<Col $xs={6} />);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle('width: 100%');
  });

  it('should render Col with correct flex-basis for $sm prop on medium screens', () => {
    const { container } = render(<Col $sm={6} />);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle('width: 100%');
  });

  it('should render Col with correct flex-basis for $md prop on large screens', () => {
    const { container } = render(<Col $md={6} />);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle('width: 100%');
  });

  it('should render Col with correct flex-basis for $lg prop on xlarge screens', () => {
    const { container } = render(<Col $lg={6} />);
    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle('width: 100%');
  });
});
