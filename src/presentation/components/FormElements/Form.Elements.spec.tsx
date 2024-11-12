import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, it, expect } from 'vitest';
import { Form, Input, Button } from '.';
import { theme } from '@styles/theme';

describe('Form Component', () => {
  it('should render the Form with correct styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Form role='form'>
          <Input placeholder='Test input' />
          <Button>Submit</Button>
        </Form>
      </ThemeProvider>
    );

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    });
  });

  it('should render the Input with correct styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder='Test input' />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText('Test input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle({
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    });
  });

  it('should render the Button with default styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Submit</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      width: '100%',
      backgroundColor: '#fff',
      color: theme.font.colors.secondary,
      border: `1px solid ${theme.font.colors.secondary}`,
      borderRadius: '4px',
      fontWeight: '700',
    });
  });

  it('should render the Button with inverted styles when $inverted is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button $inverted>Inverted Submit</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /inverted submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      color: '#fff',
      backgroundColor: theme.font.colors.secondary,
    });
  });
});
