import '@testing-library/jest-dom';
import { server } from './mocks/server';
require('jest-localstorage-mock');

const originalClipboard = { ...global.navigator.clipboard };

beforeAll(() => server.listen());
beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
  localStorage.setItem.mockClear();

  let clipboardData = '';

  const mockClipboardAPI = {
    writeText: jest.fn((data) => { clipboardData = data }),
    readText: jest.fn(() => { return clipboardData }),
  };
  
  global.navigator.clipboard = mockClipboardAPI;
});
afterEach(() => {
  server.resetHandlers();
  global.navigator.clipboard = originalClipboard;
});
afterAll(() => server.close());