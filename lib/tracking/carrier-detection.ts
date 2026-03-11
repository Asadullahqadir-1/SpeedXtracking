const CARRIER_PATTERNS: Array<{ carrier: string; pattern: RegExp }> = [
  { carrier: "speedx", pattern: /^SPX[0-9A-Z]{8,32}$/i },
  { carrier: "speedx", pattern: /^SPXSG[0-9A-Z]{6,28}$/i },
  { carrier: "speedx", pattern: /^SPXCN[0-9A-Z]{6,28}$/i }
];

function isObviouslyDummy(trackingNumber: string): boolean {
  if (/^(.)\1{5,}$/i.test(trackingNumber)) {
    return true;
  }

  if (/^(12345|123456|1234567|12345678|123456789|000000|111111)$/i.test(trackingNumber)) {
    return true;
  }

  return false;
}

export function detectCarrier(trackingNumber: string): string | null {
  const normalized = trackingNumber.trim().toUpperCase();

  if (!normalized || isObviouslyDummy(normalized)) {
    return null;
  }

  for (const item of CARRIER_PATTERNS) {
    if (item.pattern.test(normalized)) {
      return item.carrier;
    }
  }

  return null;
}
