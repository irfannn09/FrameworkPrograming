import { LogMidlewearMiddleware } from './log-midlewear.middleware.js';

describe('LogMidlewearMiddleware', () => {
  it('should be defined', () => {
    expect(new LogMidlewearMiddleware()).toBeDefined();
  });
});
