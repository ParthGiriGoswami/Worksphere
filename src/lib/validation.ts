
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function hasMinLength(
  value: string,
  minLength: number
): boolean {
  return value.trim().length >= minLength;
}
