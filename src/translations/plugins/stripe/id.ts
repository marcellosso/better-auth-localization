import type { StripeErrorCodesType } from "../../../types";

export const ID_ID = {
	UNAUTHORIZED: "Akses tidak diizinkan",
	INVALID_REQUEST_BODY: "Body permintaan tidak valid",
	SUBSCRIPTION_NOT_FOUND: "Langganan tidak ditemukan",
	SUBSCRIPTION_PLAN_NOT_FOUND: "Paket langganan tidak ditemukan",
	ALREADY_SUBSCRIBED_PLAN: "Anda sudah berlangganan paket ini",
	REFERENCE_ID_NOT_ALLOWED: "ID referensi tidak diizinkan",
	CUSTOMER_NOT_FOUND: "Pelanggan Stripe tidak ditemukan untuk pengguna ini",
	UNABLE_TO_CREATE_CUSTOMER: "Tidak dapat membuat pelanggan",
	UNABLE_TO_CREATE_BILLING_PORTAL: "Tidak dapat membuat sesi portal penagihan",
	STRIPE_SIGNATURE_NOT_FOUND: "Tanda tangan Stripe tidak ditemukan",
	STRIPE_WEBHOOK_SECRET_NOT_FOUND: "Secret webhook Stripe tidak ditemukan",
	STRIPE_WEBHOOK_ERROR: "Kesalahan webhook Stripe",
	FAILED_TO_CONSTRUCT_STRIPE_EVENT: "Gagal membentuk event Stripe",
	FAILED_TO_FETCH_PLANS: "Gagal mengambil paket",
	EMAIL_VERIFICATION_REQUIRED:
		"Verifikasi email diperlukan sebelum Anda dapat berlangganan paket",
	SUBSCRIPTION_NOT_ACTIVE: "Langganan tidak aktif",
	SUBSCRIPTION_NOT_SCHEDULED_FOR_CANCELLATION:
		"Langganan tidak dijadwalkan untuk dibatalkan",
	SUBSCRIPTION_NOT_PENDING_CHANGE:
		"Langganan tidak memiliki pembatalan tertunda atau perubahan paket terjadwal",
	ORGANIZATION_SUBSCRIPTION_NOT_ENABLED:
		"Langganan organisasi tidak diaktifkan",
	AUTHORIZE_REFERENCE_REQUIRED:
		"Langganan organisasi memerlukan callback authorizeReference yang dikonfigurasi",
	ORGANIZATION_HAS_ACTIVE_SUBSCRIPTION:
		"Tidak dapat menghapus organisasi yang memiliki langganan aktif",
	ORGANIZATION_REFERENCE_ID_REQUIRED:
		"ID referensi wajib diisi. Berikan referenceId atau atur activeOrganizationId pada sesi",
} satisfies StripeErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
