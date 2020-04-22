import React from 'react';
import {
  render, RenderResult, wait, act,
} from '@testing-library/react';
import App from '../App';

let onCb: ((data: any) => void) | null = null;
function mockRegisterDataCb(cb: (data: any) => void) {
  onCb = cb;
}
let onConnect: ((data: any) => void) | null = null;
function mockRegisterConnectCb(cb: (data: any) => void) {
  onConnect = cb;
}
jest.mock('../socket', () => ({
  __esModule: true,
  default: {
    on: jest.fn((event: string, cb: (data: any) => void) => {
      if (event === 'CONNECT') {
        mockRegisterConnectCb(cb);
      } else if (event === 'DATA') {
        mockRegisterDataCb(cb);
      }
    }),
  },
}));

describe('App', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<App />);
  });

  test('matches snapshot', () => {
    const { container } = wrapper;
    expect(container).toMatchSnapshot();
  });
  test('displays API key', async () => {
    const { queryByText } = wrapper;
    act(() => {
      if (onConnect) {
        onConnect('FAKE_KEY');
      }
    });
    await wait(() => expect(queryByText('FAKE_KEY')).not.toBe(null));
  });
  test('registers socket connect', async () => {
    const { queryByText } = wrapper;
    act(() => {
      if (onCb) {
        onCb('MESSAGE');
      }
    });
    await wait(() => expect(queryByText('MESSAGE')).not.toBe(null));
  });
});
