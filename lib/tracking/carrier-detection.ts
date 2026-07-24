const CARRIER_PATTERNS: Array<{ carrier: string; pattern: RegExp }> = [
  // SpeedX Carriers
  { carrier: "speedx", pattern: /^SPX[0-9A-Z]{8,32}$/i },
  { carrier: "speedx", pattern: /^SPXSG[0-9A-Z]{6,28}$/i },
  { carrier: "speedx", pattern: /^SPXCN[0-9A-Z]{6,28}$/i },
  
  // DHL
  { carrier: "dhl", pattern: /^\d{10,11}$/i },
  { carrier: "dhl", pattern: /^[0-9]{13,13}$/i },
  { carrier: "dhl", pattern: /^1[0-9]{10}$/i },
  
  // UPS
  { carrier: "ups", pattern: /^1Z[A-Z0-9]{16}$/i },
  { carrier: "ups", pattern: /^[0-9]{9}([0-9]{2})?$/i },
  
  // FedEx
  { carrier: "fedex", pattern: /^[0-9]{12}([0-9]{2})?$/i },
  { carrier: "fedex", pattern: /^[0-9]{14}$/i },
  { carrier: "fedex", pattern: /^[0-9]{20}$/i },
  
  // DPD
  { carrier: "dpd", pattern: /^\d{11}(\d{2})?$/i },
  { carrier: "dpd", pattern: /^[0-9]{12}$/i },
  
  // GLS
  { carrier: "gls", pattern: /^\d{13}$/i },
  { carrier: "gls", pattern: /^[0-9]{13}$/i },
  
  // Hermes
  { carrier: "hermes", pattern: /^[0-9]{10}([0-9]{2})?$/i },
  { carrier: "hermes", pattern: /^[A-Z0-9]{16}$/i }
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
