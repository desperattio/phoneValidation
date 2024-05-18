import validatePhone from "..";

test('russian number starts with 8', () => {
  const phone = '8 (927) 000-00-00';
  const phoneAfterValidation = '+79270000000';
  expect(validatePhone(phone)).toBe(phoneAfterValidation);
});

test('russian number starts with +7', () => {
  const phone = '+7 960 000 00 00';
  const phoneAfterValidation = '+79600000000';
  expect(validatePhone(phone)).toBe(phoneAfterValidation);
});

test('foreign number starts with +', () => {
  const phone = '+86 000 000 0000';
  const phoneAfterValidation = '+860000000000';
  expect(validatePhone(phone)).toBe(phoneAfterValidation);
});

test('foreign number without +', () => {
  const phone = '86(000) 000-00-00';
  const phoneAfterValidation = '+860000000000';
  expect(validatePhone(phone)).toBe(phoneAfterValidation);
});
