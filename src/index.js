export default function validatePhone(phone) {
  const phoneNoSpacesAndSymbols = phone.replace(/(\s|\(|\)|-)/g, "");
  const phoneBody = phoneNoSpacesAndSymbols.slice(-10);
  let firstDigits = phoneNoSpacesAndSymbols.slice(0, -10);
  if (firstDigits === '8') {
    firstDigits = '+7';
  } else if (firstDigits.length >= 2 && !(/\+/.test(firstDigits))) {
    firstDigits = '+' + firstDigits;
  }
  return firstDigits + phoneBody;
}