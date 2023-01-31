import { act, render, screen } from '@testing-library/react';

import Main from '..';

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
        icon_url: "http://image.png",
        value: "Joke test"
    })
}))

describe('Main', () => {
    it('Should render the Joke', async () => {
        await act(async () => {
            render(<Main />)
        })

        expect(screen.getByText("Joke test")).toBeInTheDocument();
    })
})
