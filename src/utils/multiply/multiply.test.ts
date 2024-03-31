import { multiply } from "./multiply.util";


test('multiply', () => {
  const res = multiply(1, 2);

  expect(res).toBe(2);
});
