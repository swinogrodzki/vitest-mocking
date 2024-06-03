import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home, { DEMO_MESSAGE } from './Home.tsx';

test('Renders Home correctly', async () => {
    await render(<Home/>);
    const caption = await screen.queryByText(DEMO_MESSAGE);
    expect(caption).not.toBeNull();
});
