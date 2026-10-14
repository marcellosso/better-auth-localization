import type { OrganizationErrorCodesType } from "../../../types";

export const ID_ID = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Anda tidak diizinkan untuk membuat organisasi baru",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Anda telah mencapai jumlah maksimum organisasi",
	ORGANIZATION_ALREADY_EXISTS: "Organisasi sudah ada",
	ORGANIZATION_NOT_FOUND: "Organisasi tidak ditemukan",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "Pengguna bukan anggota organisasi",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Anda tidak diizinkan untuk memperbarui organisasi ini",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Anda tidak diizinkan untuk menghapus organisasi ini",
	NO_ACTIVE_ORGANIZATION: "Tidak ada organisasi aktif",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Pengguna sudah menjadi anggota organisasi ini",
	MEMBER_NOT_FOUND: "Anggota tidak ditemukan",
	ROLE_NOT_FOUND: "Peran tidak ditemukan",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Anda tidak diizinkan untuk membuat tim baru",
	TEAM_ALREADY_EXISTS: "Tim sudah ada",
	TEAM_NOT_FOUND: "Tim tidak ditemukan",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Anda tidak dapat meninggalkan organisasi sebagai satu-satunya pemilik",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Anda tidak dapat meninggalkan organisasi tanpa pemilik",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Anda tidak diizinkan untuk menghapus anggota ini",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Anda tidak diizinkan untuk mengundang pengguna ke organisasi ini",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Pengguna sudah diundang ke organisasi ini",
	INVITATION_NOT_FOUND: "Undangan tidak ditemukan",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "Anda bukan penerima undangan",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Verifikasi email diperlukan sebelum menerima atau menolak undangan",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Anda tidak diizinkan untuk membatalkan undangan ini",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Pengundang bukan lagi anggota organisasi",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Anda tidak diizinkan untuk mengundang pengguna dengan peran ini",
	FAILED_TO_RETRIEVE_INVITATION: "Gagal mengambil undangan",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Anda telah mencapai jumlah maksimum tim",
	UNABLE_TO_REMOVE_LAST_TEAM: "Tidak dapat menghapus tim terakhir",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Anda tidak diizinkan untuk memperbarui anggota ini",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Batas keanggotaan organisasi tercapai",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Anda tidak diizinkan untuk membuat tim di organisasi ini",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Anda tidak diizinkan untuk menghapus tim di organisasi ini",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Anda tidak diizinkan untuk memperbarui tim ini",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Anda tidak diizinkan untuk menghapus tim ini",
	INVITATION_LIMIT_REACHED: "Batas undangan tercapai",
	TEAM_MEMBER_LIMIT_REACHED: "Batas anggota tim tercapai",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Pengguna bukan anggota tim",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Anda tidak diizinkan untuk mengakses anggota tim ini",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Anda tidak memiliki tim aktif",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Anda tidak diizinkan untuk membuat anggota tim baru",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Anda tidak diizinkan untuk menghapus anggota tim",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Anda tidak diizinkan untuk mengakses organisasi ini sebagai pemilik",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Anda bukan anggota organisasi ini",
	ORGANIZATION_SLUG_ALREADY_TAKEN: "Slug organisasi sudah digunakan",
	EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION:
		"Verifikasi email diperlukan untuk melihat atau mencantumkan undangan untuk email sesi",
	MISSING_AC_INSTANCE:
		"Dynamic Access Control memerlukan instance ac yang telah didefinisikan sebelumnya pada plugin auth server. Baca log server untuk informasi lebih lanjut",
	YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE:
		"Anda harus berada dalam organisasi untuk membuat peran",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "Anda tidak diizinkan membuat peran",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE:
		"Anda tidak diizinkan memperbarui peran",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "Anda tidak diizinkan menghapus peran",
	YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "Anda tidak diizinkan membaca peran",
	YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE:
		"Anda tidak diizinkan melihat daftar peran",
	YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "Anda tidak diizinkan mengambil peran",
	TOO_MANY_ROLES: "Organisasi ini memiliki terlalu banyak peran",
	INVALID_RESOURCE: "Izin yang diberikan menyertakan resource yang tidak valid",
	ROLE_NAME_IS_ALREADY_TAKEN: "Nama peran tersebut sudah digunakan",
	CANNOT_DELETE_A_PRE_DEFINED_ROLE: "Tidak dapat menghapus peran bawaan",
	ROLE_IS_ASSIGNED_TO_MEMBERS:
		"Tidak dapat menghapus peran yang ditetapkan kepada anggota. Harap tetapkan ulang anggota ke peran lain terlebih dahulu",
	INVALID_TEAM_ID: "ID tim mengandung karakter yang dicadangkan",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
