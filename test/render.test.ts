import React from 'react';
import { render, screen } from '@testing-library/react';
import page from '../src/app/page';

describe('page Component', () => {
  it('renders Header, GridProducts, and Footer components', () => {
    // Renderiza el componente Home
    render(<page />);

    // Verifica que el componente Header se renderiza
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Verifica que el componente GridProducts se renderiza
    expect(screen.getByTestId('grid-products')).toBeInTheDocument();

    // Verifica que el componente Footer se renderiza
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
