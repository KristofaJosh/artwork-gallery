import { fetchData, BASE_URL } from './fetchData'; // Adjust this import path

global.fetch = jest.fn();

declare let fetch: jest.MockedFunction<typeof global.fetch>;

describe('fetchData function', () => {
  test('fetches data successfully from an API', async () => {
    const mockJson = { data: 'test' };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockJson,
    } as Response);

    const url = '/test';
    const result = await fetchData(url);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}${url}`, undefined);
    expect(result).toEqual(mockJson);
  });

  test('throws an error when the response is not ok', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    } as Response);

    await expect(fetchData('/test')).rejects.toThrow(
      'Network response was not ok',
    );
  });
});
