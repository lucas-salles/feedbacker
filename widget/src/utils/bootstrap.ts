interface SetupPayload {
  onProduction: () => void;
  onDevelopment: () => void;
}

export function setup({ onProduction, onDevelopment }: SetupPayload) {
  if (process.env.NODE_ENV !== "prodction") {
    onDevelopment();
    return;
  }

  onProduction();
}
