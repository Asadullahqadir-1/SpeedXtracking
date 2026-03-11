const CARRIER_PATTERNS: Array<{ carrier: string; pattern: RegExp }> = [
  { carrier: "usps", pattern: /^(94|93|92|94|95)[0-9]{20,22}$/i },
  { carrier: "usps", pattern: /^[A-Z]{2}[0-9]{9}US$/i },
  { carrier: "ups", pattern: /^1Z[0-9A-Z]{16}$/i },
  { carrier: "fedex", pattern: /^[0-9]{12}$/ },
  { carrier: "fedex", pattern: /^[0-9]{15}$/ },
  { carrier: "fedex", pattern: /^[0-9]{20}$/ },
  { carrier: "dhl", pattern: /^[0-9]{10,11}$/ },
  { carrier: "dhl", pattern: /^JD[0-9]{14,18}$/i },
  { carrier: "speedx", pattern: /^SPX[0-9A-Z]{8,32}$/i }
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
