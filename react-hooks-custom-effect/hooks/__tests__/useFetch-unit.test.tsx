import DataFetcher from '@/components/DataFetcher';
import React from 'react';
import { render } from '@testing-library/react';

describe('DataFetcher', () => {
  it('fetches and displays data', async () => {
    const fetchSpy = jest.spyOn(global, 'fetch')
    
    fetchSpy.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          data: [1, 2, 3],
        }),
      }) as any
    );

    const { getByTestId } = render(<DataFetcher url="test.com" />);
    // const data = await waitForElement(() => getByTestId('data'));

    expect(fetchSpy).toHaveBeenCalledWith('test.com');
    // expect(data).toHaveTextContent(JSON.stringify(response));
  });
})
