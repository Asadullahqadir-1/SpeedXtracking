export type TrackingErrorCode =
  | "invalid_input"
  | "rate_limited"
  | "provider_unavailable"
  | "provider_timeout"
  | "provider_auth_error"
  | "tracking_not_found"
  | "unexpected_error";

export class TrackingError extends Error {
  code: TrackingErrorCode;
  statusCode: number;

  constructor(code: TrackingErrorCode, message: string, statusCode = 500) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
  }
}
