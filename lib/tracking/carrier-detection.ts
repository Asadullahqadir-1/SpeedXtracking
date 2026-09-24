const CARRIER_PATTERNS: Array<{ carrier: string; pattern: RegExp }> = [
  // SpeedX / SPX formats (Shein, Temu, cross-border)
  { carrier: "speedx", pattern: /^SPXCN[0-9A-Z]{6,32}$/i },
  { carrier: "speedx", pattern: /^SPXSG[0-9A-Z]{6,32}$/i },
  { carrier: "speedx", pattern: /^SPX[0-9A-Z]{8,32}$/i },
  { carrier: "speedx", pattern: /^SX[0-9A-Z]{8,28}$/i },

  // DHL
  { carrier: "dhl", pattern: /^\d{10,11}$/ },
  { carrier: "dhl", pattern: /^JD\d{16,22}$/i },

  // UPS
  { carrier: "ups", pattern: /^1Z[A-Z0-9]{16}$/i },

  // FedEx
  { carrier: "fedex", pattern: /^\d{12}$/ },
  { carrier: "fedex", pattern: /^\d{15}$/ },
  { carrier: "fedex", pattern: /^\d{20,22}$/ },

  // DPD
  { carrier: "dpd", pattern: /^\d{14}$/ },

  // GLS
  { carrier: "gls", pattern: /^\d{11,14}$/ },

  // Hermes / Evri
  { carrier: "hermes", pattern: /^[A-Z0-9]{16}$/i },
  { carrier: "hermes", pattern: /^\d{16}$/ }
];

const KNOWN_CARRIERS = new Set(["speedx", "dhl", "ups", "fedex", "dpd", "gls", "hermes"]);

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

export function isKnownCarrier(carrier: string): boolean {
  return KNOWN_CARRIERS.has(carrier.trim().toLowerCase());
}

/** When the user picks SpeedX, accept common marketplace number shapes. */
export function looksLikeSpeedXNumber(trackingNumber: string): boolean {
  const normalized = trackingNumber.trim().toUpperCase();
  if (!normalized || isObviouslyDummy(normalized)) return false;
  if (/^SPX(CN|SG)?[0-9A-Z]{6,32}$/i.test(normalized)) return true;
  if (/^SX[0-9A-Z]{8,28}$/i.test(normalized)) return true;
  // Marketplace numeric / alphanumeric IDs often used with SpeedX last-mile
  if (/^[0-9]{10,22}$/.test(normalized)) return true;
  if (/^[A-Z0-9]{12,32}$/i.test(normalized)) return true;
  return false;
}
