import { createTranslationObject } from "../utils/create-translation-object";

export const TH_TH = createTranslationObject("th-TH", {
  // User related errors
  USER_NOT_FOUND: "ไม่พบผู้ใช้",
  FAILED_TO_CREATE_USER: "สร้างผู้ใช้ไม่สำเร็จ",
  FAILED_TO_UPDATE_USER: "อัปเดตผู้ใช้ไม่สำเร็จ",
  USER_ALREADY_EXISTS: "มีผู้ใช้นี้อยู่แล้ว",
  USER_EMAIL_NOT_FOUND: "ไม่พบอีเมลของผู้ใช้",
  USER_ALREADY_HAS_PASSWORD:
    "ผู้ใช้มีรหัสผ่านแล้ว หากต้องการลบบัญชี โปรดระบุรหัสผ่านดังกล่าว",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "มีผู้ใช้นี้อยู่แล้ว โปรดใช้อีเมลอื่น",
  INVALID_USER: "ผู้ใช้ไม่ถูกต้อง",

  // Session related errors
  FAILED_TO_CREATE_SESSION: "สร้างเซสชันไม่สำเร็จ",
  FAILED_TO_GET_SESSION: "ดึงเซสชันไม่สำเร็จ",
  SESSION_EXPIRED: "เซสชันหมดอายุแล้ว โปรดเข้าสู่ระบบอีกครั้งเพื่อดำเนินการต่อ",
  SESSION_NOT_FRESH:
    "เซสชันไม่ใหม่พอสำหรับการดำเนินการนี้ โปรดเข้าสู่ระบบอีกครั้ง",

  // Authentication errors
  INVALID_PASSWORD: "รหัสผ่านไม่ถูกต้อง",
  INVALID_EMAIL: "อีเมลไม่ถูกต้อง",
  INVALID_EMAIL_OR_PASSWORD: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
  INVALID_TOKEN: "โทเค็นไม่ถูกต้อง",
  TOKEN_EXPIRED: "โทเค็นหมดอายุแล้ว",
  EMAIL_NOT_VERIFIED: "ยังไม่ได้ยืนยันอีเมล",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "ไม่พบบัญชีข้อมูลรับรอง",

  // Password related errors
  PASSWORD_TOO_SHORT: "รหัสผ่านสั้นเกินไป",
  PASSWORD_TOO_LONG: "รหัสผ่านยาวเกินไป",
  PASSWORD_ALREADY_SET: "ตั้งรหัสผ่านแล้ว",

  // Social auth errors
  SOCIAL_ACCOUNT_ALREADY_LINKED: "เชื่อมโยงบัญชีโซเชียลไว้แล้ว",
  PROVIDER_NOT_FOUND: "ไม่พบผู้ให้บริการ",
  ID_TOKEN_NOT_SUPPORTED: "ไม่รองรับ id_token",
  FAILED_TO_GET_USER_INFO: "ดึงข้อมูลผู้ใช้ไม่สำเร็จ",
  LINKED_ACCOUNT_ALREADY_EXISTS: "มีบัญชีที่เชื่อมโยงไว้แล้ว",

  // Account management errors
  EMAIL_CAN_NOT_BE_UPDATED: "ไม่สามารถอัปเดตอีเมลได้",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "ไม่สามารถยกเลิกการเชื่อมบัญชีสุดท้ายได้",
  ACCOUNT_NOT_FOUND: "ไม่พบบัญชี",

  // Email verification
  VERIFICATION_EMAIL_NOT_ENABLED: "ไม่ได้เปิดใช้งานอีเมลยืนยัน",
  EMAIL_ALREADY_VERIFIED: "ยืนยันอีเมลแล้ว",
  EMAIL_MISMATCH: "อีเมลไม่ตรงกัน",
  FAILED_TO_CREATE_VERIFICATION: "สร้างการยืนยันไม่สำเร็จ",

  // Security / origin / redirect
  CROSS_SITE_NAVIGATION_LOGIN_BLOCKED: "บล็อกการเข้าสู่ระบบจากการนำทางข้ามไซต์",
  INVALID_ORIGIN: "แหล่งที่มาไม่ถูกต้อง",
  INVALID_CALLBACK_URL: "URL เรียกกลับไม่ถูกต้อง",
  INVALID_REDIRECT_URL: "URL เปลี่ยนเส้นทางไม่ถูกต้อง",
  INVALID_ERROR_CALLBACK_URL: "URL เรียกกลับเมื่อเกิดข้อผิดพลาดไม่ถูกต้อง",
  INVALID_NEW_USER_CALLBACK_URL: "URL เรียกกลับสำหรับผู้ใช้ใหม่ไม่ถูกต้อง",
  MISSING_OR_NULL_ORIGIN: "ไม่มีแหล่งที่มาหรือเป็นค่าว่าง",
  CALLBACK_URL_REQUIRED: "จำเป็นต้องระบุ URL เรียกกลับ",

  // Validation / API shape
  FIELD_NOT_ALLOWED: "ไม่อนุญาตให้ใช้ฟิลด์นี้",
  ASYNC_VALIDATION_NOT_SUPPORTED: "ไม่รองรับการตรวจสอบแบบอะซิงโครนัส",
  VALIDATION_ERROR: "ข้อผิดพลาดการตรวจสอบความถูกต้องของข้อมูล",
  MISSING_FIELD: "ขาดฟิลด์ที่จำเป็น",
  BODY_MUST_BE_AN_OBJECT: "เนื้อหาคำขอต้องเป็นอ็อบเจ็กต์",
  METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
    "ไม่อนุญาตวิธีการนี้เมื่อต้องเลื่อนการสร้างเซสชัน",
});

export const LOCALES = {
  "th-TH": TH_TH,
} as const;
