import { expect, test, vi } from 'vitest';
import NotFound, { NOT_FOUND_MESSAGE } from './NotFound.tsx';
import { render, screen } from '@testing-library/react';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => vi.fn(),
    };
});

test('Renders 404 correctly', async () => {
    await render(<NotFound/>);
    const caption = await screen.queryByText(NOT_FOUND_MESSAGE);
    expect(caption).not.toBeNull();
});
