export const errorMessage = message => ({
  message: message || "Something went wrong",
  type: "danger"
});

export function pluralString(quantity, string, replacementString) {
  if (quantity > 1) {
    return ` ${replacementString || `${string}s`}`;
  }
  return ` ${string}`;
}
