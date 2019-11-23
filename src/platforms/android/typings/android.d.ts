declare module com {
	export module flutterwave {
		export module raveandroid {
			export class AVSVBVFragment extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<com.flutterwave.raveandroid.AVSVBVFragment>;
				public static EXTRA_ADDRESS: string;
				public static EXTRA_CITY: string;
				public static EXTRA_ZIPCODE: string;
				public static EXTRA_COUNTRY: string;
				public static EXTRA_STATE: string;
				public goBack(): void;
				public getViewModelStore(): any;
				public getLifecycle(): any;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class BuildConfig {
				public static class: java.lang.Class<com.flutterwave.raveandroid.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class DeviceIdGetter {
				public static class: java.lang.Class<com.flutterwave.raveandroid.DeviceIdGetter>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.telephony.TelephonyManager);
				public getDeviceId(): string;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class DeviceIdGetter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.DeviceIdGetter> {
				public static class: java.lang.Class<com.flutterwave.raveandroid.DeviceIdGetter_Factory>;
				public static newDeviceIdGetter(param0: globalAndroid.content.Context, param1: globalAndroid.telephony.TelephonyManager): com.flutterwave.raveandroid.DeviceIdGetter;
				public get(): com.flutterwave.raveandroid.DeviceIdGetter;
				public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.telephony.TelephonyManager>): com.flutterwave.raveandroid.DeviceIdGetter;
				public get(): any;
				public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.telephony.TelephonyManager>): com.flutterwave.raveandroid.DeviceIdGetter_Factory;
				public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.telephony.TelephonyManager>);
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class FeeCheckRequestBody {
				public static class: java.lang.Class<com.flutterwave.raveandroid.FeeCheckRequestBody>;
				public getAmount(): string;
				public setPtype(param0: string): void;
				public getPtype(): string;
				public getCurrency(): string;
				public setAmount(param0: string): void;
				public getCard6(): string;
				public setCard6(param0: string): void;
				public getPBFPubKey(): string;
				public setPBFPubKey(param0: string): void;
				public setCurrency(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class GetEncryptedData {
				public static class: java.lang.Class<com.flutterwave.raveandroid.GetEncryptedData>;
				public getEncryptedData(param0: string, param1: string): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class GetEncryptedData_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.GetEncryptedData> {
				public static class: java.lang.Class<com.flutterwave.raveandroid.GetEncryptedData_Factory>;
				public static create(): com.flutterwave.raveandroid.GetEncryptedData_Factory;
				public get(): com.flutterwave.raveandroid.GetEncryptedData;
				public static newGetEncryptedData(): com.flutterwave.raveandroid.GetEncryptedData;
				public static provideInstance(): com.flutterwave.raveandroid.GetEncryptedData;
				public get(): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class MainPagerAdapter extends globalAndroid.support.v4.app.FragmentPagerAdapter {
				public static class: java.lang.Class<com.flutterwave.raveandroid.MainPagerAdapter>;
				public getFragments(): java.util.List<com.flutterwave.raveandroid.RaveFragment>;
				public constructor(param0: globalAndroid.support.v4.app.FragmentManager);
				public getPageTitle(param0: number): string;
				public getItem(param0: number): globalAndroid.support.v4.app.Fragment;
				public getCount(): number;
				public constructor();
				public setFragments(param0: java.util.List<com.flutterwave.raveandroid.RaveFragment>): void;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class Meta {
				public static class: java.lang.Class<com.flutterwave.raveandroid.Meta>;
				public getMetavalue(): string;
				public getMetaname(): string;
				public setMetaname(param0: string): void;
				public constructor(param0: string, param1: string);
				public setMetavalue(param0: string): void;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class OTPFragment extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<com.flutterwave.raveandroid.OTPFragment>;
				public static EXTRA_OTP: string;
				public static EXTRA_CHARGE_MESSAGE: string;
				public goBack(): void;
				public onClick(param0: globalAndroid.view.View): void;
				public getViewModelStore(): any;
				public getLifecycle(): any;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class OldRavePayActivity extends globalAndroid.support.v7.app.AppCompatActivity {
				public static class: java.lang.Class<com.flutterwave.raveandroid.OldRavePayActivity>;
				public static BASE_URL: string;
				public static RESULT_SUCCESS: number;
				public static RESULT_ERROR: number;
				public static RESULT_CANCELLED: number;
				public onSupportActionModeStarted(param0: globalAndroid.support.v7.view.ActionMode): void;
				public getRavePayInitializer(): com.flutterwave.raveandroid.RavePayInitializer;
				public onBackPressed(): void;
				public getViewModelStore(): any;
				public getSupportParentActivityIntent(): globalAndroid.content.Intent;
				public getLifecycle(): any;
				public checkForRequiredPermissions(): void;
				public getAppComponent(): com.flutterwave.raveandroid.di.components.AppComponent;
				public constructor();
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public onWindowStartingSupportActionMode(param0: globalAndroid.support.v7.view.ActionMode.Callback): globalAndroid.support.v7.view.ActionMode;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onSupportActionModeFinished(param0: globalAndroid.support.v7.view.ActionMode): void;
				public getDrawerToggleDelegate(): globalAndroid.support.v7.app.ActionBarDrawerToggle.Delegate;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class Payload {
				public static class: java.lang.Class<com.flutterwave.raveandroid.Payload>;
				public is_mobile_money_gh: string;
				public is_mobile_money_ug: string;
				public network: string;
				public voucher: string;
				public is_bank_transfer: boolean;
				public getMeta(): java.util.List<com.flutterwave.raveandroid.Meta>;
				public setAmount(param0: string): void;
				public setCharge_type(param0: string): void;
				public getPasscode(): string;
				public setBillingaddress(param0: string): void;
				public setSuggestedAuth(param0: string): void;
				public setCardBIN(param0: string): void;
				public setCardno(param0: string): void;
				public getAccountnumber(): string;
				public setIs_ussd(param0: boolean): void;
				public constructor(param0: string, param1: java.util.List<com.flutterwave.raveandroid.Meta>, param2: java.util.List<com.flutterwave.raveandroid.responses.SubAccount>, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string);
				public getIs_uk_bank_charge(): boolean;
				public getRemember_device_mobile_key(): string;
				public setEmail(param0: string): void;
				public getExpirymonth(): string;
				public setPBFPubKey(param0: string): void;
				public setCountry(param0: string): void;
				public getCardno(): string;
				public setBillingstate(param0: string): void;
				public setPasscode(param0: string): void;
				public setDevice_fingerprint(param0: string): void;
				public getBillingcity(): string;
				public getPayment_plan(): string;
				public setVoucher(param0: string): void;
				public setMeta(param0: java.util.List<com.flutterwave.raveandroid.Meta>): void;
				public getPBFSecKey(): string;
				public setIs_internet_banking(param0: string): void;
				public constructor(param0: java.util.List<com.flutterwave.raveandroid.Meta>, param1: java.util.List<com.flutterwave.raveandroid.responses.SubAccount>, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string);
				public setIs_us_bank_charge(param0: boolean): void;
				public setBVN(param0: string): void;
				public setNarration(param0: string): void;
				public getDuration(): number;
				public setPin(param0: string): void;
				public getPayment_type(): string;
				public setAccountbank(param0: string): void;
				public setIs_remembered(param0: string): void;
				public setNetwork(param0: string): void;
				public getIs_ussd(): boolean;
				public setRemember_device_email(param0: string): void;
				public setCvv(param0: string): void;
				public getBVN(): string;
				public setIs_mobile_money_ug(param0: string): void;
				public getOrderRef(): string;
				public getEmail(): string;
				public constructor(param0: java.util.List<com.flutterwave.raveandroid.Meta>, param1: java.util.List<com.flutterwave.raveandroid.responses.SubAccount>, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string, param17: string, param18: string, param19: string);
				public getCountry(): string;
				public getPhonenumber(): string;
				public getPBFPubKey(): string;
				public setIs_mobile_money_franco(param0: boolean): void;
				public getBillingzip(): string;
				public setIs_bank_transfer(param0: boolean): void;
				public getTxRef(): string;
				public setPhonenumber(param0: string): void;
				public getIs_mobile_money_franco(): boolean;
				public getBillingcountry(): string;
				public setBillingcountry(param0: string): void;
				public setIs_permanent(param0: boolean): void;
				public setTxRef(param0: string): void;
				public setAccountname(param0: string): void;
				public getNarration(): string;
				public setIP(param0: string): void;
				public setRemember_device_mobile_key(param0: string): void;
				public getAccountname(): string;
				public getBillingstate(): string;
				public setBillingzip(param0: string): void;
				public setIs_uk_bank_charge2(param0: boolean): void;
				public getRemember_device_email(): string;
				public getIs_permanent(): boolean;
				public getIs_remembered(): string;
				public setExpirymonth(param0: string): void;
				public getLastname(): string;
				public setAccountnumber(param0: string): void;
				public toString(): string;
				public setOrderRef(param0: string): void;
				public getToken(): string;
				public setIs_mpesa_lipa(param0: string): void;
				public constructor(param0: java.util.List<com.flutterwave.raveandroid.Meta>, param1: java.util.List<com.flutterwave.raveandroid.responses.SubAccount>, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: boolean);
				public setPBFSecKey(param0: string): void;
				public getAccountbank(): string;
				public isIs_us_bank_charge(): boolean;
				public getCvv(): string;
				public getCurrency(): string;
				public getDevice_fingerprint(): string;
				public getCharge_type(): string;
				public setIs_mobile_money_gh(param0: string): void;
				public setToken(param0: string): void;
				public getFrequency(): number;
				public setLastname(param0: string): void;
				public setFrequency(param0: number): void;
				public getCardBIN(): string;
				public setPayment_plan(param0: string): void;
				public setDuration(param0: number): void;
				public getExpiryyear(): string;
				public setBillingcity(param0: string): void;
				public setIs_mpesa(param0: string): void;
				public getIs_mpesa_lipa(): string;
				public getIs_mpesa(): string;
				public setExpiryyear(param0: string): void;
				public setSECKEY(param0: string): void;
				public getAmount(): string;
				public getBillingaddress(): string;
				public getIP(): string;
				public getFirstname(): string;
				public setFirstname(param0: string): void;
				public setPayment_type(param0: string): void;
				public setCurrency(param0: string): void;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PayloadBuilder {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PayloadBuilder>;
				public setIP(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getMeta(): string;
				public setDuration(param0: number): com.flutterwave.raveandroid.PayloadBuilder;
				public getNarration(): string;
				public createUKPayload(): com.flutterwave.raveandroid.Payload;
				public createUssdPayload(): com.flutterwave.raveandroid.Payload;
				public createRwfMobileMoneyPayload(): com.flutterwave.raveandroid.Payload;
				public getSubAccounts(): string;
				public constructor();
				public setPaymentPlan(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getNetwork(): string;
				public setPhonenumber(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getIs_mobile_money_ug(): string;
				public createZmMobileMoneyPayload(): com.flutterwave.raveandroid.Payload;
				public setDevice_fingerprint(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getAccountname(): string;
				public setPBFPubKey(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public createBankTransferPayload(): com.flutterwave.raveandroid.Payload;
				public isPreAuth(): boolean;
				public setBVN(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getAccountnumber(): string;
				public setAccountbank(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setAmount(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setPin(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public createMpesaPayload(): com.flutterwave.raveandroid.Payload;
				public createUgMobileMoneyPayload(): com.flutterwave.raveandroid.Payload;
				public getLastname(): string;
				public getCustomer_phone(): string;
				public getExpirymonth(): string;
				public getCardno(): string;
				public setCurrency(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setIs_mobile_money_ug(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public createGhMobileMoneyPayload(): com.flutterwave.raveandroid.Payload;
				public setIsPermanent(param0: boolean): com.flutterwave.raveandroid.PayloadBuilder;
				public setSubAccount(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public isIs_bank_transfer(): boolean;
				public getPermanent(): boolean;
				public setIsPreAuth(param0: boolean): com.flutterwave.raveandroid.PayloadBuilder;
				public createBankPayload(): com.flutterwave.raveandroid.Payload;
				public setIs_bank_transfer(param0: boolean): com.flutterwave.raveandroid.PayloadBuilder;
				public setIs_mobile_money_gh(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getPayment_plan(): string;
				public getBvn(): string;
				public getAccountbank(): string;
				public createFrancPayload(): com.flutterwave.raveandroid.Payload;
				public getIs_mobile_money_gh(): string;
				public setCountry(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public isIs_us_bank_charge(): boolean;
				public getPin(): string;
				public getCvv(): string;
				public setCvv(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getCurrency(): string;
				public setAccountname(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getDuration(): number;
				public getDevice_fingerprint(): string;
				public getFrequency(): number;
				public setMeta(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getVoucher(): string;
				public setEmail(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setCardno(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setAccountnumber(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setIsUsBankCharge(param0: boolean): com.flutterwave.raveandroid.PayloadBuilder;
				public setCustomer_phone(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getExpiryyear(): string;
				public setExpirymonth(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getPbfPubKey(): string;
				public getIp(): string;
				public setExpiryyear(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getEmail(): string;
				public setFirstname(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getCountry(): string;
				public setfrequency(param0: number): com.flutterwave.raveandroid.PayloadBuilder;
				public setNarration(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setNetwork(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setLastname(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getPhonenumber(): string;
				public setVoucher(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public setTxRef(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public getAmount(): string;
				public getTxRef(): string;
				public getFirstname(): string;
				public setIs_mobile_money_rwf(param0: string): com.flutterwave.raveandroid.PayloadBuilder;
				public createPayload(): com.flutterwave.raveandroid.Payload;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PayloadEncryptor {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PayloadEncryptor>;
				public getEncryptedData(param0: string, param1: string): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PayloadEncryptor_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.PayloadEncryptor> {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PayloadEncryptor_Factory>;
				public static provideInstance(): com.flutterwave.raveandroid.PayloadEncryptor;
				public get(): com.flutterwave.raveandroid.PayloadEncryptor;
				public get(): any;
				public static newPayloadEncryptor(): com.flutterwave.raveandroid.PayloadEncryptor;
				public static create(): com.flutterwave.raveandroid.PayloadEncryptor_Factory;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PayloadToJson {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PayloadToJson>;
				public gson: com.google.gson.Gson;
				public constructor(param0: com.google.gson.Gson);
				public convertChargeRequestPayloadToJson(param0: com.flutterwave.raveandroid.Payload): string;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PayloadToJsonConverter {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PayloadToJsonConverter>;
				public gson: com.google.gson.Gson;
				public constructor(param0: com.google.gson.Gson);
				public convertChargeRequestPayloadToJson(param0: com.flutterwave.raveandroid.Payload): string;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PayloadToJsonConverter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.PayloadToJsonConverter> {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PayloadToJsonConverter_Factory>;
				public get(): com.flutterwave.raveandroid.PayloadToJsonConverter;
				public static create(param0: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.PayloadToJsonConverter_Factory;
				public static newPayloadToJsonConverter(param0: com.google.gson.Gson): com.flutterwave.raveandroid.PayloadToJsonConverter;
				public static provideInstance(param0: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.PayloadToJsonConverter;
				public constructor(param0: javax.inject.Provider<com.google.gson.Gson>);
				public get(): any;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PayloadToJson_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.PayloadToJson> {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PayloadToJson_Factory>;
				public static provideInstance(param0: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.PayloadToJson;
				public get(): com.flutterwave.raveandroid.PayloadToJson;
				public constructor(param0: javax.inject.Provider<com.google.gson.Gson>);
				public get(): any;
				public static create(param0: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.PayloadToJson_Factory;
				public static newPayloadToJson(param0: com.google.gson.Gson): com.flutterwave.raveandroid.PayloadToJson;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PaymentTile {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PaymentTile>;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PaymentTypesCurrencyChecker {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PaymentTypesCurrencyChecker>;
				public applyCurrencyChecks(param0: java.util.ArrayList<java.lang.Integer>, param1: string): java.util.ArrayList<java.lang.Integer>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class PinFragment extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<com.flutterwave.raveandroid.PinFragment>;
				public static EXTRA_PIN: string;
				public goBack(): void;
				public getViewModelStore(): any;
				public getLifecycle(): any;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class RaveConstants {
				public static class: java.lang.Class<com.flutterwave.raveandroid.RaveConstants>;
				public static PERMISSIONS_REQUEST_READ_PHONE_STATE: number;
				public static PUBLIC_KEY: string;
				public static ENCRYPTION_KEY: string;
				public static STAGING_URL: string;
				public static LIVE_URL: string;
				public static VBV: string;
				public static GTB_OTP: string;
				public static ACCESS_OTP: string;
				public static NG: string;
				public static NGN: string;
				public static UGX: string;
				public static RWF: string;
				public static NOAUTH: string;
				public static PIN: string;
				public static selectNetwork: string;
				public static AVS_VBVSECURECODE: string;
				public static enterOTP: string;
				public static NOAUTH_INTERNATIONAL: string;
				public static RAVEPAY: string;
				public static RAVE_PARAMS: string;
				public static RAVE_3DS_CALLBACK: string;
				public static RAVE_REQUEST_CODE: number;
				public static MANUAL_CARD_CHARGE: number;
				public static TOKEN_CHARGE: number;
				public static fieldAmount: string;
				public static fieldPhone: string;
				public static fieldAccountName: string;
				public static fieldAccountBank: string;
				public static fieldAccountNumber: string;
				public static fieldEmail: string;
				public static fieldAccount: string;
				public static fieldVoucher: string;
				public static fieldNetwork: string;
				public static networkPosition: string;
				public static fieldBVN: string;
				public static fieldDOB: string;
				public static fieldBankCode: string;
				public static fieldCvv: string;
				public static fieldCardExpiry: string;
				public static fieldcardNoStripped: string;
				public static fieldUssdBank: string;
				public static date_of_birth: string;
				public static isInternetBanking: string;
				public static success: string;
				public static noResponse: string;
				public static invalidAccountNoMessage: string;
				public static invalidDateOfBirthMessage: string;
				public static invalidBvnMessage: string;
				public static invalidBankCodeMessage: string;
				public static defaultAccounNumber: string;
				public static response: string;
				public static mtn: string;
				public static tigo: string;
				public static vodafone: string;
				public static tokenNotFound: string;
				public static expired: string;
				public static tokenExpired: string;
				public static cardNoStripped: string;
				public static validAmountPrompt: string;
				public static validPhonePrompt: string;
				public static validEmailPrompt: string;
				public static validAccountNumberPrompt: string;
				public static validAccountNamePrompt: string;
				public static validBankNamePrompt: string;
				public static charge: string;
				public static askToContinue: string;
				public static yes: string;
				public static no: string;
				public static cancel: string;
				public static checkStatus: string;
				public static transactionError: string;
				public static validCvvPrompt: string;
				public static validExpiryDatePrompt: string;
				public static validCreditCardPrompt: string;
				public static validVoucherPrompt: string;
				public static validNetworkPrompt: string;
				public static invalidChargeCode: string;
				public static invalidCharge: string;
				public static unknownAuthmsg: string;
				public static unknownResCodemsg: string;
				public static no_authurl_was_returnedmsg: string;
				public static wait: string;
				public static cancelPayment: string;
				public static bankNameGtb: string;
				public static ussdBanksList: java.util.HashMap<string, string>;
				public static PAYMENT_TYPE_CARD: number;
				public static PAYMENT_TYPE_ACCOUNT: number;
				public static PAYMENT_TYPE_GH_MOBILE_MONEY: number;
				public static PAYMENT_TYPE_RW_MOBILE_MONEY: number;
				public static PAYMENT_TYPE_MPESA: number;
				public static PAYMENT_TYPE_UG_MOBILE_MONEY: number;
				public static PAYMENT_TYPE_ACH: number;
				public static PAYMENT_TYPE_ZM_MOBILE_MONEY: number;
				public static PAYMENT_TYPE_BANK_TRANSFER: number;
				public static PAYMENT_TYPE_UK: number;
				public static PAYMENT_TYPE_USSD: number;
				public static PAYMENT_TYPE_FRANCO_MOBILE_MONEY: number;
				public static paymentTypesNamesList: java.util.HashMap<java.lang.Integer, string>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class RaveFragment {
				public static class: java.lang.Class<com.flutterwave.raveandroid.RaveFragment>;
				public constructor(param0: globalAndroid.support.v4.app.Fragment, param1: string);
				public getFragment(): globalAndroid.support.v4.app.Fragment;
				public getTitle(): string;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class RavePayActivity extends globalAndroid.support.v7.app.AppCompatActivity {
				public static class: java.lang.Class<com.flutterwave.raveandroid.RavePayActivity>;
				public static BASE_URL: string;
				public static RESULT_SUCCESS: number;
				public static RESULT_ERROR: number;
				public static RESULT_CANCELLED: number;
				public onSupportActionModeStarted(param0: globalAndroid.support.v7.view.ActionMode): void;
				public onBackPressed(): void;
				public getRavePayInitializer(): com.flutterwave.raveandroid.RavePayInitializer;
				public getViewModelStore(): any;
				public getSupportParentActivityIntent(): globalAndroid.content.Intent;
				public getLifecycle(): any;
				public checkForRequiredPermissions(): void;
				public getAppComponent(): com.flutterwave.raveandroid.di.components.AppComponent;
				public constructor();
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public onWindowStartingSupportActionMode(param0: globalAndroid.support.v7.view.ActionMode.Callback): globalAndroid.support.v7.view.ActionMode;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onSupportActionModeFinished(param0: globalAndroid.support.v7.view.ActionMode): void;
				public getDrawerToggleDelegate(): globalAndroid.support.v7.app.ActionBarDrawerToggle.Delegate;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class RavePayInitializer {
				public static class: java.lang.Class<com.flutterwave.raveandroid.RavePayInitializer>;
				public setIsDisplayFee(param0: boolean): void;
				public getMeta(): string;
				public setEncryptionKey(param0: string): void;
				public setTheme(param0: number): void;
				public setTxRef(param0: string): void;
				public getCurrency(): string;
				public setNarration(param0: string): void;
				public setPermanent(param0: boolean): void;
				public getIsPermanent(): boolean;
				public getDuration(): number;
				public getNarration(): string;
				public getEncryptionKey(): string;
				public getFrequency(): number;
				public constructor();
				public showStagingLabel(param0: boolean): void;
				public setMeta(param0: string): void;
				public setPreAuth(param0: boolean): void;
				public setlName(param0: string): void;
				public constructor(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: number, param11: boolean, param12: number, param13: number, param14: boolean, param15: string, param16: string, param17: string, param18: boolean, param19: boolean, param20: boolean, param21: java.util.ArrayList<java.lang.Integer>);
				public setFrequency(param0: number): void;
				public setStaging(param0: boolean): void;
				public setSubAccount(param0: string): void;
				public setPayment_plan(param0: string): void;
				public getIsPreAuth(): boolean;
				public setDuration(param0: number): void;
				public getfName(): string;
				public getEmail(): string;
				public getCountry(): string;
				public setPublicKey(param0: string): void;
				public isStaging(): boolean;
				public getOrderedPaymentTypesList(): java.util.ArrayList<java.lang.Integer>;
				public getSubAccount(): string;
				public setEmail(param0: string): void;
				public getPublicKey(): string;
				public setCountry(param0: string): void;
				public setAmount(param0: number): void;
				public setfName(param0: string): void;
				public getlName(): string;
				public getTxRef(): string;
				public getIsDisplayFee(): boolean;
				public getShowStagingLabel(): boolean;
				public getTheme(): number;
				public setCurrency(param0: string): void;
				public getPayment_plan(): string;
				public getAmount(): number;
			}
			export module RavePayInitializer {
				export class Parcelable extends java.lang.Object {
					public static class: java.lang.Class<com.flutterwave.raveandroid.RavePayInitializer.Parcelable>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.flutterwave.raveandroid.RavePayInitializer.Parcelable>;
					public constructor(param0: com.flutterwave.raveandroid.RavePayInitializer);
					public describeContents(): number;
					public getParcel(): com.flutterwave.raveandroid.RavePayInitializer;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public static write(param0: com.flutterwave.raveandroid.RavePayInitializer, param1: globalAndroid.os.Parcel, param2: number, param3: org.parceler.IdentityCollection): void;
					public static read(param0: globalAndroid.os.Parcel, param1: org.parceler.IdentityCollection): com.flutterwave.raveandroid.RavePayInitializer;
					public getParcel(): any;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class RavePayManager {
				public static class: java.lang.Class<com.flutterwave.raveandroid.RavePayManager>;
				public setPublicKey(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public setCurrency(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public setEncryptionKey(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public constructor(param0: globalAndroid.app.Activity);
				public createRavePayInitializer(): com.flutterwave.raveandroid.RavePayInitializer;
				public onStagingEnv(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public acceptCardPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public setMeta(param0: java.util.List<com.flutterwave.raveandroid.Meta>): com.flutterwave.raveandroid.RavePayManager;
				public setfName(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public shouldDisplayFee(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public initializeNoUi(): com.flutterwave.raveandroid.Raver;
				public setlName(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public setCountry(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public setPaymentPlan(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public acceptUssdPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public acceptBankTransferPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public setNarration(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public acceptUkPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public showStagingLabel(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public acceptAccountPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public setEmail(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public getOrderedPaymentTypesList(): java.util.ArrayList<java.lang.Integer>;
				public acceptFrancMobileMoneyPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public setAmount(param0: number): com.flutterwave.raveandroid.RavePayManager;
				public acceptZmMobileMoneyPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public acceptGHMobileMoneyPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public acceptRwfMobileMoneyPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public setSubAccounts(param0: java.util.List<com.flutterwave.raveandroid.responses.SubAccount>): com.flutterwave.raveandroid.RavePayManager;
				public acceptAchPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public setTxRef(param0: string): com.flutterwave.raveandroid.RavePayManager;
				public initialize(): void;
				public acceptBankTransferPayments(param0: boolean, param1: number, param2: number): com.flutterwave.raveandroid.RavePayManager;
				public isPreAuth(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public withTheme(param0: number): com.flutterwave.raveandroid.RavePayManager;
				public allowSaveCardFeature(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public acceptBankTransferPayments(param0: boolean, param1: boolean): com.flutterwave.raveandroid.RavePayManager;
				public acceptMpesaPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
				public acceptUgMobileMoneyPayments(param0: boolean): com.flutterwave.raveandroid.RavePayManager;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class Raver {
				public static class: java.lang.Class<com.flutterwave.raveandroid.Raver>;
				public getRavePayInitializer(): com.flutterwave.raveandroid.RavePayInitializer;
				public setAppComponent(param0: com.flutterwave.raveandroid.di.components.AppComponent): void;
				public setRavePayInitializer(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
				public constructor(param0: com.flutterwave.raveandroid.RavePayInitializer, param1: com.flutterwave.raveandroid.di.components.AppComponent);
				public getAppComponent(): com.flutterwave.raveandroid.di.components.AppComponent;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class TransactionStatusChecker {
				public static class: java.lang.Class<com.flutterwave.raveandroid.TransactionStatusChecker>;
				public gson: com.google.gson.Gson;
				public constructor(param0: com.google.gson.Gson);
				public getTransactionStatus(param0: string, param1: string, param2: string): java.lang.Boolean;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class TransactionStatusChecker_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.TransactionStatusChecker> {
				public static class: java.lang.Class<com.flutterwave.raveandroid.TransactionStatusChecker_Factory>;
				public static provideInstance(param0: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.TransactionStatusChecker;
				public static create(param0: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.TransactionStatusChecker_Factory;
				public constructor(param0: javax.inject.Provider<com.google.gson.Gson>);
				public get(): any;
				public get(): com.flutterwave.raveandroid.TransactionStatusChecker;
				public static newTransactionStatusChecker(param0: com.google.gson.Gson): com.flutterwave.raveandroid.TransactionStatusChecker;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class Utils {
				public static class: java.lang.Class<com.flutterwave.raveandroid.Utils>;
				public static encryptRef(param0: string, param1: string): string;
				public static getKey(param0: string): java.security.PublicKey;
				public static decryptRef(param0: string, param1: string): string;
				public static isValidLuhnNumber(param0: string): boolean;
				public constructor();
				public static convertChargeRequestPayloadToJson(param0: com.flutterwave.raveandroid.Payload): string;
				public static obfuscateCardNumber(param0: string, param1: string): string;
				public static stringifyMeta(param0: java.util.List<com.flutterwave.raveandroid.Meta>): string;
				public static spacifyCardNumber(param0: string): string;
				public static getDeviceImei(param0: globalAndroid.content.Context): string;
				public static getEncryptedData(param0: string, param1: string): string;
				public static pojofySubaccountString(param0: string): java.util.List<com.flutterwave.raveandroid.responses.SubAccount>;
				public static hide_keyboard(param0: globalAndroid.app.Activity): void;
				public static pojofyMetaString(param0: string): java.util.List<com.flutterwave.raveandroid.Meta>;
				public static isEmailValid(param0: string): boolean;
				public static stringifySubaccounts(param0: java.util.List<com.flutterwave.raveandroid.responses.SubAccount>): string;
				public static RSAEncrypt(param0: string): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class VerificationActivity extends globalAndroid.support.v7.app.AppCompatActivity {
				public static class: java.lang.Class<com.flutterwave.raveandroid.VerificationActivity>;
				public static ACTIVITY_MOTIVE: string;
				public static INTENT_SENDER: string;
				public onSupportActionModeStarted(param0: globalAndroid.support.v7.view.ActionMode): void;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public getViewModelStore(): any;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public onWindowStartingSupportActionMode(param0: globalAndroid.support.v7.view.ActionMode.Callback): globalAndroid.support.v7.view.ActionMode;
				public getSupportParentActivityIntent(): globalAndroid.content.Intent;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onSupportActionModeFinished(param0: globalAndroid.support.v7.view.ActionMode): void;
				public getLifecycle(): any;
				public getDrawerToggleDelegate(): globalAndroid.support.v7.app.ActionBarDrawerToggle.Delegate;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class ViewObject {
				public static class: java.lang.Class<com.flutterwave.raveandroid.ViewObject>;
				public getViewId(): number;
				public setData(param0: string): void;
				public constructor(param0: number, param1: string, param2: java.lang.Class<any>);
				public setViewId(param0: number): void;
				public getData(): string;
				public getViewType(): java.lang.Class<any>;
				public setViewType(param0: java.lang.Class<any>): void;
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export class WebFragment extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<com.flutterwave.raveandroid.WebFragment>;
				public static EXTRA_WEB: string;
				public static EXTRA_AUTH_URL: string;
				public goBack(): void;
				public getViewModelStore(): any;
				public getLifecycle(): any;
				public onDisplayInternetBankingPage(param0: string): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public showProgressIndicator(param0: boolean): void;
				public constructor();
			}
			export module WebFragment {
				export class MyBrowser {
					public static class: java.lang.Class<com.flutterwave.raveandroid.WebFragment.MyBrowser>;
					public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
					public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): boolean;
					public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					public onPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module account {
				export class AccountContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.account.AccountContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.account.AccountContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module AccountContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.account.AccountContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.account.AccountContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getBanks(): void;
							chargeAccount(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: boolean): void;
							validateAccountCharge(param0: string, param1: string, param2: string): void;
							fetchFee(param0: com.flutterwave.raveandroid.Payload, param1: boolean): void;
							onAttachView(param0: com.flutterwave.raveandroid.account.AccountContract.View): void;
							onDetachView(): void;
							verifyRequeryResponseStatus(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onBankSelected(param0: com.flutterwave.raveandroid.data.Bank): void;
						});
						public constructor();
						public onAttachView(param0: com.flutterwave.raveandroid.account.AccountContract.View): void;
						public verifyRequeryResponseStatus(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer): void;
						public onBankSelected(param0: com.flutterwave.raveandroid.data.Bank): void;
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public chargeAccount(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: boolean): void;
						public onDetachView(): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public validateAccountCharge(param0: string, param1: string, param2: string): void;
						public getBanks(): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload, param1: boolean): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.account.AccountContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.account.AccountContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showToast(param0: string): void;
							showBanks(param0: java.util.List<com.flutterwave.raveandroid.data.Bank>): void;
							showProgressIndicator(param0: boolean): void;
							onGetBanksRequestFailed(param0: string): void;
							validateAccountCharge(param0: string, param1: string, param2: string): void;
							onDisplayInternetBankingPage(param0: string, param1: string): void;
							onChargeAccountFailed(param0: string, param1: string): void;
							onPaymentSuccessful(param0: string, param1: string): void;
							onPaymentFailed(param0: string, param1: string): void;
							onValidationSuccessful(param0: string, param1: string): void;
							onValidateError(param0: string, param1: string): void;
							onPaymentError(param0: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload, param2: boolean): void;
							showFetchFeeFailed(param0: string): void;
							onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							showGTBankAmountIssue(): void;
							onEmailValidated(param0: string, param1: number): void;
							onAmountValidated(param0: string, param1: number): void;
							showDateOfBirth(param0: number): void;
							showBVN(param0: number): void;
							showAccountNumberField(param0: number): void;
						});
						public constructor();
						public showFetchFeeFailed(param0: string): void;
						public onAmountValidated(param0: string, param1: number): void;
						public showBanks(param0: java.util.List<com.flutterwave.raveandroid.data.Bank>): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public showGTBankAmountIssue(): void;
						public validateAccountCharge(param0: string, param1: string, param2: string): void;
						public onGetBanksRequestFailed(param0: string): void;
						public onChargeAccountFailed(param0: string, param1: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onPaymentError(param0: string): void;
						public showBVN(param0: number): void;
						public showAccountNumberField(param0: number): void;
						public onDisplayInternetBankingPage(param0: string, param1: string): void;
						public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string): void;
						public onPaymentSuccessful(param0: string, param1: string): void;
						public showDateOfBirth(param0: number): void;
						public onValidateError(param0: string, param1: string): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onEmailValidated(param0: string, param1: number): void;
						public showProgressIndicator(param0: boolean): void;
						public onValidationSuccessful(param0: string, param1: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload, param2: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module account {
				export class AccountFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.account.AccountContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.account.AccountFragment>;
					public static FOR_0TP: number;
					public static FOR_INTERNET_BANKING: number;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onEmailValidated(param0: string, param1: number): void;
					public onDisplayInternetBankingPage(param0: string, param1: string): void;
					public onValidationSuccessful(param0: string, param1: string): void;
					public showBVN(param0: number): void;
					public showProgressIndicator(param0: boolean): void;
					public onDateSet(param0: globalAndroid.widget.DatePicker, param1: number, param2: number, param3: number): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public constructor();
					public getViewModelStore(): any;
					public onDetach(): void;
					public showGTBankAmountIssue(): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload, param2: boolean): void;
					public showFetchFeeFailed(param0: string): void;
					public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onValidateError(param0: string, param1: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public onPaymentError(param0: string): void;
					public onAmountValidated(param0: string, param1: number): void;
					public showBanks(param0: java.util.List<com.flutterwave.raveandroid.data.Bank>): void;
					public showDateOfBirth(param0: number): void;
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string): void;
					public showAccountNumberField(param0: number): void;
					public showToast(param0: string): void;
					public onGetBanksRequestFailed(param0: string): void;
					public onChargeAccountFailed(param0: string, param1: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
					public validateAccountCharge(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module account {
				export class AccountFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.account.AccountFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.account.AccountFragment_MembersInjector>;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.account.AccountPresenter>);
					public static injectPresenter(param0: com.flutterwave.raveandroid.account.AccountFragment, param1: com.flutterwave.raveandroid.account.AccountPresenter): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.account.AccountPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.account.AccountFragment>;
					public injectMembers(param0: any): void;
					public injectMembers(param0: com.flutterwave.raveandroid.account.AccountFragment): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module account {
				export class AccountPresenter extends com.flutterwave.raveandroid.account.AccountContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.account.AccountPresenter>;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.account.AccountContract.View);
					public getBanks(): void;
					public chargeAccount(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: boolean): void;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload, param1: boolean): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					public requeryTx(param0: string, param1: string): void;
					public onDetachView(): void;
					public onAttachView(param0: com.flutterwave.raveandroid.account.AccountContract.View): void;
					public onBankSelected(param0: com.flutterwave.raveandroid.data.Bank): void;
					public verifyRequeryResponseStatus(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public validateAccountCharge(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module account {
				export class AccountPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.account.AccountPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.account.AccountPresenter_Factory>;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.account.AccountContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.DateOfBirthValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.validators.BvnValidator>, param7: javax.inject.Provider<com.flutterwave.raveandroid.validators.AccountNoValidator>, param8: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>, param9: javax.inject.Provider<com.flutterwave.raveandroid.validators.UrlValidator>, param10: javax.inject.Provider<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator>, param11: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param12: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param13: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param14: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param15: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public get(): any;
					public static newAccountPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.account.AccountContract.View): com.flutterwave.raveandroid.account.AccountPresenter;
					public get(): com.flutterwave.raveandroid.account.AccountPresenter;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.account.AccountContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.DateOfBirthValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.validators.BvnValidator>, param7: javax.inject.Provider<com.flutterwave.raveandroid.validators.AccountNoValidator>, param8: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>, param9: javax.inject.Provider<com.flutterwave.raveandroid.validators.UrlValidator>, param10: javax.inject.Provider<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator>, param11: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param12: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param13: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param14: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param15: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.account.AccountPresenter;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.account.AccountContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.DateOfBirthValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.validators.BvnValidator>, param7: javax.inject.Provider<com.flutterwave.raveandroid.validators.AccountNoValidator>, param8: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>, param9: javax.inject.Provider<com.flutterwave.raveandroid.validators.UrlValidator>, param10: javax.inject.Provider<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator>, param11: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param12: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param13: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param14: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param15: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.account.AccountPresenter_Factory;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module account {
				export class AccountPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.account.AccountPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.account.AccountPresenter_MembersInjector>;
					public static injectDateOfBirthValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.DateOfBirthValidator): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.DateOfBirthValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.BvnValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.AccountNoValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>, param7: javax.inject.Provider<com.flutterwave.raveandroid.validators.UrlValidator>, param8: javax.inject.Provider<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator>, param9: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param10: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param11: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param12: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param13: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public static injectPayloadToJsonConverter(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.PayloadToJsonConverter): void;
					public static injectPhoneValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.PhoneValidator): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.DateOfBirthValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.BvnValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.AccountNoValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>, param7: javax.inject.Provider<com.flutterwave.raveandroid.validators.UrlValidator>, param8: javax.inject.Provider<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator>, param9: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param10: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param11: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param12: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param13: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.account.AccountPresenter>;
					public static injectAccountNoValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.AccountNoValidator): void;
					public static injectMinimum100AccountPaymentValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator): void;
					public static injectEmailValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.EmailValidator): void;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public static injectUrlValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.UrlValidator): void;
					public static injectBvnValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.BvnValidator): void;
					public injectMembers(param0: any): void;
					public static injectTransactionStatusChecker(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.TransactionStatusChecker): void;
					public injectMembers(param0: com.flutterwave.raveandroid.account.AccountPresenter): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public static injectBankCodeValidator(param0: com.flutterwave.raveandroid.account.AccountPresenter, param1: com.flutterwave.raveandroid.validators.BankCodeValidator): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module account {
				export class BanksRecyclerAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.flutterwave.raveandroid.account.BanksRecyclerAdapter.ViewHolder> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.account.BanksRecyclerAdapter>;
					public setBankSelectedListener(param0: com.flutterwave.raveandroid.data.Callbacks.BankSelectedListener): void;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
					public onBindViewHolder(param0: any, param1: number): void;
					public constructor();
					public getItemCount(): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.flutterwave.raveandroid.account.BanksRecyclerAdapter.ViewHolder;
					public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
					public set(param0: java.util.List<com.flutterwave.raveandroid.data.Bank>): void;
					public onBindViewHolder(param0: com.flutterwave.raveandroid.account.BanksRecyclerAdapter.ViewHolder, param1: number): void;
				}
				export module BanksRecyclerAdapter {
					export class ViewHolder extends globalAndroid.support.v7.widget.RecyclerView.ViewHolder {
						public static class: java.lang.Class<com.flutterwave.raveandroid.account.BanksRecyclerAdapter.ViewHolder>;
						public bind(param0: com.flutterwave.raveandroid.data.Bank): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module account {
				export class NullAccountView extends com.flutterwave.raveandroid.account.AccountContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.account.NullAccountView>;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload, param2: boolean): void;
					public showFetchFeeFailed(param0: string): void;
					public onEmailValidated(param0: string, param1: number): void;
					public onDisplayInternetBankingPage(param0: string, param1: string): void;
					public onValidationSuccessful(param0: string, param1: string): void;
					public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string): void;
					public onValidateError(param0: string, param1: string): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showBVN(param0: number): void;
					public showProgressIndicator(param0: boolean): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onAmountValidated(param0: string, param1: number): void;
					public showBanks(param0: java.util.List<com.flutterwave.raveandroid.data.Bank>): void;
					public constructor();
					public showDateOfBirth(param0: number): void;
					public onPaymentSuccessful(param0: string, param1: string): void;
					public showAccountNumberField(param0: number): void;
					public showToast(param0: string): void;
					public onGetBanksRequestFailed(param0: string): void;
					public onChargeAccountFailed(param0: string, param1: string): void;
					public showGTBankAmountIssue(): void;
					public onPaymentFailed(param0: string, param1: string): void;
					public validateAccountCharge(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ach {
				export class AchContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ach.AchContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.ach.AchContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module AchContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.ach.AchContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.ach.AchContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: com.flutterwave.raveandroid.RavePayInitializer, param1: string): void;
							verifyRequeryResponse(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer, param3: string): void;
							onFeeConfirmed(param0: string, param1: string): void;
							processTransaction(param0: string, param1: com.flutterwave.raveandroid.RavePayInitializer, param2: boolean): void;
							onAttachView(param0: com.flutterwave.raveandroid.ach.AchContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public onFeeConfirmed(param0: string, param1: string): void;
						public onAttachView(param0: com.flutterwave.raveandroid.ach.AchContract.View): void;
						public onDetachView(): void;
						public onDataCollected(param0: com.flutterwave.raveandroid.RavePayInitializer, param1: string): void;
						public verifyRequeryResponse(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer, param3: string): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public processTransaction(param0: string, param1: com.flutterwave.raveandroid.RavePayInitializer, param2: boolean): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.ach.AchContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.ach.AchContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showProgressIndicator(param0: boolean): void;
							onAmountValidated(param0: string, param1: number): void;
							showRedirectMessage(param0: boolean): void;
							onPaymentError(param0: string): void;
							showWebView(param0: string, param1: string): void;
							onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: string): void;
							onPaymentFailed(param0: string, param1: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
							showAmountError(param0: string): void;
							showFee(param0: string, param1: string, param2: string, param3: string): void;
							onValidationSuccessful(param0: string): void;
						});
						public constructor();
						public onPaymentError(param0: string): void;
						public showFee(param0: string, param1: string, param2: string, param3: string): void;
						public showWebView(param0: string, param1: string): void;
						public showRedirectMessage(param0: boolean): void;
						public onAmountValidated(param0: string, param1: number): void;
						public onValidationSuccessful(param0: string): void;
						public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: string): void;
						public showAmountError(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public showProgressIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ach {
				export class AchFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.ach.AchContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ach.AchFragment>;
					public static FOR_ACH: number;
					public showFee(param0: string, param1: string, param2: string, param3: string): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showRedirectMessage(param0: boolean): void;
					public showAmountError(param0: string): void;
					public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: string): void;
					public showProgressIndicator(param0: boolean): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showWebView(param0: string, param1: string): void;
					public onPaymentError(param0: string): void;
					public onAmountValidated(param0: string, param1: number): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public onValidationSuccessful(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ach {
				export class AchFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.ach.AchFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ach.AchFragment_MembersInjector>;
					public static injectPresenter(param0: com.flutterwave.raveandroid.ach.AchFragment, param1: com.flutterwave.raveandroid.ach.AchPresenter): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.ach.AchPresenter>);
					public injectMembers(param0: any): void;
					public injectMembers(param0: com.flutterwave.raveandroid.ach.AchFragment): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.ach.AchPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.ach.AchFragment>;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ach {
				export class AchPresenter extends com.flutterwave.raveandroid.ach.AchContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ach.AchPresenter>;
					public processTransaction(param0: string, param1: com.flutterwave.raveandroid.RavePayInitializer, param2: boolean): void;
					public chargeAccount(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: boolean): void;
					public onDetachView(): void;
					public verifyRequeryResponse(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer, param3: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.ach.AchContract.View);
					public requeryTx(param0: string): void;
					public onDataCollected(param0: com.flutterwave.raveandroid.RavePayInitializer, param1: string): void;
					public onAttachView(param0: com.flutterwave.raveandroid.ach.AchContract.View): void;
					public onFeeConfirmed(param0: string, param1: string): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ach {
				export class AchPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.ach.AchPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ach.AchPresenter_Factory>;
					public get(): com.flutterwave.raveandroid.ach.AchPresenter;
					public get(): any;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ach.AchContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.SharedPrefsRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param5: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param8: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ach.AchContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.SharedPrefsRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param5: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param8: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.ach.AchPresenter;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ach.AchContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.SharedPrefsRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param5: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param8: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.ach.AchPresenter_Factory;
					public static newAchPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.ach.AchContract.View): com.flutterwave.raveandroid.ach.AchPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ach {
				export class AchPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.ach.AchPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ach.AchPresenter_MembersInjector>;
					public static injectTransactionStatusChecker(param0: com.flutterwave.raveandroid.ach.AchPresenter, param1: com.flutterwave.raveandroid.TransactionStatusChecker): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.ach.AchPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.SharedPrefsRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public injectMembers(param0: com.flutterwave.raveandroid.ach.AchPresenter): void;
					public static injectSharedMgr(param0: com.flutterwave.raveandroid.ach.AchPresenter, param1: com.flutterwave.raveandroid.data.SharedPrefsRequestImpl): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.SharedPrefsRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJsonConverter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.ach.AchPresenter>;
					public injectMembers(param0: any): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.ach.AchPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.ach.AchPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.ach.AchPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public static injectPayloadToJsonConverter(param0: com.flutterwave.raveandroid.ach.AchPresenter, param1: com.flutterwave.raveandroid.PayloadToJsonConverter): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ach {
				export class NullAchView extends com.flutterwave.raveandroid.ach.AchContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ach.NullAchView>;
					public onPaymentError(param0: string): void;
					public onAmountValidated(param0: string, param1: number): void;
					public showFee(param0: string, param1: string, param2: string, param3: string): void;
					public constructor();
					public showRedirectMessage(param0: boolean): void;
					public showAmountError(param0: string): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onValidationSuccessful(param0: string): void;
					public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
					public showProgressIndicator(param0: boolean): void;
					public showWebView(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module banktransfer {
				export class BankTransferContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.BankTransferContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.banktransfer.BankTransferContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module BankTransferContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.BankTransferContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.banktransfer.BankTransferContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
							requeryTx(param0: string, param1: string, param2: string, param3: boolean, param4: number): void;
							payWithBankTransfer(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							startPaymentVerification(): void;
							cancelPolling(): void;
							getState(): globalAndroid.os.Bundle;
							restoreState(param0: globalAndroid.os.Bundle): void;
							onAttachView(param0: com.flutterwave.raveandroid.banktransfer.BankTransferContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public cancelPolling(): void;
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onDetachView(): void;
						public getState(): globalAndroid.os.Bundle;
						public requeryTx(param0: string, param1: string, param2: string, param3: boolean, param4: number): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public payWithBankTransfer(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public startPaymentVerification(): void;
						public restoreState(param0: globalAndroid.os.Bundle): void;
						public onAttachView(param0: com.flutterwave.raveandroid.banktransfer.BankTransferContract.View): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.BankTransferContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.banktransfer.BankTransferContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showProgressIndicator(param0: boolean): void;
							showPollingIndicator(param0: boolean): void;
							onPaymentError(param0: string): void;
							showToast(param0: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentFailed(param0: string, param1: string): void;
							onTransferDetailsReceived(param0: string, param1: string, param2: string, param3: string): void;
							onPollingTimeout(param0: string, param1: string, param2: string): void;
							onAmountValidationSuccessful(param0: string): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							onAmountValidationFailed(): void;
							onPollingCanceled(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onAmountValidationFailed(): void;
						public onTransferDetailsReceived(param0: string, param1: string, param2: string, param3: string): void;
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public onPollingTimeout(param0: string, param1: string, param2: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public onAmountValidationSuccessful(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentError(param0: string): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onPollingCanceled(param0: string, param1: string, param2: string): void;
						public showProgressIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module banktransfer {
				export class BankTransferFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.banktransfer.BankTransferContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.BankTransferFragment>;
					public onTransferDetailsReceived(param0: string, param1: string, param2: string, param3: string): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationFailed(): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public onPollingCanceled(param0: string, param1: string, param2: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
					public onPollingTimeout(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module banktransfer {
				export class BankTransferFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.banktransfer.BankTransferFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.BankTransferFragment_MembersInjector>;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.banktransfer.BankTransferPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.banktransfer.BankTransferFragment>;
					public static injectPresenter(param0: com.flutterwave.raveandroid.banktransfer.BankTransferFragment, param1: com.flutterwave.raveandroid.banktransfer.BankTransferPresenter): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.banktransfer.BankTransferPresenter>);
					public injectMembers(param0: any): void;
					public injectMembers(param0: com.flutterwave.raveandroid.banktransfer.BankTransferFragment): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module banktransfer {
				export class BankTransferPresenter extends com.flutterwave.raveandroid.banktransfer.BankTransferContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.BankTransferPresenter>;
					public pollingCancelled: boolean;
					public hasTransferDetails: boolean;
					public startPaymentVerification(): void;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public cancelPolling(): void;
					public onAttachView(param0: com.flutterwave.raveandroid.banktransfer.BankTransferContract.View): void;
					public payWithBankTransfer(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public requeryTx(param0: string, param1: string, param2: string, param3: boolean, param4: number): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					public onDetachView(): void;
					public getState(): globalAndroid.os.Bundle;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.banktransfer.BankTransferContract.View);
					public restoreState(param0: globalAndroid.os.Bundle): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module banktransfer {
				export class BankTransferPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.banktransfer.BankTransferPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.BankTransferPresenter_Factory>;
					public get(): any;
					public static newBankTransferPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.banktransfer.BankTransferContract.View): com.flutterwave.raveandroid.banktransfer.BankTransferPresenter;
					public get(): com.flutterwave.raveandroid.banktransfer.BankTransferPresenter;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.banktransfer.BankTransferContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.banktransfer.BankTransferPresenter;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.banktransfer.BankTransferContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.banktransfer.BankTransferContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.banktransfer.BankTransferPresenter_Factory;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module banktransfer {
				export class BankTransferPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.banktransfer.BankTransferPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.BankTransferPresenter_MembersInjector>;
					public injectMembers(param0: com.flutterwave.raveandroid.banktransfer.BankTransferPresenter): void;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.banktransfer.BankTransferPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param1: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param2: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param3: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.banktransfer.BankTransferPresenter>;
					public static injectPayloadToJson(param0: com.flutterwave.raveandroid.banktransfer.BankTransferPresenter, param1: com.flutterwave.raveandroid.PayloadToJson): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.banktransfer.BankTransferPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param1: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param2: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param3: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public injectMembers(param0: any): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.banktransfer.BankTransferPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.banktransfer.BankTransferPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module banktransfer {
				export class NullBankTransferView extends com.flutterwave.raveandroid.banktransfer.BankTransferContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.banktransfer.NullBankTransferView>;
					public onTransferDetailsReceived(param0: string, param1: string, param2: string, param3: string): void;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationFailed(): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPollingCanceled(param0: string, param1: string, param2: string): void;
					public constructor();
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
					public onPollingTimeout(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class CardContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.card.CardContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module CardContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.card.CardContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDetachView(): void;
							chargeToken(param0: com.flutterwave.raveandroid.Payload): void;
							fetchFee(param0: com.flutterwave.raveandroid.Payload, param1: number): void;
							onAttachView(param0: com.flutterwave.raveandroid.card.CardContract.View): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							chargeCard(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							validateCardCharge(param0: string, param1: string, param2: string): void;
							requeryTx(param0: string, param1: string, param2: boolean): void;
							chargeCardWithSuggestedAuthModel(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: string, param3: string): void;
							verifyRequeryResponse(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer, param3: string): void;
							chargeCardWithAVSModel(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
						});
						public constructor();
						public onAttachView(param0: com.flutterwave.raveandroid.card.CardContract.View): void;
						public chargeToken(param0: com.flutterwave.raveandroid.Payload): void;
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public chargeCard(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public chargeCardWithAVSModel(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
						public chargeCardWithSuggestedAuthModel(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: string, param3: string): void;
						public onDetachView(): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload, param1: number): void;
						public verifyRequeryResponse(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer, param3: string): void;
						public requeryTx(param0: string, param1: string, param2: boolean): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public validateCardCharge(param0: string, param1: string, param2: string): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.card.CardContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showProgressIndicator(param0: boolean): void;
							onPaymentError(param0: string): void;
							showToast(param0: string): void;
							onValidateError(param0: string): void;
							showFetchFeeFailed(param0: string): void;
							onTokenRetrievalError(param0: string): void;
							onEmailValidated(param0: string, param1: number): void;
							onAmountValidated(param0: string, param1: number): void;
							showSavedCards(param0: java.util.List<com.flutterwave.raveandroid.data.SavedCard>): void;
							onPinAuthModelSuggested(param0: com.flutterwave.raveandroid.Payload): void;
							onChargeTokenComplete(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
							onChargeCardSuccessful(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
							onAVS_VBVSECURECODEModelSuggested(param0: com.flutterwave.raveandroid.Payload): void;
							onVBVAuthModelUsed(param0: string, param1: string): void;
							showOTPLayout(param0: string, param1: string): void;
							onValidateSuccessful(param0: string, param1: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload, param2: number): void;
							onPaymentFailed(param0: string, param1: string): void;
							onTokenRetrieved(param0: string, param1: string, param2: string): void;
							onAVSVBVSecureCodeModelUsed(param0: string, param1: string): void;
							onValidateCardChargeFailed(param0: string, param1: string): void;
							onNoAuthInternationalSuggested(param0: com.flutterwave.raveandroid.Payload): void;
							onNoAuthUsed(param0: string, param1: string): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
							onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: string): void;
						});
						public constructor();
						public onValidateError(param0: string): void;
						public showFetchFeeFailed(param0: string): void;
						public onChargeCardSuccessful(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
						public onNoAuthInternationalSuggested(param0: com.flutterwave.raveandroid.Payload): void;
						public onTokenRetrieved(param0: string, param1: string, param2: string): void;
						public showSavedCards(param0: java.util.List<com.flutterwave.raveandroid.data.SavedCard>): void;
						public onAVSVBVSecureCodeModelUsed(param0: string, param1: string): void;
						public onPaymentError(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload, param2: number): void;
						public onAVS_VBVSECURECODEModelSuggested(param0: com.flutterwave.raveandroid.Payload): void;
						public onValidateSuccessful(param0: string, param1: string): void;
						public showOTPLayout(param0: string, param1: string): void;
						public onAmountValidated(param0: string, param1: number): void;
						public onNoAuthUsed(param0: string, param1: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public onTokenRetrievalError(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onValidateCardChargeFailed(param0: string, param1: string): void;
						public onPinAuthModelSuggested(param0: com.flutterwave.raveandroid.Payload): void;
						public onChargeTokenComplete(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
						public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: string): void;
						public onVBVAuthModelUsed(param0: string, param1: string): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onEmailValidated(param0: string, param1: number): void;
						public showProgressIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class CardFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.card.CardContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardFragment>;
					public static FOR_PIN: number;
					public static FOR_OTP: number;
					public static FOR_AVBVV: number;
					public static FOR_INTERNET_BANKING: number;
					public static INTENT_SENDER: string;
					public onTokenRetrievalError(param0: string): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onChargeTokenComplete(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
					public onEmailValidated(param0: string, param1: number): void;
					public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: string): void;
					public onVBVAuthModelUsed(param0: string, param1: string): void;
					public onNoAuthUsed(param0: string, param1: string): void;
					public showProgressIndicator(param0: boolean): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public showOTPLayout(param0: string, param1: string): void;
					public onPinAuthModelSuggested(param0: com.flutterwave.raveandroid.Payload): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public showSavedCards(param0: java.util.List<com.flutterwave.raveandroid.data.SavedCard>): void;
					public onAVSVBVSecureCodeModelUsed(param0: string, param1: string): void;
					public constructor();
					public getViewModelStore(): any;
					public onDetach(): void;
					public onTokenRetrieved(param0: string, param1: string, param2: string): void;
					public onChargeCardSuccessful(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
					public onAVS_VBVSECURECODEModelSuggested(param0: com.flutterwave.raveandroid.Payload): void;
					public onValidateCardChargeFailed(param0: string, param1: string): void;
					public showFetchFeeFailed(param0: string): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onValidateSuccessful(param0: string, param1: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public onValidateError(param0: string): void;
					public onPaymentError(param0: string): void;
					public onAmountValidated(param0: string, param1: number): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload, param2: number): void;
					public onNoAuthInternationalSuggested(param0: com.flutterwave.raveandroid.Payload): void;
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
				export module CardFragment {
					export class ExpiryWatcher {
						public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardFragment.ExpiryWatcher>;
						public constructor(param0: com.flutterwave.raveandroid.card.CardFragment);
						public afterTextChanged(param0: globalAndroid.text.Editable): void;
						public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class CardFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.card.CardFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardFragment_MembersInjector>;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.card.CardPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.card.CardFragment>;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.card.CardPresenter>);
					public injectMembers(param0: any): void;
					public static injectPresenter(param0: com.flutterwave.raveandroid.card.CardFragment, param1: com.flutterwave.raveandroid.card.CardPresenter): void;
					public injectMembers(param0: com.flutterwave.raveandroid.card.CardFragment): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class CardPresenter extends com.flutterwave.raveandroid.card.CardContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardPresenter>;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public verifyRequeryResponse(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: com.flutterwave.raveandroid.RavePayInitializer, param3: string): void;
					public chargeCardWithSuggestedAuthModel(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: string, param3: string): void;
					public chargeCard(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public onAttachView(param0: com.flutterwave.raveandroid.card.CardContract.View): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					public onDetachView(): void;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload, param1: number): void;
					public validateCardCharge(param0: string, param1: string, param2: string): void;
					public chargeToken(param0: com.flutterwave.raveandroid.Payload): void;
					public requeryTx(param0: string, param1: string, param2: boolean): void;
					public chargeCardWithAVSModel(param0: com.flutterwave.raveandroid.Payload, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.card.CardContract.View);
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class CardPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.card.CardPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardPresenter_Factory>;
					public get(): any;
					public get(): com.flutterwave.raveandroid.card.CardPresenter;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.card.CardContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.CvvValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardExpiryValidator>, param7: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardNoValidator>, param8: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param9: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param10: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.card.CardPresenter;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.card.CardContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.CvvValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardExpiryValidator>, param7: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardNoValidator>, param8: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param9: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param10: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.card.CardPresenter_Factory;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.card.CardContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.CvvValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardExpiryValidator>, param7: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardNoValidator>, param8: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param9: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param10: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static newCardPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.card.CardContract.View): com.flutterwave.raveandroid.card.CardPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class CardPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.card.CardPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.CardPresenter_MembersInjector>;
					public static injectCvvValidator(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.validators.CvvValidator): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public injectMembers(param0: com.flutterwave.raveandroid.card.CardPresenter): void;
					public static injectCardNoValidator(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.validators.CardNoValidator): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.CvvValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardExpiryValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardNoValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param8: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.card.CardPresenter>;
					public static injectEmailValidator(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.validators.EmailValidator): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public injectMembers(param0: any): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.CvvValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.EmailValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardExpiryValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.CardNoValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.TransactionStatusChecker>, param8: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public static injectTransactionStatusChecker(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.TransactionStatusChecker): void;
					public static injectCardExpiryValidator(param0: com.flutterwave.raveandroid.card.CardPresenter, param1: com.flutterwave.raveandroid.validators.CardExpiryValidator): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class ChargeRequestBody {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.ChargeRequestBody>;
					public getPBFPubKey(): string;
					public constructor();
					public getAlg(): string;
					public setAlg(param0: string): void;
					public setPBFPubKey(param0: string): void;
					public setClient(param0: string): void;
					public getClient(): string;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class CreditCardTextWatcher {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.CreditCardTextWatcher>;
					public afterTextChanged(param0: globalAndroid.text.Editable): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class CreditCardView extends globalAndroid.support.design.widget.TextInputEditText {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.CreditCardView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class NullCardView extends com.flutterwave.raveandroid.card.CardContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.NullCardView>;
					public onTokenRetrievalError(param0: string): void;
					public onChargeTokenComplete(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
					public onEmailValidated(param0: string, param1: number): void;
					public onRequerySuccessful(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string, param2: string): void;
					public onVBVAuthModelUsed(param0: string, param1: string): void;
					public showProgressIndicator(param0: boolean): void;
					public onNoAuthUsed(param0: string, param1: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public showOTPLayout(param0: string, param1: string): void;
					public onPinAuthModelSuggested(param0: com.flutterwave.raveandroid.Payload): void;
					public showSavedCards(param0: java.util.List<com.flutterwave.raveandroid.data.SavedCard>): void;
					public onAVSVBVSecureCodeModelUsed(param0: string, param1: string): void;
					public constructor();
					public onTokenRetrieved(param0: string, param1: string, param2: string): void;
					public onChargeCardSuccessful(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
					public onAVS_VBVSECURECODEModelSuggested(param0: com.flutterwave.raveandroid.Payload): void;
					public onValidateCardChargeFailed(param0: string, param1: string): void;
					public showFetchFeeFailed(param0: string): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onValidateSuccessful(param0: string, param1: string): void;
					public onValidateError(param0: string): void;
					public onPaymentError(param0: string): void;
					public onAmountValidated(param0: string, param1: number): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload, param2: number): void;
					public onNoAuthInternationalSuggested(param0: com.flutterwave.raveandroid.Payload): void;
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module card {
				export class SavedCardRecyclerAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.flutterwave.raveandroid.card.SavedCardRecyclerAdapter.ViewHolder> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.card.SavedCardRecyclerAdapter>;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
					public onBindViewHolder(param0: any, param1: number): void;
					public onBindViewHolder(param0: com.flutterwave.raveandroid.card.SavedCardRecyclerAdapter.ViewHolder, param1: number): void;
					public constructor();
					public getItemCount(): number;
					public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.flutterwave.raveandroid.card.SavedCardRecyclerAdapter.ViewHolder;
					public setSavedCardSelectedListener(param0: com.flutterwave.raveandroid.data.Callbacks.SavedCardSelectedListener): void;
					public set(param0: java.util.List<com.flutterwave.raveandroid.data.SavedCard>): void;
				}
				export module SavedCardRecyclerAdapter {
					export class ViewHolder extends globalAndroid.support.v7.widget.RecyclerView.ViewHolder {
						public static class: java.lang.Class<com.flutterwave.raveandroid.card.SavedCardRecyclerAdapter.ViewHolder>;
						public bind(param0: com.flutterwave.raveandroid.data.SavedCard): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class AccountRequestBody {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.AccountRequestBody>;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class ApiService {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.ApiService>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.data.ApiService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						charge(param0: com.flutterwave.raveandroid.card.ChargeRequestBody): retrofit2.Call<string>;
						chargeUK(param0: com.flutterwave.raveandroid.card.ChargeRequestBody): retrofit2.Call<string>;
						validateCardCharge(param0: com.flutterwave.raveandroid.data.ValidateChargeBody): retrofit2.Call<string>;
						validateAccountCharge(param0: com.flutterwave.raveandroid.data.ValidateChargeBody): retrofit2.Call<string>;
						requeryTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody): retrofit2.Call<string>;
						requeryPayWithBankTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody): retrofit2.Call<string>;
						requeryTx_v2(param0: com.flutterwave.raveandroid.data.RequeryRequestBodyv2): retrofit2.Call<string>;
						getBanks(): retrofit2.Call<java.util.List<com.flutterwave.raveandroid.data.Bank>>;
						chargeToken(param0: com.flutterwave.raveandroid.Payload): retrofit2.Call<string>;
						checkFee(param0: com.flutterwave.raveandroid.FeeCheckRequestBody): retrofit2.Call<com.flutterwave.raveandroid.responses.FeeCheckResponse>;
					});
					public constructor();
					public validateAccountCharge(param0: com.flutterwave.raveandroid.data.ValidateChargeBody): retrofit2.Call<string>;
					public chargeUK(param0: com.flutterwave.raveandroid.card.ChargeRequestBody): retrofit2.Call<string>;
					public checkFee(param0: com.flutterwave.raveandroid.FeeCheckRequestBody): retrofit2.Call<com.flutterwave.raveandroid.responses.FeeCheckResponse>;
					public charge(param0: com.flutterwave.raveandroid.card.ChargeRequestBody): retrofit2.Call<string>;
					public requeryTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody): retrofit2.Call<string>;
					public requeryPayWithBankTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody): retrofit2.Call<string>;
					public validateCardCharge(param0: com.flutterwave.raveandroid.data.ValidateChargeBody): retrofit2.Call<string>;
					public requeryTx_v2(param0: com.flutterwave.raveandroid.data.RequeryRequestBodyv2): retrofit2.Call<string>;
					public getBanks(): retrofit2.Call<java.util.List<com.flutterwave.raveandroid.data.Bank>>;
					public chargeToken(param0: com.flutterwave.raveandroid.Payload): retrofit2.Call<string>;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class Bank {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.Bank>;
					public getBankcode(): string;
					public constructor();
					public isInternetbanking(): boolean;
					public setInternetbanking(param0: boolean): void;
					public getBankname(): string;
					public setBankcode(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class Callbacks {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks>;
					public constructor();
				}
				export module Callbacks {
					export class BankSelectedListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.BankSelectedListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$BankSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBankSelected(param0: com.flutterwave.raveandroid.data.Bank): void;
						});
						public constructor();
						public onBankSelected(param0: com.flutterwave.raveandroid.data.Bank): void;
					}
					export class OnChargeRequestComplete {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$OnChargeRequestComplete interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.flutterwave.raveandroid.responses.ChargeResponse, param1: string): void;
							onError(param0: string, param1: string): void;
						});
						public constructor();
						public onError(param0: string, param1: string): void;
						public onSuccess(param0: com.flutterwave.raveandroid.responses.ChargeResponse, param1: string): void;
					}
					export class OnGetBanksRequestComplete {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.OnGetBanksRequestComplete>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$OnGetBanksRequestComplete interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: java.util.List<com.flutterwave.raveandroid.data.Bank>): void;
							onError(param0: string): void;
						});
						public constructor();
						public onSuccess(param0: java.util.List<com.flutterwave.raveandroid.data.Bank>): void;
						public onError(param0: string): void;
					}
					export class OnGetFeeRequestComplete {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.OnGetFeeRequestComplete>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$OnGetFeeRequestComplete interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.flutterwave.raveandroid.responses.FeeCheckResponse): void;
							onError(param0: string): void;
						});
						public constructor();
						public onSuccess(param0: com.flutterwave.raveandroid.responses.FeeCheckResponse): void;
						public onError(param0: string): void;
					}
					export class OnGhanaChargeRequestComplete {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.OnGhanaChargeRequestComplete>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$OnGhanaChargeRequestComplete interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.flutterwave.raveandroid.responses.MobileMoneyChargeResponse, param1: string): void;
							onError(param0: string, param1: string): void;
						});
						public constructor();
						public onSuccess(param0: com.flutterwave.raveandroid.responses.MobileMoneyChargeResponse, param1: string): void;
						public onError(param0: string, param1: string): void;
					}
					export class OnRequeryRequestComplete {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestComplete>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$OnRequeryRequestComplete interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string): void;
							onError(param0: string, param1: string): void;
						});
						public constructor();
						public onSuccess(param0: com.flutterwave.raveandroid.responses.RequeryResponse, param1: string): void;
						public onError(param0: string, param1: string): void;
					}
					export class OnRequeryRequestv2Complete {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestv2Complete>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$OnRequeryRequestv2Complete interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.flutterwave.raveandroid.responses.RequeryResponsev2, param1: string): void;
							onError(param0: string, param1: string): void;
						});
						public constructor();
						public onSuccess(param0: com.flutterwave.raveandroid.responses.RequeryResponsev2, param1: string): void;
						public onError(param0: string, param1: string): void;
					}
					export class OnValidateChargeCardRequestComplete {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.OnValidateChargeCardRequestComplete>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$OnValidateChargeCardRequestComplete interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.flutterwave.raveandroid.responses.ChargeResponse, param1: string): void;
							onError(param0: string, param1: string): void;
						});
						public constructor();
						public onError(param0: string, param1: string): void;
						public onSuccess(param0: com.flutterwave.raveandroid.responses.ChargeResponse, param1: string): void;
					}
					export class SavedCardSelectedListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.Callbacks.SavedCardSelectedListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.Callbacks$SavedCardSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCardSelected(param0: com.flutterwave.raveandroid.data.SavedCard): void;
						});
						public constructor();
						public onCardSelected(param0: com.flutterwave.raveandroid.data.SavedCard): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class CardDetsToSave {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.CardDetsToSave>;
					public constructor(param0: string, param1: string);
					public getFirst6(): string;
					public getLast4(): string;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class DataRequest {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.DataRequest>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.data.DataRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module DataRequest {
					export class NetworkRequest {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.DataRequest.NetworkRequest>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.DataRequest$NetworkRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							chargeCard(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
							chargeUK(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
							chargeMobileMoneyWallet(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnGhanaChargeRequestComplete): void;
							validateChargeCard(param0: com.flutterwave.raveandroid.data.ValidateChargeBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnValidateChargeCardRequestComplete): void;
							validateAccountCard(param0: com.flutterwave.raveandroid.data.ValidateChargeBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnValidateChargeCardRequestComplete): void;
							requeryTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestComplete): void;
							requeryPayWithBankTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestComplete): void;
							requeryTxv2(param0: com.flutterwave.raveandroid.data.RequeryRequestBodyv2, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestv2Complete): void;
							getBanks(param0: com.flutterwave.raveandroid.data.Callbacks.OnGetBanksRequestComplete): void;
							chargeAccount(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
							chargeToken(param0: com.flutterwave.raveandroid.Payload, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
							getFee(param0: com.flutterwave.raveandroid.FeeCheckRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnGetFeeRequestComplete): void;
						});
						public constructor();
						public chargeUK(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
						public getFee(param0: com.flutterwave.raveandroid.FeeCheckRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnGetFeeRequestComplete): void;
						public validateAccountCard(param0: com.flutterwave.raveandroid.data.ValidateChargeBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnValidateChargeCardRequestComplete): void;
						public chargeToken(param0: com.flutterwave.raveandroid.Payload, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
						public chargeAccount(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
						public requeryTxv2(param0: com.flutterwave.raveandroid.data.RequeryRequestBodyv2, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestv2Complete): void;
						public getBanks(param0: com.flutterwave.raveandroid.data.Callbacks.OnGetBanksRequestComplete): void;
						public chargeCard(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
						public chargeMobileMoneyWallet(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnGhanaChargeRequestComplete): void;
						public requeryTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestComplete): void;
						public requeryPayWithBankTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestComplete): void;
						public validateChargeCard(param0: com.flutterwave.raveandroid.data.ValidateChargeBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnValidateChargeCardRequestComplete): void;
					}
					export class SharedPrefsRequest {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.DataRequest.SharedPrefsRequest>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.data.DataRequest$SharedPrefsRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							saveCardDetsToSave(param0: com.flutterwave.raveandroid.data.CardDetsToSave): void;
							retrieveCardDetsToSave(): com.flutterwave.raveandroid.data.CardDetsToSave;
							saveACard(param0: com.flutterwave.raveandroid.data.SavedCard, param1: string, param2: string): void;
							getSavedCards(param0: string): java.util.List<com.flutterwave.raveandroid.data.SavedCard>;
							saveFlwRef(param0: string): void;
							fetchFlwRef(): string;
						});
						public constructor();
						public fetchFlwRef(): string;
						public saveFlwRef(param0: string): void;
						public retrieveCardDetsToSave(): com.flutterwave.raveandroid.data.CardDetsToSave;
						public saveACard(param0: com.flutterwave.raveandroid.data.SavedCard, param1: string, param2: string): void;
						public getSavedCards(param0: string): java.util.List<com.flutterwave.raveandroid.data.SavedCard>;
						public saveCardDetsToSave(param0: com.flutterwave.raveandroid.data.CardDetsToSave): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class ErrorBody {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.ErrorBody>;
					public constructor(param0: string, param1: string);
					public setStatus(param0: string): void;
					public getData(): com.flutterwave.raveandroid.data.ErrorBody.Data;
					public getMessage(): string;
					public getStatus(): string;
					public setMessage(param0: string): void;
				}
				export module ErrorBody {
					export class Data {
						public static class: java.lang.Class<com.flutterwave.raveandroid.data.ErrorBody.Data>;
						public constructor();
						public getCode(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class FeePayload {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.FeePayload>;
					public getPBFPubKey(): string;
					public getCard6(): string;
					public setPtype(param0: string): void;
					public constructor();
					public getCurrency(): string;
					public setPBFPubKey(param0: string): void;
					public getPtype(): string;
					public getAmount(): string;
					public setAmount(param0: string): void;
					public setCurrency(param0: string): void;
					public setCard6(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class NetworkRequestImpl extends com.flutterwave.raveandroid.data.DataRequest.NetworkRequest {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.NetworkRequestImpl>;
					public requeryTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestComplete): void;
					public chargeUK(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
					public validateAccountCard(param0: com.flutterwave.raveandroid.data.ValidateChargeBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnValidateChargeCardRequestComplete): void;
					public chargeAccount(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
					public requeryPayWithBankTx(param0: com.flutterwave.raveandroid.data.RequeryRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestComplete): void;
					public constructor(param0: retrofit2.Retrofit, param1: com.flutterwave.raveandroid.data.ApiService, param2: com.google.gson.Gson);
					public getBanks(param0: com.flutterwave.raveandroid.data.Callbacks.OnGetBanksRequestComplete): void;
					public constructor(param0: boolean);
					public chargeToken(param0: com.flutterwave.raveandroid.Payload, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
					public getFee(param0: com.flutterwave.raveandroid.FeeCheckRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnGetFeeRequestComplete): void;
					public validateChargeCard(param0: com.flutterwave.raveandroid.data.ValidateChargeBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnValidateChargeCardRequestComplete): void;
					public chargeMobileMoneyWallet(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnGhanaChargeRequestComplete): void;
					public chargeCard(param0: com.flutterwave.raveandroid.card.ChargeRequestBody, param1: com.flutterwave.raveandroid.data.Callbacks.OnChargeRequestComplete): void;
					public requeryTxv2(param0: com.flutterwave.raveandroid.data.RequeryRequestBodyv2, param1: com.flutterwave.raveandroid.data.Callbacks.OnRequeryRequestv2Complete): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class NetworkRequestImpl_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.data.NetworkRequestImpl> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.NetworkRequestImpl_Factory>;
					public get(): com.flutterwave.raveandroid.data.NetworkRequestImpl;
					public get(): any;
					public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<com.flutterwave.raveandroid.data.ApiService>, param2: javax.inject.Provider<com.google.gson.Gson>);
					public static create(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<com.flutterwave.raveandroid.data.ApiService>, param2: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.data.NetworkRequestImpl_Factory;
					public static newNetworkRequestImpl(param0: retrofit2.Retrofit, param1: com.flutterwave.raveandroid.data.ApiService, param2: com.google.gson.Gson): com.flutterwave.raveandroid.data.NetworkRequestImpl;
					public static provideInstance(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<com.flutterwave.raveandroid.data.ApiService>, param2: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.data.NetworkRequestImpl;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class RequeryRequestBody {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.RequeryRequestBody>;
					public getPBFPubKey(): string;
					public constructor();
					public setPBFPubKey(param0: string): void;
					public setFlw_ref(param0: string): void;
					public getFlw_ref(): string;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class RequeryRequestBodyv2 {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.RequeryRequestBodyv2>;
					public setSECKEY(param0: string): void;
					public getTxref(): string;
					public setTxref(param0: string): void;
					public constructor();
					public getSECKEY(): string;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class SavedCard {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.SavedCard>;
					public setFirst6(param0: string): void;
					public constructor();
					public getToken(): string;
					public setCardType(param0: string): void;
					public setToken(param0: string): void;
					public getCardType(): string;
					public setLast4(param0: string): void;
					public getFlwRef(): string;
					public getFirst6(): string;
					public setFlwRef(param0: string): void;
					public getLast4(): string;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class SharedPrefsRequestImpl extends com.flutterwave.raveandroid.data.DataRequest.SharedPrefsRequest {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.SharedPrefsRequestImpl>;
					public context: globalAndroid.content.Context;
					public fetchFlwRef(): string;
					public constructor(param0: globalAndroid.content.Context, param1: com.google.gson.Gson);
					public saveCardDetsToSave(param0: com.flutterwave.raveandroid.data.CardDetsToSave): void;
					public saveACard(param0: com.flutterwave.raveandroid.data.SavedCard, param1: string, param2: string): void;
					public getSavedCards(param0: string): java.util.List<com.flutterwave.raveandroid.data.SavedCard>;
					public retrieveCardDetsToSave(): com.flutterwave.raveandroid.data.CardDetsToSave;
					public saveFlwRef(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class SharedPrefsRequestImpl_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.data.SharedPrefsRequestImpl> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.SharedPrefsRequestImpl_Factory>;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.data.SharedPrefsRequestImpl;
					public get(): any;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.google.gson.Gson>): com.flutterwave.raveandroid.data.SharedPrefsRequestImpl_Factory;
					public static newSharedPrefsRequestImpl(param0: globalAndroid.content.Context, param1: com.google.gson.Gson): com.flutterwave.raveandroid.data.SharedPrefsRequestImpl;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.google.gson.Gson>);
					public get(): com.flutterwave.raveandroid.data.SharedPrefsRequestImpl;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module data {
				export class ValidateChargeBody {
					public static class: java.lang.Class<com.flutterwave.raveandroid.data.ValidateChargeBody>;
					public getPBFPubKey(): string;
					public getTransaction_reference(): string;
					public getOtp(): string;
					public constructor();
					public setPBFPubKey(param0: string): void;
					public setOtp(param0: string): void;
					public getTransactionreference(): string;
					public setTransaction_reference(param0: string): void;
					public setTransactionreference(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class AccountComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.AccountComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.AccountComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.account.AccountFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.account.AccountFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class AchComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.AchComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.AchComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.ach.AchFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.ach.AchFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class AppComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.AppComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.AppComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							networkImpl(): com.flutterwave.raveandroid.data.NetworkRequestImpl;
							inject(param0: com.flutterwave.raveandroid.RavePayActivity): void;
							plus(param0: com.flutterwave.raveandroid.di.modules.MpesaModule): com.flutterwave.raveandroid.di.components.MpesaComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.UgandaModule): com.flutterwave.raveandroid.di.components.UgandaComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.RwandaModule): com.flutterwave.raveandroid.di.components.RwandaComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.GhanaModule): com.flutterwave.raveandroid.di.components.GhanaComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.ZambiaModule): com.flutterwave.raveandroid.di.components.ZambiaComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.CardModule): com.flutterwave.raveandroid.di.components.CardComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.BankTransferModule): com.flutterwave.raveandroid.di.components.BankTransferComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.UssdModule): com.flutterwave.raveandroid.di.components.UssdComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.AccountModule): com.flutterwave.raveandroid.di.components.AccountComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.AchModule): com.flutterwave.raveandroid.di.components.AchComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.UkModule): com.flutterwave.raveandroid.di.components.UkComponent;
							plus(param0: com.flutterwave.raveandroid.di.modules.FrancModule): com.flutterwave.raveandroid.di.components.FrancComponent;
						});
						public constructor();
						public plus(param0: com.flutterwave.raveandroid.di.modules.FrancModule): com.flutterwave.raveandroid.di.components.FrancComponent;
						public networkImpl(): com.flutterwave.raveandroid.data.NetworkRequestImpl;
						public plus(param0: com.flutterwave.raveandroid.di.modules.AccountModule): com.flutterwave.raveandroid.di.components.AccountComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.MpesaModule): com.flutterwave.raveandroid.di.components.MpesaComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.AchModule): com.flutterwave.raveandroid.di.components.AchComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.UssdModule): com.flutterwave.raveandroid.di.components.UssdComponent;
						public inject(param0: com.flutterwave.raveandroid.RavePayActivity): void;
						public plus(param0: com.flutterwave.raveandroid.di.modules.UgandaModule): com.flutterwave.raveandroid.di.components.UgandaComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.CardModule): com.flutterwave.raveandroid.di.components.CardComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.GhanaModule): com.flutterwave.raveandroid.di.components.GhanaComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.UkModule): com.flutterwave.raveandroid.di.components.UkComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.RwandaModule): com.flutterwave.raveandroid.di.components.RwandaComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.BankTransferModule): com.flutterwave.raveandroid.di.components.BankTransferComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.ZambiaModule): com.flutterwave.raveandroid.di.components.ZambiaComponent;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class BankTransferComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.BankTransferComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.BankTransferComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.banktransfer.BankTransferFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.banktransfer.BankTransferFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class CardComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.CardComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.CardComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.card.CardFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.card.CardFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class DaggerAppComponent extends com.flutterwave.raveandroid.di.components.AppComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent>;
						public plus(param0: com.flutterwave.raveandroid.di.modules.FrancModule): com.flutterwave.raveandroid.di.components.FrancComponent;
						public networkImpl(): com.flutterwave.raveandroid.data.NetworkRequestImpl;
						public static builder(): com.flutterwave.raveandroid.di.components.DaggerAppComponent.Builder;
						public plus(param0: com.flutterwave.raveandroid.di.modules.AccountModule): com.flutterwave.raveandroid.di.components.AccountComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.MpesaModule): com.flutterwave.raveandroid.di.components.MpesaComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.AchModule): com.flutterwave.raveandroid.di.components.AchComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.UssdModule): com.flutterwave.raveandroid.di.components.UssdComponent;
						public inject(param0: com.flutterwave.raveandroid.RavePayActivity): void;
						public plus(param0: com.flutterwave.raveandroid.di.modules.UgandaModule): com.flutterwave.raveandroid.di.components.UgandaComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.CardModule): com.flutterwave.raveandroid.di.components.CardComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.GhanaModule): com.flutterwave.raveandroid.di.components.GhanaComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.UkModule): com.flutterwave.raveandroid.di.components.UkComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.RwandaModule): com.flutterwave.raveandroid.di.components.RwandaComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.BankTransferModule): com.flutterwave.raveandroid.di.components.BankTransferComponent;
						public plus(param0: com.flutterwave.raveandroid.di.modules.ZambiaModule): com.flutterwave.raveandroid.di.components.ZambiaComponent;
					}
					export module DaggerAppComponent {
						export class AccountComponentImpl extends com.flutterwave.raveandroid.di.components.AccountComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.AccountComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.account.AccountFragment): void;
						}
						export class AchComponentImpl extends com.flutterwave.raveandroid.di.components.AchComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.AchComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.ach.AchFragment): void;
						}
						export class BankTransferComponentImpl extends com.flutterwave.raveandroid.di.components.BankTransferComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.BankTransferComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.banktransfer.BankTransferFragment): void;
						}
						export class Builder {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.Builder>;
							public build(): com.flutterwave.raveandroid.di.components.AppComponent;
							public networkModule(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): com.flutterwave.raveandroid.di.components.DaggerAppComponent.Builder;
							public androidModule(param0: com.flutterwave.raveandroid.di.modules.AndroidModule): com.flutterwave.raveandroid.di.components.DaggerAppComponent.Builder;
						}
						export class CardComponentImpl extends com.flutterwave.raveandroid.di.components.CardComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.CardComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.card.CardFragment): void;
						}
						export class FrancComponentImpl extends com.flutterwave.raveandroid.di.components.FrancComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.FrancComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment): void;
						}
						export class GhanaComponentImpl extends com.flutterwave.raveandroid.di.components.GhanaComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.GhanaComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment): void;
						}
						export class MpesaComponentImpl extends com.flutterwave.raveandroid.di.components.MpesaComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.MpesaComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.mpesa.MpesaFragment): void;
						}
						export class RwandaComponentImpl extends com.flutterwave.raveandroid.di.components.RwandaComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.RwandaComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment): void;
						}
						export class UgandaComponentImpl extends com.flutterwave.raveandroid.di.components.UgandaComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.UgandaComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment): void;
						}
						export class UkComponentImpl extends com.flutterwave.raveandroid.di.components.UkComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.UkComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.uk.UkFragment): void;
						}
						export class UssdComponentImpl extends com.flutterwave.raveandroid.di.components.UssdComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.UssdComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.ussd.UssdFragment): void;
						}
						export class ZambiaComponentImpl extends com.flutterwave.raveandroid.di.components.ZambiaComponent {
							public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.DaggerAppComponent.ZambiaComponentImpl>;
							public inject(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class FrancComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.FrancComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.FrancComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class GhanaComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.GhanaComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.GhanaComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class MpesaComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.MpesaComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.MpesaComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.mpesa.MpesaFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.mpesa.MpesaFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class RwandaComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.RwandaComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.RwandaComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class UgandaComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.UgandaComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.UgandaComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class UkComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.UkComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.UkComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.uk.UkFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.uk.UkFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class UssdComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.UssdComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.UssdComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.ussd.UssdFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.ussd.UssdFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module components {
					export class ZambiaComponent {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.components.ZambiaComponent>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.components.ZambiaComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inject(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment): void;
						});
						public constructor();
						public inject(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AccountModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AccountModule>;
						public providesContract(): com.flutterwave.raveandroid.account.AccountContract.View;
						public constructor(param0: com.flutterwave.raveandroid.account.AccountContract.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AccountModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.AccountModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AccountModule_Factory>;
						public static newAccountModule(param0: com.flutterwave.raveandroid.account.AccountContract.View): com.flutterwave.raveandroid.di.modules.AccountModule;
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.account.AccountContract.View>): com.flutterwave.raveandroid.di.modules.AccountModule;
						public get(): com.flutterwave.raveandroid.di.modules.AccountModule;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.account.AccountContract.View>);
						public get(): any;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.account.AccountContract.View>): com.flutterwave.raveandroid.di.modules.AccountModule_Factory;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AccountModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.account.AccountContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AccountModule_ProvidesContractFactory>;
						public static create(param0: com.flutterwave.raveandroid.di.modules.AccountModule): com.flutterwave.raveandroid.di.modules.AccountModule_ProvidesContractFactory;
						public get(): com.flutterwave.raveandroid.account.AccountContract.View;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.AccountModule): com.flutterwave.raveandroid.account.AccountContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.AccountModule);
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.AccountModule): com.flutterwave.raveandroid.account.AccountContract.View;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AchModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AchModule>;
						public constructor(param0: com.flutterwave.raveandroid.ach.AchContract.View);
						public providesContract(): com.flutterwave.raveandroid.ach.AchContract.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AchModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.AchModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AchModule_Factory>;
						public static newAchModule(param0: com.flutterwave.raveandroid.ach.AchContract.View): com.flutterwave.raveandroid.di.modules.AchModule;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.ach.AchContract.View>);
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.ach.AchContract.View>): com.flutterwave.raveandroid.di.modules.AchModule;
						public get(): com.flutterwave.raveandroid.di.modules.AchModule;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.ach.AchContract.View>): com.flutterwave.raveandroid.di.modules.AchModule_Factory;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AchModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.ach.AchContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AchModule_ProvidesContractFactory>;
						public get(): com.flutterwave.raveandroid.ach.AchContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.AchModule);
						public static create(param0: com.flutterwave.raveandroid.di.modules.AchModule): com.flutterwave.raveandroid.di.modules.AchModule_ProvidesContractFactory;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.AchModule): com.flutterwave.raveandroid.ach.AchContract.View;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.AchModule): com.flutterwave.raveandroid.ach.AchContract.View;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AndroidModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AndroidModule>;
						public providesTelephonyManager(param0: globalAndroid.content.Context): globalAndroid.telephony.TelephonyManager;
						public constructor(param0: globalAndroid.content.Context);
						public providesContext(): globalAndroid.content.Context;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AndroidModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.AndroidModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AndroidModule_Factory>;
						public static newAndroidModule(param0: globalAndroid.content.Context): com.flutterwave.raveandroid.di.modules.AndroidModule;
						public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): com.flutterwave.raveandroid.di.modules.AndroidModule_Factory;
						public get(): com.flutterwave.raveandroid.di.modules.AndroidModule;
						public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>): com.flutterwave.raveandroid.di.modules.AndroidModule;
						public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AndroidModule_ProvidesContextFactory extends dagger.internal.Factory<globalAndroid.content.Context> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AndroidModule_ProvidesContextFactory>;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.AndroidModule): globalAndroid.content.Context;
						public get(): globalAndroid.content.Context;
						public static proxyProvidesContext(param0: com.flutterwave.raveandroid.di.modules.AndroidModule): globalAndroid.content.Context;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.AndroidModule);
						public static create(param0: com.flutterwave.raveandroid.di.modules.AndroidModule): com.flutterwave.raveandroid.di.modules.AndroidModule_ProvidesContextFactory;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class AndroidModule_ProvidesTelephonyManagerFactory extends dagger.internal.Factory<globalAndroid.telephony.TelephonyManager> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.AndroidModule_ProvidesTelephonyManagerFactory>;
						public static create(param0: com.flutterwave.raveandroid.di.modules.AndroidModule, param1: javax.inject.Provider<globalAndroid.content.Context>): com.flutterwave.raveandroid.di.modules.AndroidModule_ProvidesTelephonyManagerFactory;
						public static proxyProvidesTelephonyManager(param0: com.flutterwave.raveandroid.di.modules.AndroidModule, param1: globalAndroid.content.Context): globalAndroid.telephony.TelephonyManager;
						public get(): globalAndroid.telephony.TelephonyManager;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.AndroidModule, param1: javax.inject.Provider<globalAndroid.content.Context>): globalAndroid.telephony.TelephonyManager;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.AndroidModule, param1: javax.inject.Provider<globalAndroid.content.Context>);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class BankTransferModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.BankTransferModule>;
						public providesContract(): com.flutterwave.raveandroid.banktransfer.BankTransferContract.View;
						public constructor(param0: com.flutterwave.raveandroid.banktransfer.BankTransferContract.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class BankTransferModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.BankTransferModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.BankTransferModule_Factory>;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.banktransfer.BankTransferContract.View>);
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.banktransfer.BankTransferContract.View>): com.flutterwave.raveandroid.di.modules.BankTransferModule_Factory;
						public get(): com.flutterwave.raveandroid.di.modules.BankTransferModule;
						public static newBankTransferModule(param0: com.flutterwave.raveandroid.banktransfer.BankTransferContract.View): com.flutterwave.raveandroid.di.modules.BankTransferModule;
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.banktransfer.BankTransferContract.View>): com.flutterwave.raveandroid.di.modules.BankTransferModule;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class BankTransferModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.banktransfer.BankTransferContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.BankTransferModule_ProvidesContractFactory>;
						public get(): com.flutterwave.raveandroid.banktransfer.BankTransferContract.View;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.BankTransferModule): com.flutterwave.raveandroid.banktransfer.BankTransferContract.View;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.BankTransferModule): com.flutterwave.raveandroid.banktransfer.BankTransferContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.BankTransferModule);
						public static create(param0: com.flutterwave.raveandroid.di.modules.BankTransferModule): com.flutterwave.raveandroid.di.modules.BankTransferModule_ProvidesContractFactory;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class CardModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.CardModule>;
						public providesContract(): com.flutterwave.raveandroid.card.CardContract.View;
						public constructor(param0: com.flutterwave.raveandroid.card.CardContract.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class CardModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.CardModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.CardModule_Factory>;
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.card.CardContract.View>): com.flutterwave.raveandroid.di.modules.CardModule;
						public get(): com.flutterwave.raveandroid.di.modules.CardModule;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.card.CardContract.View>);
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.card.CardContract.View>): com.flutterwave.raveandroid.di.modules.CardModule_Factory;
						public get(): any;
						public static newCardModule(param0: com.flutterwave.raveandroid.card.CardContract.View): com.flutterwave.raveandroid.di.modules.CardModule;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class CardModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.card.CardContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.CardModule_ProvidesContractFactory>;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.CardModule): com.flutterwave.raveandroid.card.CardContract.View;
						public get(): com.flutterwave.raveandroid.card.CardContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.CardModule);
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.CardModule): com.flutterwave.raveandroid.card.CardContract.View;
						public static create(param0: com.flutterwave.raveandroid.di.modules.CardModule): com.flutterwave.raveandroid.di.modules.CardModule_ProvidesContractFactory;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class FrancModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.FrancModule>;
						public constructor(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View);
						public providesContract(): com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class FrancModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.FrancModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.FrancModule_Factory>;
						public static newFrancModule(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View): com.flutterwave.raveandroid.di.modules.FrancModule;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.FrancModule_Factory;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View>);
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.FrancModule;
						public get(): com.flutterwave.raveandroid.di.modules.FrancModule;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class FrancModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.FrancModule_ProvidesContractFactory>;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.FrancModule): com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View;
						public static create(param0: com.flutterwave.raveandroid.di.modules.FrancModule): com.flutterwave.raveandroid.di.modules.FrancModule_ProvidesContractFactory;
						public get(): com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.FrancModule): com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View;
						public get(): any;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.FrancModule);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class GhanaModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.GhanaModule>;
						public providesContract(): com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View;
						public constructor(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class GhanaModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.GhanaModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.GhanaModule_Factory>;
						public get(): com.flutterwave.raveandroid.di.modules.GhanaModule;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.GhanaModule_Factory;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View>);
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.GhanaModule;
						public static newGhanaModule(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View): com.flutterwave.raveandroid.di.modules.GhanaModule;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class GhanaModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.GhanaModule_ProvidesContractFactory>;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.GhanaModule): com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.GhanaModule);
						public static create(param0: com.flutterwave.raveandroid.di.modules.GhanaModule): com.flutterwave.raveandroid.di.modules.GhanaModule_ProvidesContractFactory;
						public get(): com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.GhanaModule): com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class MpesaModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.MpesaModule>;
						public constructor(param0: com.flutterwave.raveandroid.mpesa.MpesaContract.View);
						public providesContract(): com.flutterwave.raveandroid.mpesa.MpesaContract.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class MpesaModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.MpesaModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.MpesaModule_Factory>;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.mpesa.MpesaContract.View>);
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.mpesa.MpesaContract.View>): com.flutterwave.raveandroid.di.modules.MpesaModule;
						public get(): com.flutterwave.raveandroid.di.modules.MpesaModule;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.mpesa.MpesaContract.View>): com.flutterwave.raveandroid.di.modules.MpesaModule_Factory;
						public static newMpesaModule(param0: com.flutterwave.raveandroid.mpesa.MpesaContract.View): com.flutterwave.raveandroid.di.modules.MpesaModule;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class MpesaModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.mpesa.MpesaContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.MpesaModule_ProvidesContractFactory>;
						public static create(param0: com.flutterwave.raveandroid.di.modules.MpesaModule): com.flutterwave.raveandroid.di.modules.MpesaModule_ProvidesContractFactory;
						public get(): com.flutterwave.raveandroid.mpesa.MpesaContract.View;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.MpesaModule): com.flutterwave.raveandroid.mpesa.MpesaContract.View;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.MpesaModule): com.flutterwave.raveandroid.mpesa.MpesaContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.MpesaModule);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class NetworkModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.NetworkModule>;
						public constructor();
						public gson(): com.google.gson.Gson;
						public providesRetrofit(): retrofit2.Retrofit;
						public constructor(param0: string);
						public providesApiService(): com.flutterwave.raveandroid.data.ApiService;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class NetworkModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.NetworkModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.NetworkModule_Factory>;
						public constructor(param0: javax.inject.Provider<string>);
						public get(): com.flutterwave.raveandroid.di.modules.NetworkModule;
						public static provideInstance(param0: javax.inject.Provider<string>): com.flutterwave.raveandroid.di.modules.NetworkModule;
						public static create(param0: javax.inject.Provider<string>): com.flutterwave.raveandroid.di.modules.NetworkModule_Factory;
						public static newNetworkModule(param0: string): com.flutterwave.raveandroid.di.modules.NetworkModule;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class NetworkModule_GsonFactory extends dagger.internal.Factory<com.google.gson.Gson> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.NetworkModule_GsonFactory>;
						public get(): com.google.gson.Gson;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.NetworkModule);
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): com.google.gson.Gson;
						public static create(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): com.flutterwave.raveandroid.di.modules.NetworkModule_GsonFactory;
						public static proxyGson(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): com.google.gson.Gson;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class NetworkModule_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.di.modules.NetworkModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.NetworkModule_MembersInjector>;
						public constructor(param0: javax.inject.Provider<string>);
						public static create(param0: javax.inject.Provider<string>): dagger.MembersInjector<com.flutterwave.raveandroid.di.modules.NetworkModule>;
						public static injectBaseUrl(param0: com.flutterwave.raveandroid.di.modules.NetworkModule, param1: string): void;
						public injectMembers(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): void;
						public injectMembers(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class NetworkModule_ProvidesApiServiceFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.data.ApiService> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.NetworkModule_ProvidesApiServiceFactory>;
						public get(): com.flutterwave.raveandroid.data.ApiService;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.NetworkModule);
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): com.flutterwave.raveandroid.data.ApiService;
						public static create(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): com.flutterwave.raveandroid.di.modules.NetworkModule_ProvidesApiServiceFactory;
						public static proxyProvidesApiService(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): com.flutterwave.raveandroid.data.ApiService;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class NetworkModule_ProvidesRetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.NetworkModule_ProvidesRetrofitFactory>;
						public static create(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): com.flutterwave.raveandroid.di.modules.NetworkModule_ProvidesRetrofitFactory;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): retrofit2.Retrofit;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.NetworkModule);
						public static proxyProvidesRetrofit(param0: com.flutterwave.raveandroid.di.modules.NetworkModule): retrofit2.Retrofit;
						public get(): retrofit2.Retrofit;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class RwandaModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.RwandaModule>;
						public constructor(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View);
						public providesContract(): com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class RwandaModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.RwandaModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.RwandaModule_Factory>;
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.RwandaModule;
						public get(): com.flutterwave.raveandroid.di.modules.RwandaModule;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.RwandaModule_Factory;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View>);
						public static newRwandaModule(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View): com.flutterwave.raveandroid.di.modules.RwandaModule;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class RwandaModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.RwandaModule_ProvidesContractFactory>;
						public get(): com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.RwandaModule);
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.RwandaModule): com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.RwandaModule): com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View;
						public static create(param0: com.flutterwave.raveandroid.di.modules.RwandaModule): com.flutterwave.raveandroid.di.modules.RwandaModule_ProvidesContractFactory;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UgandaModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UgandaModule>;
						public providesContract(): com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View;
						public constructor(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UgandaModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.UgandaModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UgandaModule_Factory>;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.UgandaModule_Factory;
						public get(): com.flutterwave.raveandroid.di.modules.UgandaModule;
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.UgandaModule;
						public static newUgandaModule(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View): com.flutterwave.raveandroid.di.modules.UgandaModule;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View>);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UgandaModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UgandaModule_ProvidesContractFactory>;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.UgandaModule): com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View;
						public static create(param0: com.flutterwave.raveandroid.di.modules.UgandaModule): com.flutterwave.raveandroid.di.modules.UgandaModule_ProvidesContractFactory;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.UgandaModule): com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.UgandaModule);
						public get(): com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UkModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UkModule>;
						public constructor(param0: com.flutterwave.raveandroid.uk.UkContract.View);
						public providesContract(): com.flutterwave.raveandroid.uk.UkContract.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UkModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.UkModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UkModule_Factory>;
						public get(): com.flutterwave.raveandroid.di.modules.UkModule;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.uk.UkContract.View>): com.flutterwave.raveandroid.di.modules.UkModule_Factory;
						public static newUkModule(param0: com.flutterwave.raveandroid.uk.UkContract.View): com.flutterwave.raveandroid.di.modules.UkModule;
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.uk.UkContract.View>): com.flutterwave.raveandroid.di.modules.UkModule;
						public get(): any;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.uk.UkContract.View>);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UkModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.uk.UkContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UkModule_ProvidesContractFactory>;
						public static create(param0: com.flutterwave.raveandroid.di.modules.UkModule): com.flutterwave.raveandroid.di.modules.UkModule_ProvidesContractFactory;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.UkModule): com.flutterwave.raveandroid.uk.UkContract.View;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.UkModule): com.flutterwave.raveandroid.uk.UkContract.View;
						public get(): com.flutterwave.raveandroid.uk.UkContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.UkModule);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UssdModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UssdModule>;
						public providesContract(): com.flutterwave.raveandroid.ussd.UssdContract.View;
						public constructor(param0: com.flutterwave.raveandroid.ussd.UssdContract.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UssdModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.UssdModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UssdModule_Factory>;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.ussd.UssdContract.View>): com.flutterwave.raveandroid.di.modules.UssdModule_Factory;
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.ussd.UssdContract.View>): com.flutterwave.raveandroid.di.modules.UssdModule;
						public get(): com.flutterwave.raveandroid.di.modules.UssdModule;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.ussd.UssdContract.View>);
						public static newUssdModule(param0: com.flutterwave.raveandroid.ussd.UssdContract.View): com.flutterwave.raveandroid.di.modules.UssdModule;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class UssdModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.ussd.UssdContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.UssdModule_ProvidesContractFactory>;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.UssdModule): com.flutterwave.raveandroid.ussd.UssdContract.View;
						public get(): com.flutterwave.raveandroid.ussd.UssdContract.View;
						public static create(param0: com.flutterwave.raveandroid.di.modules.UssdModule): com.flutterwave.raveandroid.di.modules.UssdModule_ProvidesContractFactory;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.UssdModule): com.flutterwave.raveandroid.ussd.UssdContract.View;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.UssdModule);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class ZambiaModule {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.ZambiaModule>;
						public providesContract(): com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View;
						public constructor(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class ZambiaModule_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.di.modules.ZambiaModule> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.ZambiaModule_Factory>;
						public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.ZambiaModule;
						public get(): com.flutterwave.raveandroid.di.modules.ZambiaModule;
						public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View>);
						public static newZambiaModule(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View): com.flutterwave.raveandroid.di.modules.ZambiaModule;
						public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View>): com.flutterwave.raveandroid.di.modules.ZambiaModule_Factory;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module modules {
					export class ZambiaModule_ProvidesContractFactory extends dagger.internal.Factory<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View> {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.modules.ZambiaModule_ProvidesContractFactory>;
						public static proxyProvidesContract(param0: com.flutterwave.raveandroid.di.modules.ZambiaModule): com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View;
						public static provideInstance(param0: com.flutterwave.raveandroid.di.modules.ZambiaModule): com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View;
						public get(): com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View;
						public static create(param0: com.flutterwave.raveandroid.di.modules.ZambiaModule): com.flutterwave.raveandroid.di.modules.ZambiaModule_ProvidesContractFactory;
						public constructor(param0: com.flutterwave.raveandroid.di.modules.ZambiaModule);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class AchScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.AchScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.AchScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class ActivityScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.ActivityScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.ActivityScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class BankTransferScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.BankTransferScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.BankTransferScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class CardScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.CardScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.CardScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class FrancScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.FrancScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.FrancScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class GhanaScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.GhanaScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.GhanaScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class MpesaScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.MpesaScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.MpesaScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class RwandaScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.RwandaScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.RwandaScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class UgandaScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.UgandaScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.UgandaScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class UkScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.UkScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.UkScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class UssdScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.UssdScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.UssdScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module di {
				export module scopes {
					export class ZambiaScope {
						public static class: java.lang.Class<com.flutterwave.raveandroid.di.scopes.ZambiaScope>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.di.scopes.ZambiaScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module francMobileMoney {
				export class FrancMobileMoneyContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module FrancMobileMoneyContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							chargeFranc(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							requeryTx(param0: string, param1: string, param2: string): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onAttachView(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public onAttachView(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View): void;
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onDetachView(): void;
						public requeryTx(param0: string, param1: string, param2: string): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public chargeFranc(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showToast(param0: string): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentError(param0: string): void;
							showPollingIndicator(param0: boolean): void;
							showProgressIndicator(param0: boolean): void;
							onAmountValidationSuccessful(param0: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							onPaymentFailed(param0: string, param1: string): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onPollingRoundComplete(param0: string, param1: string, param2: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onPaymentError(param0: string): void;
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public showProgressIndicator(param0: boolean): void;
						public onAmountValidationSuccessful(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module francMobileMoney {
				export class FrancMobileMoneyFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment>;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module francMobileMoney {
				export class FrancMobileMoneyFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment_MembersInjector>;
					public static injectPresenter(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment, param1: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter>);
					public injectMembers(param0: any): void;
					public injectMembers(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyFragment>;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module francMobileMoney {
				export class FrancMobileMoneyPresenter extends com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter>;
					public requeryTx(param0: string, param1: string, param2: string): void;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onDetachView(): void;
					public chargeFranc(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View);
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public onAttachView(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module francMobileMoney {
				export class FrancMobileMoneyPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter_Factory>;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public get(): com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter;
					public get(): any;
					public static newFrancMobileMoneyPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View): com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter_Factory;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module francMobileMoney {
				export class FrancMobileMoneyPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter_MembersInjector>;
					public static injectPhoneValidator(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.PhoneValidator): void;
					public injectMembers(param0: any): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter>;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public injectMembers(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module francMobileMoney {
				export class NullfrancMobileMoneyView extends com.flutterwave.raveandroid.francMobileMoney.FrancMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.francMobileMoney.NullfrancMobileMoneyView>;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public constructor();
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ghmobilemoney {
				export class GhMobileMoneyContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module GhMobileMoneyContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							requeryTx(param0: string, param1: string, param2: string): void;
							chargeGhMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onAttachView(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onDetachView(): void;
						public requeryTx(param0: string, param1: string, param2: string): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public chargeGhMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
						public onAttachView(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showToast(param0: string): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentError(param0: string): void;
							showPollingIndicator(param0: boolean): void;
							showProgressIndicator(param0: boolean): void;
							onAmountValidationSuccessful(param0: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							onPaymentFailed(param0: string, param1: string): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							onPollingRoundComplete(param0: string, param1: string, param2: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onPaymentError(param0: string): void;
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public showProgressIndicator(param0: boolean): void;
						public onAmountValidationSuccessful(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ghmobilemoney {
				export class GhMobileMoneyFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment>;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ghmobilemoney {
				export class GhMobileMoneyFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment_MembersInjector>;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter>);
					public injectMembers(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment): void;
					public injectMembers(param0: any): void;
					public static injectPresenter(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment, param1: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyFragment>;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ghmobilemoney {
				export class GhMobileMoneyPresenter extends com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter>;
					public onAttachView(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View): void;
					public requeryTx(param0: string, param1: string, param2: string): void;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onDetachView(): void;
					public chargeGhMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View);
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ghmobilemoney {
				export class GhMobileMoneyPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter_Factory>;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter;
					public get(): any;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public get(): com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter_Factory;
					public static newGhMobileMoneyPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View): com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ghmobilemoney {
				export class GhMobileMoneyPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter_MembersInjector>;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public static injectPhoneValidator(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.PhoneValidator): void;
					public injectMembers(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter): void;
					public injectMembers(param0: any): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static injectNetworkValidator(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.NetworkValidator): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter>;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ghmobilemoney {
				export class NullGhMobileMoneyView extends com.flutterwave.raveandroid.ghmobilemoney.GhMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ghmobilemoney.NullGhMobileMoneyView>;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public constructor();
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module mpesa {
				export class MpesaContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.MpesaContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.mpesa.MpesaContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module MpesaContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.MpesaContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.mpesa.MpesaContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							chargeMpesa(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							requeryTx(param0: string, param1: string, param2: string): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onAttachView(param0: com.flutterwave.raveandroid.mpesa.MpesaContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public chargeMpesa(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onDetachView(): void;
						public requeryTx(param0: string, param1: string, param2: string): void;
						public onAttachView(param0: com.flutterwave.raveandroid.mpesa.MpesaContract.View): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.MpesaContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.mpesa.MpesaContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showToast(param0: string): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentError(param0: string): void;
							showPollingIndicator(param0: boolean): void;
							showProgressIndicator(param0: boolean): void;
							onAmountValidationSuccessful(param0: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							onPaymentFailed(param0: string, param1: string): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onPollingRoundComplete(param0: string, param1: string, param2: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onPaymentError(param0: string): void;
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public showProgressIndicator(param0: boolean): void;
						public onAmountValidationSuccessful(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module mpesa {
				export class MpesaFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.mpesa.MpesaContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.MpesaFragment>;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module mpesa {
				export class MpesaFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.mpesa.MpesaFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.MpesaFragment_MembersInjector>;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.mpesa.MpesaPresenter>);
					public injectMembers(param0: any): void;
					public injectMembers(param0: com.flutterwave.raveandroid.mpesa.MpesaFragment): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.mpesa.MpesaPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.mpesa.MpesaFragment>;
					public static injectPresenter(param0: com.flutterwave.raveandroid.mpesa.MpesaFragment, param1: com.flutterwave.raveandroid.mpesa.MpesaPresenter): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module mpesa {
				export class MpesaPresenter extends com.flutterwave.raveandroid.mpesa.MpesaContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.MpesaPresenter>;
					public requeryTx(param0: string, param1: string, param2: string): void;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onDetachView(): void;
					public chargeMpesa(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public onAttachView(param0: com.flutterwave.raveandroid.mpesa.MpesaContract.View): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.mpesa.MpesaContract.View);
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module mpesa {
				export class MpesaPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.mpesa.MpesaPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.MpesaPresenter_Factory>;
					public get(): com.flutterwave.raveandroid.mpesa.MpesaPresenter;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.mpesa.MpesaContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.mpesa.MpesaPresenter;
					public get(): any;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.mpesa.MpesaContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.mpesa.MpesaContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.mpesa.MpesaPresenter_Factory;
					public static newMpesaPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.mpesa.MpesaContract.View): com.flutterwave.raveandroid.mpesa.MpesaPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module mpesa {
				export class MpesaPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.mpesa.MpesaPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.MpesaPresenter_MembersInjector>;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.mpesa.MpesaPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.mpesa.MpesaPresenter>;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.mpesa.MpesaPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.mpesa.MpesaPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public injectMembers(param0: any): void;
					public static injectPhoneValidator(param0: com.flutterwave.raveandroid.mpesa.MpesaPresenter, param1: com.flutterwave.raveandroid.validators.PhoneValidator): void;
					public injectMembers(param0: com.flutterwave.raveandroid.mpesa.MpesaPresenter): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.mpesa.MpesaPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module mpesa {
				export class NullMpesaView extends com.flutterwave.raveandroid.mpesa.MpesaContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.mpesa.NullMpesaView>;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public constructor();
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module responses {
				export class ChargeResponse {
					public static class: java.lang.Class<com.flutterwave.raveandroid.responses.ChargeResponse>;
					public constructor();
					public setStatus(param0: string): void;
					public getData(): com.flutterwave.raveandroid.responses.ChargeResponse.Data;
					public getMessage(): string;
					public getStatus(): string;
					public setMessage(param0: string): void;
					public setData(param0: com.flutterwave.raveandroid.responses.ChargeResponse.Data): void;
				}
				export module ChargeResponse {
					export class AccountValidateInstructions {
						public static class: java.lang.Class<com.flutterwave.raveandroid.responses.ChargeResponse.AccountValidateInstructions>;
						public constructor();
						public getInstruction(): string;
						public setInstruction(param0: string): void;
					}
					export class Data {
						public static class: java.lang.Class<com.flutterwave.raveandroid.responses.ChargeResponse.Data>;
						public setTxRef(param0: string): void;
						public getAccountnumber(): string;
						public getValidateInstructions(): com.flutterwave.raveandroid.responses.ChargeResponse.AccountValidateInstructions;
						public getChargeResponseMessage(): string;
						public setChargeResponseMessage(param0: string): void;
						public setData(param0: com.flutterwave.raveandroid.responses.ChargeResponse.Data): void;
						public setValidateInstruction(param0: string): void;
						public getAuthurl(): string;
						public setChargeResponseCode(param0: string): void;
						public setAppFee(param0: string): void;
						public getData(): com.flutterwave.raveandroid.responses.ChargeResponse.Data;
						public getFlwRef(): string;
						public constructor();
						public getAmount(): string;
						public getTransaction_reference(): string;
						public setNote(param0: string): void;
						public getReference_code(): string;
						public setUssdData(param0: com.flutterwave.raveandroid.responses.ChargeResponse.Data): void;
						public getBankname(): string;
						public setFlw_reference(param0: string): void;
						public getCurrency(): string;
						public getFlw_reference(): string;
						public getUssdData(): com.flutterwave.raveandroid.responses.ChargeResponse.Data;
						public setValidateInstructions(param0: com.flutterwave.raveandroid.responses.ChargeResponse.AccountValidateInstructions): void;
						public getSuggested_auth(): string;
						public setRedirectUrl(param0: string): void;
						public setAccountnumber(param0: string): void;
						public setAuthurl(param0: string): void;
						public setChargedAmount(param0: string): void;
						public setBankName(param0: string): void;
						public setBankname(param0: string): void;
						public setResponse_message(param0: string): void;
						public getCharged_amount(): string;
						public getAuthModelUsed(): string;
						public getChargedAmount(): string;
						public getNote(): string;
						public setReference_code(param0: string): void;
						public setCurrency(param0: string): void;
						public getResponse_message(): string;
						public setAuthModelUsed(param0: string): void;
						public getAppFee(): string;
						public getChargeResponseCode(): string;
						public getValidateInstruction(): string;
						public getTx_ref(): string;
						public setCharged_amount(param0: string): void;
						public getResponse_code(): string;
						public getPayment_code(): string;
						public setTx_ref(param0: string): void;
						public setSuggested_auth(param0: string): void;
						public getTxRef(): string;
						public setAmount(param0: string): void;
						public setResponse_code(param0: string): void;
						public getRedirectUrl(): string;
						public setFlwRef(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module responses {
				export class FeeCheckResponse {
					public static class: java.lang.Class<com.flutterwave.raveandroid.responses.FeeCheckResponse>;
					public setData(param0: com.flutterwave.raveandroid.responses.FeeCheckResponse.Data): void;
					public constructor();
					public setStatus(param0: string): void;
					public getMessage(): string;
					public getData(): com.flutterwave.raveandroid.responses.FeeCheckResponse.Data;
					public getStatus(): string;
					public setMessage(param0: string): void;
				}
				export module FeeCheckResponse {
					export class Data {
						public static class: java.lang.Class<com.flutterwave.raveandroid.responses.FeeCheckResponse.Data>;
						public getCharge_amount(): string;
						public constructor();
						public setFee(param0: string): void;
						public getFee(): string;
						public getMerchantfee(): string;
						public getRavefee(): string;
						public setRavefee(param0: string): void;
						public setCharge_amount(param0: string): void;
						public setMerchantfee(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module responses {
				export class MobileMoneyChargeResponse {
					public static class: java.lang.Class<com.flutterwave.raveandroid.responses.MobileMoneyChargeResponse>;
					public getData(): com.flutterwave.raveandroid.responses.MobileMoneyChargeResponse.Data;
					public setData(param0: com.flutterwave.raveandroid.responses.MobileMoneyChargeResponse.Data): void;
					public constructor();
					public setStatus(param0: string): void;
					public getMessage(): string;
					public getStatus(): string;
					public setMessage(param0: string): void;
				}
				export module MobileMoneyChargeResponse {
					export class Data {
						public static class: java.lang.Class<com.flutterwave.raveandroid.responses.MobileMoneyChargeResponse.Data>;
						public constructor();
						public getChargeResponseMessage(): string;
						public getChargeResponseCode(): string;
						public getSuggested_auth(): string;
						public setAuthurl(param0: string): void;
						public getAuthurl(): string;
						public getTx_ref(): string;
						public setChargeResponseCode(param0: string): void;
						public getAuthModelUsed(): string;
						public getFlwRef(): string;
						public setTx_ref(param0: string): void;
						public setFlwRef(param0: string): void;
						public getRedirectUrl(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module responses {
				export class RequeryResponse {
					public static class: java.lang.Class<com.flutterwave.raveandroid.responses.RequeryResponse>;
					public getData(): com.flutterwave.raveandroid.responses.RequeryResponse.Data;
					public setData(param0: com.flutterwave.raveandroid.responses.RequeryResponse.Data): void;
					public constructor();
					public getStatus(): string;
				}
				export module RequeryResponse {
					export class CardDets {
						public static class: java.lang.Class<com.flutterwave.raveandroid.responses.RequeryResponse.CardDets>;
						public constructor();
						public getBrand(): string;
						public getCard_tokens(): java.util.List<com.flutterwave.raveandroid.responses.RequeryResponse.Card_tokens>;
						public setBrand(param0: string): void;
						public getCardBIN(): string;
						public setCardBIN(param0: string): void;
						public setCard_tokens(param0: java.util.List<com.flutterwave.raveandroid.responses.RequeryResponse.Card_tokens>): void;
					}
					export class Card_tokens {
						public static class: java.lang.Class<com.flutterwave.raveandroid.responses.RequeryResponse.Card_tokens>;
						public constructor();
						public getEmbedtoken(): string;
						public getShortcode(): string;
					}
					export class Data {
						public static class: java.lang.Class<com.flutterwave.raveandroid.responses.RequeryResponse.Data>;
						public constructor();
						public setChargeResponseCode(param0: string): void;
						public setData(param0: com.flutterwave.raveandroid.responses.RequeryResponse.Data): void;
						public getCard(): com.flutterwave.raveandroid.responses.RequeryResponse.CardDets;
						public getData(): com.flutterwave.raveandroid.responses.RequeryResponse.Data;
						public getChargeResponseCode(): string;
						public setStatus(param0: string): void;
						public getStatus(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module responses {
				export class RequeryResponsev2 {
					public static class: java.lang.Class<com.flutterwave.raveandroid.responses.RequeryResponsev2>;
					public constructor();
					public setStatus(param0: string): void;
					public setData(param0: com.flutterwave.raveandroid.responses.RequeryResponsev2.Data): void;
					public getMessage(): string;
					public getStatus(): string;
					public setMessage(param0: string): void;
					public getData(): com.flutterwave.raveandroid.responses.RequeryResponsev2.Data;
				}
				export module RequeryResponsev2 {
					export class Data {
						public static class: java.lang.Class<com.flutterwave.raveandroid.responses.RequeryResponsev2.Data>;
						public getFlwref(): string;
						public setFlwref(param0: string): void;
						public constructor();
						public getTxref(): string;
						public getChargecode(): string;
						public setChargecode(param0: string): void;
						public setTxref(param0: string): void;
						public setStatus(param0: string): void;
						public getStatus(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module responses {
				export class SubAccount {
					public static class: java.lang.Class<com.flutterwave.raveandroid.responses.SubAccount>;
					public static FLAT: string;
					public static PERCENTAGE: string;
					public constructor(param0: string, param1: string);
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public getId(): string;
					public getTransactionChargeType(): string;
					public constructor();
					public getTransactionCharge(): string;
					public setId(param0: string): void;
					public getTransactionSplitRatio(): string;
					public setTransactionChargeType(param0: string): void;
					public setTransactionSplitRatio(param0: string): void;
					public setTransactionCharge(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module rwfmobilemoney {
				export class NullRwfMobileMoneyView extends com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.NullRwfMobileMoneyView>;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public constructor();
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module rwfmobilemoney {
				export class RwfMobileMoneyContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module RwfMobileMoneyContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							requeryTx(param0: string, param1: string, param2: string): void;
							chargeRwfMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onAttachView(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onAttachView(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View): void;
						public onDetachView(): void;
						public requeryTx(param0: string, param1: string, param2: string): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public chargeRwfMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showToast(param0: string): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentError(param0: string): void;
							showPollingIndicator(param0: boolean): void;
							showProgressIndicator(param0: boolean): void;
							onAmountValidationSuccessful(param0: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onPaymentFailed(param0: string, param1: string): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							onPollingRoundComplete(param0: string, param1: string, param2: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onPaymentError(param0: string): void;
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public showProgressIndicator(param0: boolean): void;
						public onAmountValidationSuccessful(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module rwfmobilemoney {
				export class RwfMobileMoneyFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment>;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module rwfmobilemoney {
				export class RwfMobileMoneyFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment_MembersInjector>;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment>;
					public static injectPresenter(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment, param1: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter): void;
					public injectMembers(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyFragment): void;
					public injectMembers(param0: any): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter>);
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module rwfmobilemoney {
				export class RwfMobileMoneyPresenter extends com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter>;
					public chargeRwfMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public requeryTx(param0: string, param1: string, param2: string): void;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onDetachView(): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View);
					public onAttachView(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View): void;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module rwfmobilemoney {
				export class RwfMobileMoneyPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter_Factory>;
					public static newRwfMobileMoneyPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View): com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter;
					public get(): any;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter_Factory;
					public get(): com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module rwfmobilemoney {
				export class RwfMobileMoneyPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter_MembersInjector>;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter>;
					public injectMembers(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public injectMembers(param0: any): void;
					public static injectPhoneValidator(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.PhoneValidator): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.rwfmobilemoney.RwfMobileMoneyPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ugmobilemoney {
				export class NullUgMobileMoneyView extends com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.NullUgMobileMoneyView>;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public constructor();
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ugmobilemoney {
				export class UgMobileMoneyContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module UgMobileMoneyContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							requeryTx(param0: string, param1: string, param2: string): void;
							chargeUgMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onAttachView(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onDetachView(): void;
						public requeryTx(param0: string, param1: string, param2: string): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public onAttachView(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View): void;
						public chargeUgMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showToast(param0: string): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentError(param0: string): void;
							showPollingIndicator(param0: boolean): void;
							showProgressIndicator(param0: boolean): void;
							onAmountValidationSuccessful(param0: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onPaymentFailed(param0: string, param1: string): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							onPollingRoundComplete(param0: string, param1: string, param2: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onPaymentError(param0: string): void;
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public showProgressIndicator(param0: boolean): void;
						public onAmountValidationSuccessful(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ugmobilemoney {
				export class UgMobileMoneyFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment>;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ugmobilemoney {
				export class UgMobileMoneyFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment_MembersInjector>;
					public injectMembers(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment): void;
					public static injectPresenter(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment, param1: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter>);
					public injectMembers(param0: any): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyFragment>;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ugmobilemoney {
				export class UgMobileMoneyPresenter extends com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter>;
					public chargeUgMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public requeryTx(param0: string, param1: string, param2: string): void;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onDetachView(): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View);
					public onAttachView(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View): void;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ugmobilemoney {
				export class UgMobileMoneyPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter_Factory>;
					public get(): any;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter;
					public get(): com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter_Factory;
					public static newUgMobileMoneyPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyContract.View): com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ugmobilemoney {
				export class UgMobileMoneyPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter_MembersInjector>;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public injectMembers(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter): void;
					public static injectPhoneValidator(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.PhoneValidator): void;
					public injectMembers(param0: any): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter>;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.ugmobilemoney.UgMobileMoneyPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module uk {
				export class NullUkView extends com.flutterwave.raveandroid.uk.UkContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.uk.NullUkView>;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public constructor();
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public showTransactionPage(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module uk {
				export class UkContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.uk.UkContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.uk.UkContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module UkContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.uk.UkContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.uk.UkContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							chargeUk(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							requeryTx(param0: string, param1: string, param2: string): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onAttachView(param0: com.flutterwave.raveandroid.uk.UkContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public onAttachView(param0: com.flutterwave.raveandroid.uk.UkContract.View): void;
						public chargeUk(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onDetachView(): void;
						public requeryTx(param0: string, param1: string, param2: string): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.uk.UkContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.uk.UkContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showToast(param0: string): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentError(param0: string): void;
							showPollingIndicator(param0: boolean): void;
							showProgressIndicator(param0: boolean): void;
							onAmountValidationSuccessful(param0: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							onPaymentFailed(param0: string, param1: string): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onPollingRoundComplete(param0: string, param1: string, param2: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
							showTransactionPage(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
						});
						public constructor();
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public onAmountValidationSuccessful(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentError(param0: string): void;
						public showTransactionPage(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public showProgressIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module uk {
				export class UkFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.uk.UkContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.uk.UkFragment>;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public showTransactionPage(param0: com.flutterwave.raveandroid.responses.ChargeResponse): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module uk {
				export class UkFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.uk.UkFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.uk.UkFragment_MembersInjector>;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.uk.UkPresenter>);
					public injectMembers(param0: com.flutterwave.raveandroid.uk.UkFragment): void;
					public injectMembers(param0: any): void;
					public static injectPresenter(param0: com.flutterwave.raveandroid.uk.UkFragment, param1: com.flutterwave.raveandroid.uk.UkPresenter): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.uk.UkPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.uk.UkFragment>;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module uk {
				export class UkPresenter extends com.flutterwave.raveandroid.uk.UkContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.uk.UkPresenter>;
					public requeryTx(param0: string, param1: string, param2: string): void;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public chargeUk(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public onAttachView(param0: com.flutterwave.raveandroid.uk.UkContract.View): void;
					public onDetachView(): void;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.uk.UkContract.View);
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module uk {
				export class UkPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.uk.UkPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.uk.UkPresenter_Factory>;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.uk.UkContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.uk.UkPresenter;
					public get(): any;
					public static newUkPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.uk.UkContract.View): com.flutterwave.raveandroid.uk.UkPresenter;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.uk.UkContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.uk.UkPresenter_Factory;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.uk.UkContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public get(): com.flutterwave.raveandroid.uk.UkPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module uk {
				export class UkPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.uk.UkPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.uk.UkPresenter_MembersInjector>;
					public injectMembers(param0: com.flutterwave.raveandroid.uk.UkPresenter): void;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.uk.UkPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public injectMembers(param0: any): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param3: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param3: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.uk.UkPresenter>;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.uk.UkPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.uk.UkPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.uk.UkPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ussd {
				export class NullUssdView extends com.flutterwave.raveandroid.ussd.UssdContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.NullUssdView>;
					public showFetchFeeFailed(param0: string): void;
					public onUssdDetailsReceived(param0: string, param1: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationFailed(): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPollingTimeout(param0: string, param1: string): void;
					public onPaymentSuccessful(param0: string, param1: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
					public onPollingCanceled(param0: string, param1: string): void;
					public onDataValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ussd {
				export class UssdContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.UssdContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.ussd.UssdContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module UssdContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.UssdContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.ussd.UssdContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							payWithUssd(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							startPaymentVerification(): void;
							cancelPolling(): void;
							onAttachView(param0: com.flutterwave.raveandroid.ussd.UssdContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public cancelPolling(): void;
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onDetachView(): void;
						public payWithUssd(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public startPaymentVerification(): void;
						public onAttachView(param0: com.flutterwave.raveandroid.ussd.UssdContract.View): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.UssdContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.ussd.UssdContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showProgressIndicator(param0: boolean): void;
							showPollingIndicator(param0: boolean): void;
							onPaymentError(param0: string): void;
							showToast(param0: string): void;
							onPaymentSuccessful(param0: string, param1: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentFailed(param0: string, param1: string): void;
							onPollingTimeout(param0: string, param1: string): void;
							onAmountValidationSuccessful(param0: string): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onDataValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							onAmountValidationFailed(): void;
							onUssdDetailsReceived(param0: string, param1: string): void;
							onPollingCanceled(param0: string, param1: string): void;
						});
						public constructor();
						public onAmountValidationFailed(): void;
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public onDataValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onPollingCanceled(param0: string, param1: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public onAmountValidationSuccessful(param0: string): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentError(param0: string): void;
						public onPaymentSuccessful(param0: string, param1: string): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public showProgressIndicator(param0: boolean): void;
						public onPollingTimeout(param0: string, param1: string): void;
						public onUssdDetailsReceived(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ussd {
				export class UssdFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.ussd.UssdContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.UssdFragment>;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public onUssdDetailsReceived(param0: string, param1: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onAmountValidationFailed(): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public onPollingTimeout(param0: string, param1: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
					public onPollingCanceled(param0: string, param1: string): void;
					public onDataValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ussd {
				export class UssdFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.ussd.UssdFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.UssdFragment_MembersInjector>;
					public static injectPresenter(param0: com.flutterwave.raveandroid.ussd.UssdFragment, param1: com.flutterwave.raveandroid.ussd.UssdPresenter): void;
					public injectMembers(param0: any): void;
					public injectMembers(param0: com.flutterwave.raveandroid.ussd.UssdFragment): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.ussd.UssdPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.ussd.UssdFragment>;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.ussd.UssdPresenter>);
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ussd {
				export class UssdPresenter extends com.flutterwave.raveandroid.ussd.UssdContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.UssdPresenter>;
					public mView: com.flutterwave.raveandroid.ussd.UssdContract.View;
					public pollingCancelled: boolean;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public startPaymentVerification(): void;
					public onDetachView(): void;
					public payWithUssd(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public cancelPolling(): void;
					public requeryTx(param0: string, param1: string, param2: number): void;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					public onAttachView(param0: com.flutterwave.raveandroid.ussd.UssdContract.View): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ussd {
				export class UssdPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.ussd.UssdPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.UssdPresenter_Factory>;
					public get(): any;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ussd.UssdContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>);
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ussd.UssdContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>): com.flutterwave.raveandroid.ussd.UssdPresenter;
					public static newUssdPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.ussd.UssdContract.View): com.flutterwave.raveandroid.ussd.UssdPresenter;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.ussd.UssdContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param4: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>, param5: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param6: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>): com.flutterwave.raveandroid.ussd.UssdPresenter_Factory;
					public get(): com.flutterwave.raveandroid.ussd.UssdPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module ussd {
				export class UssdPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.ussd.UssdPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.ussd.UssdPresenter_MembersInjector>;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param1: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param2: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>): dagger.MembersInjector<com.flutterwave.raveandroid.ussd.UssdPresenter>;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.ussd.UssdPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.ussd.UssdPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.ussd.UssdPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public injectMembers(param0: any): void;
					public static injectPayloadToJson(param0: com.flutterwave.raveandroid.ussd.UssdPresenter, param1: com.flutterwave.raveandroid.PayloadToJson): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param1: javax.inject.Provider<com.flutterwave.raveandroid.PayloadToJson>, param2: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>, param3: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param4: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>);
					public injectMembers(param0: com.flutterwave.raveandroid.ussd.UssdPresenter): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.ussd.UssdPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class AccountNoValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.AccountNoValidator>;
					public constructor();
					public isAccountNumberValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class AccountNoValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.AccountNoValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.AccountNoValidator_Factory>;
					public static newAccountNoValidator(): com.flutterwave.raveandroid.validators.AccountNoValidator;
					public get(): any;
					public static provideInstance(): com.flutterwave.raveandroid.validators.AccountNoValidator;
					public constructor();
					public get(): com.flutterwave.raveandroid.validators.AccountNoValidator;
					public static create(): com.flutterwave.raveandroid.validators.AccountNoValidator_Factory;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class AmountValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.AmountValidator>;
					public isAmountValid(param0: java.lang.Double): boolean;
					public constructor();
					public isAmountValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class AmountValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.AmountValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.AmountValidator_Factory>;
					public static provideInstance(): com.flutterwave.raveandroid.validators.AmountValidator;
					public get(): any;
					public constructor();
					public static newAmountValidator(): com.flutterwave.raveandroid.validators.AmountValidator;
					public static create(): com.flutterwave.raveandroid.validators.AmountValidator_Factory;
					public get(): com.flutterwave.raveandroid.validators.AmountValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class BankCodeValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.BankCodeValidator>;
					public constructor();
					public isBankCodeValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class BankCodeValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.BankCodeValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.BankCodeValidator_Factory>;
					public get(): any;
					public constructor();
					public static create(): com.flutterwave.raveandroid.validators.BankCodeValidator_Factory;
					public static newBankCodeValidator(): com.flutterwave.raveandroid.validators.BankCodeValidator;
					public static provideInstance(): com.flutterwave.raveandroid.validators.BankCodeValidator;
					public get(): com.flutterwave.raveandroid.validators.BankCodeValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class BanksMinimum100AccountPaymentValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator>;
					public isPaymentValid(param0: string, param1: java.lang.Double): boolean;
					public constructor();
					public constructor(param0: com.flutterwave.raveandroid.validators.BankCodeValidator);
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class BanksMinimum100AccountPaymentValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator_Factory>;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>): com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator_Factory;
					public static newBanksMinimum100AccountPaymentValidator(param0: com.flutterwave.raveandroid.validators.BankCodeValidator): com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator;
					public static provideInstance(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>): com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator;
					public get(): any;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>);
					public get(): com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class BanksMinimum100AccountPaymentValidator_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator_MembersInjector>;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>): dagger.MembersInjector<com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator>;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.validators.BankCodeValidator>);
					public injectMembers(param0: any): void;
					public static injectBankCodeValidator(param0: com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator, param1: com.flutterwave.raveandroid.validators.BankCodeValidator): void;
					public injectMembers(param0: com.flutterwave.raveandroid.validators.BanksMinimum100AccountPaymentValidator): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class BvnValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.BvnValidator>;
					public constructor();
					public isBvnValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class BvnValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.BvnValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.BvnValidator_Factory>;
					public static newBvnValidator(): com.flutterwave.raveandroid.validators.BvnValidator;
					public get(): any;
					public constructor();
					public static provideInstance(): com.flutterwave.raveandroid.validators.BvnValidator;
					public get(): com.flutterwave.raveandroid.validators.BvnValidator;
					public static create(): com.flutterwave.raveandroid.validators.BvnValidator_Factory;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class CardExpiryValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.CardExpiryValidator>;
					public constructor();
					public isCardExpiryValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class CardExpiryValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.CardExpiryValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.CardExpiryValidator_Factory>;
					public static newCardExpiryValidator(): com.flutterwave.raveandroid.validators.CardExpiryValidator;
					public static provideInstance(): com.flutterwave.raveandroid.validators.CardExpiryValidator;
					public get(): any;
					public constructor();
					public static create(): com.flutterwave.raveandroid.validators.CardExpiryValidator_Factory;
					public get(): com.flutterwave.raveandroid.validators.CardExpiryValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class CardNoValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.CardNoValidator>;
					public constructor();
					public isCardNoStrippedValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class CardNoValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.CardNoValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.CardNoValidator_Factory>;
					public static newCardNoValidator(): com.flutterwave.raveandroid.validators.CardNoValidator;
					public get(): any;
					public constructor();
					public static create(): com.flutterwave.raveandroid.validators.CardNoValidator_Factory;
					public static provideInstance(): com.flutterwave.raveandroid.validators.CardNoValidator;
					public get(): com.flutterwave.raveandroid.validators.CardNoValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class CvvValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.CvvValidator>;
					public constructor();
					public isCvvValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class CvvValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.CvvValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.CvvValidator_Factory>;
					public get(): any;
					public constructor();
					public static provideInstance(): com.flutterwave.raveandroid.validators.CvvValidator;
					public static create(): com.flutterwave.raveandroid.validators.CvvValidator_Factory;
					public get(): com.flutterwave.raveandroid.validators.CvvValidator;
					public static newCvvValidator(): com.flutterwave.raveandroid.validators.CvvValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class DateOfBirthValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.DateOfBirthValidator>;
					public constructor();
					public isDateValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class DateOfBirthValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.DateOfBirthValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.DateOfBirthValidator_Factory>;
					public static create(): com.flutterwave.raveandroid.validators.DateOfBirthValidator_Factory;
					public get(): any;
					public constructor();
					public get(): com.flutterwave.raveandroid.validators.DateOfBirthValidator;
					public static newDateOfBirthValidator(): com.flutterwave.raveandroid.validators.DateOfBirthValidator;
					public static provideInstance(): com.flutterwave.raveandroid.validators.DateOfBirthValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class EmailValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.EmailValidator>;
					public constructor();
					public isEmailValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class EmailValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.EmailValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.EmailValidator_Factory>;
					public get(): any;
					public constructor();
					public static create(): com.flutterwave.raveandroid.validators.EmailValidator_Factory;
					public static provideInstance(): com.flutterwave.raveandroid.validators.EmailValidator;
					public get(): com.flutterwave.raveandroid.validators.EmailValidator;
					public static newEmailValidator(): com.flutterwave.raveandroid.validators.EmailValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class NetworkValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.NetworkValidator>;
					public constructor();
					public isNetworkValid(param0: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class NetworkValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.NetworkValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.NetworkValidator_Factory>;
					public get(): any;
					public constructor();
					public static newNetworkValidator(): com.flutterwave.raveandroid.validators.NetworkValidator;
					public static provideInstance(): com.flutterwave.raveandroid.validators.NetworkValidator;
					public static create(): com.flutterwave.raveandroid.validators.NetworkValidator_Factory;
					public get(): com.flutterwave.raveandroid.validators.NetworkValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class PhoneValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.PhoneValidator>;
					public constructor();
					public isPhoneValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class PhoneValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.PhoneValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.PhoneValidator_Factory>;
					public static provideInstance(): com.flutterwave.raveandroid.validators.PhoneValidator;
					public get(): com.flutterwave.raveandroid.validators.PhoneValidator;
					public get(): any;
					public constructor();
					public static create(): com.flutterwave.raveandroid.validators.PhoneValidator_Factory;
					public static newPhoneValidator(): com.flutterwave.raveandroid.validators.PhoneValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class UrlValidator {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.UrlValidator>;
					public constructor();
					public isUrlValid(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module validators {
				export class UrlValidator_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.validators.UrlValidator> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.validators.UrlValidator_Factory>;
					public static create(): com.flutterwave.raveandroid.validators.UrlValidator_Factory;
					public static newUrlValidator(): com.flutterwave.raveandroid.validators.UrlValidator;
					public get(): any;
					public constructor();
					public get(): com.flutterwave.raveandroid.validators.UrlValidator;
					public static provideInstance(): com.flutterwave.raveandroid.validators.UrlValidator;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module zmmobilemoney {
				export class NullZmMobileMoneyView extends com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.NullZmMobileMoneyView>;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onPaymentError(param0: string): void;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public constructor();
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public showToast(param0: string): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module zmmobilemoney {
				export class ZmMobileMoneyContract {
					public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract>;
					/**
					 * Constructs a new instance of the com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module ZmMobileMoneyContract {
					export class UserActionsListener {
						public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.UserActionsListener>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract$UserActionsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
							init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
							onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							requeryTx(param0: string, param1: string, param2: string): void;
							chargeZmMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
							processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
							onAttachView(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View): void;
							onDetachView(): void;
						});
						public constructor();
						public chargeZmMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
						public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public onDetachView(): void;
						public requeryTx(param0: string, param1: string, param2: string): void;
						public onAttachView(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View): void;
						public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
						public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
						public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
					}
					export class View {
						public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View>;
						/**
						 * Constructs a new instance of the com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							showToast(param0: string): void;
							showFetchFeeFailed(param0: string): void;
							onPaymentError(param0: string): void;
							showPollingIndicator(param0: boolean): void;
							showProgressIndicator(param0: boolean): void;
							onAmountValidationSuccessful(param0: string): void;
							displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
							onPaymentFailed(param0: string, param1: string): void;
							showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
							onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
							onPollingRoundComplete(param0: string, param1: string, param2: string): void;
							onPaymentSuccessful(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onPaymentError(param0: string): void;
						public showFetchFeeFailed(param0: string): void;
						public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
						public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
						public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
						public showToast(param0: string): void;
						public onPaymentFailed(param0: string, param1: string): void;
						public showProgressIndicator(param0: boolean): void;
						public onAmountValidationSuccessful(param0: string): void;
						public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
						public showPollingIndicator(param0: boolean): void;
						public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module zmmobilemoney {
				export class ZmMobileMoneyFragment extends globalAndroid.support.v4.app.Fragment implements com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View {
					public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment>;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public showFetchFeeFailed(param0: string): void;
					public showPollingIndicator(param0: boolean): void;
					public onValidationSuccessful(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public displayFee(param0: string, param1: com.flutterwave.raveandroid.Payload): void;
					public showProgressIndicator(param0: boolean): void;
					public onAmountValidationSuccessful(param0: string): void;
					public onResume(): void;
					public getLifecycle(): any;
					public showFieldError(param0: number, param1: string, param2: java.lang.Class<any>): void;
					public onPaymentError(param0: string): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public onPaymentSuccessful(param0: string, param1: string, param2: string): void;
					public onPollingRoundComplete(param0: string, param1: string, param2: string): void;
					public getViewModelStore(): any;
					public showToast(param0: string): void;
					public onDetach(): void;
					public onPaymentFailed(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module zmmobilemoney {
				export class ZmMobileMoneyFragment_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment_MembersInjector>;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter>);
					public injectMembers(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter>): dagger.MembersInjector<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment>;
					public injectMembers(param0: any): void;
					public static injectPresenter(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyFragment, param1: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module zmmobilemoney {
				export class ZmMobileMoneyPresenter extends com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.UserActionsListener {
					public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter>;
					public requeryTx(param0: string, param1: string, param2: string): void;
					public onDataCollected(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>): void;
					public onDetachView(): void;
					public chargeZmMobileMoney(param0: com.flutterwave.raveandroid.Payload, param1: string): void;
					public onAttachView(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View): void;
					public fetchFee(param0: com.flutterwave.raveandroid.Payload): void;
					public init(param0: com.flutterwave.raveandroid.RavePayInitializer): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View);
					public processTransaction(param0: java.util.HashMap<string, com.flutterwave.raveandroid.ViewObject>, param1: com.flutterwave.raveandroid.RavePayInitializer): void;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module zmmobilemoney {
				export class ZmMobileMoneyPresenter_Factory extends dagger.internal.Factory<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter_Factory>;
					public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter_Factory;
					public get(): any;
					public static newZmMobileMoneyPresenter(param0: globalAndroid.content.Context, param1: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View): com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter;
					public static provideInstance(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter;
					public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyContract.View>, param2: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param5: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param6: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param7: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public get(): com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter;
				}
			}
		}
	}
}

declare module com {
	export module flutterwave {
		export module raveandroid {
			export module zmmobilemoney {
				export class ZmMobileMoneyPresenter_MembersInjector extends dagger.MembersInjector<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter> {
					public static class: java.lang.Class<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter_MembersInjector>;
					public static injectPhoneValidator(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.PhoneValidator): void;
					public static injectAmountValidator(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.AmountValidator): void;
					public static injectDeviceIdGetter(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter, param1: com.flutterwave.raveandroid.DeviceIdGetter): void;
					public injectMembers(param0: any): void;
					public injectMembers(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter): void;
					public constructor(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>);
					public static injectNetworkValidator(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter, param1: com.flutterwave.raveandroid.validators.NetworkValidator): void;
					public static injectPayloadEncryptor(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter, param1: com.flutterwave.raveandroid.PayloadEncryptor): void;
					public static create(param0: javax.inject.Provider<com.flutterwave.raveandroid.data.NetworkRequestImpl>, param1: javax.inject.Provider<com.flutterwave.raveandroid.validators.AmountValidator>, param2: javax.inject.Provider<com.flutterwave.raveandroid.validators.PhoneValidator>, param3: javax.inject.Provider<com.flutterwave.raveandroid.validators.NetworkValidator>, param4: javax.inject.Provider<com.flutterwave.raveandroid.DeviceIdGetter>, param5: javax.inject.Provider<com.flutterwave.raveandroid.PayloadEncryptor>): dagger.MembersInjector<com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter>;
					public static injectNetworkRequest(param0: com.flutterwave.raveandroid.zmmobilemoney.ZmMobileMoneyPresenter, param1: com.flutterwave.raveandroid.data.NetworkRequestImpl): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class DefaultDateTypeAdapter extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.DefaultDateTypeAdapter>;
				public constructor(param0: number, param1: number);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.Date;
				public serialize(param0: java.util.Date, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): any;
				public toString(): string;
				public serialize(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class ExclusionStrategy {
				public static class: java.lang.Class<com.google.gson.ExclusionStrategy>;
				/**
				 * Constructs a new instance of the com.google.gson.ExclusionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					shouldSkipField(param0: com.google.gson.FieldAttributes): boolean;
					shouldSkipClass(param0: java.lang.Class<any>): boolean;
				});
				public constructor();
				public shouldSkipField(param0: com.google.gson.FieldAttributes): boolean;
				public shouldSkipClass(param0: java.lang.Class<any>): boolean;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class FieldAttributes {
				public static class: java.lang.Class<com.google.gson.FieldAttributes>;
				public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
				public hasModifier(param0: number): boolean;
				public constructor(param0: java.lang.reflect.Field);
				public getDeclaredClass(): java.lang.Class<any>;
				public getDeclaredType(): java.lang.reflect.Type;
				public getName(): string;
				public getAnnotations(): java.util.Collection<java.lang.annotation.Annotation>;
				public getDeclaringClass(): java.lang.Class<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class FieldNamingPolicy extends com.google.gson.FieldNamingStrategy {
				public static class: java.lang.Class<com.google.gson.FieldNamingPolicy>;
				public static IDENTITY: com.google.gson.FieldNamingPolicy;
				public static UPPER_CAMEL_CASE: com.google.gson.FieldNamingPolicy;
				public static UPPER_CAMEL_CASE_WITH_SPACES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_UNDERSCORES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_DASHES: com.google.gson.FieldNamingPolicy;
				public static valueOf(param0: string): com.google.gson.FieldNamingPolicy;
				public translateName(param0: java.lang.reflect.Field): string;
				public static values(): native.Array<com.google.gson.FieldNamingPolicy>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class FieldNamingStrategy {
				public static class: java.lang.Class<com.google.gson.FieldNamingStrategy>;
				/**
				 * Constructs a new instance of the com.google.gson.FieldNamingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					translateName(param0: java.lang.reflect.Field): string;
				});
				public constructor();
				public translateName(param0: java.lang.reflect.Field): string;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class Gson {
				public static class: java.lang.Class<com.google.gson.Gson>;
				public excluder(): com.google.gson.internal.Excluder;
				public getDelegateAdapter(param0: com.google.gson.TypeAdapterFactory, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				public getAdapter(param0: java.lang.Class): com.google.gson.TypeAdapter<any>;
				public serializeNulls(): boolean;
				public newJsonReader(param0: java.io.Reader): com.google.gson.stream.JsonReader;
				public fromJson(param0: java.io.Reader, param1: java.lang.reflect.Type): any;
				public toJson(param0: com.google.gson.JsonElement, param1: com.google.gson.stream.JsonWriter): void;
				public fromJson(param0: string, param1: java.lang.Class): any;
				public fromJson(param0: com.google.gson.JsonElement, param1: java.lang.Class): any;
				public htmlSafe(): boolean;
				public fromJson(param0: string, param1: java.lang.reflect.Type): any;
				public constructor();
				public toJsonTree(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				public newJsonWriter(param0: java.io.Writer): com.google.gson.stream.JsonWriter;
				public fieldNamingStrategy(): com.google.gson.FieldNamingStrategy;
				public fromJson(param0: com.google.gson.stream.JsonReader, param1: java.lang.reflect.Type): any;
				public toJson(param0: com.google.gson.JsonElement, param1: java.lang.Appendable): void;
				public fromJson(param0: java.io.Reader, param1: java.lang.Class): any;
				public toJson(param0: any, param1: java.lang.Appendable): void;
				public toJson(param0: any): string;
				public toJson(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.stream.JsonWriter): void;
				public toJson(param0: any, param1: java.lang.reflect.Type): string;
				public toJsonTree(param0: any): com.google.gson.JsonElement;
				public toString(): string;
				public toJson(param0: any, param1: java.lang.reflect.Type, param2: java.lang.Appendable): void;
				public toJson(param0: com.google.gson.JsonElement): string;
				public getAdapter(param0: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				public fromJson(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
			}
			export module Gson {
				export class FutureTypeAdapter<T> extends com.google.gson.TypeAdapter<any> {
					public static class: java.lang.Class<com.google.gson.Gson.FutureTypeAdapter<any>>;
					public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					public setDelegate(param0: com.google.gson.TypeAdapter<any>): void;
					public read(param0: com.google.gson.stream.JsonReader): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class GsonBuilder {
				public static class: java.lang.Class<com.google.gson.GsonBuilder>;
				public setPrettyPrinting(): com.google.gson.GsonBuilder;
				public setDateFormat(param0: number, param1: number): com.google.gson.GsonBuilder;
				public setLenient(): com.google.gson.GsonBuilder;
				public registerTypeAdapter(param0: java.lang.reflect.Type, param1: any): com.google.gson.GsonBuilder;
				public constructor();
				public registerTypeHierarchyAdapter(param0: java.lang.Class<any>, param1: any): com.google.gson.GsonBuilder;
				public generateNonExecutableJson(): com.google.gson.GsonBuilder;
				public excludeFieldsWithoutExposeAnnotation(): com.google.gson.GsonBuilder;
				public setDateFormat(param0: number): com.google.gson.GsonBuilder;
				public addSerializationExclusionStrategy(param0: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public serializeNulls(): com.google.gson.GsonBuilder;
				public serializeSpecialFloatingPointValues(): com.google.gson.GsonBuilder;
				public addDeserializationExclusionStrategy(param0: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public setExclusionStrategies(param0: native.Array<com.google.gson.ExclusionStrategy>): com.google.gson.GsonBuilder;
				public enableComplexMapKeySerialization(): com.google.gson.GsonBuilder;
				public create(): com.google.gson.Gson;
				public registerTypeAdapterFactory(param0: com.google.gson.TypeAdapterFactory): com.google.gson.GsonBuilder;
				public disableInnerClassSerialization(): com.google.gson.GsonBuilder;
				public disableHtmlEscaping(): com.google.gson.GsonBuilder;
				public setFieldNamingPolicy(param0: com.google.gson.FieldNamingPolicy): com.google.gson.GsonBuilder;
				public excludeFieldsWithModifiers(param0: native.Array<number>): com.google.gson.GsonBuilder;
				public setFieldNamingStrategy(param0: com.google.gson.FieldNamingStrategy): com.google.gson.GsonBuilder;
				public setLongSerializationPolicy(param0: com.google.gson.LongSerializationPolicy): com.google.gson.GsonBuilder;
				public setDateFormat(param0: string): com.google.gson.GsonBuilder;
				public setVersion(param0: number): com.google.gson.GsonBuilder;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class InstanceCreator<T> extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.InstanceCreator<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.InstanceCreator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createInstance(param0: java.lang.reflect.Type): T;
				});
				public constructor();
				public createInstance(param0: java.lang.reflect.Type): T;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonArray extends com.google.gson.JsonElement implements java.lang.Iterable<com.google.gson.JsonElement>  {
				public static class: java.lang.Class<com.google.gson.JsonArray>;
				public addAll(param0: com.google.gson.JsonArray): void;
				public getAsLong(): number;
				public getAsShort(): number;
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor();
				public remove(param0: number): com.google.gson.JsonElement;
				public getAsInt(): number;
				public getAsBoolean(): boolean;
				public add(param0: com.google.gson.JsonElement): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getAsDouble(): number;
				public iterator(): java.util.Iterator<com.google.gson.JsonElement>;
				public getAsString(): string;
				public set(param0: number, param1: com.google.gson.JsonElement): com.google.gson.JsonElement;
				public getAsCharacter(): string;
				public contains(param0: com.google.gson.JsonElement): boolean;
				public add(param0: string): void;
				public size(): number;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsByte(): number;
				public add(param0: java.lang.Number): void;
				public remove(param0: com.google.gson.JsonElement): boolean;
				public get(param0: number): com.google.gson.JsonElement;
				public getAsFloat(): number;
				public add(param0: java.lang.Boolean): void;
				public add(param0: java.lang.Character): void;
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonDeserializationContext {
				public static class: java.lang.Class<com.google.gson.JsonDeserializationContext>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
				});
				public constructor();
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonDeserializer<T> extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonDeserializer<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): T;
				});
				public constructor();
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): T;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonElement>;
				public isJsonArray(): boolean;
				public getAsJsonArray(): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public getAsLong(): number;
				public getAsCharacter(): string;
				public isJsonPrimitive(): boolean;
				public getAsShort(): number;
				public toString(): string;
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor();
				public getAsJsonNull(): com.google.gson.JsonNull;
				public getAsByte(): number;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public isJsonObject(): boolean;
				public getAsJsonObject(): com.google.gson.JsonObject;
				public isJsonNull(): boolean;
				public getAsDouble(): number;
				public getAsFloat(): number;
				public getAsString(): string;
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonIOException extends com.google.gson.JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonIOException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonNull extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonNull>;
				public static INSTANCE: com.google.gson.JsonNull;
				/** @deprecated */
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonObject extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonObject>;
				public addProperty(param0: string, param1: java.lang.Number): void;
				public getAsJsonArray(): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public get(param0: string): com.google.gson.JsonElement;
				public getAsJsonPrimitive(param0: string): com.google.gson.JsonPrimitive;
				public getAsJsonObject(param0: string): com.google.gson.JsonObject;
				public entrySet(): java.util.Set<java.util.Map.Entry<string, com.google.gson.JsonElement>>;
				public remove(param0: string): com.google.gson.JsonElement;
				public constructor();
				public size(): number;
				public addProperty(param0: string, param1: java.lang.Character): void;
				public getAsJsonArray(param0: string): com.google.gson.JsonArray;
				public hashCode(): number;
				public getAsJsonObject(): com.google.gson.JsonObject;
				public add(param0: string, param1: com.google.gson.JsonElement): void;
				public equals(param0: any): boolean;
				public addProperty(param0: string, param1: string): void;
				public has(param0: string): boolean;
				public addProperty(param0: string, param1: java.lang.Boolean): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonParseException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonParser {
				public static class: java.lang.Class<com.google.gson.JsonParser>;
				public parse(param0: java.io.Reader): com.google.gson.JsonElement;
				public parse(param0: string): com.google.gson.JsonElement;
				public parse(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonPrimitive extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonPrimitive>;
				public getAsLong(): number;
				public getAsCharacter(): string;
				public isNumber(): boolean;
				public getAsShort(): number;
				public constructor(param0: java.lang.Number);
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor(param0: string);
				public constructor();
				public getAsBigInteger(): java.math.BigInteger;
				public getAsByte(): number;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public hashCode(): number;
				public isString(): boolean;
				public equals(param0: any): boolean;
				public constructor(param0: java.lang.Character);
				public getAsDouble(): number;
				public getAsFloat(): number;
				public isBoolean(): boolean;
				public getAsString(): string;
				public constructor(param0: java.lang.Boolean);
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSerializationContext {
				public static class: java.lang.Class<com.google.gson.JsonSerializationContext>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					serialize(param0: any): com.google.gson.JsonElement;
					serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				});
				public constructor();
				public serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				public serialize(param0: any): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSerializer<T> extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonSerializer<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					serialize(param0: T, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				});
				public constructor();
				public serialize(param0: T, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonStreamParser extends java.util.Iterator<com.google.gson.JsonElement> {
				public static class: java.lang.Class<com.google.gson.JsonStreamParser>;
				public remove(): void;
				public hasNext(): boolean;
				public next(): com.google.gson.JsonElement;
				public constructor(param0: java.io.Reader);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSyntaxException extends com.google.gson.JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonSyntaxException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class LongSerializationPolicy {
				public static class: java.lang.Class<com.google.gson.LongSerializationPolicy>;
				public static DEFAULT: com.google.gson.LongSerializationPolicy;
				public static STRING: com.google.gson.LongSerializationPolicy;
				public serialize(param0: java.lang.Long): com.google.gson.JsonElement;
				public static values(): native.Array<com.google.gson.LongSerializationPolicy>;
				public static valueOf(param0: string): com.google.gson.LongSerializationPolicy;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class TypeAdapter<T> extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.TypeAdapter<any>>;
				public write(param0: com.google.gson.stream.JsonWriter, param1: T): void;
				public fromJson(param0: java.io.Reader): T;
				public toJsonTree(param0: T): com.google.gson.JsonElement;
				public toJson(param0: T): string;
				public nullSafe(): com.google.gson.TypeAdapter<T>;
				public fromJson(param0: string): T;
				public toJson(param0: java.io.Writer, param1: T): void;
				public fromJsonTree(param0: com.google.gson.JsonElement): T;
				public read(param0: com.google.gson.stream.JsonReader): T;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class TypeAdapterFactory {
				public static class: java.lang.Class<com.google.gson.TypeAdapterFactory>;
				/**
				 * Constructs a new instance of the com.google.gson.TypeAdapterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				});
				public constructor();
				public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Expose {
					public static class: java.lang.Class<com.google.gson.annotations.Expose>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Expose interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						serialize(): boolean;
						deserialize(): boolean;
					});
					public constructor();
					public deserialize(): boolean;
					public serialize(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class JsonAdapter {
					public static class: java.lang.Class<com.google.gson.annotations.JsonAdapter>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.JsonAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
					});
					public constructor();
					public value(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class SerializedName {
					public static class: java.lang.Class<com.google.gson.annotations.SerializedName>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.SerializedName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						alternate(): native.Array<string>;
					});
					public constructor();
					public value(): string;
					public alternate(): native.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Since {
					public static class: java.lang.Class<com.google.gson.annotations.Since>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Since interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public constructor();
					public value(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Until {
					public static class: java.lang.Class<com.google.gson.annotations.Until>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Until interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public constructor();
					public value(): number;
				}
				export module internal {
				// export module  {
						export module Gson {
							export module Until {
								export class Preconditions {
									public static class: java.lang.Class<com.google.gson.internal.Gson.Preconditions>;
									public static checkArgument(param0: boolean): void;
									public static checkNotNull(param0: any): any;
								}
								export class Types {
									public static class: java.lang.Class<com.google.gson.internal.Gson.Types>;
									public static resolve(param0: java.lang.reflect.Type, param1: java.lang.Class<any>, param2: java.lang.reflect.Type): java.lang.reflect.Type;
									public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
									public static subtypeOf(param0: java.lang.reflect.Type): java.lang.reflect.WildcardType;
									public static getCollectionElementType(param0: java.lang.reflect.Type, param1: java.lang.Class<any>): java.lang.reflect.Type;
									public static supertypeOf(param0: java.lang.reflect.Type): java.lang.reflect.WildcardType;
									public static equals(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type): boolean;
									public static arrayOf(param0: java.lang.reflect.Type): java.lang.reflect.GenericArrayType;
									public static canonicalize(param0: java.lang.reflect.Type): java.lang.reflect.Type;
									public static typeToString(param0: java.lang.reflect.Type): string;
									public static getMapKeyAndValueTypes(param0: java.lang.reflect.Type, param1: java.lang.Class<any>): native.Array<java.lang.reflect.Type>;
									public static getArrayComponentType(param0: java.lang.reflect.Type): java.lang.reflect.Type;
									public static newParameterizedTypeWithOwner(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type, param2: native.Array<java.lang.reflect.Type>): java.lang.reflect.ParameterizedType;
								}
								export module Types {
									export class GenericArrayTypeImpl {
										public static class: java.lang.Class<com.google.gson.internal.Gson.Types.GenericArrayTypeImpl>;
										public toString(): string;
										public constructor(param0: java.lang.reflect.Type);
										public equals(param0: any): boolean;
										public hashCode(): number;
										public getGenericComponentType(): java.lang.reflect.Type;
									}
									export class ParameterizedTypeImpl {
										public static class: java.lang.Class<com.google.gson.internal.Gson.Types.ParameterizedTypeImpl>;
										public toString(): string;
										public constructor(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type, param2: native.Array<java.lang.reflect.Type>);
										public equals(param0: any): boolean;
										public getRawType(): java.lang.reflect.Type;
										public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
										public getOwnerType(): java.lang.reflect.Type;
										public hashCode(): number;
									}
									export class WildcardTypeImpl {
										public static class: java.lang.Class<com.google.gson.internal.Gson.Types.WildcardTypeImpl>;
										public toString(): string;
										public equals(param0: any): boolean;
										public getUpperBounds(): native.Array<java.lang.reflect.Type>;
										public hashCode(): number;
										public constructor(param0: native.Array<java.lang.reflect.Type>, param1: native.Array<java.lang.reflect.Type>);
										public getLowerBounds(): native.Array<java.lang.reflect.Type>;
									}
								}
							}
						}
					}
				// }
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export class ConstructorConstructor {
							public static class: java.lang.Class<com.google.gson.internal.ConstructorConstructor>;
							public toString(): string;
							public get(param0: com.google.gson.reflect.TypeToken<any>): com.google.gson.internal.ObjectConstructor<any>;
							public constructor(param0: java.util.Map<java.lang.reflect.Type, com.google.gson.InstanceCreator<any>>);
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export class Excluder extends com.google.gson.TypeAdapterFactory {
							public static class: java.lang.Class<com.google.gson.internal.Excluder>;
							public static DEFAULT: com.google.gson.internal.Excluder;
							public disableInnerClassSerialization(): com.google.gson.internal.Excluder;
							public clone(): com.google.gson.internal.Excluder;
							public constructor();
							public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
							public excludeField(param0: java.lang.reflect.Field, param1: boolean): boolean;
							public excludeFieldsWithoutExposeAnnotation(): com.google.gson.internal.Excluder;
							public withExclusionStrategy(param0: com.google.gson.ExclusionStrategy, param1: boolean, param2: boolean): com.google.gson.internal.Excluder;
							public withVersion(param0: number): com.google.gson.internal.Excluder;
							public withModifiers(param0: native.Array<number>): com.google.gson.internal.Excluder;
							public excludeClass(param0: java.lang.Class<any>, param1: boolean): boolean;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export abstract class JsonReaderInternalAccess {
							public static class: java.lang.Class<com.google.gson.internal.JsonReaderInternalAccess>;
							public static INSTANCE: com.google.gson.internal.JsonReaderInternalAccess;
							public constructor();
							public promoteNameToValue(param0: com.google.gson.stream.JsonReader): void;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export class LazilyParsedNumber {
							public static class: java.lang.Class<com.google.gson.internal.LazilyParsedNumber>;
							public equals(param0: any): boolean;
							public intValue(): number;
							public toString(): string;
							public constructor(param0: string);
							public doubleValue(): number;
							public floatValue(): number;
							public longValue(): number;
							public hashCode(): number;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export class LinkedHashTreeMap<K, V> extends java.util.AbstractMap<any, any> implements java.io.Serializable {
							public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap<any, any>>;
							public containsKey(param0: any): boolean;
							public remove(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any, any>>;
							public constructor();
							public keySet(): java.util.Set<any>;
							public clear(): void;
							public constructor(param0: java.util.Comparator<any>);
							public size(): number;
							public put(param0: any, param1: any): any;
							public get(param0: any): any;
						}
						export module LinkedHashTreeMap {
							export class AvlBuilder<K, V> extends java.lang.Object {
								public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.AvlBuilder<any, any>>;
							}
							export class AvlIterator<K, V> extends java.lang.Object {
								public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.AvlIterator<any, any>>;
								public next(): com.google.gson.internal.LinkedHashTreeMap.Node<K, V>;
							}
							export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any, any>> {
								public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.EntrySet>;
								public iterator(): java.util.Iterator<java.util.Map.Entry<any, any>>;
								public contains(param0: any): boolean;
								public clear(): void;
								public size(): number;
								public remove(param0: any): boolean;
							}
							export class KeySet extends java.util.AbstractSet<any> {
								public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.KeySet>;
								public iterator(): java.util.Iterator<any>;
								public contains(param0: any): boolean;
								public clear(): void;
								public size(): number;
								public remove(param0: any): boolean;
							}
							export abstract class LinkedTreeMapIterator<T> extends java.util.Iterator<any> {
								public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.LinkedTreeMapIterator<any>>;
								public hasNext(): boolean;
								public remove(): void;
							}
							export class Node<K, V> extends java.util.Map.Entry<any, any> {
								public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.Node<any, any>>;
								public first(): com.google.gson.internal.LinkedHashTreeMap.Node<any, any>;
								public setValue(param0: any): any;
								public getValue(): any;
								public getKey(): any;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public last(): com.google.gson.internal.LinkedHashTreeMap.Node<any, any>;
								public toString(): string;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export class LinkedTreeMap<K, V> extends java.util.AbstractMap<any, any> implements java.io.Serializable {
							public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap<any, any>>;
							public containsKey(param0: any): boolean;
							public remove(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any, any>>;
							public constructor();
							public keySet(): java.util.Set<any>;
							public clear(): void;
							public constructor(param0: java.util.Comparator<any>);
							public size(): number;
							public put(param0: any, param1: any): any;
							public get(param0: any): any;
						}
						export module LinkedTreeMap {
							export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any, any>> {
								public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.EntrySet>;
								public iterator(): java.util.Iterator<java.util.Map.Entry<any, any>>;
								public contains(param0: any): boolean;
								public clear(): void;
								public size(): number;
								public remove(param0: any): boolean;
							}
							export class KeySet extends java.util.AbstractSet<any> {
								public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.KeySet>;
								public iterator(): java.util.Iterator<any>;
								public contains(param0: any): boolean;
								public clear(): void;
								public size(): number;
								public remove(param0: any): boolean;
							}
							export abstract class LinkedTreeMapIterator<T> extends java.util.Iterator<any> {
								public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator<any>>;
								public hasNext(): boolean;
								public remove(): void;
							}
							export class Node<K, V> extends java.util.Map.Entry<any, any> {
								public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.Node<any, any>>;
								public setValue(param0: any): any;
								public getValue(): any;
								public last(): com.google.gson.internal.LinkedTreeMap.Node<any, any>;
								public getKey(): any;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public first(): com.google.gson.internal.LinkedTreeMap.Node<any, any>;
								public toString(): string;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export class ObjectConstructor<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.internal.ObjectConstructor<any>>;
							/**
							 * Constructs a new instance of the com.google.gson.internal.ObjectConstructor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								construct(): T;
							});
							public constructor();
							public construct(): T;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export class Primitives {
							public static class: java.lang.Class<com.google.gson.internal.Primitives>;
							public static unwrap(param0: java.lang.Class): java.lang.Class;
							public static isWrapperType(param0: java.lang.reflect.Type): boolean;
							public static wrap(param0: java.lang.Class): java.lang.Class;
							public static isPrimitive(param0: java.lang.reflect.Type): boolean;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export class Streams {
							public static class: java.lang.Class<com.google.gson.internal.Streams>;
							public static write(param0: com.google.gson.JsonElement, param1: com.google.gson.stream.JsonWriter): void;
							public static parse(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
							public static writerForAppendable(param0: java.lang.Appendable): java.io.Writer;
						}
						export module Streams {
							export class AppendableWriter {
								public static class: java.lang.Class<com.google.gson.internal.Streams.AppendableWriter>;
								public close(): void;
								public write(param0: number): void;
								public flush(): void;
								public write(param0: native.Array<string>, param1: number, param2: number): void;
							}
							export module AppendableWriter {
								export class CurrentWrite {
									public static class: java.lang.Class<com.google.gson.internal.Streams.AppendableWriter.CurrentWrite>;
									public charAt(param0: number): string;
									public length(): number;
									public subSequence(param0: number, param1: number): string;
								}
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export abstract class UnsafeAllocator {
							public static class: java.lang.Class<com.google.gson.internal.UnsafeAllocator>;
							public static create(): com.google.gson.internal.UnsafeAllocator;
							public constructor();
							public newInstance(param0: java.lang.Class): any;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class ArrayTypeAdapter<E> extends com.google.gson.TypeAdapter<any> {
								public static class: java.lang.Class<com.google.gson.internal.bind.ArrayTypeAdapter<any>>;
								public static FACTORY: com.google.gson.TypeAdapterFactory;
								public constructor();
								public read(param0: com.google.gson.stream.JsonReader): any;
								public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
								public constructor(param0: com.google.gson.Gson, param1: com.google.gson.TypeAdapter<any>, param2: java.lang.Class<any>);
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class CollectionTypeAdapterFactory extends com.google.gson.TypeAdapterFactory {
								public static class: java.lang.Class<com.google.gson.internal.bind.CollectionTypeAdapterFactory>;
								public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
								public constructor(param0: com.google.gson.internal.ConstructorConstructor);
							}
							export module CollectionTypeAdapterFactory {
								export class Adapter<E> extends com.google.gson.TypeAdapter<java.util.Collection<any>> {
									public static class: java.lang.Class<com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter<any>>;
									public constructor();
									public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
									public constructor(param0: com.google.gson.Gson, param1: java.lang.reflect.Type, param2: com.google.gson.TypeAdapter<any>, param3: com.google.gson.internal.ObjectConstructor<any>);
									public read(param0: com.google.gson.stream.JsonReader): java.util.Collection<any>;
									public read(param0: com.google.gson.stream.JsonReader): any;
									public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Collection<any>): void;
								}
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class DateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
								public static class: java.lang.Class<com.google.gson.internal.bind.DateTypeAdapter>;
								public static FACTORY: com.google.gson.TypeAdapterFactory;
								public constructor();
								public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
								public read(param0: com.google.gson.stream.JsonReader): any;
								public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
								public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class JsonAdapterAnnotationTypeAdapterFactory extends com.google.gson.TypeAdapterFactory {
								public static class: java.lang.Class<com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory>;
								public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
								public constructor(param0: com.google.gson.internal.ConstructorConstructor);
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class JsonTreeReader extends com.google.gson.stream.JsonReader {
								public static class: java.lang.Class<com.google.gson.internal.bind.JsonTreeReader>;
								public nextNull(): void;
								public beginObject(): void;
								public promoteNameToValue(): void;
								public nextBoolean(): boolean;
								public close(): void;
								public endArray(): void;
								public getPath(): string;
								public beginArray(): void;
								public endObject(): void;
								public toString(): string;
								public nextInt(): number;
								public peek(): com.google.gson.stream.JsonToken;
								public nextLong(): number;
								public nextName(): string;
								public skipValue(): void;
								public constructor(param0: java.io.Reader);
								public hasNext(): boolean;
								public constructor(param0: com.google.gson.JsonElement);
								public nextDouble(): number;
								public nextString(): string;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class JsonTreeWriter extends com.google.gson.stream.JsonWriter {
								public static class: java.lang.Class<com.google.gson.internal.bind.JsonTreeWriter>;
								public nullValue(): com.google.gson.stream.JsonWriter;
								public constructor();
								public name(param0: string): com.google.gson.stream.JsonWriter;
								public value(param0: boolean): com.google.gson.stream.JsonWriter;
								public value(param0: number): com.google.gson.stream.JsonWriter;
								public close(): void;
								public constructor(param0: java.io.Writer);
								public flush(): void;
								public endObject(): com.google.gson.stream.JsonWriter;
								public value(param0: java.lang.Boolean): com.google.gson.stream.JsonWriter;
								public beginArray(): com.google.gson.stream.JsonWriter;
								public endArray(): com.google.gson.stream.JsonWriter;
								public beginObject(): com.google.gson.stream.JsonWriter;
								public value(param0: java.lang.Number): com.google.gson.stream.JsonWriter;
								public get(): com.google.gson.JsonElement;
								public value(param0: string): com.google.gson.stream.JsonWriter;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class MapTypeAdapterFactory extends com.google.gson.TypeAdapterFactory {
								public static class: java.lang.Class<com.google.gson.internal.bind.MapTypeAdapterFactory>;
								public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
								public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: boolean);
							}
							export module MapTypeAdapterFactory {
								export class Adapter<K, V> extends com.google.gson.TypeAdapter<java.util.Map<any, any>> {
									public static class: java.lang.Class<com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter<any, any>>;
									public constructor();
									public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
									public read(param0: com.google.gson.stream.JsonReader): java.util.Map<any, any>;
									public read(param0: com.google.gson.stream.JsonReader): any;
									public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Map<any, any>): void;
									public constructor(param0: com.google.gson.Gson, param1: java.lang.reflect.Type, param2: com.google.gson.TypeAdapter<any>, param3: java.lang.reflect.Type, param4: com.google.gson.TypeAdapter<any>, param5: com.google.gson.internal.ObjectConstructor<any>);
								}
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class ObjectTypeAdapter extends com.google.gson.TypeAdapter<any> {
								public static class: java.lang.Class<com.google.gson.internal.bind.ObjectTypeAdapter>;
								public static FACTORY: com.google.gson.TypeAdapterFactory;
								public read(param0: com.google.gson.stream.JsonReader): any;
								public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class ReflectiveTypeAdapterFactory extends com.google.gson.TypeAdapterFactory {
								public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory>;
								public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: com.google.gson.FieldNamingStrategy, param2: com.google.gson.internal.Excluder, param3: com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory);
								public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
								public excludeField(param0: java.lang.reflect.Field, param1: boolean): boolean;
							}
							export module ReflectiveTypeAdapterFactory {
								export class Adapter<T> extends com.google.gson.TypeAdapter<any> {
									public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter<any>>;
									public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
									public read(param0: com.google.gson.stream.JsonReader): any;
								}
								export abstract class BoundField {
									public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.BoundField>;
									public constructor(param0: string, param1: boolean, param2: boolean);
								}
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class SqlDateTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Date> {
								public static class: java.lang.Class<com.google.gson.internal.bind.SqlDateTypeAdapter>;
								public static FACTORY: com.google.gson.TypeAdapterFactory;
								public constructor();
								public write(param0: com.google.gson.stream.JsonWriter, param1: java.sql.Date): void;
								public read(param0: com.google.gson.stream.JsonReader): any;
								public read(param0: com.google.gson.stream.JsonReader): java.sql.Date;
								public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class TimeTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Time> {
								public static class: java.lang.Class<com.google.gson.internal.bind.TimeTypeAdapter>;
								public static FACTORY: com.google.gson.TypeAdapterFactory;
								public constructor();
								public read(param0: com.google.gson.stream.JsonReader): java.sql.Time;
								public write(param0: com.google.gson.stream.JsonWriter, param1: java.sql.Time): void;
								public read(param0: com.google.gson.stream.JsonReader): any;
								public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class TreeTypeAdapter<T> extends com.google.gson.TypeAdapter<any> {
								public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter<any>>;
								public constructor();
								public constructor(param0: com.google.gson.JsonSerializer<any>, param1: com.google.gson.JsonDeserializer<any>, param2: com.google.gson.Gson, param3: com.google.gson.reflect.TypeToken<any>, param4: com.google.gson.TypeAdapterFactory);
								public static newTypeHierarchyFactory(param0: java.lang.Class<any>, param1: any): com.google.gson.TypeAdapterFactory;
								public read(param0: com.google.gson.stream.JsonReader): any;
								public static newFactoryWithMatchRawType(param0: com.google.gson.reflect.TypeToken<any>, param1: any): com.google.gson.TypeAdapterFactory;
								public static newFactory(param0: com.google.gson.reflect.TypeToken<any>, param1: any): com.google.gson.TypeAdapterFactory;
								public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							}
							export module TreeTypeAdapter {
								export class GsonContextImpl implements com.google.gson.JsonSerializationContext, com.google.gson.JsonDeserializationContext {
									public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter.GsonContextImpl>;
									public serialize(param0: any): com.google.gson.JsonElement;
									public serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
									public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
								}
								export class SingleTypeFactory extends com.google.gson.TypeAdapterFactory {
									public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter.SingleTypeFactory>;
									public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
								}
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class TypeAdapterRuntimeTypeWrapper<T> extends com.google.gson.TypeAdapter<any> {
								public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper<any>>;
								public read(param0: com.google.gson.stream.JsonReader): any;
								public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export class TypeAdapters {
								public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapters>;
								public static CLASS: com.google.gson.TypeAdapter<java.lang.Class>;
								public static CLASS_FACTORY: com.google.gson.TypeAdapterFactory;
								public static BIT_SET: com.google.gson.TypeAdapter<java.util.BitSet>;
								public static BIT_SET_FACTORY: com.google.gson.TypeAdapterFactory;
								public static BOOLEAN: com.google.gson.TypeAdapter<java.lang.Boolean>;
								public static BOOLEAN_AS_STRING: com.google.gson.TypeAdapter<java.lang.Boolean>;
								public static BOOLEAN_FACTORY: com.google.gson.TypeAdapterFactory;
								public static BYTE: com.google.gson.TypeAdapter<java.lang.Number>;
								public static BYTE_FACTORY: com.google.gson.TypeAdapterFactory;
								public static SHORT: com.google.gson.TypeAdapter<java.lang.Number>;
								public static SHORT_FACTORY: com.google.gson.TypeAdapterFactory;
								public static INTEGER: com.google.gson.TypeAdapter<java.lang.Number>;
								public static INTEGER_FACTORY: com.google.gson.TypeAdapterFactory;
								public static ATOMIC_INTEGER: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicInteger>;
								public static ATOMIC_INTEGER_FACTORY: com.google.gson.TypeAdapterFactory;
								public static ATOMIC_BOOLEAN: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicBoolean>;
								public static ATOMIC_BOOLEAN_FACTORY: com.google.gson.TypeAdapterFactory;
								public static ATOMIC_INTEGER_ARRAY: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicIntegerArray>;
								public static ATOMIC_INTEGER_ARRAY_FACTORY: com.google.gson.TypeAdapterFactory;
								public static LONG: com.google.gson.TypeAdapter<java.lang.Number>;
								public static FLOAT: com.google.gson.TypeAdapter<java.lang.Number>;
								public static DOUBLE: com.google.gson.TypeAdapter<java.lang.Number>;
								public static NUMBER: com.google.gson.TypeAdapter<java.lang.Number>;
								public static NUMBER_FACTORY: com.google.gson.TypeAdapterFactory;
								public static CHARACTER: com.google.gson.TypeAdapter<java.lang.Character>;
								public static CHARACTER_FACTORY: com.google.gson.TypeAdapterFactory;
								public static STRING: com.google.gson.TypeAdapter<string>;
								public static BIG_DECIMAL: com.google.gson.TypeAdapter<java.math.BigDecimal>;
								public static BIG_INTEGER: com.google.gson.TypeAdapter<java.math.BigInteger>;
								public static STRING_FACTORY: com.google.gson.TypeAdapterFactory;
								public static STRING_BUILDER: com.google.gson.TypeAdapter<java.lang.StringBuilder>;
								public static STRING_BUILDER_FACTORY: com.google.gson.TypeAdapterFactory;
								public static STRING_BUFFER: com.google.gson.TypeAdapter<java.lang.StringBuffer>;
								public static STRING_BUFFER_FACTORY: com.google.gson.TypeAdapterFactory;
								public static URL: com.google.gson.TypeAdapter<java.net.URL>;
								public static URL_FACTORY: com.google.gson.TypeAdapterFactory;
								public static URI: com.google.gson.TypeAdapter<java.net.URI>;
								public static URI_FACTORY: com.google.gson.TypeAdapterFactory;
								public static INET_ADDRESS: com.google.gson.TypeAdapter<java.net.InetAddress>;
								public static INET_ADDRESS_FACTORY: com.google.gson.TypeAdapterFactory;
								public static UUID: com.google.gson.TypeAdapter<java.util.UUID>;
								public static UUID_FACTORY: com.google.gson.TypeAdapterFactory;
								public static CURRENCY: com.google.gson.TypeAdapter<java.util.Currency>;
								public static CURRENCY_FACTORY: com.google.gson.TypeAdapterFactory;
								public static TIMESTAMP_FACTORY: com.google.gson.TypeAdapterFactory;
								public static CALENDAR: com.google.gson.TypeAdapter<java.util.Calendar>;
								public static CALENDAR_FACTORY: com.google.gson.TypeAdapterFactory;
								public static LOCALE: com.google.gson.TypeAdapter<java.util.Locale>;
								public static LOCALE_FACTORY: com.google.gson.TypeAdapterFactory;
								public static JSON_ELEMENT: com.google.gson.TypeAdapter<com.google.gson.JsonElement>;
								public static JSON_ELEMENT_FACTORY: com.google.gson.TypeAdapterFactory;
								public static ENUM_FACTORY: com.google.gson.TypeAdapterFactory;
								public static newFactory(param0: java.lang.Class, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
								public static newFactoryForMultipleTypes(param0: java.lang.Class, param1: java.lang.Class, param2: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
								public static newTypeHierarchyFactory(param0: java.lang.Class, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
								public static newFactory(param0: com.google.gson.reflect.TypeToken<any>, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
								public static newFactory(param0: java.lang.Class, param1: java.lang.Class, param2: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
							}
							export module TypeAdapters {
								export class EnumTypeAdapter<T> extends com.google.gson.TypeAdapter<any> {
									public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter<any>>;
									public constructor();
									public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
									public constructor(param0: java.lang.Class<any>);
									public read(param0: com.google.gson.stream.JsonReader): any;
								}
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module internal {
						export module bind {
							export module util {
								export class ISO8601Utils {
									public static class: java.lang.Class<com.google.gson.internal.bind.util.ISO8601Utils>;
									public constructor();
									public static format(param0: java.util.Date): string;
									public static format(param0: java.util.Date, param1: boolean, param2: java.util.TimeZone): string;
									public static parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
									public static format(param0: java.util.Date, param1: boolean): string;
								}
							}
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module reflect {
						export class TypeToken<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.reflect.TypeToken<any>>;
							public equals(param0: any): boolean;
							public static get(param0: java.lang.Class): com.google.gson.reflect.TypeToken<any>;
							public toString(): string;
							public getType(): java.lang.reflect.Type;
							/** @deprecated */
							public isAssignableFrom(param0: java.lang.Class<any>): boolean;
							public static get(param0: java.lang.reflect.Type): com.google.gson.reflect.TypeToken<any>;
							public constructor();
							/** @deprecated */
							public isAssignableFrom(param0: java.lang.reflect.Type): boolean;
							/** @deprecated */
							public isAssignableFrom(param0: com.google.gson.reflect.TypeToken<any>): boolean;
							public hashCode(): number;
							public getRawType(): java.lang.Class<any>;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module stream {
						export class JsonReader {
							public static class: java.lang.Class<com.google.gson.stream.JsonReader>;
							public beginArray(): void;
							public nextBoolean(): boolean;
							public isLenient(): boolean;
							public nextNull(): void;
							public constructor(param0: java.io.Reader);
							public nextString(): string;
							public nextDouble(): number;
							public nextLong(): number;
							public setLenient(param0: boolean): void;
							public hasNext(): boolean;
							public beginObject(): void;
							public getPath(): string;
							public peek(): com.google.gson.stream.JsonToken;
							public toString(): string;
							public endObject(): void;
							public nextInt(): number;
							public close(): void;
							public endArray(): void;
							public skipValue(): void;
							public nextName(): string;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module stream {
						export class JsonScope {
							public static class: java.lang.Class<com.google.gson.stream.JsonScope>;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module stream {
						export class JsonToken {
							public static class: java.lang.Class<com.google.gson.stream.JsonToken>;
							public static BEGIN_ARRAY: com.google.gson.stream.JsonToken;
							public static END_ARRAY: com.google.gson.stream.JsonToken;
							public static BEGIN_OBJECT: com.google.gson.stream.JsonToken;
							public static END_OBJECT: com.google.gson.stream.JsonToken;
							public static NAME: com.google.gson.stream.JsonToken;
							public static STRING: com.google.gson.stream.JsonToken;
							public static NUMBER: com.google.gson.stream.JsonToken;
							public static BOOLEAN: com.google.gson.stream.JsonToken;
							public static NULL: com.google.gson.stream.JsonToken;
							public static END_DOCUMENT: com.google.gson.stream.JsonToken;
							public static values(): native.Array<com.google.gson.stream.JsonToken>;
							public static valueOf(param0: string): com.google.gson.stream.JsonToken;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module stream {
						export class JsonWriter {
							public static class: java.lang.Class<com.google.gson.stream.JsonWriter>;
							public isHtmlSafe(): boolean;
							public beginArray(): com.google.gson.stream.JsonWriter;
							public jsonValue(param0: string): com.google.gson.stream.JsonWriter;
							public isLenient(): boolean;
							public setSerializeNulls(param0: boolean): void;
							public flush(): void;
							public setLenient(param0: boolean): void;
							public beginObject(): com.google.gson.stream.JsonWriter;
							public value(param0: number): com.google.gson.stream.JsonWriter;
							public name(param0: string): com.google.gson.stream.JsonWriter;
							public setHtmlSafe(param0: boolean): void;
							public getSerializeNulls(): boolean;
							public endArray(): com.google.gson.stream.JsonWriter;
							public nullValue(): com.google.gson.stream.JsonWriter;
							public constructor(param0: java.io.Writer);
							public close(): void;
							public setIndent(param0: string): void;
							public value(param0: string): com.google.gson.stream.JsonWriter;
							public value(param0: java.lang.Boolean): com.google.gson.stream.JsonWriter;
							public endObject(): com.google.gson.stream.JsonWriter;
							public value(param0: boolean): com.google.gson.stream.JsonWriter;
							public value(param0: java.lang.Number): com.google.gson.stream.JsonWriter;
						}
					}
				}
			}
		}

		declare module com {
			export module google {
				export module gson {
					export module stream {
						export class MalformedJsonException {
							public static class: java.lang.Class<com.google.gson.stream.MalformedJsonException>;
							public constructor(param0: string, param1: java.lang.Throwable);
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}

		declare module com {
			export module scottyab {
				export module aescrypt {
					export class AESCrypt {
						public static class: java.lang.Class<com.scottyab.aescrypt.AESCrypt>;
						public static DEBUG_LOG_ENABLED: boolean;
						public static encrypt(param0: string, param1: string): string;
						public static decrypt(param0: javax.crypto.spec.SecretKeySpec, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
						public static decrypt(param0: string, param1: string): string;
						public static encrypt(param0: javax.crypto.spec.SecretKeySpec, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
					}
				}
			}
		}

		declare module com {
			export module scottyab {
				export module aescrypt {
					export class BuildConfig {
						public static class: java.lang.Class<com.scottyab.aescrypt.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export abstract class Action<T> extends java.lang.Object {
						public static class: java.lang.Class<com.squareup.picasso.Action<any>>;
					}
					export module Action {
						export class RequestWeakReference<M> extends java.lang.ref.WeakReference<any> {
							public static class: java.lang.Class<com.squareup.picasso.Action.RequestWeakReference<any>>;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class AssetRequestHandler extends com.squareup.picasso.RequestHandler {
						public static class: java.lang.Class<com.squareup.picasso.AssetRequestHandler>;
						public static ANDROID_ASSET: string;
						public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
						public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class BitmapHunter {
						public static class: java.lang.Class<com.squareup.picasso.BitmapHunter>;
						public run(): void;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class BuildConfig {
						public static class: java.lang.Class<com.squareup.picasso.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Cache {
						public static class: java.lang.Class<com.squareup.picasso.Cache>;
						/**
						 * Constructs a new instance of the com.squareup.picasso.Cache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: string): globalAndroid.graphics.Bitmap;
							set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
							size(): number;
							maxSize(): number;
							clear(): void;
							clearKeyUri(param0: string): void;
							<clinit>(): void;
						});
						public constructor();
						public static NONE: com.squareup.picasso.Cache;
						public get(param0: string): globalAndroid.graphics.Bitmap;
						public maxSize(): number;
						public set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
						public clear(): void;
						public clearKeyUri(param0: string): void;
						public size(): number;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Callback {
						public static class: java.lang.Class<com.squareup.picasso.Callback>;
						/**
						 * Constructs a new instance of the com.squareup.picasso.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(): void;
							onError(param0: java.lang.Exception): void;
						});
						public constructor();
						public onError(param0: java.lang.Exception): void;
						public onSuccess(): void;
					}
					export module Callback {
						export class EmptyCallback extends com.squareup.picasso.Callback {
							public static class: java.lang.Class<com.squareup.picasso.Callback.EmptyCallback>;
							public constructor();
							public onSuccess(): void;
							public onError(param0: java.lang.Exception): void;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class ContactsPhotoRequestHandler extends com.squareup.picasso.RequestHandler {
						public static class: java.lang.Class<com.squareup.picasso.ContactsPhotoRequestHandler>;
						public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
						public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class ContentStreamRequestHandler extends com.squareup.picasso.RequestHandler {
						public static class: java.lang.Class<com.squareup.picasso.ContentStreamRequestHandler>;
						public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
						public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class DeferredRequestCreator {
						public static class: java.lang.Class<com.squareup.picasso.DeferredRequestCreator>;
						public onPreDraw(): boolean;
						public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
						public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Dispatcher {
						public static class: java.lang.Class<com.squareup.picasso.Dispatcher>;
					}
					export module Dispatcher {
						export class DispatcherHandler {
							public static class: java.lang.Class<com.squareup.picasso.Dispatcher.DispatcherHandler>;
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
						export class DispatcherThread {
							public static class: java.lang.Class<com.squareup.picasso.Dispatcher.DispatcherThread>;
						}
						export class NetworkBroadcastReceiver {
							public static class: java.lang.Class<com.squareup.picasso.Dispatcher.NetworkBroadcastReceiver>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Downloader {
						public static class: java.lang.Class<com.squareup.picasso.Downloader>;
						/**
						 * Constructs a new instance of the com.squareup.picasso.Downloader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							load(param0: okhttp3.Request): okhttp3.Response;
							shutdown(): void;
						});
						public constructor();
						public shutdown(): void;
						public load(param0: okhttp3.Request): okhttp3.Response;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class FetchAction extends com.squareup.picasso.Action<any> {
						public static class: java.lang.Class<com.squareup.picasso.FetchAction>;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class FileRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
						public static class: java.lang.Class<com.squareup.picasso.FileRequestHandler>;
						public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
						public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class GetAction extends com.squareup.picasso.Action<java.lang.Void> {
						public static class: java.lang.Class<com.squareup.picasso.GetAction>;
						public error(param0: java.lang.Exception): void;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class ImageViewAction extends com.squareup.picasso.Action<globalAndroid.widget.ImageView> {
						public static class: java.lang.Class<com.squareup.picasso.ImageViewAction>;
						public error(param0: java.lang.Exception): void;
						public complete(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class LruCache extends com.squareup.picasso.Cache {
						public static class: java.lang.Class<com.squareup.picasso.LruCache>;
						public get(param0: string): globalAndroid.graphics.Bitmap;
						public evictionCount(): number;
						public maxSize(): number;
						public missCount(): number;
						public constructor(param0: globalAndroid.content.Context);
						public set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
						public clear(): void;
						public constructor(param0: number);
						public putCount(): number;
						public hitCount(): number;
						public clearKeyUri(param0: string): void;
						public size(): number;
					}
					export module LruCache {
						export class BitmapAndSize {
							public static class: java.lang.Class<com.squareup.picasso.LruCache.BitmapAndSize>;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class MarkableInputStream {
						public static class: java.lang.Class<com.squareup.picasso.MarkableInputStream>;
						public reset(): void;
						public reset(param0: number): void;
						public markSupported(): boolean;
						public read(): number;
						public skip(param0: number): number;
						public close(): void;
						public savePosition(param0: number): number;
						public read(param0: native.Array<number>): number;
						public available(): number;
						public allowMarksToExpire(param0: boolean): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public mark(param0: number): void;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class MediaStoreRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
						public static class: java.lang.Class<com.squareup.picasso.MediaStoreRequestHandler>;
						public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
						public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
					}
					export module MediaStoreRequestHandler {
						export class PicassoKind {
							public static class: java.lang.Class<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
							public static MICRO: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
							public static MINI: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
							public static FULL: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
							public static valueOf(param0: string): com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
							public static values(): native.Array<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class MemoryPolicy {
						public static class: java.lang.Class<com.squareup.picasso.MemoryPolicy>;
						public static NO_CACHE: com.squareup.picasso.MemoryPolicy;
						public static NO_STORE: com.squareup.picasso.MemoryPolicy;
						public static valueOf(param0: string): com.squareup.picasso.MemoryPolicy;
						public static values(): native.Array<com.squareup.picasso.MemoryPolicy>;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class NetworkPolicy {
						public static class: java.lang.Class<com.squareup.picasso.NetworkPolicy>;
						public static NO_CACHE: com.squareup.picasso.NetworkPolicy;
						public static NO_STORE: com.squareup.picasso.NetworkPolicy;
						public static OFFLINE: com.squareup.picasso.NetworkPolicy;
						public static values(): native.Array<com.squareup.picasso.NetworkPolicy>;
						public static shouldReadFromDiskCache(param0: number): boolean;
						public static shouldWriteToDiskCache(param0: number): boolean;
						public static isOfflineOnly(param0: number): boolean;
						public static valueOf(param0: string): com.squareup.picasso.NetworkPolicy;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class NetworkRequestHandler extends com.squareup.picasso.RequestHandler {
						public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler>;
						public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
						public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
					}
					export module NetworkRequestHandler {
						export class ContentLengthException {
							public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler.ContentLengthException>;
						}
						export class ResponseException {
							public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler.ResponseException>;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class OkHttp3Downloader extends com.squareup.picasso.Downloader {
						public static class: java.lang.Class<com.squareup.picasso.OkHttp3Downloader>;
						public constructor(param0: okhttp3.OkHttpClient);
						public shutdown(): void;
						public constructor(param0: java.io.File);
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public constructor(param0: okhttp3.Call.Factory);
						public load(param0: okhttp3.Request): okhttp3.Response;
						public constructor(param0: java.io.File, param1: number);
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Picasso {
						public static class: java.lang.Class<com.squareup.picasso.Picasso>;
						public cancelTag(param0: any): void;
						public static get(): com.squareup.picasso.Picasso;
						public load(param0: java.io.File): com.squareup.picasso.RequestCreator;
						public cancelRequest(param0: com.squareup.picasso.Target): void;
						public load(param0: number): com.squareup.picasso.RequestCreator;
						public resumeTag(param0: any): void;
						public getSnapshot(): com.squareup.picasso.StatsSnapshot;
						public cancelRequest(param0: globalAndroid.widget.RemoteViews, param1: number): void;
						public pauseTag(param0: any): void;
						public cancelRequest(param0: globalAndroid.widget.ImageView): void;
						public isLoggingEnabled(): boolean;
						public setLoggingEnabled(param0: boolean): void;
						public static setSingletonInstance(param0: com.squareup.picasso.Picasso): void;
						public shutdown(): void;
						public load(param0: globalAndroid.net.Uri): com.squareup.picasso.RequestCreator;
						public load(param0: string): com.squareup.picasso.RequestCreator;
						public invalidate(param0: java.io.File): void;
						public areIndicatorsEnabled(): boolean;
						public invalidate(param0: string): void;
						public setIndicatorsEnabled(param0: boolean): void;
						public invalidate(param0: globalAndroid.net.Uri): void;
					}
					export module Picasso {
						export class Builder {
							public static class: java.lang.Class<com.squareup.picasso.Picasso.Builder>;
							public constructor(param0: globalAndroid.content.Context);
							public listener(param0: com.squareup.picasso.Picasso.Listener): com.squareup.picasso.Picasso.Builder;
							public executor(param0: java.util.concurrent.ExecutorService): com.squareup.picasso.Picasso.Builder;
							public build(): com.squareup.picasso.Picasso;
							public requestTransformer(param0: com.squareup.picasso.Picasso.RequestTransformer): com.squareup.picasso.Picasso.Builder;
							public downloader(param0: com.squareup.picasso.Downloader): com.squareup.picasso.Picasso.Builder;
							public defaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.Picasso.Builder;
							public addRequestHandler(param0: com.squareup.picasso.RequestHandler): com.squareup.picasso.Picasso.Builder;
							public memoryCache(param0: com.squareup.picasso.Cache): com.squareup.picasso.Picasso.Builder;
							public loggingEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
							public indicatorsEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
						}
						export class CleanupThread {
							public static class: java.lang.Class<com.squareup.picasso.Picasso.CleanupThread>;
							public run(): void;
						}
						export class Listener {
							public static class: java.lang.Class<com.squareup.picasso.Picasso.Listener>;
							/**
							 * Constructs a new instance of the com.squareup.picasso.Picasso$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
							});
							public constructor();
							public onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
						}
						export class LoadedFrom {
							public static class: java.lang.Class<com.squareup.picasso.Picasso.LoadedFrom>;
							public static MEMORY: com.squareup.picasso.Picasso.LoadedFrom;
							public static DISK: com.squareup.picasso.Picasso.LoadedFrom;
							public static NETWORK: com.squareup.picasso.Picasso.LoadedFrom;
							public static values(): native.Array<com.squareup.picasso.Picasso.LoadedFrom>;
							public static valueOf(param0: string): com.squareup.picasso.Picasso.LoadedFrom;
						}
						export class Priority {
							public static class: java.lang.Class<com.squareup.picasso.Picasso.Priority>;
							public static LOW: com.squareup.picasso.Picasso.Priority;
							public static NORMAL: com.squareup.picasso.Picasso.Priority;
							public static HIGH: com.squareup.picasso.Picasso.Priority;
							public static values(): native.Array<com.squareup.picasso.Picasso.Priority>;
							public static valueOf(param0: string): com.squareup.picasso.Picasso.Priority;
						}
						export class RequestTransformer {
							public static class: java.lang.Class<com.squareup.picasso.Picasso.RequestTransformer>;
							/**
							 * Constructs a new instance of the com.squareup.picasso.Picasso$RequestTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
								<clinit>(): void;
							});
							public constructor();
							public static IDENTITY: com.squareup.picasso.Picasso.RequestTransformer;
							public transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class PicassoDrawable {
						public static class: java.lang.Class<com.squareup.picasso.PicassoDrawable>;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setAlpha(param0: number): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class PicassoExecutorService {
						public static class: java.lang.Class<com.squareup.picasso.PicassoExecutorService>;
						public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					}
					export module PicassoExecutorService {
						export class PicassoFutureTask extends java.util.concurrent.FutureTask<com.squareup.picasso.BitmapHunter> implements java.lang.Comparable<com.squareup.picasso.PicassoExecutorService.PicassoFutureTask>  {
							public static class: java.lang.Class<com.squareup.picasso.PicassoExecutorService.PicassoFutureTask>;
							public compareTo(param0: com.squareup.picasso.PicassoExecutorService.PicassoFutureTask): number;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class PicassoProvider {
						public static class: java.lang.Class<com.squareup.picasso.PicassoProvider>;
						public getType(param0: globalAndroid.net.Uri): string;
						public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
						public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
						public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
						public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
						public onCreate(): boolean;
						public constructor();
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export abstract class RemoteViewsAction extends com.squareup.picasso.Action<com.squareup.picasso.RemoteViewsAction.RemoteViewsTarget> {
						public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction>;
						public error(param0: java.lang.Exception): void;
					}
					export module RemoteViewsAction {
						export class AppWidgetAction extends com.squareup.picasso.RemoteViewsAction {
							public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.AppWidgetAction>;
						}
						export class NotificationAction extends com.squareup.picasso.RemoteViewsAction {
							public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.NotificationAction>;
						}
						export class RemoteViewsTarget {
							public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.RemoteViewsTarget>;
							public equals(param0: any): boolean;
							public hashCode(): number;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Request {
						public static class: java.lang.Class<com.squareup.picasso.Request>;
						public uri: globalAndroid.net.Uri;
						public resourceId: number;
						public stableKey: string;
						public transformations: java.util.List<com.squareup.picasso.Transformation>;
						public targetWidth: number;
						public targetHeight: number;
						public centerCrop: boolean;
						public centerCropGravity: number;
						public centerInside: boolean;
						public onlyScaleDown: boolean;
						public rotationDegrees: number;
						public rotationPivotX: number;
						public rotationPivotY: number;
						public hasRotationPivot: boolean;
						public purgeable: boolean;
						public config: globalAndroid.graphics.Bitmap.Config;
						public priority: com.squareup.picasso.Picasso.Priority;
						public hasSize(): boolean;
						public toString(): string;
						public buildUpon(): com.squareup.picasso.Request.Builder;
					}
					export module Request {
						export class Builder {
							public static class: java.lang.Class<com.squareup.picasso.Request.Builder>;
							public setUri(param0: globalAndroid.net.Uri): com.squareup.picasso.Request.Builder;
							public centerCrop(param0: number): com.squareup.picasso.Request.Builder;
							public onlyScaleDown(): com.squareup.picasso.Request.Builder;
							public transform(param0: java.util.List<any>): com.squareup.picasso.Request.Builder;
							public resize(param0: number, param1: number): com.squareup.picasso.Request.Builder;
							public centerCrop(): com.squareup.picasso.Request.Builder;
							public build(): com.squareup.picasso.Request;
							public clearCenterCrop(): com.squareup.picasso.Request.Builder;
							public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.Request.Builder;
							public centerInside(): com.squareup.picasso.Request.Builder;
							public constructor(param0: globalAndroid.net.Uri);
							public clearOnlyScaleDown(): com.squareup.picasso.Request.Builder;
							public purgeable(): com.squareup.picasso.Request.Builder;
							public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.Request.Builder;
							public stableKey(param0: string): com.squareup.picasso.Request.Builder;
							public config(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.Request.Builder;
							public clearRotation(): com.squareup.picasso.Request.Builder;
							public setResourceId(param0: number): com.squareup.picasso.Request.Builder;
							public clearCenterInside(): com.squareup.picasso.Request.Builder;
							public clearResize(): com.squareup.picasso.Request.Builder;
							public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.Request.Builder;
							public constructor(param0: number);
							public rotate(param0: number): com.squareup.picasso.Request.Builder;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class RequestCreator {
						public static class: java.lang.Class<com.squareup.picasso.RequestCreator>;
						public placeholder(param0: number): com.squareup.picasso.RequestCreator;
						public fetch(param0: com.squareup.picasso.Callback): void;
						public error(param0: number): com.squareup.picasso.RequestCreator;
						public resize(param0: number, param1: number): com.squareup.picasso.RequestCreator;
						public stableKey(param0: string): com.squareup.picasso.RequestCreator;
						public noPlaceholder(): com.squareup.picasso.RequestCreator;
						public fit(): com.squareup.picasso.RequestCreator;
						public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>, param3: com.squareup.picasso.Callback): void;
						public into(param0: globalAndroid.widget.ImageView, param1: com.squareup.picasso.Callback): void;
						public tag(param0: any): com.squareup.picasso.RequestCreator;
						public purgeable(): com.squareup.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.ImageView): void;
						public config(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.RequestCreator;
						public get(): globalAndroid.graphics.Bitmap;
						public fetch(): void;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>): void;
						public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.RequestCreator;
						public error(param0: globalAndroid.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
						public centerCrop(param0: number): com.squareup.picasso.RequestCreator;
						public centerCrop(): com.squareup.picasso.RequestCreator;
						public noFade(): com.squareup.picasso.RequestCreator;
						public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.RequestCreator;
						public onlyScaleDown(): com.squareup.picasso.RequestCreator;
						public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
						public networkPolicy(param0: com.squareup.picasso.NetworkPolicy, param1: native.Array<com.squareup.picasso.NetworkPolicy>): com.squareup.picasso.RequestCreator;
						public into(param0: com.squareup.picasso.Target): void;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification, param4: string): void;
						public rotate(param0: number): com.squareup.picasso.RequestCreator;
						public centerInside(): com.squareup.picasso.RequestCreator;
						public memoryPolicy(param0: com.squareup.picasso.MemoryPolicy, param1: native.Array<com.squareup.picasso.MemoryPolicy>): com.squareup.picasso.RequestCreator;
						public transform(param0: java.util.List<any>): com.squareup.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification, param4: string, param5: com.squareup.picasso.Callback): void;
						public resizeDimen(param0: number, param1: number): com.squareup.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification): void;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export abstract class RequestHandler {
						public static class: java.lang.Class<com.squareup.picasso.RequestHandler>;
						public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
						public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
						public constructor();
					}
					export module RequestHandler {
						export class Result {
							public static class: java.lang.Class<com.squareup.picasso.RequestHandler.Result>;
							public constructor(param0: okio.Source, param1: com.squareup.picasso.Picasso.LoadedFrom);
							public getSource(): okio.Source;
							public getLoadedFrom(): com.squareup.picasso.Picasso.LoadedFrom;
							public getBitmap(): globalAndroid.graphics.Bitmap;
							public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom);
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class ResourceRequestHandler extends com.squareup.picasso.RequestHandler {
						public static class: java.lang.Class<com.squareup.picasso.ResourceRequestHandler>;
						public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
						public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Stats {
						public static class: java.lang.Class<com.squareup.picasso.Stats>;
					}
					export module Stats {
						export class StatsHandler {
							public static class: java.lang.Class<com.squareup.picasso.Stats.StatsHandler>;
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class StatsSnapshot {
						public static class: java.lang.Class<com.squareup.picasso.StatsSnapshot>;
						public maxSize: number;
						public size: number;
						public cacheHits: number;
						public cacheMisses: number;
						public totalDownloadSize: number;
						public totalOriginalBitmapSize: number;
						public totalTransformedBitmapSize: number;
						public averageDownloadSize: number;
						public averageOriginalBitmapSize: number;
						public averageTransformedBitmapSize: number;
						public downloadCount: number;
						public originalBitmapCount: number;
						public transformedBitmapCount: number;
						public timeStamp: number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
						public dump(): void;
						public dump(param0: java.io.PrintWriter): void;
						public toString(): string;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Target {
						public static class: java.lang.Class<com.squareup.picasso.Target>;
						/**
						 * Constructs a new instance of the com.squareup.picasso.Target interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
							onBitmapFailed(param0: java.lang.Exception, param1: globalAndroid.graphics.drawable.Drawable): void;
							onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
						});
						public constructor();
						public onBitmapFailed(param0: java.lang.Exception, param1: globalAndroid.graphics.drawable.Drawable): void;
						public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
						public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class TargetAction extends com.squareup.picasso.Action<com.squareup.picasso.Target> {
						public static class: java.lang.Class<com.squareup.picasso.TargetAction>;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Transformation {
						public static class: java.lang.Class<com.squareup.picasso.Transformation>;
						/**
						 * Constructs a new instance of the com.squareup.picasso.Transformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
							key(): string;
						});
						public constructor();
						public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
						public key(): string;
					}
				}
			}
		}

		declare module com {
			export module squareup {
				export module picasso {
					export class Utils {
						public static class: java.lang.Class<com.squareup.picasso.Utils>;
					}
					export module Utils {
						export class PicassoThread {
							public static class: java.lang.Class<com.squareup.picasso.Utils.PicassoThread>;
							public run(): void;
						}
						export class PicassoThreadFactory {
							public static class: java.lang.Class<com.squareup.picasso.Utils.PicassoThreadFactory>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
					}
				}
			}
		}

		declare module dagger {
			export class Binds {
				public static class: java.lang.Class<dagger.Binds>;
				/**
				 * Constructs a new instance of the dagger.Binds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}

		declare module dagger {
			export class BindsInstance {
				public static class: java.lang.Class<dagger.BindsInstance>;
				/**
				 * Constructs a new instance of the dagger.BindsInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}

		declare module dagger {
			export class BindsOptionalOf {
				public static class: java.lang.Class<dagger.BindsOptionalOf>;
				/**
				 * Constructs a new instance of the dagger.BindsOptionalOf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}

		declare module dagger {
			export class Component {
				public static class: java.lang.Class<dagger.Component>;
				/**
				 * Constructs a new instance of the dagger.Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					modules(): native.Array<java.lang.Class<any>>;
					dependencies(): native.Array<java.lang.Class<any>>;
				});
				public constructor();
				public modules(): native.Array<java.lang.Class<any>>;
				public dependencies(): native.Array<java.lang.Class<any>>;
			}
			export module Component {
				export class Builder {
					public static class: java.lang.Class<dagger.Component.Builder>;
					/**
					 * Constructs a new instance of the dagger.Component$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export class Lazy<T> extends java.lang.Object {
				public static class: java.lang.Class<dagger.Lazy<any>>;
				/**
				 * Constructs a new instance of the dagger.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(): T;
				});
				public constructor();
				public get(): T;
			}
		}

		declare module dagger {
			export class MapKey {
				public static class: java.lang.Class<dagger.MapKey>;
				/**
				 * Constructs a new instance of the dagger.MapKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					unwrapValue(): boolean;
				});
				public constructor();
				public unwrapValue(): boolean;
			}
		}

		declare module dagger {
			export class MembersInjector<T> extends java.lang.Object {
				public static class: java.lang.Class<dagger.MembersInjector<any>>;
				/**
				 * Constructs a new instance of the dagger.MembersInjector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					injectMembers(param0: T): void;
				});
				public constructor();
				public injectMembers(param0: T): void;
			}
		}

		declare module dagger {
			export class Module {
				public static class: java.lang.Class<dagger.Module>;
				/**
				 * Constructs a new instance of the dagger.Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					includes(): native.Array<java.lang.Class<any>>;
					subcomponents(): native.Array<java.lang.Class<any>>;
				});
				public constructor();
				public includes(): native.Array<java.lang.Class<any>>;
				public subcomponents(): native.Array<java.lang.Class<any>>;
			}
		}

		declare module dagger {
			export class Provides {
				public static class: java.lang.Class<dagger.Provides>;
				/**
				 * Constructs a new instance of the dagger.Provides interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}

		declare module dagger {
			export class Reusable {
				public static class: java.lang.Class<dagger.Reusable>;
				/**
				 * Constructs a new instance of the dagger.Reusable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}

		declare module dagger {
			export class Subcomponent {
				public static class: java.lang.Class<dagger.Subcomponent>;
				/**
				 * Constructs a new instance of the dagger.Subcomponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					modules(): native.Array<java.lang.Class<any>>;
				});
				public constructor();
				public modules(): native.Array<java.lang.Class<any>>;
			}
			export module Subcomponent {
				export class Builder {
					public static class: java.lang.Class<dagger.Subcomponent.Builder>;
					/**
					 * Constructs a new instance of the dagger.Subcomponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export module internal {
				export class Beta {
					public static class: java.lang.Class<dagger.internal.Beta>;
					/**
					 * Constructs a new instance of the dagger.internal.Beta interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export module internal {
				export class DaggerCollections {
					public static class: java.lang.Class<dagger.internal.DaggerCollections>;
					public static presizedList(param0: number): java.util.List;
					public static hasDuplicates(param0: java.util.List<any>): boolean;
					public static newLinkedHashMapWithExpectedSize(param0: number): java.util.LinkedHashMap;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class DelegateFactory<T> extends dagger.internal.Factory<any> {
					public static class: java.lang.Class<dagger.internal.DelegateFactory<any>>;
					public get(): any;
					public constructor();
					public setDelegatedProvider(param0: javax.inject.Provider<any>): void;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class DoubleCheck<T> extends java.lang.Object {
					public static class: java.lang.Class<dagger.internal.DoubleCheck<any>>;
					public static reentrantCheck(param0: any, param1: any): any;
					public static lazy(param0: javax.inject.Provider<any>): dagger.Lazy<any>;
					public get(): T;
					public static provider(param0: javax.inject.Provider<any>): javax.inject.Provider<any>;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class Factory<T> extends javax.inject.Provider<any> {
					public static class: java.lang.Class<dagger.internal.Factory<any>>;
					/**
					 * Constructs a new instance of the dagger.internal.Factory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(): any;
					});
					public constructor();
					public get(): any;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class GwtIncompatible {
					public static class: java.lang.Class<dagger.internal.GwtIncompatible>;
					/**
					 * Constructs a new instance of the dagger.internal.GwtIncompatible interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export module internal {
				export class InstanceFactory<T> extends java.lang.Object {
					public static class: java.lang.Class<dagger.internal.InstanceFactory<any>>;
					public static create(param0: any): dagger.internal.Factory<any>;
					public static createNullable(param0: any): dagger.internal.Factory<any>;
					public get(): T;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class MapBuilder<K, V> extends java.lang.Object {
					public static class: java.lang.Class<dagger.internal.MapBuilder<any, any>>;
					public build(): java.util.Map<K, V>;
					public put(param0: K, param1: V): dagger.internal.MapBuilder<K, V>;
					public static newMapBuilder(param0: number): dagger.internal.MapBuilder<any, any>;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class MapFactory<K, V> extends dagger.internal.Factory<java.util.Map<any, any>> {
					public static class: java.lang.Class<dagger.internal.MapFactory<any, any>>;
					public static builder(param0: number): dagger.internal.MapFactory.Builder<any, any>;
					public static emptyMapProvider(): javax.inject.Provider<any>;
					public get(): any;
					public get(): java.util.Map<any, any>;
				}
				export module MapFactory {
					export class Builder<K, V> extends java.lang.Object {
						public static class: java.lang.Class<dagger.internal.MapFactory.Builder<any, any>>;
						public put(param0: K, param1: javax.inject.Provider<V>): dagger.internal.MapFactory.Builder<K, V>;
						public build(): dagger.internal.MapFactory<K, V>;
					}
				}
			}
		}

		declare module dagger {
			export module internal {
				export class MapProviderFactory<K, V> extends java.lang.Object {
					public static class: java.lang.Class<dagger.internal.MapProviderFactory<any, any>>;
					public static builder(param0: number): dagger.internal.MapProviderFactory.Builder<any, any>;
					public get(): any;
					public get(): java.util.Map<K, javax.inject.Provider<V>>;
				}
				export module MapProviderFactory {
					export class Builder<K, V> extends java.lang.Object {
						public static class: java.lang.Class<dagger.internal.MapProviderFactory.Builder<any, any>>;
						public build(): dagger.internal.MapProviderFactory<K, V>;
						public put(param0: K, param1: javax.inject.Provider<V>): dagger.internal.MapProviderFactory.Builder<K, V>;
					}
				}
			}
		}

		declare module dagger {
			export module internal {
				export class MembersInjectors {
					public static class: java.lang.Class<dagger.internal.MembersInjectors>;
					public static noOp(): dagger.MembersInjector<any>;
				}
				export module MembersInjectors {
					export class NoOpMembersInjector extends dagger.MembersInjector<any> {
						public static class: java.lang.Class<dagger.internal.MembersInjectors.NoOpMembersInjector>;
						public static INSTANCE: dagger.internal.MembersInjectors.NoOpMembersInjector;
						public static values(): native.Array<dagger.internal.MembersInjectors.NoOpMembersInjector>;
						public static valueOf(param0: string): dagger.internal.MembersInjectors.NoOpMembersInjector;
						public injectMembers(param0: any): void;
					}
				}
			}
		}

		declare module dagger {
			export module internal {
				export class MemoizedSentinel {
					public static class: java.lang.Class<dagger.internal.MemoizedSentinel>;
					public constructor();
				}
			}
		}

		declare module dagger {
			export module internal {
				export class Preconditions {
					public static class: java.lang.Class<dagger.internal.Preconditions>;
					public static checkNotNull(param0: any, param1: string): any;
					public static checkNotNull(param0: any, param1: string, param2: any): any;
					public static checkNotNull(param0: any): any;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class ProviderOfLazy<T> extends javax.inject.Provider<dagger.Lazy<any>> {
					public static class: java.lang.Class<dagger.internal.ProviderOfLazy<any>>;
					public get(): dagger.Lazy<any>;
					public get(): any;
					public static create(param0: javax.inject.Provider<any>): javax.inject.Provider<any>;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class ReferenceReleasingProvider<T> extends javax.inject.Provider<any> {
					public static class: java.lang.Class<dagger.internal.ReferenceReleasingProvider<any>>;
					public restoreStrongReference(): void;
					public get(): any;
					public static create(param0: javax.inject.Provider<any>, param1: dagger.internal.ReferenceReleasingProviderManager): dagger.internal.ReferenceReleasingProvider<any>;
					public releaseStrongReference(): void;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class ReferenceReleasingProviderManager extends dagger.releasablereferences.ReleasableReferenceManager {
					public static class: java.lang.Class<dagger.internal.ReferenceReleasingProviderManager>;
					public addProvider(param0: dagger.internal.ReferenceReleasingProvider<any>): void;
					public restoreStrongReferences(): void;
					public constructor(param0: java.lang.Class<any>);
					public releaseStrongReferences(): void;
					public scope(): java.lang.Class<any>;
				}
				export module ReferenceReleasingProviderManager {
					export abstract class Operation {
						public static class: java.lang.Class<dagger.internal.ReferenceReleasingProviderManager.Operation>;
						public static RELEASE: dagger.internal.ReferenceReleasingProviderManager.Operation;
						public static RESTORE: dagger.internal.ReferenceReleasingProviderManager.Operation;
						public static values(): native.Array<dagger.internal.ReferenceReleasingProviderManager.Operation>;
						public static valueOf(param0: string): dagger.internal.ReferenceReleasingProviderManager.Operation;
					}
				}
			}
		}

		declare module dagger {
			export module internal {
				export class SetBuilder<T> extends java.lang.Object {
					public static class: java.lang.Class<dagger.internal.SetBuilder<any>>;
					public addAll(param0: java.util.Collection<any>): dagger.internal.SetBuilder<T>;
					public static newSetBuilder(param0: number): dagger.internal.SetBuilder<any>;
					public build(): java.util.Set<T>;
					public add(param0: T): dagger.internal.SetBuilder<T>;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class SetFactory<T> extends dagger.internal.Factory<java.util.Set<any>> {
					public static class: java.lang.Class<dagger.internal.SetFactory<any>>;
					public get(): any;
					public get(): java.util.Set<any>;
					public static builder(param0: number, param1: number): dagger.internal.SetFactory.Builder<any>;
					public static empty(): dagger.internal.Factory<any>;
				}
				export module SetFactory {
					export class Builder<T> extends java.lang.Object {
						public static class: java.lang.Class<dagger.internal.SetFactory.Builder<any>>;
						public build(): dagger.internal.SetFactory<T>;
						public addCollectionProvider(param0: javax.inject.Provider<any>): dagger.internal.SetFactory.Builder<T>;
						public addProvider(param0: javax.inject.Provider<any>): dagger.internal.SetFactory.Builder<T>;
					}
				}
			}
		}

		declare module dagger {
			export module internal {
				export class SingleCheck<T> extends javax.inject.Provider<any> {
					public static class: java.lang.Class<dagger.internal.SingleCheck<any>>;
					public get(): any;
					public static provider(param0: javax.inject.Provider<any>): javax.inject.Provider<any>;
				}
			}
		}

		declare module dagger {
			export module internal {
				export class TypedReleasableReferenceManagerDecorator<M> extends dagger.releasablereferences.TypedReleasableReferenceManager<any> {
					public static class: java.lang.Class<dagger.internal.TypedReleasableReferenceManagerDecorator<any>>;
					public constructor(param0: dagger.releasablereferences.ReleasableReferenceManager, param1: any);
					public restoreStrongReferences(): void;
					public releaseStrongReferences(): void;
					public scope(): java.lang.Class<any>;
					public metadata(): any;
				}
			}
		}

		declare module dagger {
			export module multibindings {
				export class ClassKey {
					public static class: java.lang.Class<dagger.multibindings.ClassKey>;
					/**
					 * Constructs a new instance of the dagger.multibindings.ClassKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
					});
					public constructor();
					public value(): java.lang.Class<any>;
				}
			}
		}

		declare module dagger {
			export module multibindings {
				export class ElementsIntoSet {
					public static class: java.lang.Class<dagger.multibindings.ElementsIntoSet>;
					/**
					 * Constructs a new instance of the dagger.multibindings.ElementsIntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export module multibindings {
				export class IntKey {
					public static class: java.lang.Class<dagger.multibindings.IntKey>;
					/**
					 * Constructs a new instance of the dagger.multibindings.IntKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public constructor();
					public value(): number;
				}
			}
		}

		declare module dagger {
			export module multibindings {
				export class IntoMap {
					public static class: java.lang.Class<dagger.multibindings.IntoMap>;
					/**
					 * Constructs a new instance of the dagger.multibindings.IntoMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export module multibindings {
				export class IntoSet {
					public static class: java.lang.Class<dagger.multibindings.IntoSet>;
					/**
					 * Constructs a new instance of the dagger.multibindings.IntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export module multibindings {
				export class LongKey {
					public static class: java.lang.Class<dagger.multibindings.LongKey>;
					/**
					 * Constructs a new instance of the dagger.multibindings.LongKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public constructor();
					public value(): number;
				}
			}
		}

		declare module dagger {
			export module multibindings {
				export class Multibinds {
					public static class: java.lang.Class<dagger.multibindings.Multibinds>;
					/**
					 * Constructs a new instance of the dagger.multibindings.Multibinds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export module multibindings {
				export class StringKey {
					public static class: java.lang.Class<dagger.multibindings.StringKey>;
					/**
					 * Constructs a new instance of the dagger.multibindings.StringKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module dagger {
			export module releasablereferences {
				export class CanReleaseReferences {
					public static class: java.lang.Class<dagger.releasablereferences.CanReleaseReferences>;
					/**
					 * Constructs a new instance of the dagger.releasablereferences.CanReleaseReferences interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module dagger {
			export module releasablereferences {
				export class ForReleasableReferences {
					public static class: java.lang.Class<dagger.releasablereferences.ForReleasableReferences>;
					/**
					 * Constructs a new instance of the dagger.releasablereferences.ForReleasableReferences interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
					});
					public constructor();
					public value(): java.lang.Class<any>;
				}
			}
		}

		declare module dagger {
			export module releasablereferences {
				export class ReleasableReferenceManager {
					public static class: java.lang.Class<dagger.releasablereferences.ReleasableReferenceManager>;
					/**
					 * Constructs a new instance of the dagger.releasablereferences.ReleasableReferenceManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						scope(): java.lang.Class<any>;
						releaseStrongReferences(): void;
						restoreStrongReferences(): void;
					});
					public constructor();
					public restoreStrongReferences(): void;
					public releaseStrongReferences(): void;
					public scope(): java.lang.Class<any>;
				}
			}
		}

		declare module dagger {
			export module releasablereferences {
				export class TypedReleasableReferenceManager<M> extends dagger.releasablereferences.ReleasableReferenceManager {
					public static class: java.lang.Class<dagger.releasablereferences.TypedReleasableReferenceManager<any>>;
					/**
					 * Constructs a new instance of the dagger.releasablereferences.TypedReleasableReferenceManager<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						metadata(): any;
						scope(): java.lang.Class<any>;
						releaseStrongReferences(): void;
						restoreStrongReferences(): void;
					});
					public constructor();
					public restoreStrongReferences(): void;
					public releaseStrongReferences(): void;
					public metadata(): any;
					public scope(): java.lang.Class<any>;
				}
			}
		}

		declare module javax {
			export module inject {
				export class Inject {
					public static class: java.lang.Class<javax.inject.Inject>;
					/**
					 * Constructs a new instance of the javax.inject.Inject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module javax {
			export module inject {
				export class Named {
					public static class: java.lang.Class<javax.inject.Named>;
					/**
					 * Constructs a new instance of the javax.inject.Named interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module javax {
			export module inject {
				export class Provider<T> extends java.lang.Object {
					public static class: java.lang.Class<javax.inject.Provider<any>>;
					/**
					 * Constructs a new instance of the javax.inject.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(): T;
					});
					public constructor();
					public get(): T;
				}
			}
		}

		declare module javax {
			export module inject {
				export class Qualifier {
					public static class: java.lang.Class<javax.inject.Qualifier>;
					/**
					 * Constructs a new instance of the javax.inject.Qualifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module javax {
			export module inject {
				export class Scope {
					public static class: java.lang.Class<javax.inject.Scope>;
					/**
					 * Constructs a new instance of the javax.inject.Scope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module javax {
			export module inject {
				export class Singleton {
					public static class: java.lang.Class<javax.inject.Singleton>;
					/**
					 * Constructs a new instance of the javax.inject.Singleton interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module okhttp3 {
			export class Address {
				public static class: java.lang.Class<okhttp3.Address>;
				public proxy(): java.net.Proxy;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: number, param2: okhttp3.Dns, param3: javax.net.SocketFactory, param4: javax.net.ssl.SSLSocketFactory, param5: javax.net.ssl.HostnameVerifier, param6: okhttp3.CertificatePinner, param7: okhttp3.Authenticator, param8: java.net.Proxy, param9: java.util.List<okhttp3.Protocol>, param10: java.util.List<okhttp3.ConnectionSpec>, param11: java.net.ProxySelector);
				public proxySelector(): java.net.ProxySelector;
				public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
				public url(): okhttp3.HttpUrl;
				public certificatePinner(): okhttp3.CertificatePinner;
				public toString(): string;
				public protocols(): java.util.List<okhttp3.Protocol>;
				public socketFactory(): javax.net.SocketFactory;
				public dns(): okhttp3.Dns;
				public proxyAuthenticator(): okhttp3.Authenticator;
				public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
				public hashCode(): number;
				public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
			}
		}

		declare module okhttp3 {
			export class Authenticator {
				public static class: java.lang.Class<okhttp3.Authenticator>;
				/**
				 * Constructs a new instance of the okhttp3.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
					<clinit>(): void;
				});
				public constructor();
				public static NONE: okhttp3.Authenticator;
				public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
			}
		}

		declare module okhttp3 {
			export class Cache {
				public static class: java.lang.Class<okhttp3.Cache>;
				public close(): void;
				public directory(): java.io.File;
				public constructor(param0: java.io.File, param1: number);
				public static key(param0: okhttp3.HttpUrl): string;
				public writeAbortCount(): number;
				public evictAll(): void;
				public delete(): void;
				public isClosed(): boolean;
				public networkCount(): number;
				public requestCount(): number;
				public flush(): void;
				public initialize(): void;
				public size(): number;
				public writeSuccessCount(): number;
				public hitCount(): number;
				public urls(): java.util.Iterator<string>;
				public maxSize(): number;
			}
			export module Cache {
				export class CacheRequestImpl extends okhttp3.internal.cache.CacheRequest {
					public static class: java.lang.Class<okhttp3.Cache.CacheRequestImpl>;
					public body(): okio.Sink;
					public abort(): void;
				}
				export class CacheResponseBody extends okhttp3.ResponseBody {
					public static class: java.lang.Class<okhttp3.Cache.CacheResponseBody>;
					public contentLength(): number;
					public source(): okio.BufferedSource;
					public contentType(): okhttp3.MediaType;
				}
				export class Entry {
					public static class: java.lang.Class<okhttp3.Cache.Entry>;
					public matches(param0: okhttp3.Request, param1: okhttp3.Response): boolean;
					public response(param0: okhttp3.internal.cache.DiskLruCache.Snapshot): okhttp3.Response;
					public writeTo(param0: okhttp3.internal.cache.DiskLruCache.Editor): void;
				}
			}
		}

		declare module okhttp3 {
			export class CacheControl {
				public static class: java.lang.Class<okhttp3.CacheControl>;
				public static FORCE_NETWORK: okhttp3.CacheControl;
				public static FORCE_CACHE: okhttp3.CacheControl;
				public maxStaleSeconds(): number;
				public mustRevalidate(): boolean;
				public static parse(param0: okhttp3.Headers): okhttp3.CacheControl;
				public toString(): string;
				public minFreshSeconds(): number;
				public onlyIfCached(): boolean;
				public noCache(): boolean;
				public noTransform(): boolean;
				public isPrivate(): boolean;
				public immutable(): boolean;
				public sMaxAgeSeconds(): number;
				public noStore(): boolean;
				public maxAgeSeconds(): number;
				public isPublic(): boolean;
			}
			export module CacheControl {
				export class Builder {
					public static class: java.lang.Class<okhttp3.CacheControl.Builder>;
					public noCache(): okhttp3.CacheControl.Builder;
					public maxStale(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
					public immutable(): okhttp3.CacheControl.Builder;
					public onlyIfCached(): okhttp3.CacheControl.Builder;
					public minFresh(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
					public maxAge(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
					public constructor();
					public build(): okhttp3.CacheControl;
					public noStore(): okhttp3.CacheControl.Builder;
					public noTransform(): okhttp3.CacheControl.Builder;
				}
			}
		}

		declare module okhttp3 {
			export class Call {
				public static class: java.lang.Class<okhttp3.Call>;
				/**
				 * Constructs a new instance of the okhttp3.Call interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					request(): okhttp3.Request;
					execute(): okhttp3.Response;
					enqueue(param0: okhttp3.Callback): void;
					cancel(): void;
					isExecuted(): boolean;
					isCanceled(): boolean;
					clone(): okhttp3.Call;
				});
				public constructor();
				public isExecuted(): boolean;
				public clone(): okhttp3.Call;
				public request(): okhttp3.Request;
				public execute(): okhttp3.Response;
				public isCanceled(): boolean;
				public enqueue(param0: okhttp3.Callback): void;
				public cancel(): void;
			}
			export module Call {
				export class Factory {
					public static class: java.lang.Class<okhttp3.Call.Factory>;
					/**
					 * Constructs a new instance of the okhttp3.Call$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						newCall(param0: okhttp3.Request): okhttp3.Call;
					});
					public constructor();
					public newCall(param0: okhttp3.Request): okhttp3.Call;
				}
			}
		}

		declare module okhttp3 {
			export class Callback {
				public static class: java.lang.Class<okhttp3.Callback>;
				/**
				 * Constructs a new instance of the okhttp3.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
					onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
				});
				public constructor();
				public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
				public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
			}
		}

		declare module okhttp3 {
			export class CertificatePinner {
				public static class: java.lang.Class<okhttp3.CertificatePinner>;
				public static DEFAULT: okhttp3.CertificatePinner;
				public equals(param0: any): boolean;
				public static pin(param0: java.security.cert.Certificate): string;
				public hashCode(): number;
				/** @deprecated */
				public check(param0: string, param1: native.Array<java.security.cert.Certificate>): void;
				public check(param0: string, param1: java.util.List<java.security.cert.Certificate>): void;
			}
			export module CertificatePinner {
				export class Builder {
					public static class: java.lang.Class<okhttp3.CertificatePinner.Builder>;
					public build(): okhttp3.CertificatePinner;
					public add(param0: string, param1: native.Array<string>): okhttp3.CertificatePinner.Builder;
					public constructor();
				}
				export class Pin {
					public static class: java.lang.Class<okhttp3.CertificatePinner.Pin>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}

		declare module okhttp3 {
			export class Challenge {
				public static class: java.lang.Class<okhttp3.Challenge>;
				public charset(): java.nio.charset.Charset;
				public equals(param0: any): boolean;
				public scheme(): string;
				public hashCode(): number;
				public toString(): string;
				public withCharset(param0: java.nio.charset.Charset): okhttp3.Challenge;
				public constructor(param0: string, param1: string);
				public realm(): string;
			}
		}

		declare module okhttp3 {
			export class CipherSuite {
				public static class: java.lang.Class<okhttp3.CipherSuite>;
				public static TLS_RSA_WITH_NULL_MD5: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
				public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_RC4_128_MD5: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
				public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_RC4_128_MD5: okhttp3.CipherSuite;
				public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_KRB5_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_KRB5_WITH_RC4_128_SHA: okhttp3.CipherSuite;
				public static TLS_KRB5_WITH_DES_CBC_MD5: okhttp3.CipherSuite;
				public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: okhttp3.CipherSuite;
				public static TLS_KRB5_WITH_RC4_128_MD5: okhttp3.CipherSuite;
				public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: okhttp3.CipherSuite;
				public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: okhttp3.CipherSuite;
				public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: okhttp3.CipherSuite;
				public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_NULL_SHA256: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_PSK_WITH_RC4_128_SHA: okhttp3.CipherSuite;
				public static TLS_PSK_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_SEED_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
				public static TLS_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
				public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
				public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: okhttp3.CipherSuite;
				public static TLS_FALLBACK_SCSV: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_anon_WITH_NULL_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_anon_WITH_RC4_128_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
				public static TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
				public javaName(): string;
				public static forJavaName(param0: string): okhttp3.CipherSuite;
				public toString(): string;
			}
		}

		declare module okhttp3 {
			export class Connection {
				public static class: java.lang.Class<okhttp3.Connection>;
				/**
				 * Constructs a new instance of the okhttp3.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					route(): okhttp3.Route;
					socket(): java.net.Socket;
					handshake(): okhttp3.Handshake;
					protocol(): okhttp3.Protocol;
				});
				public constructor();
				public route(): okhttp3.Route;
				public protocol(): okhttp3.Protocol;
				public handshake(): okhttp3.Handshake;
				public socket(): java.net.Socket;
			}
		}

		declare module okhttp3 {
			export class ConnectionPool {
				public static class: java.lang.Class<okhttp3.ConnectionPool>;
				public constructor();
				public connectionCount(): number;
				public evictAll(): void;
				public idleConnectionCount(): number;
				public constructor(param0: number, param1: number, param2: java.util.concurrent.TimeUnit);
			}
		}

		declare module okhttp3 {
			export class ConnectionSpec {
				public static class: java.lang.Class<okhttp3.ConnectionSpec>;
				public static MODERN_TLS: okhttp3.ConnectionSpec;
				public static COMPATIBLE_TLS: okhttp3.ConnectionSpec;
				public static CLEARTEXT: okhttp3.ConnectionSpec;
				public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
				public equals(param0: any): boolean;
				public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
				public supportsTlsExtensions(): boolean;
				public hashCode(): number;
				public isCompatible(param0: javax.net.ssl.SSLSocket): boolean;
				public isTls(): boolean;
				public toString(): string;
			}
			export module ConnectionSpec {
				export class Builder {
					public static class: java.lang.Class<okhttp3.ConnectionSpec.Builder>;
					public tlsVersions(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
					public cipherSuites(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
					public build(): okhttp3.ConnectionSpec;
					public constructor(param0: okhttp3.ConnectionSpec);
					public cipherSuites(param0: native.Array<okhttp3.CipherSuite>): okhttp3.ConnectionSpec.Builder;
					public supportsTlsExtensions(param0: boolean): okhttp3.ConnectionSpec.Builder;
					public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
					public tlsVersions(param0: native.Array<okhttp3.TlsVersion>): okhttp3.ConnectionSpec.Builder;
					public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
				}
			}
		}

		declare module okhttp3 {
			export class Cookie {
				public static class: java.lang.Class<okhttp3.Cookie>;
				public domain(): string;
				public equals(param0: any): boolean;
				public matches(param0: okhttp3.HttpUrl): boolean;
				public static parseAll(param0: okhttp3.HttpUrl, param1: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
				public toString(): string;
				public persistent(): boolean;
				public httpOnly(): boolean;
				public static parse(param0: okhttp3.HttpUrl, param1: string): okhttp3.Cookie;
				public hostOnly(): boolean;
				public expiresAt(): number;
				public hashCode(): number;
				public name(): string;
				public path(): string;
				public secure(): boolean;
				public value(): string;
			}
			export module Cookie {
				export class Builder {
					public static class: java.lang.Class<okhttp3.Cookie.Builder>;
					public domain(param0: string): okhttp3.Cookie.Builder;
					public hostOnlyDomain(param0: string): okhttp3.Cookie.Builder;
					public value(param0: string): okhttp3.Cookie.Builder;
					public httpOnly(): okhttp3.Cookie.Builder;
					public secure(): okhttp3.Cookie.Builder;
					public expiresAt(param0: number): okhttp3.Cookie.Builder;
					public build(): okhttp3.Cookie;
					public name(param0: string): okhttp3.Cookie.Builder;
					public constructor();
					public path(param0: string): okhttp3.Cookie.Builder;
				}
			}
		}

		declare module okhttp3 {
			export class CookieJar {
				public static class: java.lang.Class<okhttp3.CookieJar>;
				/**
				 * Constructs a new instance of the okhttp3.CookieJar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
					loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
					<clinit>(): void;
				});
				public constructor();
				public static NO_COOKIES: okhttp3.CookieJar;
				public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
				public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
			}
		}

		declare module okhttp3 {
			export class Credentials {
				public static class: java.lang.Class<okhttp3.Credentials>;
				public static basic(param0: string, param1: string, param2: java.nio.charset.Charset): string;
				public static basic(param0: string, param1: string): string;
			}
		}

		declare module okhttp3 {
			export class Dispatcher {
				public static class: java.lang.Class<okhttp3.Dispatcher>;
				public constructor();
				public setMaxRequestsPerHost(param0: number): void;
				public constructor(param0: java.util.concurrent.ExecutorService);
				public queuedCallsCount(): number;
				public runningCallsCount(): number;
				public runningCalls(): java.util.List<okhttp3.Call>;
				public cancelAll(): void;
				public queuedCalls(): java.util.List<okhttp3.Call>;
				public setMaxRequests(param0: number): void;
				public getMaxRequestsPerHost(): number;
				public executorService(): java.util.concurrent.ExecutorService;
				public setIdleCallback(param0: java.lang.Runnable): void;
				public getMaxRequests(): number;
			}
		}

		declare module okhttp3 {
			export class Dns {
				public static class: java.lang.Class<okhttp3.Dns>;
				/**
				 * Constructs a new instance of the okhttp3.Dns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					lookup(param0: string): java.util.List<java.net.InetAddress>;
					<clinit>(): void;
				});
				public constructor();
				public static SYSTEM: okhttp3.Dns;
				public lookup(param0: string): java.util.List<java.net.InetAddress>;
			}
		}

		declare module okhttp3 {
			export abstract class EventListener {
				public static class: java.lang.Class<okhttp3.EventListener>;
				public static NONE: okhttp3.EventListener;
				public constructor();
				public connectFailed(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol, param4: java.io.IOException): void;
				public callStart(param0: okhttp3.Call): void;
				public connectionReleased(param0: okhttp3.Call, param1: okhttp3.Connection): void;
				public dnsEnd(param0: okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>): void;
				public responseBodyEnd(param0: okhttp3.Call, param1: number): void;
				public callEnd(param0: okhttp3.Call): void;
				public secureConnectStart(param0: okhttp3.Call): void;
				public responseHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Response): void;
				public secureConnectEnd(param0: okhttp3.Call, param1: okhttp3.Handshake): void;
				public dnsStart(param0: okhttp3.Call, param1: string): void;
				public connectionAcquired(param0: okhttp3.Call, param1: okhttp3.Connection): void;
				public connectEnd(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol): void;
				public requestHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Request): void;
				public responseBodyStart(param0: okhttp3.Call): void;
				public connectStart(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy): void;
				public requestBodyEnd(param0: okhttp3.Call, param1: number): void;
				public callFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
				public requestHeadersStart(param0: okhttp3.Call): void;
				public requestBodyStart(param0: okhttp3.Call): void;
				public responseHeadersStart(param0: okhttp3.Call): void;
			}
			export module EventListener {
				export class Factory {
					public static class: java.lang.Class<okhttp3.EventListener.Factory>;
					/**
					 * Constructs a new instance of the okhttp3.EventListener$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: okhttp3.Call): okhttp3.EventListener;
					});
					public constructor();
					public create(param0: okhttp3.Call): okhttp3.EventListener;
				}
			}
		}

		declare module okhttp3 {
			export class FormBody extends okhttp3.RequestBody {
				public static class: java.lang.Class<okhttp3.FormBody>;
				public value(param0: number): string;
				public encodedValue(param0: number): string;
				public name(param0: number): string;
				public size(): number;
				public encodedName(param0: number): string;
				public contentType(): okhttp3.MediaType;
				public writeTo(param0: okio.BufferedSink): void;
				public contentLength(): number;
			}
			export module FormBody {
				export class Builder {
					public static class: java.lang.Class<okhttp3.FormBody.Builder>;
					public constructor(param0: java.nio.charset.Charset);
					public addEncoded(param0: string, param1: string): okhttp3.FormBody.Builder;
					public constructor();
					public add(param0: string, param1: string): okhttp3.FormBody.Builder;
					public build(): okhttp3.FormBody;
				}
			}
		}

		declare module okhttp3 {
			export class Handshake {
				public static class: java.lang.Class<okhttp3.Handshake>;
				public equals(param0: any): boolean;
				public static get(param0: javax.net.ssl.SSLSession): okhttp3.Handshake;
				public static get(param0: okhttp3.TlsVersion, param1: okhttp3.CipherSuite, param2: java.util.List<java.security.cert.Certificate>, param3: java.util.List<java.security.cert.Certificate>): okhttp3.Handshake;
				public hashCode(): number;
				public localCertificates(): java.util.List<java.security.cert.Certificate>;
				public localPrincipal(): java.security.Principal;
				public tlsVersion(): okhttp3.TlsVersion;
				public peerCertificates(): java.util.List<java.security.cert.Certificate>;
				public peerPrincipal(): java.security.Principal;
				public cipherSuite(): okhttp3.CipherSuite;
			}
		}

		declare module okhttp3 {
			export class Headers {
				public static class: java.lang.Class<okhttp3.Headers>;
				public value(param0: number): string;
				public equals(param0: any): boolean;
				public newBuilder(): okhttp3.Headers.Builder;
				public toString(): string;
				public get(param0: string): string;
				public values(param0: string): java.util.List<string>;
				public names(): java.util.Set<string>;
				public static of(param0: java.util.Map<string, string>): okhttp3.Headers;
				public name(param0: number): string;
				public size(): number;
				public hashCode(): number;
				public toMultimap(): java.util.Map<string, java.util.List<string>>;
				public getDate(param0: string): java.util.Date;
				public byteCount(): number;
				public static of(param0: native.Array<string>): okhttp3.Headers;
			}
			export module Headers {
				export class Builder {
					public static class: java.lang.Class<okhttp3.Headers.Builder>;
					public get(param0: string): string;
					public build(): okhttp3.Headers;
					public add(param0: string, param1: string): okhttp3.Headers.Builder;
					public removeAll(param0: string): okhttp3.Headers.Builder;
					public set(param0: string, param1: string): okhttp3.Headers.Builder;
					public constructor();
					public add(param0: string): okhttp3.Headers.Builder;
				}
			}
		}

		declare module okhttp3 {
			export class HttpUrl {
				public static class: java.lang.Class<okhttp3.HttpUrl>;
				public static get(param0: java.net.URI): okhttp3.HttpUrl;
				public equals(param0: any): boolean;
				public topPrivateDomain(): string;
				public queryParameterName(param0: number): string;
				public static defaultPort(param0: string): number;
				public scheme(): string;
				public queryParameterNames(): java.util.Set<string>;
				public encodedPassword(): string;
				public queryParameter(param0: string): string;
				public query(): string;
				public password(): string;
				public hashCode(): number;
				public resolve(param0: string): okhttp3.HttpUrl;
				public pathSize(): number;
				public isHttps(): boolean;
				public encodedPathSegments(): java.util.List<string>;
				public newBuilder(): okhttp3.HttpUrl.Builder;
				public port(): number;
				public encodedQuery(): string;
				public encodedPath(): string;
				public encodedFragment(): string;
				public redact(): string;
				public fragment(): string;
				public toString(): string;
				public uri(): java.net.URI;
				public queryParameterValue(param0: number): string;
				public encodedUsername(): string;
				public queryParameterValues(param0: string): java.util.List<string>;
				public newBuilder(param0: string): okhttp3.HttpUrl.Builder;
				public host(): string;
				public static get(param0: java.net.URL): okhttp3.HttpUrl;
				public pathSegments(): java.util.List<string>;
				public static parse(param0: string): okhttp3.HttpUrl;
				public url(): java.net.URL;
				public querySize(): number;
				public username(): string;
			}
			export module HttpUrl {
				export class Builder {
					public static class: java.lang.Class<okhttp3.HttpUrl.Builder>;
					public addPathSegment(param0: string): okhttp3.HttpUrl.Builder;
					public addEncodedPathSegment(param0: string): okhttp3.HttpUrl.Builder;
					public setEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
					public setQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
					public encodedFragment(param0: string): okhttp3.HttpUrl.Builder;
					public username(param0: string): okhttp3.HttpUrl.Builder;
					public addPathSegments(param0: string): okhttp3.HttpUrl.Builder;
					public encodedPath(param0: string): okhttp3.HttpUrl.Builder;
					public encodedPassword(param0: string): okhttp3.HttpUrl.Builder;
					public addEncodedPathSegments(param0: string): okhttp3.HttpUrl.Builder;
					public encodedQuery(param0: string): okhttp3.HttpUrl.Builder;
					public host(param0: string): okhttp3.HttpUrl.Builder;
					public removeAllEncodedQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
					public setEncodedPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
					public constructor();
					public encodedUsername(param0: string): okhttp3.HttpUrl.Builder;
					public password(param0: string): okhttp3.HttpUrl.Builder;
					public port(param0: number): okhttp3.HttpUrl.Builder;
					public toString(): string;
					public addQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
					public addEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
					public query(param0: string): okhttp3.HttpUrl.Builder;
					public setPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
					public removeAllQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
					public scheme(param0: string): okhttp3.HttpUrl.Builder;
					public removePathSegment(param0: number): okhttp3.HttpUrl.Builder;
					public fragment(param0: string): okhttp3.HttpUrl.Builder;
					public build(): okhttp3.HttpUrl;
				}
				export module Builder {
					export class ParseResult {
						public static class: java.lang.Class<okhttp3.HttpUrl.Builder.ParseResult>;
						public static SUCCESS: okhttp3.HttpUrl.Builder.ParseResult;
						public static MISSING_SCHEME: okhttp3.HttpUrl.Builder.ParseResult;
						public static UNSUPPORTED_SCHEME: okhttp3.HttpUrl.Builder.ParseResult;
						public static INVALID_PORT: okhttp3.HttpUrl.Builder.ParseResult;
						public static INVALID_HOST: okhttp3.HttpUrl.Builder.ParseResult;
						public static values(): native.Array<okhttp3.HttpUrl.Builder.ParseResult>;
						public static valueOf(param0: string): okhttp3.HttpUrl.Builder.ParseResult;
					}
				}
			}
		}

		declare module okhttp3 {
			export class Interceptor {
				public static class: java.lang.Class<okhttp3.Interceptor>;
				/**
				 * Constructs a new instance of the okhttp3.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				});
				public constructor();
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
			export module Interceptor {
				export class Chain {
					public static class: java.lang.Class<okhttp3.Interceptor.Chain>;
					/**
					 * Constructs a new instance of the okhttp3.Interceptor$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						request(): okhttp3.Request;
						proceed(param0: okhttp3.Request): okhttp3.Response;
						connection(): okhttp3.Connection;
						call(): okhttp3.Call;
						connectTimeoutMillis(): number;
						withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
						readTimeoutMillis(): number;
						withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
						writeTimeoutMillis(): number;
						withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
					});
					public constructor();
					public request(): okhttp3.Request;
					public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
					public call(): okhttp3.Call;
					public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
					public readTimeoutMillis(): number;
					public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
					public proceed(param0: okhttp3.Request): okhttp3.Response;
					public connection(): okhttp3.Connection;
					public connectTimeoutMillis(): number;
					public writeTimeoutMillis(): number;
				}
			}
		}

		declare module okhttp3 {
			export class MediaType {
				public static class: java.lang.Class<okhttp3.MediaType>;
				public type(): string;
				public charset(): java.nio.charset.Charset;
				public equals(param0: any): boolean;
				public subtype(): string;
				public charset(param0: java.nio.charset.Charset): java.nio.charset.Charset;
				public hashCode(): number;
				public static parse(param0: string): okhttp3.MediaType;
				public toString(): string;
			}
		}

		declare module okhttp3 {
			export class MultipartBody extends okhttp3.RequestBody {
				public static class: java.lang.Class<okhttp3.MultipartBody>;
				public static MIXED: okhttp3.MediaType;
				public static ALTERNATIVE: okhttp3.MediaType;
				public static DIGEST: okhttp3.MediaType;
				public static PARALLEL: okhttp3.MediaType;
				public static FORM: okhttp3.MediaType;
				public boundary(): string;
				public size(): number;
				public parts(): java.util.List<okhttp3.MultipartBody.Part>;
				public type(): okhttp3.MediaType;
				public contentType(): okhttp3.MediaType;
				public writeTo(param0: okio.BufferedSink): void;
				public part(param0: number): okhttp3.MultipartBody.Part;
				public contentLength(): number;
			}
			export module MultipartBody {
				export class Builder {
					public static class: java.lang.Class<okhttp3.MultipartBody.Builder>;
					public setType(param0: okhttp3.MediaType): okhttp3.MultipartBody.Builder;
					public addPart(param0: okhttp3.MultipartBody.Part): okhttp3.MultipartBody.Builder;
					public build(): okhttp3.MultipartBody;
					public addPart(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
					public addPart(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
					public constructor();
					public addFormDataPart(param0: string, param1: string): okhttp3.MultipartBody.Builder;
					public addFormDataPart(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
					public constructor(param0: string);
				}
				export class Part {
					public static class: java.lang.Class<okhttp3.MultipartBody.Part>;
					public headers(): okhttp3.Headers;
					public static create(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
					public static createFormData(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
					public static create(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
					public static createFormData(param0: string, param1: string): okhttp3.MultipartBody.Part;
					public body(): okhttp3.RequestBody;
				}
			}
		}

		declare module okhttp3 {
			export class OkHttpClient implements okhttp3.Call.Factory, okhttp3.WebSocket.Factory {
				public static class: java.lang.Class<okhttp3.OkHttpClient>;
				public proxy(): java.net.Proxy;
				public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
				public connectionPool(): okhttp3.ConnectionPool;
				public cache(): okhttp3.Cache;
				public certificatePinner(): okhttp3.CertificatePinner;
				public dispatcher(): okhttp3.Dispatcher;
				public protocols(): java.util.List<okhttp3.Protocol>;
				public dns(): okhttp3.Dns;
				public proxyAuthenticator(): okhttp3.Authenticator;
				public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
				public connectTimeoutMillis(): number;
				public pingIntervalMillis(): number;
				public cookieJar(): okhttp3.CookieJar;
				public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
				public newBuilder(): okhttp3.OkHttpClient.Builder;
				public constructor();
				public proxySelector(): java.net.ProxySelector;
				public readTimeoutMillis(): number;
				public authenticator(): okhttp3.Authenticator;
				public followRedirects(): boolean;
				public interceptors(): java.util.List<okhttp3.Interceptor>;
				public writeTimeoutMillis(): number;
				public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
				public followSslRedirects(): boolean;
				public socketFactory(): javax.net.SocketFactory;
				public retryOnConnectionFailure(): boolean;
				public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
				public eventListenerFactory(): okhttp3.EventListener.Factory;
				public newCall(param0: okhttp3.Request): okhttp3.Call;
			}
			export module OkHttpClient {
				export class Builder {
					public static class: java.lang.Class<okhttp3.OkHttpClient.Builder>;
					public protocols(param0: java.util.List<okhttp3.Protocol>): okhttp3.OkHttpClient.Builder;
					public addInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
					public connectionPool(param0: okhttp3.ConnectionPool): okhttp3.OkHttpClient.Builder;
					public interceptors(): java.util.List<okhttp3.Interceptor>;
					public readTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
					public dns(param0: okhttp3.Dns): okhttp3.OkHttpClient.Builder;
					public pingInterval(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
					public eventListenerFactory(param0: okhttp3.EventListener.Factory): okhttp3.OkHttpClient.Builder;
					public connectionSpecs(param0: java.util.List<okhttp3.ConnectionSpec>): okhttp3.OkHttpClient.Builder;
					public build(): okhttp3.OkHttpClient;
					public eventListener(param0: okhttp3.EventListener): okhttp3.OkHttpClient.Builder;
					public proxyAuthenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
					public followRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
					public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
					public cache(param0: okhttp3.Cache): okhttp3.OkHttpClient.Builder;
					public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory, param1: javax.net.ssl.X509TrustManager): okhttp3.OkHttpClient.Builder;
					public cookieJar(param0: okhttp3.CookieJar): okhttp3.OkHttpClient.Builder;
					public connectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
					public followSslRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
					public constructor();
					public dispatcher(param0: okhttp3.Dispatcher): okhttp3.OkHttpClient.Builder;
					public proxySelector(param0: java.net.ProxySelector): okhttp3.OkHttpClient.Builder;
					public socketFactory(param0: javax.net.SocketFactory): okhttp3.OkHttpClient.Builder;
					public retryOnConnectionFailure(param0: boolean): okhttp3.OkHttpClient.Builder;
					public writeTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
					public addNetworkInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
					public hostnameVerifier(param0: javax.net.ssl.HostnameVerifier): okhttp3.OkHttpClient.Builder;
					public authenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
					public proxy(param0: java.net.Proxy): okhttp3.OkHttpClient.Builder;
					/** @deprecated */
					public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): okhttp3.OkHttpClient.Builder;
					public certificatePinner(param0: okhttp3.CertificatePinner): okhttp3.OkHttpClient.Builder;
				}
			}
		}

		declare module okhttp3 {
			export class Protocol {
				public static class: java.lang.Class<okhttp3.Protocol>;
				public static HTTP_1_0: okhttp3.Protocol;
				public static HTTP_1_1: okhttp3.Protocol;
				public static SPDY_3: okhttp3.Protocol;
				public static HTTP_2: okhttp3.Protocol;
				public static QUIC: okhttp3.Protocol;
				public static valueOf(param0: string): okhttp3.Protocol;
				public static get(param0: string): okhttp3.Protocol;
				public static values(): native.Array<okhttp3.Protocol>;
				public toString(): string;
			}
		}

		declare module okhttp3 {
			export class RealCall extends okhttp3.Call {
				public static class: java.lang.Class<okhttp3.RealCall>;
				public clone(): okhttp3.RealCall;
				public isExecuted(): boolean;
				public clone(): okhttp3.Call;
				public request(): okhttp3.Request;
				public execute(): okhttp3.Response;
				public isCanceled(): boolean;
				public enqueue(param0: okhttp3.Callback): void;
				public cancel(): void;
			}
			export module RealCall {
				export class AsyncCall extends okhttp3.internal.NamedRunnable {
					public static class: java.lang.Class<okhttp3.RealCall.AsyncCall>;
					public execute(): void;
				}
			}
		}

		declare module okhttp3 {
			export class Request {
				public static class: java.lang.Class<okhttp3.Request>;
				public header(param0: string): string;
				public headers(): okhttp3.Headers;
				public tag(): any;
				public newBuilder(): okhttp3.Request.Builder;
				public headers(param0: string): java.util.List<string>;
				public url(): okhttp3.HttpUrl;
				public cacheControl(): okhttp3.CacheControl;
				public method(): string;
				public toString(): string;
				public body(): okhttp3.RequestBody;
				public isHttps(): boolean;
			}
			export module Request {
				export class Builder {
					public static class: java.lang.Class<okhttp3.Request.Builder>;
					public url(param0: okhttp3.HttpUrl): okhttp3.Request.Builder;
					public tag(param0: any): okhttp3.Request.Builder;
					public url(param0: java.net.URL): okhttp3.Request.Builder;
					public header(param0: string, param1: string): okhttp3.Request.Builder;
					public headers(param0: okhttp3.Headers): okhttp3.Request.Builder;
					public put(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
					public delete(): okhttp3.Request.Builder;
					public get(): okhttp3.Request.Builder;
					public constructor();
					public addHeader(param0: string, param1: string): okhttp3.Request.Builder;
					public post(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
					public delete(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
					public patch(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
					public build(): okhttp3.Request;
					public method(param0: string, param1: okhttp3.RequestBody): okhttp3.Request.Builder;
					public url(param0: string): okhttp3.Request.Builder;
					public removeHeader(param0: string): okhttp3.Request.Builder;
					public cacheControl(param0: okhttp3.CacheControl): okhttp3.Request.Builder;
					public head(): okhttp3.Request.Builder;
				}
			}
		}

		declare module okhttp3 {
			export abstract class RequestBody {
				public static class: java.lang.Class<okhttp3.RequestBody>;
				public constructor();
				public static create(param0: okhttp3.MediaType, param1: okio.ByteString): okhttp3.RequestBody;
				public static create(param0: okhttp3.MediaType, param1: java.io.File): okhttp3.RequestBody;
				public static create(param0: okhttp3.MediaType, param1: string): okhttp3.RequestBody;
				public contentType(): okhttp3.MediaType;
				public writeTo(param0: okio.BufferedSink): void;
				public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.RequestBody;
				public contentLength(): number;
				public static create(param0: okhttp3.MediaType, param1: native.Array<number>, param2: number, param3: number): okhttp3.RequestBody;
			}
		}

		declare module okhttp3 {
			export class Response {
				public static class: java.lang.Class<okhttp3.Response>;
				public headers(): okhttp3.Headers;
				public priorResponse(): okhttp3.Response;
				public close(): void;
				public cacheResponse(): okhttp3.Response;
				public sentRequestAtMillis(): number;
				public cacheControl(): okhttp3.CacheControl;
				public toString(): string;
				public handshake(): okhttp3.Handshake;
				public peekBody(param0: number): okhttp3.ResponseBody;
				public isSuccessful(): boolean;
				public header(param0: string): string;
				public header(param0: string, param1: string): string;
				public body(): okhttp3.ResponseBody;
				public networkResponse(): okhttp3.Response;
				public headers(param0: string): java.util.List<string>;
				public newBuilder(): okhttp3.Response.Builder;
				public request(): okhttp3.Request;
				public code(): number;
				public protocol(): okhttp3.Protocol;
				public message(): string;
				public challenges(): java.util.List<okhttp3.Challenge>;
				public receivedResponseAtMillis(): number;
				public isRedirect(): boolean;
			}
			export module Response {
				export class Builder {
					public static class: java.lang.Class<okhttp3.Response.Builder>;
					public cacheResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
					public body(param0: okhttp3.ResponseBody): okhttp3.Response.Builder;
					public message(param0: string): okhttp3.Response.Builder;
					public request(param0: okhttp3.Request): okhttp3.Response.Builder;
					public header(param0: string, param1: string): okhttp3.Response.Builder;
					public headers(param0: okhttp3.Headers): okhttp3.Response.Builder;
					public sentRequestAtMillis(param0: number): okhttp3.Response.Builder;
					public priorResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
					public networkResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
					public constructor();
					public removeHeader(param0: string): okhttp3.Response.Builder;
					public handshake(param0: okhttp3.Handshake): okhttp3.Response.Builder;
					public addHeader(param0: string, param1: string): okhttp3.Response.Builder;
					public code(param0: number): okhttp3.Response.Builder;
					public build(): okhttp3.Response;
					public protocol(param0: okhttp3.Protocol): okhttp3.Response.Builder;
					public receivedResponseAtMillis(param0: number): okhttp3.Response.Builder;
				}
			}
		}

		declare module okhttp3 {
			export abstract class ResponseBody {
				public static class: java.lang.Class<okhttp3.ResponseBody>;
				public constructor();
				public byteStream(): java.io.InputStream;
				public bytes(): native.Array<number>;
				public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.ResponseBody;
				public static create(param0: okhttp3.MediaType, param1: number, param2: okio.BufferedSource): okhttp3.ResponseBody;
				public close(): void;
				public charStream(): java.io.Reader;
				public contentType(): okhttp3.MediaType;
				public source(): okio.BufferedSource;
				public string(): string;
				public contentLength(): number;
				public static create(param0: okhttp3.MediaType, param1: string): okhttp3.ResponseBody;
			}
			export module ResponseBody {
				export class BomAwareReader {
					public static class: java.lang.Class<okhttp3.ResponseBody.BomAwareReader>;
					public read(param0: native.Array<string>, param1: number, param2: number): number;
					public close(): void;
				}
			}
		}

		declare module okhttp3 {
			export class Route {
				public static class: java.lang.Class<okhttp3.Route>;
				public proxy(): java.net.Proxy;
				public constructor(param0: okhttp3.Address, param1: java.net.Proxy, param2: java.net.InetSocketAddress);
				public equals(param0: any): boolean;
				public address(): okhttp3.Address;
				public hashCode(): number;
				public toString(): string;
				public requiresTunnel(): boolean;
				public socketAddress(): java.net.InetSocketAddress;
			}
		}

		declare module okhttp3 {
			export class TlsVersion {
				public static class: java.lang.Class<okhttp3.TlsVersion>;
				public static TLS_1_3: okhttp3.TlsVersion;
				public static TLS_1_2: okhttp3.TlsVersion;
				public static TLS_1_1: okhttp3.TlsVersion;
				public static TLS_1_0: okhttp3.TlsVersion;
				public static SSL_3_0: okhttp3.TlsVersion;
				public javaName(): string;
				public static values(): native.Array<okhttp3.TlsVersion>;
				public static valueOf(param0: string): okhttp3.TlsVersion;
				public static forJavaName(param0: string): okhttp3.TlsVersion;
			}
		}

		declare module okhttp3 {
			export class WebSocket {
				public static class: java.lang.Class<okhttp3.WebSocket>;
				/**
				 * Constructs a new instance of the okhttp3.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					request(): okhttp3.Request;
					queueSize(): number;
					send(param0: string): boolean;
					send(param0: okio.ByteString): boolean;
					close(param0: number, param1: string): boolean;
					cancel(): void;
				});
				public constructor();
				public send(param0: string): boolean;
				public send(param0: okio.ByteString): boolean;
				public close(param0: number, param1: string): boolean;
				public request(): okhttp3.Request;
				public queueSize(): number;
				public cancel(): void;
			}
			export module WebSocket {
				export class Factory {
					public static class: java.lang.Class<okhttp3.WebSocket.Factory>;
					/**
					 * Constructs a new instance of the okhttp3.WebSocket$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
					});
					public constructor();
					public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
				}
			}
		}

		declare module okhttp3 {
			export abstract class WebSocketListener {
				public static class: java.lang.Class<okhttp3.WebSocketListener>;
				public constructor();
				public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
				public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
				public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
				public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
				public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
				public onMessage(param0: okhttp3.WebSocket, param1: string): void;
			}
		}

		declare module okhttp3 {
			export module internal {
				export abstract class Internal {
					public static class: java.lang.Class<okhttp3.internal.Internal>;
					public static instance: okhttp3.internal.Internal;
					public code(param0: okhttp3.Response.Builder): number;
					public addLenient(param0: okhttp3.Headers.Builder, param1: string): void;
					public connectionBecameIdle(param0: okhttp3.ConnectionPool, param1: okhttp3.internal.connection.RealConnection): boolean;
					public setCache(param0: okhttp3.OkHttpClient.Builder, param1: okhttp3.internal.cache.InternalCache): void;
					public equalsNonHost(param0: okhttp3.Address, param1: okhttp3.Address): boolean;
					public newWebSocketCall(param0: okhttp3.OkHttpClient, param1: okhttp3.Request): okhttp3.Call;
					public constructor();
					public apply(param0: okhttp3.ConnectionSpec, param1: javax.net.ssl.SSLSocket, param2: boolean): void;
					public put(param0: okhttp3.ConnectionPool, param1: okhttp3.internal.connection.RealConnection): void;
					public getHttpUrlChecked(param0: string): okhttp3.HttpUrl;
					public routeDatabase(param0: okhttp3.ConnectionPool): okhttp3.internal.connection.RouteDatabase;
					public static initializeInstanceForTests(): void;
					public addLenient(param0: okhttp3.Headers.Builder, param1: string, param2: string): void;
					public deduplicate(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.internal.connection.StreamAllocation): java.net.Socket;
					public get(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.internal.connection.StreamAllocation, param3: okhttp3.Route): okhttp3.internal.connection.RealConnection;
					public streamAllocation(param0: okhttp3.Call): okhttp3.internal.connection.StreamAllocation;
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export abstract class NamedRunnable {
					public static class: java.lang.Class<okhttp3.internal.NamedRunnable>;
					public name: string;
					public execute(): void;
					public constructor(param0: string, param1: native.Array<any>);
					public run(): void;
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export class Util {
					public static class: java.lang.Class<okhttp3.internal.Util>;
					public static EMPTY_BYTE_ARRAY: native.Array<number>;
					public static EMPTY_STRING_ARRAY: native.Array<string>;
					public static EMPTY_RESPONSE: okhttp3.ResponseBody;
					public static EMPTY_REQUEST: okhttp3.RequestBody;
					public static UTF_8: java.nio.charset.Charset;
					public static ISO_8859_1: java.nio.charset.Charset;
					public static UTC: java.util.TimeZone;
					public static NATURAL_ORDER: java.util.Comparator<string>;
					public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
					public static verifyAsIpAddress(param0: string): boolean;
					public static equal(param0: any, param1: any): boolean;
					public static bomAwareCharset(param0: okio.BufferedSource, param1: java.nio.charset.Charset): java.nio.charset.Charset;
					public static indexOf(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: string): number;
					public static format(param0: string, param1: native.Array<any>): string;
					public static decodeHexDigit(param0: string): number;
					public static indexOfControlOrNonAscii(param0: string): number;
					public static immutableList(param0: native.Array<any>): java.util.List;
					public static delimiterOffset(param0: string, param1: number, param2: number, param3: string): number;
					public static closeQuietly(param0: java.io.Closeable): void;
					public static hostHeader(param0: okhttp3.HttpUrl, param1: boolean): string;
					public static trimSubstring(param0: string, param1: number, param2: number): string;
					public static closeQuietly(param0: java.net.Socket): void;
					public static assertionError(param0: string, param1: java.lang.Exception): java.lang.AssertionError;
					public static skipTrailingAsciiWhitespace(param0: string, param1: number, param2: number): number;
					public static checkDuration(param0: string, param1: number, param2: java.util.concurrent.TimeUnit): number;
					public static intersect(param0: java.util.Comparator<any>, param1: native.Array<string>, param2: native.Array<string>): native.Array<string>;
					public static canonicalizeHost(param0: string): string;
					public static concat(param0: native.Array<string>, param1: string): native.Array<string>;
					public static nonEmptyIntersection(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: native.Array<string>): boolean;
					public static closeQuietly(param0: java.net.ServerSocket): void;
					public static discard(param0: okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
					public static threadFactory(param0: string, param1: boolean): java.util.concurrent.ThreadFactory;
					public static skipLeadingAsciiWhitespace(param0: string, param1: number, param2: number): number;
					public static isAndroidGetsocknameError(param0: java.lang.AssertionError): boolean;
					public static skipAll(param0: okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
					public static immutableList(param0: java.util.List): java.util.List;
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export class Version {
					public static class: java.lang.Class<okhttp3.internal.Version>;
					public static userAgent(): string;
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module cache {
					export class CacheInterceptor extends okhttp3.Interceptor {
						public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor>;
						public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(param0: okhttp3.internal.cache.InternalCache);
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module cache {
					export class CacheRequest {
						public static class: java.lang.Class<okhttp3.internal.cache.CacheRequest>;
						/**
						 * Constructs a new instance of the okhttp3.internal.cache.CacheRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							body(): okio.Sink;
							abort(): void;
						});
						public constructor();
						public abort(): void;
						public body(): okio.Sink;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module cache {
					export class CacheStrategy {
						public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy>;
						public networkRequest: okhttp3.Request;
						public cacheResponse: okhttp3.Response;
						public static isCacheable(param0: okhttp3.Response, param1: okhttp3.Request): boolean;
					}
					export module CacheStrategy {
						export class Factory {
							public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Factory>;
							public constructor(param0: number, param1: okhttp3.Request, param2: okhttp3.Response);
							public get(): okhttp3.internal.cache.CacheStrategy;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module cache {
					export class DiskLruCache {
						public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache>;
						public remove(param0: string): boolean;
						public close(): void;
						public snapshots(): java.util.Iterator<okhttp3.internal.cache.DiskLruCache.Snapshot>;
						public isClosed(): boolean;
						public getDirectory(): java.io.File;
						public static create(param0: okhttp3.internal.io.FileSystem, param1: java.io.File, param2: number, param3: number, param4: number): okhttp3.internal.cache.DiskLruCache;
						public get(param0: string): okhttp3.internal.cache.DiskLruCache.Snapshot;
						public size(): number;
						public flush(): void;
						public setMaxSize(param0: number): void;
						public edit(param0: string): okhttp3.internal.cache.DiskLruCache.Editor;
						public initialize(): void;
						public delete(): void;
						public getMaxSize(): number;
						public evictAll(): void;
					}
					export module DiskLruCache {
						export class Editor {
							public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Editor>;
							public newSource(param0: number): okio.Source;
							public commit(): void;
							public newSink(param0: number): okio.Sink;
							public abortUnlessCommitted(): void;
							public abort(): void;
						}
						export class Entry {
							public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Entry>;
						}
						export class Snapshot {
							public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Snapshot>;
							public close(): void;
							public key(): string;
							public getLength(param0: number): number;
							public edit(): okhttp3.internal.cache.DiskLruCache.Editor;
							public getSource(param0: number): okio.Source;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module cache {
					export class FaultHidingSink extends okio.ForwardingSink {
						public static class: java.lang.Class<okhttp3.internal.cache.FaultHidingSink>;
						public close(): void;
						public timeout(): okio.Timeout;
						public write(param0: okio.Buffer, param1: number): void;
						public flush(): void;
						public onException(param0: java.io.IOException): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module cache {
					export class InternalCache {
						public static class: java.lang.Class<okhttp3.internal.cache.InternalCache>;
						/**
						 * Constructs a new instance of the okhttp3.internal.cache.InternalCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: okhttp3.Request): okhttp3.Response;
							put(param0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
							remove(param0: okhttp3.Request): void;
							update(param0: okhttp3.Response, param1: okhttp3.Response): void;
							trackConditionalCacheHit(): void;
							trackResponse(param0: okhttp3.internal.cache.CacheStrategy): void;
						});
						public constructor();
						public put(param0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
						public get(param0: okhttp3.Request): okhttp3.Response;
						public remove(param0: okhttp3.Request): void;
						public update(param0: okhttp3.Response, param1: okhttp3.Response): void;
						public trackConditionalCacheHit(): void;
						public trackResponse(param0: okhttp3.internal.cache.CacheStrategy): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module cache2 {
					export class FileOperator {
						public static class: java.lang.Class<okhttp3.internal.cache2.FileOperator>;
						public write(param0: number, param1: okio.Buffer, param2: number): void;
						public read(param0: number, param1: okio.Buffer, param2: number): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module cache2 {
					export class Relay {
						public static class: java.lang.Class<okhttp3.internal.cache2.Relay>;
						public newSource(): okio.Source;
						public metadata(): okio.ByteString;
						public static edit(param0: java.io.File, param1: okio.Source, param2: okio.ByteString, param3: number): okhttp3.internal.cache2.Relay;
						public static read(param0: java.io.File): okhttp3.internal.cache2.Relay;
					}
					export module Relay {
						export class RelaySource extends okio.Source {
							public static class: java.lang.Class<okhttp3.internal.cache2.Relay.RelaySource>;
							public close(): void;
							public timeout(): okio.Timeout;
							public read(param0: okio.Buffer, param1: number): number;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module connection {
					export class ConnectInterceptor extends okhttp3.Interceptor {
						public static class: java.lang.Class<okhttp3.internal.connection.ConnectInterceptor>;
						public client: okhttp3.OkHttpClient;
						public constructor(param0: okhttp3.OkHttpClient);
						public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module connection {
					export class ConnectionSpecSelector {
						public static class: java.lang.Class<okhttp3.internal.connection.ConnectionSpecSelector>;
						public constructor(param0: java.util.List<okhttp3.ConnectionSpec>);
						public configureSecureSocket(param0: javax.net.ssl.SSLSocket): okhttp3.ConnectionSpec;
						public connectionFailed(param0: java.io.IOException): boolean;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module connection {
					export class RealConnection extends okhttp3.internal.http2.Http2Connection.Listener implements okhttp3.Connection {
						public static class: java.lang.Class<okhttp3.internal.connection.RealConnection>;
						public noNewStreams: boolean;
						public successCount: number;
						public allocationLimit: number;
						public allocations: java.util.List<java.lang.ref.Reference<okhttp3.internal.connection.StreamAllocation>>;
						public idleAtNanos: number;
						public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
						public connect(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: okhttp3.Call, param6: okhttp3.EventListener): void;
						public isEligible(param0: okhttp3.Address, param1: okhttp3.Route): boolean;
						public protocol(): okhttp3.Protocol;
						public route(): okhttp3.Route;
						public toString(): string;
						public socket(): java.net.Socket;
						public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
						public constructor();
						public constructor(param0: okhttp3.ConnectionPool, param1: okhttp3.Route);
						public isHealthy(param0: boolean): boolean;
						public supportsUrl(param0: okhttp3.HttpUrl): boolean;
						public newWebSocketStreams(param0: okhttp3.internal.connection.StreamAllocation): okhttp3.internal.ws.RealWebSocket.Streams;
						public cancel(): void;
						public isMultiplexed(): boolean;
						public static testConnection(param0: okhttp3.ConnectionPool, param1: okhttp3.Route, param2: java.net.Socket, param3: number): okhttp3.internal.connection.RealConnection;
						public handshake(): okhttp3.Handshake;
						public newCodec(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: okhttp3.internal.connection.StreamAllocation): okhttp3.internal.http.HttpCodec;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module connection {
					export class RouteDatabase {
						public static class: java.lang.Class<okhttp3.internal.connection.RouteDatabase>;
						public shouldPostpone(param0: okhttp3.Route): boolean;
						public connected(param0: okhttp3.Route): void;
						public failed(param0: okhttp3.Route): void;
						public constructor();
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module connection {
					export class RouteException {
						public static class: java.lang.Class<okhttp3.internal.connection.RouteException>;
						public getLastConnectException(): java.io.IOException;
						public constructor(param0: java.io.IOException);
						public addConnectException(param0: java.io.IOException): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module connection {
					export class RouteSelector {
						public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector>;
						public next(): okhttp3.internal.connection.RouteSelector.Selection;
						public constructor(param0: okhttp3.Address, param1: okhttp3.internal.connection.RouteDatabase, param2: okhttp3.Call, param3: okhttp3.EventListener);
						public hasNext(): boolean;
						public connectFailed(param0: okhttp3.Route, param1: java.io.IOException): void;
					}
					export module RouteSelector {
						export class Selection {
							public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Selection>;
							public getAll(): java.util.List<okhttp3.Route>;
							public next(): okhttp3.Route;
							public hasNext(): boolean;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module connection {
					export class StreamAllocation {
						public static class: java.lang.Class<okhttp3.internal.connection.StreamAllocation>;
						public address: okhttp3.Address;
						public call: okhttp3.Call;
						public eventListener: okhttp3.EventListener;
						public streamFinished(param0: boolean, param1: okhttp3.internal.http.HttpCodec, param2: number, param3: java.io.IOException): void;
						public release(): void;
						public codec(): okhttp3.internal.http.HttpCodec;
						public route(): okhttp3.Route;
						public toString(): string;
						public newStream(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: boolean): okhttp3.internal.http.HttpCodec;
						public releaseAndAcquire(param0: okhttp3.internal.connection.RealConnection): java.net.Socket;
						public noNewStreams(): void;
						public acquire(param0: okhttp3.internal.connection.RealConnection, param1: boolean): void;
						public cancel(): void;
						public connection(): okhttp3.internal.connection.RealConnection;
						public hasMoreRoutes(): boolean;
						public constructor(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.Call, param3: okhttp3.EventListener, param4: any);
						public streamFailed(param0: java.io.IOException): void;
					}
					export module StreamAllocation {
						export class StreamAllocationReference extends java.lang.ref.WeakReference<okhttp3.internal.connection.StreamAllocation> {
							public static class: java.lang.Class<okhttp3.internal.connection.StreamAllocation.StreamAllocationReference>;
							public callStackTrace: any;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class BridgeInterceptor extends okhttp3.Interceptor {
						public static class: java.lang.Class<okhttp3.internal.http.BridgeInterceptor>;
						public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(param0: okhttp3.CookieJar);
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class CallServerInterceptor extends okhttp3.Interceptor {
						public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor>;
						public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(param0: boolean);
					}
					export module CallServerInterceptor {
						export class CountingSink extends okio.ForwardingSink {
							public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor.CountingSink>;
							public close(): void;
							public flush(): void;
							public write(param0: okio.Buffer, param1: number): void;
							public timeout(): okio.Timeout;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class HttpCodec {
						public static class: java.lang.Class<okhttp3.internal.http.HttpCodec>;
						/**
						 * Constructs a new instance of the okhttp3.internal.http.HttpCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
							writeRequestHeaders(param0: okhttp3.Request): void;
							flushRequest(): void;
							finishRequest(): void;
							readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
							openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
							cancel(): void;
						});
						public constructor();
						public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
						public finishRequest(): void;
						public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
						public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
						public cancel(): void;
						public flushRequest(): void;
						public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
						public writeRequestHeaders(param0: okhttp3.Request): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class HttpDate {
						public static class: java.lang.Class<okhttp3.internal.http.HttpDate>;
						public static MAX_DATE: number;
						public static parse(param0: string): java.util.Date;
						public static format(param0: java.util.Date): string;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class HttpHeaders {
						public static class: java.lang.Class<okhttp3.internal.http.HttpHeaders>;
						public static varyHeaders(param0: okhttp3.Headers, param1: okhttp3.Headers): okhttp3.Headers;
						public static hasBody(param0: okhttp3.Response): boolean;
						public static receiveHeaders(param0: okhttp3.CookieJar, param1: okhttp3.HttpUrl, param2: okhttp3.Headers): void;
						public static varyHeaders(param0: okhttp3.Response): okhttp3.Headers;
						public static varyMatches(param0: okhttp3.Response, param1: okhttp3.Headers, param2: okhttp3.Request): boolean;
						public static skipWhitespace(param0: string, param1: number): number;
						public static hasVaryAll(param0: okhttp3.Headers): boolean;
						public static contentLength(param0: okhttp3.Response): number;
						public static hasVaryAll(param0: okhttp3.Response): boolean;
						public static skipUntil(param0: string, param1: number, param2: string): number;
						public static varyFields(param0: okhttp3.Headers): java.util.Set<string>;
						public static contentLength(param0: okhttp3.Headers): number;
						public static parseChallenges(param0: okhttp3.Headers, param1: string): java.util.List<okhttp3.Challenge>;
						public static parseSeconds(param0: string, param1: number): number;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class HttpMethod {
						public static class: java.lang.Class<okhttp3.internal.http.HttpMethod>;
						public static invalidatesCache(param0: string): boolean;
						public static requiresRequestBody(param0: string): boolean;
						public static permitsRequestBody(param0: string): boolean;
						public static redirectsWithBody(param0: string): boolean;
						public static redirectsToGet(param0: string): boolean;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class RealInterceptorChain extends okhttp3.Interceptor.Chain {
						public static class: java.lang.Class<okhttp3.internal.http.RealInterceptorChain>;
						public request(): okhttp3.Request;
						public httpStream(): okhttp3.internal.http.HttpCodec;
						public connectTimeoutMillis(): number;
						public constructor(param0: java.util.List<okhttp3.Interceptor>, param1: okhttp3.internal.connection.StreamAllocation, param2: okhttp3.internal.http.HttpCodec, param3: okhttp3.internal.connection.RealConnection, param4: number, param5: okhttp3.Request, param6: okhttp3.Call, param7: okhttp3.EventListener, param8: number, param9: number, param10: number);
						public proceed(param0: okhttp3.Request, param1: okhttp3.internal.connection.StreamAllocation, param2: okhttp3.internal.http.HttpCodec, param3: okhttp3.internal.connection.RealConnection): okhttp3.Response;
						public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
						public connection(): okhttp3.Connection;
						public writeTimeoutMillis(): number;
						public readTimeoutMillis(): number;
						public call(): okhttp3.Call;
						public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
						public proceed(param0: okhttp3.Request): okhttp3.Response;
						public eventListener(): okhttp3.EventListener;
						public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
						public streamAllocation(): okhttp3.internal.connection.StreamAllocation;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class RealResponseBody extends okhttp3.ResponseBody {
						public static class: java.lang.Class<okhttp3.internal.http.RealResponseBody>;
						public contentLength(): number;
						public constructor(param0: string, param1: number, param2: okio.BufferedSource);
						public source(): okio.BufferedSource;
						public contentType(): okhttp3.MediaType;
						public constructor();
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class RequestLine {
						public static class: java.lang.Class<okhttp3.internal.http.RequestLine>;
						public static requestPath(param0: okhttp3.HttpUrl): string;
						public static get(param0: okhttp3.Request, param1: java.net.Proxy.Type): string;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class RetryAndFollowUpInterceptor extends okhttp3.Interceptor {
						public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor>;
						public isCanceled(): boolean;
						public setCallStackTrace(param0: any): void;
						public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(param0: okhttp3.OkHttpClient, param1: boolean);
						public cancel(): void;
						public streamAllocation(): okhttp3.internal.connection.StreamAllocation;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class StatusLine {
						public static class: java.lang.Class<okhttp3.internal.http.StatusLine>;
						public static HTTP_TEMP_REDIRECT: number;
						public static HTTP_PERM_REDIRECT: number;
						public static HTTP_CONTINUE: number;
						public protocol: okhttp3.Protocol;
						public code: number;
						public message: string;
						public constructor(param0: okhttp3.Protocol, param1: number, param2: string);
						public static parse(param0: string): okhttp3.internal.http.StatusLine;
						public toString(): string;
						public static get(param0: okhttp3.Response): okhttp3.internal.http.StatusLine;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http {
					export class UnrepeatableRequestBody {
						public static class: java.lang.Class<okhttp3.internal.http.UnrepeatableRequestBody>;
						/**
						 * Constructs a new instance of the okhttp3.internal.http.UnrepeatableRequestBody interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http1 {
					export class Http1Codec extends okhttp3.internal.http.HttpCodec {
						public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec>;
						public finishRequest(): void;
						public newFixedLengthSink(param0: number): okio.Sink;
						public newChunkedSink(): okio.Sink;
						public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.internal.connection.StreamAllocation, param2: okio.BufferedSource, param3: okio.BufferedSink);
						public isClosed(): boolean;
						public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
						public writeRequestHeaders(param0: okhttp3.Request): void;
						public writeRequest(param0: okhttp3.Headers, param1: string): void;
						public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
						public newUnknownLengthSource(): okio.Source;
						public readHeaders(): okhttp3.Headers;
						public newChunkedSource(param0: okhttp3.HttpUrl): okio.Source;
						public cancel(): void;
						public flushRequest(): void;
						public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
						public newFixedLengthSource(param0: number): okio.Source;
					}
					export module Http1Codec {
						export abstract class AbstractSource extends okio.Source {
							public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.AbstractSource>;
							public closed: boolean;
							public bytesRead: number;
							public close(): void;
							public endOfInput(param0: boolean, param1: java.io.IOException): void;
							public timeout(): okio.Timeout;
							public read(param0: okio.Buffer, param1: number): number;
						}
						export class ChunkedSink extends okio.Sink {
							public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.ChunkedSink>;
							public close(): void;
							public flush(): void;
							public write(param0: okio.Buffer, param1: number): void;
							public timeout(): okio.Timeout;
						}
						export class ChunkedSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
							public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.ChunkedSource>;
							public close(): void;
							public timeout(): okio.Timeout;
							public read(param0: okio.Buffer, param1: number): number;
						}
						export class FixedLengthSink extends okio.Sink {
							public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.FixedLengthSink>;
							public close(): void;
							public flush(): void;
							public write(param0: okio.Buffer, param1: number): void;
							public timeout(): okio.Timeout;
						}
						export class FixedLengthSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
							public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.FixedLengthSource>;
							public close(): void;
							public timeout(): okio.Timeout;
							public read(param0: okio.Buffer, param1: number): number;
						}
						export class UnknownLengthSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
							public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.UnknownLengthSource>;
							public close(): void;
							public timeout(): okio.Timeout;
							public read(param0: okio.Buffer, param1: number): number;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class ConnectionShutdownException {
						public static class: java.lang.Class<okhttp3.internal.http2.ConnectionShutdownException>;
						public constructor();
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class ErrorCode {
						public static class: java.lang.Class<okhttp3.internal.http2.ErrorCode>;
						public static NO_ERROR: okhttp3.internal.http2.ErrorCode;
						public static PROTOCOL_ERROR: okhttp3.internal.http2.ErrorCode;
						public static INTERNAL_ERROR: okhttp3.internal.http2.ErrorCode;
						public static FLOW_CONTROL_ERROR: okhttp3.internal.http2.ErrorCode;
						public static REFUSED_STREAM: okhttp3.internal.http2.ErrorCode;
						public static CANCEL: okhttp3.internal.http2.ErrorCode;
						public static COMPRESSION_ERROR: okhttp3.internal.http2.ErrorCode;
						public static CONNECT_ERROR: okhttp3.internal.http2.ErrorCode;
						public static ENHANCE_YOUR_CALM: okhttp3.internal.http2.ErrorCode;
						public static INADEQUATE_SECURITY: okhttp3.internal.http2.ErrorCode;
						public static HTTP_1_1_REQUIRED: okhttp3.internal.http2.ErrorCode;
						public httpCode: number;
						public static valueOf(param0: string): okhttp3.internal.http2.ErrorCode;
						public static fromHttp2(param0: number): okhttp3.internal.http2.ErrorCode;
						public static values(): native.Array<okhttp3.internal.http2.ErrorCode>;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Header {
						public static class: java.lang.Class<okhttp3.internal.http2.Header>;
						public static PSEUDO_PREFIX: okio.ByteString;
						public static RESPONSE_STATUS: okio.ByteString;
						public static TARGET_METHOD: okio.ByteString;
						public static TARGET_PATH: okio.ByteString;
						public static TARGET_SCHEME: okio.ByteString;
						public static TARGET_AUTHORITY: okio.ByteString;
						public name: okio.ByteString;
						public value: okio.ByteString;
						public constructor(param0: okio.ByteString, param1: okio.ByteString);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: okio.ByteString, param1: string);
						public toString(): string;
						public constructor(param0: string, param1: string);
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Hpack {
						public static class: java.lang.Class<okhttp3.internal.http2.Hpack>;
					}
					export module Hpack {
						export class Reader {
							public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Reader>;
							public getAndResetHeaderList(): java.util.List<okhttp3.internal.http2.Header>;
						}
						export class Writer {
							public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Writer>;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Http2 {
						public static class: java.lang.Class<okhttp3.internal.http2.Http2>;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Http2Codec extends okhttp3.internal.http.HttpCodec {
						public static class: java.lang.Class<okhttp3.internal.http2.Http2Codec>;
						public finishRequest(): void;
						public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
						public static readHttp2HeadersList(param0: java.util.List<okhttp3.internal.http2.Header>): okhttp3.Response.Builder;
						public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
						public cancel(): void;
						public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: okhttp3.internal.connection.StreamAllocation, param3: okhttp3.internal.http2.Http2Connection);
						public flushRequest(): void;
						public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
						public writeRequestHeaders(param0: okhttp3.Request): void;
						public static http2HeadersList(param0: okhttp3.Request): java.util.List<okhttp3.internal.http2.Header>;
					}
					export module Http2Codec {
						export class StreamFinishingSource extends okio.ForwardingSource {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Codec.StreamFinishingSource>;
							public close(): void;
							public timeout(): okio.Timeout;
							public read(param0: okio.Buffer, param1: number): number;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Http2Connection {
						public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection>;
						public maxConcurrentStreams(): number;
						public pushStream(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): okhttp3.internal.http2.Http2Stream;
						public writeData(param0: number, param1: boolean, param2: okio.Buffer, param3: number): void;
						public close(): void;
						public start(): void;
						public newStream(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean): okhttp3.internal.http2.Http2Stream;
						public isShutdown(): boolean;
						public openStreamCount(): number;
						public shutdown(param0: okhttp3.internal.http2.ErrorCode): void;
						public setSettings(param0: okhttp3.internal.http2.Settings): void;
						public getProtocol(): okhttp3.Protocol;
						public flush(): void;
					}
					export module Http2Connection {
						export class Builder {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Builder>;
							public constructor(param0: boolean);
							public listener(param0: okhttp3.internal.http2.Http2Connection.Listener): okhttp3.internal.http2.Http2Connection.Builder;
							public pingIntervalMillis(param0: number): okhttp3.internal.http2.Http2Connection.Builder;
							public build(): okhttp3.internal.http2.Http2Connection;
							public socket(param0: java.net.Socket, param1: string, param2: okio.BufferedSource, param3: okio.BufferedSink): okhttp3.internal.http2.Http2Connection.Builder;
							public socket(param0: java.net.Socket): okhttp3.internal.http2.Http2Connection.Builder;
							public pushObserver(param0: okhttp3.internal.http2.PushObserver): okhttp3.internal.http2.Http2Connection.Builder;
						}
						export abstract class Listener {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener>;
							public static REFUSE_INCOMING_STREAMS: okhttp3.internal.http2.Http2Connection.Listener;
							public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
							public constructor();
							public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
						}
						export class PingRunnable extends okhttp3.internal.NamedRunnable {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.PingRunnable>;
							public execute(): void;
						}
						export class ReaderRunnable extends okhttp3.internal.NamedRunnable implements okhttp3.internal.http2.Http2Reader.Handler {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.ReaderRunnable>;
							public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
							public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
							public ackSettings(): void;
							public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
							public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
							public priority(param0: number, param1: number, param2: number, param3: boolean): void;
							public execute(): void;
							public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
							public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
							public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
							public windowUpdate(param0: number, param1: number): void;
							public ping(param0: boolean, param1: number, param2: number): void;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Http2Reader {
						public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader>;
						public close(): void;
						public nextFrame(param0: boolean, param1: okhttp3.internal.http2.Http2Reader.Handler): boolean;
						public readConnectionPreface(param0: okhttp3.internal.http2.Http2Reader.Handler): void;
					}
					export module Http2Reader {
						export class ContinuationSource extends okio.Source {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.ContinuationSource>;
							public close(): void;
							public timeout(): okio.Timeout;
							public read(param0: okio.Buffer, param1: number): number;
						}
						export class Handler {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Handler>;
							/**
							 * Constructs a new instance of the okhttp3.internal.http2.Http2Reader$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
								headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
								rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
								settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
								ackSettings(): void;
								ping(param0: boolean, param1: number, param2: number): void;
								goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
								windowUpdate(param0: number, param1: number): void;
								priority(param0: number, param1: number, param2: number, param3: boolean): void;
								pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
								alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
							});
							public constructor();
							public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
							public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
							public ackSettings(): void;
							public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
							public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
							public priority(param0: number, param1: number, param2: number, param3: boolean): void;
							public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
							public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
							public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
							public windowUpdate(param0: number, param1: number): void;
							public ping(param0: boolean, param1: number, param2: number): void;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Http2Stream {
						public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream>;
						public getSource(): okio.Source;
						public close(param0: okhttp3.internal.http2.ErrorCode): void;
						public closeLater(param0: okhttp3.internal.http2.ErrorCode): void;
						public writeTimeout(): okio.Timeout;
						public sendResponseHeaders(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean): void;
						public getId(): number;
						public getRequestHeaders(): java.util.List<okhttp3.internal.http2.Header>;
						public getErrorCode(): okhttp3.internal.http2.ErrorCode;
						public takeResponseHeaders(): java.util.List<okhttp3.internal.http2.Header>;
						public getConnection(): okhttp3.internal.http2.Http2Connection;
						public isOpen(): boolean;
						public readTimeout(): okio.Timeout;
						public getSink(): okio.Sink;
						public isLocallyInitiated(): boolean;
					}
					export module Http2Stream {
						export class FramingSink extends okio.Sink {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSink>;
							public close(): void;
							public flush(): void;
							public write(param0: okio.Buffer, param1: number): void;
							public timeout(): okio.Timeout;
						}
						export class FramingSource extends okio.Source {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSource>;
							public close(): void;
							public timeout(): okio.Timeout;
							public read(param0: okio.Buffer, param1: number): number;
						}
						export class StreamTimeout extends okio.AsyncTimeout {
							public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.StreamTimeout>;
							public timedOut(): void;
							public newTimeoutException(param0: java.io.IOException): java.io.IOException;
							public exitAndThrowIfTimedOut(): void;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Http2Writer {
						public static class: java.lang.Class<okhttp3.internal.http2.Http2Writer>;
						public headers(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): void;
						public close(): void;
						public synStream(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
						public settings(param0: okhttp3.internal.http2.Settings): void;
						public ping(param0: boolean, param1: number, param2: number): void;
						public windowUpdate(param0: number, param1: number): void;
						public frameHeader(param0: number, param1: number, param2: number, param3: number): void;
						public maxDataLength(): number;
						public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: native.Array<number>): void;
						public flush(): void;
						public connectionPreface(): void;
						public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
						public data(param0: boolean, param1: number, param2: okio.Buffer, param3: number): void;
						public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
						public synReply(param0: boolean, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
						public applyAndAckSettings(param0: okhttp3.internal.http2.Settings): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Huffman {
						public static class: java.lang.Class<okhttp3.internal.http2.Huffman>;
						public static get(): okhttp3.internal.http2.Huffman;
					}
					export module Huffman {
						export class Node {
							public static class: java.lang.Class<okhttp3.internal.http2.Huffman.Node>;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class PushObserver {
						public static class: java.lang.Class<okhttp3.internal.http2.PushObserver>;
						/**
						 * Constructs a new instance of the okhttp3.internal.http2.PushObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
							onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
							onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
							onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
							<clinit>(): void;
						});
						public constructor();
						public static CANCEL: okhttp3.internal.http2.PushObserver;
						public onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
						public onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
						public onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
						public onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class Settings {
						public static class: java.lang.Class<okhttp3.internal.http2.Settings>;
						public constructor();
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module http2 {
					export class StreamResetException {
						public static class: java.lang.Class<okhttp3.internal.http2.StreamResetException>;
						public errorCode: okhttp3.internal.http2.ErrorCode;
						public constructor(param0: okhttp3.internal.http2.ErrorCode);
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module io {
					export class FileSystem {
						public static class: java.lang.Class<okhttp3.internal.io.FileSystem>;
						/**
						 * Constructs a new instance of the okhttp3.internal.io.FileSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							source(param0: java.io.File): okio.Source;
							sink(param0: java.io.File): okio.Sink;
							appendingSink(param0: java.io.File): okio.Sink;
							delete(param0: java.io.File): void;
							exists(param0: java.io.File): boolean;
							size(param0: java.io.File): number;
							rename(param0: java.io.File, param1: java.io.File): void;
							deleteContents(param0: java.io.File): void;
							<clinit>(): void;
						});
						public constructor();
						public static SYSTEM: okhttp3.internal.io.FileSystem;
						public source(param0: java.io.File): okio.Source;
						public size(param0: java.io.File): number;
						public deleteContents(param0: java.io.File): void;
						public appendingSink(param0: java.io.File): okio.Sink;
						public sink(param0: java.io.File): okio.Sink;
						public exists(param0: java.io.File): boolean;
						public rename(param0: java.io.File, param1: java.io.File): void;
						public delete(param0: java.io.File): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module platform {
					export class AndroidPlatform extends okhttp3.internal.platform.Platform {
						public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform>;
						public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
						public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
						public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
						public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
						public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
						public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
						public log(param0: number, param1: string, param2: java.lang.Throwable): void;
						public logCloseableLeak(param0: string, param1: any): void;
						public getStackTraceForCloseable(param0: string): any;
						public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
						public isCleartextTrafficPermitted(param0: string): boolean;
						public static buildIfSupported(): okhttp3.internal.platform.Platform;
					}
					export module AndroidPlatform {
						export class AndroidCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
							public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidCertificateChainCleaner>;
							public equals(param0: any): boolean;
							public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
							public hashCode(): number;
						}
						export class AndroidTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
							public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidTrustRootIndex>;
							public equals(param0: any): boolean;
							public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
							public hashCode(): number;
						}
						export class CloseGuard {
							public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CloseGuard>;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module platform {
					export class ConscryptPlatform extends okhttp3.internal.platform.Platform {
						public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform>;
						public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
						public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
						public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
						public static buildIfSupported(): okhttp3.internal.platform.Platform;
						public getSSLContext(): javax.net.ssl.SSLContext;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module platform {
					export class Jdk9Platform extends okhttp3.internal.platform.Platform {
						public static class: java.lang.Class<okhttp3.internal.platform.Jdk9Platform>;
						public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
						public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
						public static buildIfSupported(): okhttp3.internal.platform.Jdk9Platform;
						public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module platform {
					export class JdkWithJettyBootPlatform extends okhttp3.internal.platform.Platform {
						public static class: java.lang.Class<okhttp3.internal.platform.JdkWithJettyBootPlatform>;
						public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
						public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
						public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
						public static buildIfSupported(): okhttp3.internal.platform.Platform;
					}
					export module JdkWithJettyBootPlatform {
						export class JettyNegoProvider {
							public static class: java.lang.Class<okhttp3.internal.platform.JdkWithJettyBootPlatform.JettyNegoProvider>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module platform {
					export class OptionalMethod<T> extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.OptionalMethod<any>>;
						public invokeOptional(param0: T, param1: native.Array<any>): any;
						public invokeOptionalWithoutCheckedException(param0: T, param1: native.Array<any>): any;
						public isSupported(param0: T): boolean;
						public invoke(param0: T, param1: native.Array<any>): any;
						public invokeWithoutCheckedException(param0: T, param1: native.Array<any>): any;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module platform {
					export class Platform {
						public static class: java.lang.Class<okhttp3.internal.platform.Platform>;
						public static INFO: number;
						public static WARN: number;
						public getPrefix(): string;
						public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
						public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
						public static isConscryptPreferred(): boolean;
						public log(param0: number, param1: string, param2: java.lang.Throwable): void;
						public logCloseableLeak(param0: string, param1: any): void;
						public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
						public isCleartextTrafficPermitted(param0: string): boolean;
						public constructor();
						public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
						public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
						public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
						public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
						public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
						public static get(): okhttp3.internal.platform.Platform;
						public getStackTraceForCloseable(param0: string): any;
						public static alpnProtocolNames(param0: java.util.List<okhttp3.Protocol>): java.util.List<string>;
						public getSSLContext(): javax.net.ssl.SSLContext;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module publicsuffix {
					export class PublicSuffixDatabase {
						public static class: java.lang.Class<okhttp3.internal.publicsuffix.PublicSuffixDatabase>;
						public static PUBLIC_SUFFIX_RESOURCE: string;
						public static get(): okhttp3.internal.publicsuffix.PublicSuffixDatabase;
						public getEffectiveTldPlusOne(param0: string): string;
						public constructor();
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module tls {
					export class BasicCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
						public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner>;
						public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: okhttp3.internal.tls.TrustRootIndex);
						public constructor();
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module tls {
					export class BasicTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
						public static class: java.lang.Class<okhttp3.internal.tls.BasicTrustRootIndex>;
						public constructor(param0: native.Array<java.security.cert.X509Certificate>);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module tls {
					export abstract class CertificateChainCleaner {
						public static class: java.lang.Class<okhttp3.internal.tls.CertificateChainCleaner>;
						public static get(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
						public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
						public static get(param0: native.Array<java.security.cert.X509Certificate>): okhttp3.internal.tls.CertificateChainCleaner;
						public constructor();
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module tls {
					export class DistinguishedNameParser {
						public static class: java.lang.Class<okhttp3.internal.tls.DistinguishedNameParser>;
						public findMostSpecific(param0: string): string;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module tls {
					export class OkHostnameVerifier {
						public static class: java.lang.Class<okhttp3.internal.tls.OkHostnameVerifier>;
						public static INSTANCE: okhttp3.internal.tls.OkHostnameVerifier;
						public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
						public verifyHostname(param0: string, param1: string): boolean;
						public static allSubjectAltNames(param0: java.security.cert.X509Certificate): java.util.List<string>;
						public verify(param0: string, param1: java.security.cert.X509Certificate): boolean;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module tls {
					export class TrustRootIndex {
						public static class: java.lang.Class<okhttp3.internal.tls.TrustRootIndex>;
						/**
						 * Constructs a new instance of the okhttp3.internal.tls.TrustRootIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
						});
						public constructor();
						public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module ws {
					export class RealWebSocket implements okhttp3.WebSocket, okhttp3.internal.ws.WebSocketReader.FrameCallback {
						public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket>;
						public constructor(param0: okhttp3.Request, param1: okhttp3.WebSocketListener, param2: java.util.Random, param3: number);
						public request(): okhttp3.Request;
						public send(param0: string): boolean;
						public onReadPong(param0: okio.ByteString): void;
						public onReadPing(param0: okio.ByteString): void;
						public initReaderAndWriter(param0: string, param1: okhttp3.internal.ws.RealWebSocket.Streams): void;
						public queueSize(): number;
						public close(param0: number, param1: string): boolean;
						public loopReader(): void;
						public send(param0: okio.ByteString): boolean;
						public onReadMessage(param0: okio.ByteString): void;
						public failWebSocket(param0: java.lang.Exception, param1: okhttp3.Response): void;
						public cancel(): void;
						public connect(param0: okhttp3.OkHttpClient): void;
						public onReadClose(param0: number, param1: string): void;
						public onReadMessage(param0: string): void;
					}
					export module RealWebSocket {
						export class CancelRunnable {
							public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.CancelRunnable>;
							public run(): void;
						}
						export class Close {
							public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Close>;
						}
						export class Message {
							public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Message>;
						}
						export class PingRunnable {
							public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.PingRunnable>;
							public run(): void;
						}
						export abstract class Streams {
							public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Streams>;
							public client: boolean;
							public source: okio.BufferedSource;
							public sink: okio.BufferedSink;
							public constructor(param0: boolean, param1: okio.BufferedSource, param2: okio.BufferedSink);
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module ws {
					export class WebSocketProtocol {
						public static class: java.lang.Class<okhttp3.internal.ws.WebSocketProtocol>;
						public static acceptHeader(param0: string): string;
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module ws {
					export class WebSocketReader {
						public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader>;
					}
					export module WebSocketReader {
						export class FrameCallback {
							public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader.FrameCallback>;
							/**
							 * Constructs a new instance of the okhttp3.internal.ws.WebSocketReader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onReadMessage(param0: string): void;
								onReadMessage(param0: okio.ByteString): void;
								onReadPing(param0: okio.ByteString): void;
								onReadPong(param0: okio.ByteString): void;
								onReadClose(param0: number, param1: string): void;
							});
							public constructor();
							public onReadClose(param0: number, param1: string): void;
							public onReadMessage(param0: string): void;
							public onReadMessage(param0: okio.ByteString): void;
							public onReadPing(param0: okio.ByteString): void;
							public onReadPong(param0: okio.ByteString): void;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module internal {
				export module ws {
					export class WebSocketWriter {
						public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter>;
					}
					export module WebSocketWriter {
						export class FrameSink extends okio.Sink {
							public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter.FrameSink>;
							public close(): void;
							public flush(): void;
							public write(param0: okio.Buffer, param1: number): void;
							public timeout(): okio.Timeout;
						}
					}
				}
			}
		}

		declare module okhttp3 {
			export module logging {
				export class HttpLoggingInterceptor extends okhttp3.Interceptor {
					public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor>;
					public constructor(param0: okhttp3.logging.HttpLoggingInterceptor.Logger);
					public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
					public setLevel(param0: okhttp3.logging.HttpLoggingInterceptor.Level): okhttp3.logging.HttpLoggingInterceptor;
					public constructor();
					public getLevel(): okhttp3.logging.HttpLoggingInterceptor.Level;
				}
				export module HttpLoggingInterceptor {
					export class Level {
						public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor.Level>;
						public static NONE: okhttp3.logging.HttpLoggingInterceptor.Level;
						public static BASIC: okhttp3.logging.HttpLoggingInterceptor.Level;
						public static HEADERS: okhttp3.logging.HttpLoggingInterceptor.Level;
						public static BODY: okhttp3.logging.HttpLoggingInterceptor.Level;
						public static valueOf(param0: string): okhttp3.logging.HttpLoggingInterceptor.Level;
						public static values(): native.Array<okhttp3.logging.HttpLoggingInterceptor.Level>;
					}
					export class Logger {
						public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor.Logger>;
						/**
						 * Constructs a new instance of the okhttp3.logging.HttpLoggingInterceptor$Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							log(param0: string): void;
							<clinit>(): void;
						});
						public constructor();
						public static DEFAULT: okhttp3.logging.HttpLoggingInterceptor.Logger;
						public log(param0: string): void;
					}
				}
			}
		}



		declare module okio {
			export class AsyncTimeout extends okio.Timeout {
				public static class: java.lang.Class<okio.AsyncTimeout>;
				public constructor();
				public enter(): void;
				public sink(param0: okio.Sink): okio.Sink;
				public timedOut(): void;
				public newTimeoutException(param0: java.io.IOException): java.io.IOException;
				public source(param0: okio.Source): okio.Source;
				public exit(): boolean;
			}
			export module AsyncTimeout {
				export class Watchdog {
					public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
					public run(): void;
				}
			}
		}

		declare module okio {
			export class Base64 {
				public static class: java.lang.Class<okio.Base64>;
				public static encodeUrl(param0: native.Array<number>): string;
				public static decode(param0: string): native.Array<number>;
				public static encode(param0: native.Array<number>): string;
			}
		}

		declare module okio {
			export class Buffer implements okio.BufferedSource, okio.BufferedSink {
				public static class: java.lang.Class<okio.Buffer>;
				public readIntLe(): number;
				public writeUtf8(param0: string): okio.Buffer;
				public writeDecimalLong(param0: number): okio.Buffer;
				public readFrom(param0: java.io.InputStream, param1: number): okio.Buffer;
				public writeUtf8(param0: string, param1: number, param2: number): okio.Buffer;
				public readUtf8(param0: number): string;
				public copyTo(param0: java.io.OutputStream): okio.Buffer;
				public writeUtf8CodePoint(param0: number): okio.BufferedSink;
				public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
				public indexOf(param0: number): number;
				public readByte(): number;
				public emitCompleteSegments(): okio.BufferedSink;
				public readLong(): number;
				public read(param0: okio.Buffer, param1: number): number;
				public writeIntLe(param0: number): okio.BufferedSink;
				public copyTo(param0: okio.Buffer, param1: number, param2: number): okio.Buffer;
				public indexOfElement(param0: okio.ByteString): number;
				public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
				public write(param0: java.nio.ByteBuffer): number;
				public readAll(param0: okio.Sink): number;
				public readByteArray(param0: number): native.Array<number>;
				public sha1(): okio.ByteString;
				public write(param0: okio.ByteString): okio.BufferedSink;
				public select(param0: okio.Options): number;
				public readFrom(param0: java.io.InputStream): okio.Buffer;
				public writeTo(param0: java.io.OutputStream): okio.Buffer;
				public outputStream(): java.io.OutputStream;
				public clear(): void;
				public require(param0: number): void;
				public request(param0: number): boolean;
				public indexOf(param0: okio.ByteString, param1: number): number;
				public readString(param0: java.nio.charset.Charset): string;
				public writeLongLe(param0: number): okio.Buffer;
				public writeLong(param0: number): okio.BufferedSink;
				public writeString(param0: string, param1: java.nio.charset.Charset): okio.Buffer;
				public writeByte(param0: number): okio.BufferedSink;
				public readUtf8LineStrict(): string;
				public writeUtf8CodePoint(param0: number): okio.Buffer;
				public writeInt(param0: number): okio.BufferedSink;
				public hmacSha512(param0: okio.ByteString): okio.ByteString;
				public write(param0: native.Array<number>): okio.BufferedSink;
				public sha512(): okio.ByteString;
				public writeShort(param0: number): okio.BufferedSink;
				public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
				public skip(param0: number): void;
				public getByte(param0: number): number;
				public readInt(): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.Buffer;
				public copyTo(param0: java.io.OutputStream, param1: number, param2: number): okio.Buffer;
				public writeTo(param0: java.io.OutputStream, param1: number): okio.Buffer;
				public writeAll(param0: okio.Source): number;
				public readFully(param0: native.Array<number>): void;
				public timeout(): okio.Timeout;
				public equals(param0: any): boolean;
				public close(): void;
				public writeDecimalLong(param0: number): okio.BufferedSink;
				public inputStream(): java.io.InputStream;
				public readUtf8LineStrict(param0: number): string;
				public write(param0: okio.ByteString): okio.Buffer;
				public writeHexadecimalUnsignedLong(param0: number): okio.Buffer;
				public writeShortLe(param0: number): okio.BufferedSink;
				public writeUtf8(param0: string): okio.BufferedSink;
				public readUtf8CodePoint(): number;
				public writeShortLe(param0: number): okio.Buffer;
				public readAndWriteUnsafe(): okio.Buffer.UnsafeCursor;
				public snapshot(param0: number): okio.ByteString;
				public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
				public readHexadecimalUnsignedLong(): number;
				public emit(): okio.BufferedSink;
				public writeInt(param0: number): okio.Buffer;
				public constructor();
				public readUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
				public readUtf8(): string;
				public write(param0: okio.Buffer, param1: number): void;
				public readByteString(param0: number): okio.ByteString;
				public writeShort(param0: number): okio.Buffer;
				public readUnsafe(): okio.Buffer.UnsafeCursor;
				public completeSegmentByteCount(): number;
				public toString(): string;
				public read(param0: native.Array<number>): number;
				public md5(): okio.ByteString;
				public flush(): void;
				public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
				public writeLongLe(param0: number): okio.BufferedSink;
				public readAndWriteUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
				public readShort(): number;
				public readShortLe(): number;
				public readUtf8Line(): string;
				public write(param0: native.Array<number>, param1: number, param2: number): okio.Buffer;
				public readByteString(): okio.ByteString;
				public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
				public writeIntLe(param0: number): okio.Buffer;
				public hmacSha1(param0: okio.ByteString): okio.ByteString;
				public size(): number;
				public hashCode(): number;
				public indexOf(param0: number, param1: number, param2: number): number;
				public readString(param0: number, param1: java.nio.charset.Charset): string;
				public readLongLe(): number;
				public readFully(param0: okio.Buffer, param1: number): void;
				public snapshot(): okio.ByteString;
				public read(param0: java.nio.ByteBuffer): number;
				public write(param0: native.Array<number>): okio.Buffer;
				public clone(): okio.Buffer;
				public emitCompleteSegments(): okio.Buffer;
				public readDecimalLong(): number;
				public sha256(): okio.ByteString;
				public writeByte(param0: number): okio.Buffer;
				public rangeEquals(param0: number, param1: okio.ByteString): boolean;
				public isOpen(): boolean;
				public readByteArray(): native.Array<number>;
				public writeLong(param0: number): okio.Buffer;
				public indexOfElement(param0: okio.ByteString, param1: number): number;
				public exhausted(): boolean;
				public write(param0: okio.Source, param1: number): okio.BufferedSink;
				public buffer(): okio.Buffer;
				public hmacSha256(param0: okio.ByteString): okio.ByteString;
				public indexOf(param0: number, param1: number): number;
				public indexOf(param0: okio.ByteString): number;
			}
			export module Buffer {
				export class UnsafeCursor {
					public static class: java.lang.Class<okio.Buffer.UnsafeCursor>;
					public buffer: okio.Buffer;
					public readWrite: boolean;
					public offset: number;
					public data: native.Array<number>;
					public start: number;
					public end: number;
					public next(): number;
					public seek(param0: number): number;
					public resizeBuffer(param0: number): number;
					public constructor();
					public expandBuffer(param0: number): number;
					public close(): void;
				}
			}
		}

		declare module okio {
			export class BufferedSink extends okio.Sink {
				public static class: java.lang.Class<okio.BufferedSink>;
				/**
				 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					buffer(): okio.Buffer;
					write(param0: okio.ByteString): okio.BufferedSink;
					write(param0: native.Array<number>): okio.BufferedSink;
					write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
					writeAll(param0: okio.Source): number;
					write(param0: okio.Source, param1: number): okio.BufferedSink;
					writeUtf8(param0: string): okio.BufferedSink;
					writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
					writeUtf8CodePoint(param0: number): okio.BufferedSink;
					writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
					writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
					writeByte(param0: number): okio.BufferedSink;
					writeShort(param0: number): okio.BufferedSink;
					writeShortLe(param0: number): okio.BufferedSink;
					writeInt(param0: number): okio.BufferedSink;
					writeIntLe(param0: number): okio.BufferedSink;
					writeLong(param0: number): okio.BufferedSink;
					writeLongLe(param0: number): okio.BufferedSink;
					writeDecimalLong(param0: number): okio.BufferedSink;
					writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
					flush(): void;
					emit(): okio.BufferedSink;
					emitCompleteSegments(): okio.BufferedSink;
					outputStream(): java.io.OutputStream;
					write(param0: okio.Buffer, param1: number): void;
					flush(): void;
					timeout(): okio.Timeout;
					close(): void;
				});
				public constructor();
				public writeDecimalLong(param0: number): okio.BufferedSink;
				public close(): void;
				public writeByte(param0: number): okio.BufferedSink;
				public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
				public writeShortLe(param0: number): okio.BufferedSink;
				public writeInt(param0: number): okio.BufferedSink;
				public writeUtf8CodePoint(param0: number): okio.BufferedSink;
				public writeUtf8(param0: string): okio.BufferedSink;
				public write(param0: native.Array<number>): okio.BufferedSink;
				public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
				public writeShort(param0: number): okio.BufferedSink;
				public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
				public emitCompleteSegments(): okio.BufferedSink;
				public emit(): okio.BufferedSink;
				public writeIntLe(param0: number): okio.BufferedSink;
				public write(param0: okio.Buffer, param1: number): void;
				public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
				public flush(): void;
				public write(param0: okio.ByteString): okio.BufferedSink;
				public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
				public writeLongLe(param0: number): okio.BufferedSink;
				public write(param0: okio.Source, param1: number): okio.BufferedSink;
				public buffer(): okio.Buffer;
				public outputStream(): java.io.OutputStream;
				public writeAll(param0: okio.Source): number;
				public writeLong(param0: number): okio.BufferedSink;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class BufferedSource extends okio.Source {
				public static class: java.lang.Class<okio.BufferedSource>;
				/**
				 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					buffer(): okio.Buffer;
					exhausted(): boolean;
					require(param0: number): void;
					request(param0: number): boolean;
					readByte(): number;
					readShort(): number;
					readShortLe(): number;
					readInt(): number;
					readIntLe(): number;
					readLong(): number;
					readLongLe(): number;
					readDecimalLong(): number;
					readHexadecimalUnsignedLong(): number;
					skip(param0: number): void;
					readByteString(): okio.ByteString;
					readByteString(param0: number): okio.ByteString;
					select(param0: okio.Options): number;
					readByteArray(): native.Array<number>;
					readByteArray(param0: number): native.Array<number>;
					read(param0: native.Array<number>): number;
					readFully(param0: native.Array<number>): void;
					read(param0: native.Array<number>, param1: number, param2: number): number;
					readFully(param0: okio.Buffer, param1: number): void;
					readAll(param0: okio.Sink): number;
					readUtf8(): string;
					readUtf8(param0: number): string;
					readUtf8Line(): string;
					readUtf8LineStrict(): string;
					readUtf8LineStrict(param0: number): string;
					readUtf8CodePoint(): number;
					readString(param0: java.nio.charset.Charset): string;
					readString(param0: number, param1: java.nio.charset.Charset): string;
					indexOf(param0: number): number;
					indexOf(param0: number, param1: number): number;
					indexOf(param0: number, param1: number, param2: number): number;
					indexOf(param0: okio.ByteString): number;
					indexOf(param0: okio.ByteString, param1: number): number;
					indexOfElement(param0: okio.ByteString): number;
					indexOfElement(param0: okio.ByteString, param1: number): number;
					rangeEquals(param0: number, param1: okio.ByteString): boolean;
					rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
					inputStream(): java.io.InputStream;
					read(param0: okio.Buffer, param1: number): number;
					timeout(): okio.Timeout;
					close(): void;
				});
				public constructor();
				public close(): void;
				public inputStream(): java.io.InputStream;
				public readIntLe(): number;
				public readByteString(): okio.ByteString;
				public readUtf8LineStrict(): string;
				public readUtf8LineStrict(param0: number): string;
				public readUtf8(param0: number): string;
				public readUtf8CodePoint(): number;
				public indexOf(param0: number): number;
				public readByte(): number;
				public readHexadecimalUnsignedLong(): number;
				public indexOf(param0: number, param1: number, param2: number): number;
				public readString(param0: number, param1: java.nio.charset.Charset): string;
				public readLongLe(): number;
				public readFully(param0: okio.Buffer, param1: number): void;
				public readLong(): number;
				public read(param0: okio.Buffer, param1: number): number;
				public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
				public readUtf8(): string;
				public readByteString(param0: number): okio.ByteString;
				public indexOfElement(param0: okio.ByteString): number;
				public skip(param0: number): void;
				public readDecimalLong(): number;
				public read(param0: native.Array<number>): number;
				public readAll(param0: okio.Sink): number;
				public readInt(): number;
				public readByteArray(param0: number): native.Array<number>;
				public rangeEquals(param0: number, param1: okio.ByteString): boolean;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public readByteArray(): native.Array<number>;
				public indexOfElement(param0: okio.ByteString, param1: number): number;
				public select(param0: okio.Options): number;
				public exhausted(): boolean;
				public readShort(): number;
				public buffer(): okio.Buffer;
				public require(param0: number): void;
				public request(param0: number): boolean;
				public indexOf(param0: okio.ByteString, param1: number): number;
				public readString(param0: java.nio.charset.Charset): string;
				public readShortLe(): number;
				public indexOf(param0: number, param1: number): number;
				public readFully(param0: native.Array<number>): void;
				public readUtf8Line(): string;
				public indexOf(param0: okio.ByteString): number;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class ByteString extends java.lang.Object {
				public static class: java.lang.Class<okio.ByteString>;
				public static EMPTY: okio.ByteString;
				public static of(param0: native.Array<number>): okio.ByteString;
				public base64(): string;
				public static encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
				public substring(param0: number): okio.ByteString;
				public equals(param0: any): boolean;
				public hmacSha512(param0: okio.ByteString): okio.ByteString;
				public base64Url(): string;
				public hmacSha1(param0: okio.ByteString): okio.ByteString;
				public static read(param0: java.io.InputStream, param1: number): okio.ByteString;
				public asByteBuffer(): java.nio.ByteBuffer;
				public sha512(): okio.ByteString;
				public size(): number;
				public lastIndexOf(param0: native.Array<number>): number;
				public hex(): string;
				public hashCode(): number;
				public toAsciiUppercase(): okio.ByteString;
				public indexOf(param0: native.Array<number>, param1: number): number;
				public static decodeBase64(param0: string): okio.ByteString;
				public lastIndexOf(param0: okio.ByteString, param1: number): number;
				public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
				public lastIndexOf(param0: okio.ByteString): number;
				public static decodeHex(param0: string): okio.ByteString;
				public compareTo(param0: okio.ByteString): number;
				public indexOf(param0: native.Array<number>): number;
				public startsWith(param0: native.Array<number>): boolean;
				public sha256(): okio.ByteString;
				public getByte(param0: number): number;
				public toString(): string;
				public static encodeUtf8(param0: string): okio.ByteString;
				public string(param0: java.nio.charset.Charset): string;
				public md5(): okio.ByteString;
				public startsWith(param0: okio.ByteString): boolean;
				public endsWith(param0: okio.ByteString): boolean;
				public endsWith(param0: native.Array<number>): boolean;
				public toAsciiLowercase(): okio.ByteString;
				public static of(param0: java.nio.ByteBuffer): okio.ByteString;
				public sha1(): okio.ByteString;
				public write(param0: java.io.OutputStream): void;
				public lastIndexOf(param0: native.Array<number>, param1: number): number;
				public static of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
				public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
				public utf8(): string;
				public substring(param0: number, param1: number): okio.ByteString;
				public indexOf(param0: okio.ByteString, param1: number): number;
				public toByteArray(): native.Array<number>;
				public hmacSha256(param0: okio.ByteString): okio.ByteString;
				public indexOf(param0: okio.ByteString): number;
			}
		}

		declare module okio {
			export class DeflaterSink extends okio.Sink {
				public static class: java.lang.Class<okio.DeflaterSink>;
				public close(): void;
				public write(param0: okio.Buffer, param1: number): void;
				public constructor(param0: okio.Sink, param1: java.util.zip.Deflater);
				public toString(): string;
				public flush(): void;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export abstract class ForwardingSink extends okio.Sink {
				public static class: java.lang.Class<okio.ForwardingSink>;
				public delegate(): okio.Sink;
				public close(): void;
				public constructor(param0: okio.Sink);
				public write(param0: okio.Buffer, param1: number): void;
				public toString(): string;
				public flush(): void;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export abstract class ForwardingSource extends okio.Source {
				public static class: java.lang.Class<okio.ForwardingSource>;
				public close(): void;
				public constructor(param0: okio.Source);
				public delegate(): okio.Source;
				public toString(): string;
				public read(param0: okio.Buffer, param1: number): number;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class ForwardingTimeout extends okio.Timeout {
				public static class: java.lang.Class<okio.ForwardingTimeout>;
				public constructor();
				public throwIfReached(): void;
				public setDelegate(param0: okio.Timeout): okio.ForwardingTimeout;
				public clearDeadline(): okio.Timeout;
				public hasDeadline(): boolean;
				public delegate(): okio.Timeout;
				public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
				public timeoutNanos(): number;
				public deadlineNanoTime(): number;
				public deadlineNanoTime(param0: number): okio.Timeout;
				public constructor(param0: okio.Timeout);
				public clearTimeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class GzipSink extends okio.Sink {
				public static class: java.lang.Class<okio.GzipSink>;
				public deflater(): java.util.zip.Deflater;
				public close(): void;
				public constructor(param0: okio.Sink);
				public write(param0: okio.Buffer, param1: number): void;
				public flush(): void;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class GzipSource extends okio.Source {
				public static class: java.lang.Class<okio.GzipSource>;
				public close(): void;
				public constructor(param0: okio.Source);
				public read(param0: okio.Buffer, param1: number): number;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class HashingSink extends okio.ForwardingSink {
				public static class: java.lang.Class<okio.HashingSink>;
				public close(): void;
				public static hmacSha256(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
				public write(param0: okio.Buffer, param1: number): void;
				public static sha512(param0: okio.Sink): okio.HashingSink;
				public static hmacSha1(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
				public static md5(param0: okio.Sink): okio.HashingSink;
				public static sha1(param0: okio.Sink): okio.HashingSink;
				public static hmacSha512(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
				public hash(): okio.ByteString;
				public static sha256(param0: okio.Sink): okio.HashingSink;
				public flush(): void;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class HashingSource extends okio.ForwardingSource {
				public static class: java.lang.Class<okio.HashingSource>;
				public close(): void;
				public static hmacSha256(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
				public static sha1(param0: okio.Source): okio.HashingSource;
				public static md5(param0: okio.Source): okio.HashingSource;
				public static sha256(param0: okio.Source): okio.HashingSource;
				public static hmacSha1(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
				public hash(): okio.ByteString;
				public read(param0: okio.Buffer, param1: number): number;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class InflaterSource extends okio.Source {
				public static class: java.lang.Class<okio.InflaterSource>;
				public close(): void;
				public refill(): boolean;
				public constructor(param0: okio.Source, param1: java.util.zip.Inflater);
				public read(param0: okio.Buffer, param1: number): number;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class Okio {
				public static class: java.lang.Class<okio.Okio>;
				public static buffer(param0: okio.Source): okio.BufferedSource;
				public static source(param0: java.io.InputStream): okio.Source;
				public static appendingSink(param0: java.io.File): okio.Sink;
				public static sink(param0: java.io.OutputStream): okio.Sink;
				public static source(param0: java.io.File): okio.Source;
				public static sink(param0: java.io.File): okio.Sink;
				public static blackhole(): okio.Sink;
				public static source(param0: java.net.Socket): okio.Source;
				public static sink(param0: java.nio.file.Path, param1: native.Array<java.nio.file.OpenOption>): okio.Sink;
				public static buffer(param0: okio.Sink): okio.BufferedSink;
				public static sink(param0: java.net.Socket): okio.Sink;
				public static source(param0: java.nio.file.Path, param1: native.Array<java.nio.file.OpenOption>): okio.Source;
			}
		}

		declare module okio {
			export class Options extends java.util.AbstractList<okio.ByteString> implements java.util.RandomAccess {
				public static class: java.lang.Class<okio.Options>;
				public size(): number;
				public static of(param0: native.Array<okio.ByteString>): okio.Options;
				public get(param0: number): okio.ByteString;
			}
		}

		declare module okio {
			export class Pipe {
				public static class: java.lang.Class<okio.Pipe>;
				public sink(): okio.Sink;
				public constructor(param0: number);
				public source(): okio.Source;
			}
			export module Pipe {
				export class PipeSink extends okio.Sink {
					public static class: java.lang.Class<okio.Pipe.PipeSink>;
					public write(param0: okio.Buffer, param1: number): void;
					public flush(): void;
					public timeout(): okio.Timeout;
					public close(): void;
				}
				export class PipeSource extends okio.Source {
					public static class: java.lang.Class<okio.Pipe.PipeSource>;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
					public close(): void;
				}
			}
		}

		declare module okio {
			export class RealBufferedSink extends okio.BufferedSink {
				public static class: java.lang.Class<okio.RealBufferedSink>;
				public sink: okio.Sink;
				public writeDecimalLong(param0: number): okio.BufferedSink;
				public close(): void;
				public writeByte(param0: number): okio.BufferedSink;
				public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
				public writeShortLe(param0: number): okio.BufferedSink;
				public writeInt(param0: number): okio.BufferedSink;
				public writeUtf8CodePoint(param0: number): okio.BufferedSink;
				public writeUtf8(param0: string): okio.BufferedSink;
				public write(param0: native.Array<number>): okio.BufferedSink;
				public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
				public writeShort(param0: number): okio.BufferedSink;
				public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
				public emitCompleteSegments(): okio.BufferedSink;
				public emit(): okio.BufferedSink;
				public writeIntLe(param0: number): okio.BufferedSink;
				public write(param0: okio.Buffer, param1: number): void;
				public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
				public write(param0: java.nio.ByteBuffer): number;
				public toString(): string;
				public flush(): void;
				public isOpen(): boolean;
				public write(param0: okio.ByteString): okio.BufferedSink;
				public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
				public writeLongLe(param0: number): okio.BufferedSink;
				public write(param0: okio.Source, param1: number): okio.BufferedSink;
				public buffer(): okio.Buffer;
				public outputStream(): java.io.OutputStream;
				public writeAll(param0: okio.Source): number;
				public writeLong(param0: number): okio.BufferedSink;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class RealBufferedSource extends okio.BufferedSource {
				public static class: java.lang.Class<okio.RealBufferedSource>;
				public source: okio.Source;
				public close(): void;
				public inputStream(): java.io.InputStream;
				public readByteString(): okio.ByteString;
				public readIntLe(): number;
				public readUtf8LineStrict(): string;
				public readUtf8LineStrict(param0: number): string;
				public readUtf8(param0: number): string;
				public readUtf8CodePoint(): number;
				public indexOf(param0: number): number;
				public readByte(): number;
				public readHexadecimalUnsignedLong(): number;
				public indexOf(param0: number, param1: number, param2: number): number;
				public readString(param0: number, param1: java.nio.charset.Charset): string;
				public readLongLe(): number;
				public readFully(param0: okio.Buffer, param1: number): void;
				public read(param0: okio.Buffer, param1: number): number;
				public readLong(): number;
				public read(param0: java.nio.ByteBuffer): number;
				public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
				public readUtf8(): string;
				public readByteString(param0: number): okio.ByteString;
				public indexOfElement(param0: okio.ByteString): number;
				public skip(param0: number): void;
				public readDecimalLong(): number;
				public toString(): string;
				public read(param0: native.Array<number>): number;
				public readAll(param0: okio.Sink): number;
				public readInt(): number;
				public readByteArray(param0: number): native.Array<number>;
				public rangeEquals(param0: number, param1: okio.ByteString): boolean;
				public isOpen(): boolean;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public readByteArray(): native.Array<number>;
				public indexOfElement(param0: okio.ByteString, param1: number): number;
				public select(param0: okio.Options): number;
				public exhausted(): boolean;
				public readShort(): number;
				public buffer(): okio.Buffer;
				public require(param0: number): void;
				public request(param0: number): boolean;
				public indexOf(param0: okio.ByteString, param1: number): number;
				public readString(param0: java.nio.charset.Charset): string;
				public readShortLe(): number;
				public indexOf(param0: number, param1: number): number;
				public readFully(param0: native.Array<number>): void;
				public readUtf8Line(): string;
				public indexOf(param0: okio.ByteString): number;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class Segment {
				public static class: java.lang.Class<okio.Segment>;
				public push(param0: okio.Segment): okio.Segment;
				public writeTo(param0: okio.Segment, param1: number): void;
				public compact(): void;
				public pop(): okio.Segment;
				public split(param0: number): okio.Segment;
			}
		}

		declare module okio {
			export class SegmentPool {
				public static class: java.lang.Class<okio.SegmentPool>;
			}
		}

		declare module okio {
			export class SegmentedByteString extends okio.ByteString {
				public static class: java.lang.Class<okio.SegmentedByteString>;
				public base64(): string;
				public substring(param0: number): okio.ByteString;
				public equals(param0: any): boolean;
				public base64Url(): string;
				public hmacSha1(param0: okio.ByteString): okio.ByteString;
				public asByteBuffer(): java.nio.ByteBuffer;
				public size(): number;
				public lastIndexOf(param0: native.Array<number>): number;
				public hex(): string;
				public hashCode(): number;
				public toAsciiUppercase(): okio.ByteString;
				public indexOf(param0: native.Array<number>, param1: number): number;
				public lastIndexOf(param0: okio.ByteString, param1: number): number;
				public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
				public lastIndexOf(param0: okio.ByteString): number;
				public indexOf(param0: native.Array<number>): number;
				public sha256(): okio.ByteString;
				public getByte(param0: number): number;
				public toString(): string;
				public string(param0: java.nio.charset.Charset): string;
				public md5(): okio.ByteString;
				public toAsciiLowercase(): okio.ByteString;
				public sha1(): okio.ByteString;
				public write(param0: java.io.OutputStream): void;
				public lastIndexOf(param0: native.Array<number>, param1: number): number;
				public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
				public utf8(): string;
				public substring(param0: number, param1: number): okio.ByteString;
				public indexOf(param0: okio.ByteString, param1: number): number;
				public toByteArray(): native.Array<number>;
				public hmacSha256(param0: okio.ByteString): okio.ByteString;
				public indexOf(param0: okio.ByteString): number;
			}
		}

		declare module okio {
			export class Sink {
				public static class: java.lang.Class<okio.Sink>;
				/**
				 * Constructs a new instance of the okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					write(param0: okio.Buffer, param1: number): void;
					flush(): void;
					timeout(): okio.Timeout;
					close(): void;
				});
				public constructor();
				public close(): void;
				public write(param0: okio.Buffer, param1: number): void;
				public flush(): void;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class Source {
				public static class: java.lang.Class<okio.Source>;
				/**
				 * Constructs a new instance of the okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					read(param0: okio.Buffer, param1: number): number;
					timeout(): okio.Timeout;
					close(): void;
				});
				public constructor();
				public close(): void;
				public read(param0: okio.Buffer, param1: number): number;
				public timeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class Timeout {
				public static class: java.lang.Class<okio.Timeout>;
				public static NONE: okio.Timeout;
				public constructor();
				public throwIfReached(): void;
				public deadline(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
				public clearDeadline(): okio.Timeout;
				public hasDeadline(): boolean;
				public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
				public timeoutNanos(): number;
				public waitUntilNotified(param0: any): void;
				public deadlineNanoTime(): number;
				public deadlineNanoTime(param0: number): okio.Timeout;
				public clearTimeout(): okio.Timeout;
			}
		}

		declare module okio {
			export class Utf8 {
				public static class: java.lang.Class<okio.Utf8>;
				public static size(param0: string, param1: number, param2: number): number;
				public static size(param0: string): number;
			}
		}

		declare module okio {
			export class Util {
				public static class: java.lang.Class<okio.Util>;
				public static UTF_8: java.nio.charset.Charset;
				public static reverseBytesShort(param0: number): number;
				public static reverseBytesLong(param0: number): number;
				public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
				public static reverseBytesInt(param0: number): number;
				public static sneakyRethrow(param0: java.lang.Throwable): void;
				public static arrayRangeEquals(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;
			}
		}


		declare module org {
			export module parceler {
				export class Generated {
					public static class: java.lang.Class<org.parceler.Generated>;
					/**
					 * Constructs a new instance of the org.parceler.Generated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<string>;
						date(): string;
						comments(): string;
					});
					public constructor();
					public comments(): string;
					public date(): string;
					public value(): native.Array<string>;
				}
			}
		}

		declare module org {
			export module parceler {
				export class IdentityCollection {
					public static class: java.lang.Class<org.parceler.IdentityCollection>;
					public containsKey(param0: number): boolean;
					public reserve(): number;
					public getKey(param0: any): number;
					public put(param0: number, param1: any): void;
					public isReserved(param0: number): boolean;
					public get(param0: number): any;
					public put(param0: any): number;
					public constructor();
				}
			}
		}

		declare module org {
			export module parceler {
				export class InjectionUtil {
					public static class: java.lang.Class<org.parceler.InjectionUtil>;
					public static GET_FIELD_METHOD: string;
					public static SET_FIELD_METHOD: string;
					public static CALL_METHOD_METHOD: string;
					public static CALL_CONSTRUCTOR_METHOD: string;
					public static getField(param0: org.parceler.InjectionUtil.GenericType<any>, param1: java.lang.Class, param2: any, param3: string): any;
					public static callMethod(param0: org.parceler.InjectionUtil.GenericType<any>, param1: java.lang.Class, param2: any, param3: string, param4: native.Array<java.lang.Class>, param5: native.Array<any>): any;
					public static callConstructor(param0: java.lang.Class, param1: native.Array<java.lang.Class>, param2: native.Array<any>): any;
					public static callMethod(param0: java.lang.Class, param1: java.lang.Class, param2: any, param3: string, param4: native.Array<java.lang.Class>, param5: native.Array<any>): any;
					public static callConstructor(param0: org.parceler.InjectionUtil.GenericType<any>, param1: native.Array<java.lang.Class>, param2: native.Array<any>): any;
					public static setField(param0: java.lang.Class<any>, param1: any, param2: string, param3: any): void;
					public static getField(param0: java.lang.Class, param1: java.lang.Class, param2: any, param3: string): any;
				}
				export module InjectionUtil {
					export abstract class AccessibleElementPrivilegedAction<T, E> extends java.security.PrivilegedExceptionAction<any> {
						public static class: java.lang.Class<org.parceler.InjectionUtil.AccessibleElementPrivilegedAction<any, any>>;
						public run(): any;
						public run(param0: any): any;
						public constructor(param0: any);
					}
					export class GenericType<T> extends java.lang.Object {
						public static class: java.lang.Class<org.parceler.InjectionUtil.GenericType<any>>;
						public constructor();
					}
					export class GetFieldPrivilegedAction<T> extends org.parceler.InjectionUtil.AccessibleElementPrivilegedAction<any, java.lang.reflect.Field> {
						public static class: java.lang.Class<org.parceler.InjectionUtil.GetFieldPrivilegedAction<any>>;
						public run(): any;
						public run(param0: java.lang.reflect.Field): any;
						public run(param0: any): any;
					}
					export class SetConstructorPrivilegedAction<T> extends org.parceler.InjectionUtil.AccessibleElementPrivilegedAction<any, java.lang.reflect.Constructor> {
						public static class: java.lang.Class<org.parceler.InjectionUtil.SetConstructorPrivilegedAction<any>>;
						public run(param0: java.lang.reflect.Constructor): any;
						public run(): any;
						public run(param0: any): any;
					}
					export class SetFieldPrivilegedAction extends org.parceler.InjectionUtil.AccessibleElementPrivilegedAction<java.lang.Void, java.lang.reflect.Field> {
						public static class: java.lang.Class<org.parceler.InjectionUtil.SetFieldPrivilegedAction>;
						public run(param0: java.lang.reflect.Field): java.lang.Void;
						public run(): any;
						public run(param0: any): any;
					}
					export class SetMethodPrivilegedAction<T> extends org.parceler.InjectionUtil.AccessibleElementPrivilegedAction<any, java.lang.reflect.Method> {
						public static class: java.lang.Class<org.parceler.InjectionUtil.SetMethodPrivilegedAction<any>>;
						public run(): any;
						public run(param0: any): any;
						public run(param0: java.lang.reflect.Method): any;
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export class MapsUtil {
					public static class: java.lang.Class<org.parceler.MapsUtil>;
					public static INITIAL_HASH_MAP_CAPACITY_METHOD: string;
					public static initialHashMapCapacity(param0: number): number;
				}
			}
		}

		declare module org {
			export module parceler {
				export class NonParcelRepository extends org.parceler.Repository<org.parceler.Parcels.ParcelableFactory<any>> {
					public static class: java.lang.Class<org.parceler.NonParcelRepository>;
					public get(): java.util.Map<java.lang.Class, org.parceler.Parcels.ParcelableFactory<any>>;
					public get(): java.util.Map<java.lang.Class, any>;
					public static getInstance(): org.parceler.NonParcelRepository;
				}
				export module NonParcelRepository {
					export class BooleanArrayParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<native.Array<boolean>> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.BooleanArrayParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.BooleanArrayParcelable.BooleanArrayParcelableCreator;
						public constructor(param0: native.Array<boolean>);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module BooleanArrayParcelable {
						export class BooleanArrayParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.BooleanArrayParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.BooleanArrayParcelable.BooleanArrayParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.BooleanArrayParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.BooleanArrayParcelable;
						}
					}
					export class BooleanArrayParcelableFactory extends org.parceler.Parcels.ParcelableFactory<native.Array<boolean>> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.BooleanArrayParcelableFactory>;
						public buildParcelable(param0: native.Array<boolean>): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class BooleanParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.lang.Boolean> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.BooleanParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.BooleanParcelable.BooleanParcelableCreator;
						public constructor(param0: boolean);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module BooleanParcelable {
						export class BooleanParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.BooleanParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.BooleanParcelable.BooleanParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.BooleanParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.BooleanParcelable>;
						}
					}
					export class BooleanParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.lang.Boolean> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.BooleanParcelableFactory>;
						public buildParcelable(param0: java.lang.Boolean): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class BundleParcelableFactory extends org.parceler.Parcels.ParcelableFactory<globalAndroid.os.Bundle> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.BundleParcelableFactory>;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
						public buildParcelable(param0: globalAndroid.os.Bundle): globalAndroid.os.Parcelable;
					}
					export class ByteArrayParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<native.Array<number>> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ByteArrayParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.ByteArrayParcelable.ByteArrayParcelableCreator;
						public constructor(param0: native.Array<number>);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module ByteArrayParcelable {
						export class ByteArrayParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.ByteArrayParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.ByteArrayParcelable.ByteArrayParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.ByteArrayParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.ByteArrayParcelable;
						}
					}
					export class ByteArrayParcelableFactory extends org.parceler.Parcels.ParcelableFactory<native.Array<number>> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ByteArrayParcelableFactory>;
						public buildParcelable(param0: native.Array<number>): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class ByteParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.lang.Byte> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ByteParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.ByteParcelable.ByteParcelableCreator;
						public constructor(param0: globalAndroid.os.Parcel);
						public constructor(param0: java.lang.Byte);
						public getParcel(): any;
					}
					export module ByteParcelable {
						export class ByteParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.ByteParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.ByteParcelable.ByteParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.ByteParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.ByteParcelable>;
						}
					}
					export class ByteParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.lang.Byte> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ByteParcelableFactory>;
						public buildParcelable(param0: java.lang.Byte): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class CharArrayParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<native.Array<string>> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.CharArrayParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.CharArrayParcelable.CharArrayParcelableCreator;
						public constructor(param0: native.Array<string>);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module CharArrayParcelable {
						export class CharArrayParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.CharArrayParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.CharArrayParcelable.CharArrayParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.CharArrayParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.CharArrayParcelable>;
						}
					}
					export class CharArrayParcelableFactory extends org.parceler.Parcels.ParcelableFactory<native.Array<string>> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.CharArrayParcelableFactory>;
						public buildParcelable(param0: native.Array<string>): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class CharacterParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.lang.Character> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.CharacterParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.CharacterParcelable.CharacterParcelableCreator;
						public constructor(param0: java.lang.Character);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module CharacterParcelable {
						export class CharacterParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.CharacterParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.CharacterParcelable.CharacterParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.CharacterParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.CharacterParcelable;
						}
					}
					export class CharacterParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.lang.Character> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.CharacterParcelableFactory>;
						public buildParcelable(param0: java.lang.Character): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class CollectionParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.Collection> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.CollectionParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.CollectionParcelable.CollectionParcelableCreator;
						public constructor(param0: java.util.Collection);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module CollectionParcelable {
						export class CollectionParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.CollectionParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.CollectionParcelable.CollectionParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.CollectionParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.CollectionParcelable;
						}
					}
					export class CollectionParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.Collection> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.CollectionParcelableFactory>;
						public buildParcelable(param0: java.util.Collection): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class ConverterParcelable<T> extends java.lang.Object {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ConverterParcelable<any>>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public describeContents(): number;
						public getParcel(): T;
					}
					export class DoubleParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.lang.Double> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.DoubleParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.DoubleParcelable.DoubleParcelableCreator;
						public constructor(param0: java.lang.Double);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module DoubleParcelable {
						export class DoubleParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.DoubleParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.DoubleParcelable.DoubleParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.DoubleParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.DoubleParcelable>;
						}
					}
					export class DoubleParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.lang.Double> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.DoubleParcelableFactory>;
						public buildParcelable(param0: java.lang.Double): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class FloatParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.lang.Float> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.FloatParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.FloatParcelable.FloatParcelableCreator;
						public constructor(param0: java.lang.Float);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module FloatParcelable {
						export class FloatParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.FloatParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.FloatParcelable.FloatParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.FloatParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.FloatParcelable;
						}
					}
					export class FloatParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.lang.Float> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.FloatParcelableFactory>;
						public buildParcelable(param0: java.lang.Float): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class IBinderParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<globalAndroid.os.IBinder> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.IBinderParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.IBinderParcelable.IBinderParcelableCreator;
						public constructor(param0: globalAndroid.os.IBinder);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module IBinderParcelable {
						export class IBinderParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.IBinderParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.IBinderParcelable.IBinderParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.IBinderParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.IBinderParcelable>;
						}
					}
					export class IBinderParcelableFactory extends org.parceler.Parcels.ParcelableFactory<globalAndroid.os.IBinder> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.IBinderParcelableFactory>;
						public buildParcelable(param0: globalAndroid.os.IBinder): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class IntegerParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.lang.Integer> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.IntegerParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.IntegerParcelable.IntegerParcelableCreator;
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
						public constructor(param0: java.lang.Integer);
					}
					export module IntegerParcelable {
						export class IntegerParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.IntegerParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.IntegerParcelable.IntegerParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.IntegerParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.IntegerParcelable>;
						}
					}
					export class IntegerParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.lang.Integer> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.IntegerParcelableFactory>;
						public buildParcelable(param0: java.lang.Integer): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class LinkedHashMapParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.LinkedHashMap> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedHashMapParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.LinkedHashMapParcelable.LinkedHashMapParcelableCreator;
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
						public constructor(param0: java.util.LinkedHashMap);
					}
					export module LinkedHashMapParcelable {
						export class LinkedHashMapParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.LinkedHashMapParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedHashMapParcelable.LinkedHashMapParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.LinkedHashMapParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.LinkedHashMapParcelable;
						}
					}
					export class LinkedHashMapParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.LinkedHashMap> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedHashMapParcelableFactory>;
						public buildParcelable(param0: java.util.LinkedHashMap): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class LinkedHashSetParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.LinkedHashSet> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedHashSetParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.LinkedHashSetParcelable.LinkedHashSetParcelableCreator;
						public constructor(param0: java.util.LinkedHashSet);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module LinkedHashSetParcelable {
						export class LinkedHashSetParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.LinkedHashSetParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedHashSetParcelable.LinkedHashSetParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.LinkedHashSetParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.LinkedHashSetParcelable;
						}
					}
					export class LinkedHashSetParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.LinkedHashSet> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedHashSetParcelableFactory>;
						public buildParcelable(param0: java.util.LinkedHashSet): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class LinkedListParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.LinkedList> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedListParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.LinkedListParcelable.LinkedListParcelableCreator;
						public constructor(param0: java.util.LinkedList);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module LinkedListParcelable {
						export class LinkedListParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.LinkedListParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedListParcelable.LinkedListParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.LinkedListParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.LinkedListParcelable>;
						}
					}
					export class LinkedListParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.LinkedList> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.LinkedListParcelableFactory>;
						public buildParcelable(param0: java.util.LinkedList): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class ListParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.List> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ListParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.ListParcelable.ListParcelableCreator;
						public constructor(param0: java.util.List);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module ListParcelable {
						export class ListParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.ListParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.ListParcelable.ListParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.ListParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.ListParcelable>;
						}
					}
					export class ListParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.List> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ListParcelableFactory>;
						public buildParcelable(param0: java.util.List): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class LongParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.lang.Long> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.LongParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.LongParcelable.LongParcelableCreator;
						public constructor(param0: java.lang.Long);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module LongParcelable {
						export class LongParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.LongParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.LongParcelable.LongParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.LongParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.LongParcelable;
						}
					}
					export class LongParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.lang.Long> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.LongParcelableFactory>;
						public buildParcelable(param0: java.lang.Long): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class MapParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.Map> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.MapParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.MapParcelable.MapParcelableCreator;
						public constructor(param0: java.util.Map);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module MapParcelable {
						export class MapParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.MapParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.MapParcelable.MapParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.MapParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.MapParcelable>;
						}
					}
					export class MapParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.Map> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.MapParcelableFactory>;
						public buildParcelable(param0: java.util.Map): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class ParcelableParcelable extends java.lang.Object {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ParcelableParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.ParcelableParcelable.ParcelableParcelableCreator;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getParcel(): globalAndroid.os.Parcelable;
						public describeContents(): number;
						public getParcel(): any;
					}
					export module ParcelableParcelable {
						export class ParcelableParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.ParcelableParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.ParcelableParcelable.ParcelableParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.ParcelableParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.ParcelableParcelable>;
						}
					}
					export class ParcelableParcelableFactory extends org.parceler.Parcels.ParcelableFactory<globalAndroid.os.Parcelable> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.ParcelableParcelableFactory>;
						public buildParcelable(param0: globalAndroid.os.Parcelable): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class SetParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.Set> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.SetParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.SetParcelable.SetParcelableCreator;
						public constructor(param0: java.util.Set);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module SetParcelable {
						export class SetParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.SetParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.SetParcelable.SetParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.SetParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.SetParcelable>;
						}
					}
					export class SetParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.Set> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.SetParcelableFactory>;
						public buildParcelable(param0: java.util.Set): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class SparseArrayParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<globalAndroid.util.SparseArray> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.SparseArrayParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.SparseArrayParcelable.SparseArrayCreator;
						public constructor(param0: globalAndroid.util.SparseArray);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module SparseArrayParcelable {
						export class SparseArrayCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.SparseArrayParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.SparseArrayParcelable.SparseArrayCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.SparseArrayParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.SparseArrayParcelable>;
						}
					}
					export class SparseArrayParcelableFactory extends org.parceler.Parcels.ParcelableFactory<globalAndroid.util.SparseArray> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.SparseArrayParcelableFactory>;
						public buildParcelable(param0: globalAndroid.util.SparseArray): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class SparseBooleanArrayParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<globalAndroid.util.SparseBooleanArray> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.SparseBooleanArrayParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.SparseBooleanArrayParcelable.SparseBooleanArrayCreator;
						public constructor(param0: globalAndroid.util.SparseBooleanArray);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module SparseBooleanArrayParcelable {
						export class SparseBooleanArrayCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.SparseBooleanArrayParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.SparseBooleanArrayParcelable.SparseBooleanArrayCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.SparseBooleanArrayParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.SparseBooleanArrayParcelable>;
						}
					}
					export class SparseBooleanArrayParcelableFactory extends org.parceler.Parcels.ParcelableFactory<globalAndroid.util.SparseBooleanArray> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.SparseBooleanArrayParcelableFactory>;
						public buildParcelable(param0: globalAndroid.util.SparseBooleanArray): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class StringParcelable extends java.lang.Object {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.StringParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.StringParcelable.StringParcelableCreator;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getParcel(): string;
						public describeContents(): number;
						public getParcel(): any;
					}
					export module StringParcelable {
						export class StringParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.StringParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.StringParcelable.StringParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.StringParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.StringParcelable>;
						}
					}
					export class StringParcelableFactory extends org.parceler.Parcels.ParcelableFactory<string> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.StringParcelableFactory>;
						public buildParcelable(param0: string): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class TreeMapParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.Map> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.TreeMapParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.TreeMapParcelable.TreeMapParcelableCreator;
						public constructor(param0: java.util.Map);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module TreeMapParcelable {
						export class TreeMapParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.TreeMapParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.TreeMapParcelable.TreeMapParcelableCreator>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.TreeMapParcelable;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.TreeMapParcelable>;
						}
					}
					export class TreeMapParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.Map> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.TreeMapParcelableFactory>;
						public buildParcelable(param0: java.util.Map): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
					export class TreeSetParcelable extends org.parceler.NonParcelRepository.ConverterParcelable<java.util.Set> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.TreeSetParcelable>;
						public static CREATOR: org.parceler.NonParcelRepository.TreeSetParcelable.TreeSetParcelableCreator;
						public constructor(param0: java.util.Set);
						public constructor(param0: globalAndroid.os.Parcel);
						public getParcel(): any;
					}
					export module TreeSetParcelable {
						export class TreeSetParcelableCreator extends globalAndroid.os.Parcelable.Creator<org.parceler.NonParcelRepository.TreeSetParcelable> {
							public static class: java.lang.Class<org.parceler.NonParcelRepository.TreeSetParcelable.TreeSetParcelableCreator>;
							public newArray(param0: number): native.Array<org.parceler.NonParcelRepository.TreeSetParcelable>;
							public createFromParcel(param0: globalAndroid.os.Parcel): org.parceler.NonParcelRepository.TreeSetParcelable;
						}
					}
					export class TreeSetParcelableFactory extends org.parceler.Parcels.ParcelableFactory<java.util.Set> {
						public static class: java.lang.Class<org.parceler.NonParcelRepository.TreeSetParcelableFactory>;
						public buildParcelable(param0: java.util.Set): globalAndroid.os.Parcelable;
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export class OnUnwrap {
					public static class: java.lang.Class<org.parceler.OnUnwrap>;
					/**
					 * Constructs a new instance of the org.parceler.OnUnwrap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module org {
			export module parceler {
				export class OnWrap {
					public static class: java.lang.Class<org.parceler.OnWrap>;
					/**
					 * Constructs a new instance of the org.parceler.OnWrap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module org {
			export module parceler {
				export class Parcel {
					public static class: java.lang.Class<org.parceler.Parcel>;
					/**
					 * Constructs a new instance of the org.parceler.Parcel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): org.parceler.Parcel.Serialization;
						implementations(): native.Array<java.lang.Class>;
						analyze(): native.Array<java.lang.Class>;
						converter(): java.lang.Class<any>;
						describeContents(): number;
					});
					public constructor();
					public implementations(): native.Array<java.lang.Class>;
					public value(): org.parceler.Parcel.Serialization;
					public converter(): java.lang.Class<any>;
					public describeContents(): number;
					public analyze(): native.Array<java.lang.Class>;
				}
				export module Parcel {
					export class Serialization {
						public static class: java.lang.Class<org.parceler.Parcel.Serialization>;
						public static FIELD: org.parceler.Parcel.Serialization;
						public static BEAN: org.parceler.Parcel.Serialization;
						public static VALUE: org.parceler.Parcel.Serialization;
						public static values(): native.Array<org.parceler.Parcel.Serialization>;
						public static valueOf(param0: string): org.parceler.Parcel.Serialization;
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelClass {
					public static class: java.lang.Class<org.parceler.ParcelClass>;
					/**
					 * Constructs a new instance of the org.parceler.ParcelClass interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class;
						annotation(): org.parceler.Parcel;
					});
					public constructor();
					public value(): java.lang.Class;
					public annotation(): org.parceler.Parcel;
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelClasses {
					public static class: java.lang.Class<org.parceler.ParcelClasses>;
					/**
					 * Constructs a new instance of the org.parceler.ParcelClasses interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<org.parceler.ParcelClass>;
					});
					public constructor();
					public value(): native.Array<org.parceler.ParcelClass>;
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelConstructor {
					public static class: java.lang.Class<org.parceler.ParcelConstructor>;
					/**
					 * Constructs a new instance of the org.parceler.ParcelConstructor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelConverter<T> extends org.parceler.TypeRangeParcelConverter<any, any> {
					public static class: java.lang.Class<org.parceler.ParcelConverter<any>>;
					/**
					 * Constructs a new instance of the org.parceler.ParcelConverter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						fromParcel(param0: globalAndroid.os.Parcel): any;
					});
					public constructor();
					public static CONVERT_TO_PARCEL: string;
					public static CONVERT_FROM_PARCEL: string;
					public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
					public fromParcel(param0: globalAndroid.os.Parcel): any;
				}
				export module ParcelConverter {
					export class EmptyConverter extends org.parceler.ParcelConverter<any> {
						public static class: java.lang.Class<org.parceler.ParcelConverter.EmptyConverter>;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelFactory {
					public static class: java.lang.Class<org.parceler.ParcelFactory>;
					/**
					 * Constructs a new instance of the org.parceler.ParcelFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelProperty {
					public static class: java.lang.Class<org.parceler.ParcelProperty>;
					/**
					 * Constructs a new instance of the org.parceler.ParcelProperty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelPropertyConverter {
					public static class: java.lang.Class<org.parceler.ParcelPropertyConverter>;
					/**
					 * Constructs a new instance of the org.parceler.ParcelPropertyConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
					});
					public constructor();
					public value(): java.lang.Class<any>;
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelWrapper<T> extends java.lang.Object {
					public static class: java.lang.Class<org.parceler.ParcelWrapper<any>>;
					/**
					 * Constructs a new instance of the org.parceler.ParcelWrapper<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getParcel(): T;
					});
					public constructor();
					public static GET_PARCEL: string;
					public getParcel(): T;
				}
			}
		}

		declare module org {
			export module parceler {
				export class ParcelerRuntimeException {
					public static class: java.lang.Class<org.parceler.ParcelerRuntimeException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string, param1: java.lang.Exception);
					public constructor(param0: string);
				}
			}
		}

		declare module org {
			export module parceler {
				export class Parcels {
					public static class: java.lang.Class<org.parceler.Parcels>;
					public static IMPL_EXT: string;
					public static wrap(param0: java.lang.Class, param1: any): globalAndroid.os.Parcelable;
					public static unwrap(param0: globalAndroid.os.Parcelable): any;
					public static wrap(param0: any): globalAndroid.os.Parcelable;
				}
				export module Parcels {
					export class ParcelCodeRepository {
						public static class: java.lang.Class<org.parceler.Parcels.ParcelCodeRepository>;
						public get(param0: java.lang.Class): org.parceler.Parcels.ParcelableFactory<any>;
						public loadRepository(param0: org.parceler.Repository<org.parceler.Parcels.ParcelableFactory<any>>): void;
						public findClass(param0: java.lang.Class): org.parceler.Parcels.ParcelableFactory<any>;
					}
					export class ParcelableFactory<T> extends java.lang.Object {
						public static class: java.lang.Class<org.parceler.Parcels.ParcelableFactory<any>>;
						/**
						 * Constructs a new instance of the org.parceler.Parcels$ParcelableFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildParcelable(param0: T): globalAndroid.os.Parcelable;
						});
						public constructor();
						public static BUILD_PARCELABLE: string;
						public buildParcelable(param0: T): globalAndroid.os.Parcelable;
					}
					export class ParcelableFactoryReflectionProxy<T> extends org.parceler.Parcels.ParcelableFactory<any> {
						public static class: java.lang.Class<org.parceler.Parcels.ParcelableFactoryReflectionProxy<any>>;
						public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>);
						public buildParcelable(param0: any): globalAndroid.os.Parcelable;
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export class Repository<T> extends java.lang.Object {
					public static class: java.lang.Class<org.parceler.Repository<any>>;
					/**
					 * Constructs a new instance of the org.parceler.Repository<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(): java.util.Map<java.lang.Class, T>;
					});
					public constructor();
					public get(): java.util.Map<java.lang.Class, T>;
				}
			}
		}

		declare module org {
			export module parceler {
				export class Transient {
					public static class: java.lang.Class<org.parceler.Transient>;
					/**
					 * Constructs a new instance of the org.parceler.Transient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module org {
			export module parceler {
				export class TypeRangeParcelConverter<L> extends java.lang.Object {
					public static class: java.lang.Class<org.parceler.TypeRangeParcelConverter<any>>;
					/**
					 * Constructs a new instance of the org.parceler.TypeRangeParcelConverter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toParcel(param0: L, param1: globalAndroid.os.Parcel): void;
						fromParcel(param0: globalAndroid.os.Parcel): any;
					});
					public constructor();
					public fromParcel(param0: globalAndroid.os.Parcel): any;
					public toParcel(param0: L, param1: globalAndroid.os.Parcel): void;
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class ArrayListParcelConverter<T> extends org.parceler.converter.CollectionParcelConverter<any, java.util.ArrayList<any>> {
						public static class: java.lang.Class<org.parceler.converter.ArrayListParcelConverter<any>>;
						public createCollection(): any;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public createCollection(): java.util.ArrayList<any>;
						public toParcel(param0: java.util.Collection<any>, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export class BooleanArrayParcelConverter extends org.parceler.ParcelConverter<native.Array<boolean>> {
						public static class: java.lang.Class<org.parceler.converter.BooleanArrayParcelConverter>;
						public fromParcel(param0: globalAndroid.os.Parcel): native.Array<boolean>;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: native.Array<boolean>, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export class CharArrayParcelConverter extends org.parceler.ParcelConverter<native.Array<string>> {
						public static class: java.lang.Class<org.parceler.converter.CharArrayParcelConverter>;
						public toParcel(param0: native.Array<string>, param1: globalAndroid.os.Parcel): void;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public fromParcel(param0: globalAndroid.os.Parcel): native.Array<string>;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class CollectionParcelConverter<T, C> extends org.parceler.TypeRangeParcelConverter<java.util.Collection<any>, any> {
						public static class: java.lang.Class<org.parceler.converter.CollectionParcelConverter<any, any>>;
						public createCollection(): any;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: java.util.Collection<any>, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public itemFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public itemToParcel(param0: any, param1: globalAndroid.os.Parcel): void;
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class HashMapParcelConverter<K, V> extends org.parceler.converter.MapParcelConverter<any, any, java.util.HashMap<any, any>> {
						public static class: java.lang.Class<org.parceler.converter.HashMapParcelConverter<any, any>>;
						public createMap(): java.util.HashMap<any, any>;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public createMap(): any;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: java.util.Map<any, any>, param1: globalAndroid.os.Parcel): void;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class HashSetParcelConverter<T> extends org.parceler.converter.CollectionParcelConverter<any, java.util.HashSet<any>> {
						public static class: java.lang.Class<org.parceler.converter.HashSetParcelConverter<any>>;
						public createCollection(): any;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: java.util.Collection<any>, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public createCollection(): java.util.HashSet<any>;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class LinkedHashMapParcelConverter<K, V> extends org.parceler.converter.MapParcelConverter<any, any, java.util.LinkedHashMap<any, any>> {
						public static class: java.lang.Class<org.parceler.converter.LinkedHashMapParcelConverter<any, any>>;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public createMap(): any;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public createMap(): java.util.LinkedHashMap<any, any>;
						public toParcel(param0: java.util.Map<any, any>, param1: globalAndroid.os.Parcel): void;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class LinkedHashSetParcelConverter<T> extends org.parceler.converter.CollectionParcelConverter<any, java.util.LinkedHashSet<any>> {
						public static class: java.lang.Class<org.parceler.converter.LinkedHashSetParcelConverter<any>>;
						public createCollection(): any;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: java.util.Collection<any>, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public constructor();
						public createCollection(): java.util.LinkedHashSet<any>;
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class LinkedListParcelConverter<T> extends org.parceler.converter.CollectionParcelConverter<any, java.util.LinkedList<any>> {
						public static class: java.lang.Class<org.parceler.converter.LinkedListParcelConverter<any>>;
						public createCollection(): any;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: java.util.Collection<any>, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public constructor();
						public createCollection(): java.util.LinkedList<any>;
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class MapParcelConverter<K, V, M> extends org.parceler.TypeRangeParcelConverter<java.util.Map<any, any>, any> {
						public static class: java.lang.Class<org.parceler.converter.MapParcelConverter<any, any, any>>;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public createMap(): any;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public mapKeyFromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: java.util.Map<any, any>, param1: globalAndroid.os.Parcel): void;
						public mapValueFromParcel(param0: globalAndroid.os.Parcel): any;
						public mapKeyToParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public mapValueToParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class NullableParcelConverter<T> extends org.parceler.ParcelConverter<any> {
						public static class: java.lang.Class<org.parceler.converter.NullableParcelConverter<any>>;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public nullSafeFromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public nullSafeToParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class SparseArrayParcelConverter<T> extends org.parceler.ParcelConverter<globalAndroid.util.SparseArray<any>> {
						public static class: java.lang.Class<org.parceler.converter.SparseArrayParcelConverter<any>>;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: globalAndroid.util.SparseArray<any>, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public fromParcel(param0: globalAndroid.os.Parcel): globalAndroid.util.SparseArray<any>;
						public itemFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public itemToParcel(param0: any, param1: globalAndroid.os.Parcel): void;
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class TreeMapParcelConverter<K, V> extends org.parceler.converter.MapParcelConverter<any, any, java.util.TreeMap<any, any>> {
						public static class: java.lang.Class<org.parceler.converter.TreeMapParcelConverter<any, any>>;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public createMap(): any;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: java.util.Map<any, any>, param1: globalAndroid.os.Parcel): void;
						public createMap(): java.util.TreeMap<any, any>;
						public constructor();
					}
				}
			}
		}

		declare module org {
			export module parceler {
				export module converter {
					export abstract class TreeSetParcelConverter<T> extends org.parceler.converter.CollectionParcelConverter<any, java.util.TreeSet<any>> {
						public static class: java.lang.Class<org.parceler.converter.TreeSetParcelConverter<any>>;
						public createCollection(): any;
						public fromParcel(param0: globalAndroid.os.Parcel): any;
						public toParcel(param0: java.util.Collection<any>, param1: globalAndroid.os.Parcel): void;
						public toParcel(param0: any, param1: globalAndroid.os.Parcel): void;
						public createCollection(): java.util.TreeSet<any>;
						public constructor();
					}
				}
			}
		}

		declare module retrofit2 {
			export class BuiltInConverters extends retrofit2.Converter.Factory {
				public static class: java.lang.Class<retrofit2.BuiltInConverters>;
				public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any, okhttp3.RequestBody>;
				public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody, any>;
			}
			export module BuiltInConverters {
				export class BufferingResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, okhttp3.ResponseBody> {
					public static class: java.lang.Class<retrofit2.BuiltInConverters.BufferingResponseBodyConverter>;
					public convert(param0: okhttp3.ResponseBody): okhttp3.ResponseBody;
					public convert(param0: any): any;
				}
				export class RequestBodyConverter extends retrofit2.Converter<okhttp3.RequestBody, okhttp3.RequestBody> {
					public static class: java.lang.Class<retrofit2.BuiltInConverters.RequestBodyConverter>;
					public convert(param0: okhttp3.RequestBody): okhttp3.RequestBody;
					public convert(param0: any): any;
				}
				export class StreamingResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, okhttp3.ResponseBody> {
					public static class: java.lang.Class<retrofit2.BuiltInConverters.StreamingResponseBodyConverter>;
					public convert(param0: okhttp3.ResponseBody): okhttp3.ResponseBody;
					public convert(param0: any): any;
				}
				export class ToStringConverter extends retrofit2.Converter<any, string> {
					public static class: java.lang.Class<retrofit2.BuiltInConverters.ToStringConverter>;
					public convert(param0: any): string;
					public convert(param0: any): any;
				}
				export class VoidResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Void> {
					public static class: java.lang.Class<retrofit2.BuiltInConverters.VoidResponseBodyConverter>;
					public convert(param0: okhttp3.ResponseBody): java.lang.Void;
					public convert(param0: any): any;
				}
			}
		}

		declare module retrofit2 {
			export class Call<T> extends java.lang.Cloneable {
				public static class: java.lang.Class<retrofit2.Call<any>>;
				/**
				 * Constructs a new instance of the retrofit2.Call<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(): retrofit2.Response<any>;
					enqueue(param0: retrofit2.Callback<any>): void;
					isExecuted(): boolean;
					cancel(): void;
					isCanceled(): boolean;
					clone(): retrofit2.Call<any>;
					request(): okhttp3.Request;
				});
				public constructor();
				public clone(): retrofit2.Call<any>;
				public isExecuted(): boolean;
				public execute(): retrofit2.Response<any>;
				public request(): okhttp3.Request;
				public isCanceled(): boolean;
				public enqueue(param0: retrofit2.Callback<any>): void;
				public cancel(): void;
			}
		}

		declare module retrofit2 {
			export class CallAdapter<R, T> extends java.lang.Object {
				public static class: java.lang.Class<retrofit2.CallAdapter<any, any>>;
				/**
				 * Constructs a new instance of the retrofit2.CallAdapter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					responseType(): java.lang.reflect.Type;
					adapt(param0: retrofit2.Call<R>): T;
				});
				public constructor();
				public responseType(): java.lang.reflect.Type;
				public adapt(param0: retrofit2.Call<R>): T;
			}
			export module CallAdapter {
				export abstract class Factory {
					public static class: java.lang.Class<retrofit2.CallAdapter.Factory>;
					public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
					public constructor();
					public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any, any>;
					public static getParameterUpperBound(param0: number, param1: java.lang.reflect.ParameterizedType): java.lang.reflect.Type;
				}
			}
		}

		declare module retrofit2 {
			export class Callback<T> extends java.lang.Object {
				public static class: java.lang.Class<retrofit2.Callback<any>>;
				/**
				 * Constructs a new instance of the retrofit2.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
					onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
				});
				public constructor();
				public onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
				public onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
			}
		}

		declare module retrofit2 {
			export class Converter<F, T> extends java.lang.Object {
				public static class: java.lang.Class<retrofit2.Converter<any, any>>;
				/**
				 * Constructs a new instance of the retrofit2.Converter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					convert(param0: F): T;
				});
				public constructor();
				public convert(param0: F): T;
			}
			export module Converter {
				export abstract class Factory {
					public static class: java.lang.Class<retrofit2.Converter.Factory>;
					public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
					public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody, any>;
					public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any, okhttp3.RequestBody>;
					public stringConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<any, string>;
					public constructor();
					public static getParameterUpperBound(param0: number, param1: java.lang.reflect.ParameterizedType): java.lang.reflect.Type;
				}
			}
		}

		declare module retrofit2 {
			export class DefaultCallAdapterFactory extends retrofit2.CallAdapter.Factory {
				public static class: java.lang.Class<retrofit2.DefaultCallAdapterFactory>;
				public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any, any>;
			}
		}

		declare module retrofit2 {
			export class ExecutorCallAdapterFactory extends retrofit2.CallAdapter.Factory {
				public static class: java.lang.Class<retrofit2.ExecutorCallAdapterFactory>;
				public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any, any>;
			}
			export module ExecutorCallAdapterFactory {
				export class ExecutorCallbackCall<T> extends retrofit2.Call<any> {
					public static class: java.lang.Class<retrofit2.ExecutorCallAdapterFactory.ExecutorCallbackCall<any>>;
					public clone(): retrofit2.Call<any>;
					public request(): okhttp3.Request;
					public execute(): retrofit2.Response<any>;
					public isExecuted(): boolean;
					public cancel(): void;
					public isCanceled(): boolean;
					public enqueue(param0: retrofit2.Callback<any>): void;
				}
			}
		}

		declare module retrofit2 {
			export class HttpException {
				public static class: java.lang.Class<retrofit2.HttpException>;
				public constructor(param0: retrofit2.Response<any>);
				public code(): number;
				public response(): retrofit2.Response<any>;
				public message(): string;
			}
		}

		declare module retrofit2 {
			export class OkHttpCall<T> extends retrofit2.Call<any> {
				public static class: java.lang.Class<retrofit2.OkHttpCall<any>>;
				public clone(): retrofit2.Call<any>;
				public isExecuted(): boolean;
				public execute(): retrofit2.Response<any>;
				public request(): okhttp3.Request;
				public clone(): retrofit2.OkHttpCall<any>;
				public isCanceled(): boolean;
				public enqueue(param0: retrofit2.Callback<any>): void;
				public cancel(): void;
			}
			export module OkHttpCall {
				export class ExceptionCatchingRequestBody extends okhttp3.ResponseBody {
					public static class: java.lang.Class<retrofit2.OkHttpCall.ExceptionCatchingRequestBody>;
					public contentLength(): number;
					public source(): okio.BufferedSource;
					public contentType(): okhttp3.MediaType;
					public close(): void;
				}
				export class NoContentResponseBody extends okhttp3.ResponseBody {
					public static class: java.lang.Class<retrofit2.OkHttpCall.NoContentResponseBody>;
					public contentLength(): number;
					public source(): okio.BufferedSource;
					public contentType(): okhttp3.MediaType;
				}
			}
		}

		declare module retrofit2 {
			export abstract class ParameterHandler<T> extends java.lang.Object {
				public static class: java.lang.Class<retrofit2.ParameterHandler<any>>;
			}
			export module ParameterHandler {
				export class Body<T> extends retrofit2.ParameterHandler<any> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.Body<any>>;
				}
				export class Field<T> extends retrofit2.ParameterHandler<any> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.Field<any>>;
				}
				export class FieldMap<T> extends retrofit2.ParameterHandler<java.util.Map<string, any>> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.FieldMap<any>>;
				}
				export class Header<T> extends retrofit2.ParameterHandler<any> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.Header<any>>;
				}
				export class HeaderMap<T> extends retrofit2.ParameterHandler<java.util.Map<string, any>> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.HeaderMap<any>>;
				}
				export class Part<T> extends retrofit2.ParameterHandler<any> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.Part<any>>;
				}
				export class PartMap<T> extends retrofit2.ParameterHandler<java.util.Map<string, any>> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.PartMap<any>>;
				}
				export class Path<T> extends retrofit2.ParameterHandler<any> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.Path<any>>;
				}
				export class Query<T> extends retrofit2.ParameterHandler<any> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.Query<any>>;
				}
				export class QueryMap<T> extends retrofit2.ParameterHandler<java.util.Map<string, any>> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.QueryMap<any>>;
				}
				export class QueryName<T> extends retrofit2.ParameterHandler<any> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.QueryName<any>>;
				}
				export class RawPart extends retrofit2.ParameterHandler<okhttp3.MultipartBody.Part> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.RawPart>;
				}
				export class RelativeUrl extends retrofit2.ParameterHandler<any> {
					public static class: java.lang.Class<retrofit2.ParameterHandler.RelativeUrl>;
				}
			}
		}

		declare module retrofit2 {
			export class Platform {
				public static class: java.lang.Class<retrofit2.Platform>;
			}
			export module Platform {
				export class Android extends retrofit2.Platform {
					public static class: java.lang.Class<retrofit2.Platform.Android>;
					public defaultCallbackExecutor(): java.util.concurrent.Executor;
				}
				export module Android {
					export class MainThreadExecutor {
						public static class: java.lang.Class<retrofit2.Platform.Android.MainThreadExecutor>;
						public execute(param0: java.lang.Runnable): void;
					}
				}
				export class Java8 extends retrofit2.Platform {
					public static class: java.lang.Class<retrofit2.Platform.Java8>;
				}
			}
		}

		declare module retrofit2 {
			export class RequestBuilder {
				public static class: java.lang.Class<retrofit2.RequestBuilder>;
			}
			export module RequestBuilder {
				export class ContentTypeOverridingRequestBody extends okhttp3.RequestBody {
					public static class: java.lang.Class<retrofit2.RequestBuilder.ContentTypeOverridingRequestBody>;
					public contentLength(): number;
					public writeTo(param0: okio.BufferedSink): void;
					public contentType(): okhttp3.MediaType;
				}
			}
		}

		declare module retrofit2 {
			export class Response<T> extends java.lang.Object {
				public static class: java.lang.Class<retrofit2.Response<any>>;
				public static error(param0: number, param1: okhttp3.ResponseBody): retrofit2.Response<any>;
				public headers(): okhttp3.Headers;
				public body(): T;
				public static success(param0: any, param1: okhttp3.Response): retrofit2.Response<any>;
				public errorBody(): okhttp3.ResponseBody;
				public raw(): okhttp3.Response;
				public toString(): string;
				public static error(param0: okhttp3.ResponseBody, param1: okhttp3.Response): retrofit2.Response<any>;
				public isSuccessful(): boolean;
				public static success(param0: any): retrofit2.Response<any>;
				public static success(param0: any, param1: okhttp3.Headers): retrofit2.Response<any>;
				public code(): number;
				public message(): string;
			}
		}

		declare module retrofit2 {
			export class Retrofit {
				public static class: java.lang.Class<retrofit2.Retrofit>;
				public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any, any>;
				public callFactory(): okhttp3.Call.Factory;
				public stringConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any, any>;
				public baseUrl(): okhttp3.HttpUrl;
				public newBuilder(): retrofit2.Retrofit.Builder;
				public nextRequestBodyConverter(param0: retrofit2.Converter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>, param3: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any, any>;
				public callAdapter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.CallAdapter<any, any>;
				public create(param0: java.lang.Class): any;
				public callbackExecutor(): java.util.concurrent.Executor;
				public callAdapterFactories(): java.util.List<retrofit2.CallAdapter.Factory>;
				public nextCallAdapter(param0: retrofit2.CallAdapter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.CallAdapter<any, any>;
				public converterFactories(): java.util.List<retrofit2.Converter.Factory>;
				public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any, any>;
				public nextResponseBodyConverter(param0: retrofit2.Converter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any, any>;
			}
			export module Retrofit {
				export class Builder {
					public static class: java.lang.Class<retrofit2.Retrofit.Builder>;
					public callAdapterFactories(): java.util.List<retrofit2.CallAdapter.Factory>;
					public converterFactories(): java.util.List<retrofit2.Converter.Factory>;
					public addConverterFactory(param0: retrofit2.Converter.Factory): retrofit2.Retrofit.Builder;
					public validateEagerly(param0: boolean): retrofit2.Retrofit.Builder;
					public callFactory(param0: okhttp3.Call.Factory): retrofit2.Retrofit.Builder;
					public build(): retrofit2.Retrofit;
					public constructor();
					public baseUrl(param0: string): retrofit2.Retrofit.Builder;
					public client(param0: okhttp3.OkHttpClient): retrofit2.Retrofit.Builder;
					public baseUrl(param0: okhttp3.HttpUrl): retrofit2.Retrofit.Builder;
					public callbackExecutor(param0: java.util.concurrent.Executor): retrofit2.Retrofit.Builder;
					public addCallAdapterFactory(param0: retrofit2.CallAdapter.Factory): retrofit2.Retrofit.Builder;
				}
			}
		}

		declare module retrofit2 {
			export class ServiceMethod<R, T> extends java.lang.Object {
				public static class: java.lang.Class<retrofit2.ServiceMethod<any, any>>;
			}
			export module ServiceMethod {
				export class Builder<T, R> extends java.lang.Object {
					public static class: java.lang.Class<retrofit2.ServiceMethod.Builder<any, any>>;
					public build(): retrofit2.ServiceMethod<any, any>;
				}
			}
		}

		declare module retrofit2 {
			export class Utils {
				public static class: java.lang.Class<retrofit2.Utils>;
			}
			export module Utils {
				export class GenericArrayTypeImpl {
					public static class: java.lang.Class<retrofit2.Utils.GenericArrayTypeImpl>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getGenericComponentType(): java.lang.reflect.Type;
					public hashCode(): number;
				}
				export class ParameterizedTypeImpl {
					public static class: java.lang.Class<retrofit2.Utils.ParameterizedTypeImpl>;
					public getRawType(): java.lang.reflect.Type;
					public equals(param0: any): boolean;
					public toString(): string;
					public getOwnerType(): java.lang.reflect.Type;
					public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
					public hashCode(): number;
				}
				export class WildcardTypeImpl {
					public static class: java.lang.Class<retrofit2.Utils.WildcardTypeImpl>;
					public equals(param0: any): boolean;
					public getUpperBounds(): native.Array<java.lang.reflect.Type>;
					public toString(): string;
					public getLowerBounds(): native.Array<java.lang.reflect.Type>;
					public hashCode(): number;
				}
			}
		}

		declare module retrofit2 {
			export module converter {
				export module gson {
					export class GsonConverterFactory extends retrofit2.Converter.Factory {
						public static class: java.lang.Class<retrofit2.converter.gson.GsonConverterFactory>;
						public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody, any>;
						public static create(param0: com.google.gson.Gson): retrofit2.converter.gson.GsonConverterFactory;
						public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any, okhttp3.RequestBody>;
						public static create(): retrofit2.converter.gson.GsonConverterFactory;
					}
				}
			}
		}

		declare module retrofit2 {
			export module converter {
				export module gson {
					export class GsonRequestBodyConverter<T> extends retrofit2.Converter<any, okhttp3.RequestBody> {
						public static class: java.lang.Class<retrofit2.converter.gson.GsonRequestBodyConverter<any>>;
						public convert(param0: any): any;
						public convert(param0: any): okhttp3.RequestBody;
					}
				}
			}
		}

		declare module retrofit2 {
			export module converter {
				export module gson {
					export class GsonResponseBodyConverter<T> extends retrofit2.Converter<okhttp3.ResponseBody, any> {
						public static class: java.lang.Class<retrofit2.converter.gson.GsonResponseBodyConverter<any>>;
						public convert(param0: any): any;
						public convert(param0: okhttp3.ResponseBody): any;
					}
				}
			}
		}


		declare module retrofit2 {
			export module converter {
				export module scalars {
					export class ScalarRequestBodyConverter<T> extends retrofit2.Converter<any, okhttp3.RequestBody> {
						public static class: java.lang.Class<retrofit2.converter.scalars.ScalarRequestBodyConverter<any>>;
						public convert(param0: any): any;
						public convert(param0: any): okhttp3.RequestBody;
					}
				}
			}
		}

		declare module retrofit2 {
			export module converter {
				export module scalars {
					export class ScalarResponseBodyConverters {
						public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters>;
					}
					export module ScalarResponseBodyConverters {
						export class BooleanResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Boolean> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.BooleanResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): java.lang.Boolean;
						}
						export class ByteResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Byte> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.ByteResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): java.lang.Byte;
						}
						export class CharacterResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Character> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.CharacterResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): java.lang.Character;
						}
						export class DoubleResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Double> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.DoubleResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): java.lang.Double;
						}
						export class FloatResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Float> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.FloatResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): java.lang.Float;
						}
						export class IntegerResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Integer> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.IntegerResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): java.lang.Integer;
						}
						export class LongResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Long> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.LongResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): java.lang.Long;
						}
						export class ShortResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, java.lang.Short> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.ShortResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): java.lang.Short;
						}
						export class StringResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody, string> {
							public static class: java.lang.Class<retrofit2.converter.scalars.ScalarResponseBodyConverters.StringResponseBodyConverter>;
							public convert(param0: any): any;
							public convert(param0: okhttp3.ResponseBody): string;
						}
					}
				}
			}
		}

		declare module retrofit2 {
			export module converter {
				export module scalars {
					export class ScalarsConverterFactory extends retrofit2.Converter.Factory {
						public static class: java.lang.Class<retrofit2.converter.scalars.ScalarsConverterFactory>;
						public static create(): retrofit2.converter.scalars.ScalarsConverterFactory;
						public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody, any>;
						public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any, okhttp3.RequestBody>;
					}
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Body {
					public static class: java.lang.Class<retrofit2.http.Body>;
					/**
					 * Constructs a new instance of the retrofit2.http.Body interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class DELETE {
					public static class: java.lang.Class<retrofit2.http.DELETE>;
					/**
					 * Constructs a new instance of the retrofit2.http.DELETE interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Field {
					public static class: java.lang.Class<retrofit2.http.Field>;
					/**
					 * Constructs a new instance of the retrofit2.http.Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						encoded(): boolean;
					});
					public constructor();
					public encoded(): boolean;
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class FieldMap {
					public static class: java.lang.Class<retrofit2.http.FieldMap>;
					/**
					 * Constructs a new instance of the retrofit2.http.FieldMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encoded(): boolean;
					});
					public constructor();
					public encoded(): boolean;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class FormUrlEncoded {
					public static class: java.lang.Class<retrofit2.http.FormUrlEncoded>;
					/**
					 * Constructs a new instance of the retrofit2.http.FormUrlEncoded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class GET {
					public static class: java.lang.Class<retrofit2.http.GET>;
					/**
					 * Constructs a new instance of the retrofit2.http.GET interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class HEAD {
					public static class: java.lang.Class<retrofit2.http.HEAD>;
					/**
					 * Constructs a new instance of the retrofit2.http.HEAD interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class HTTP {
					public static class: java.lang.Class<retrofit2.http.HTTP>;
					/**
					 * Constructs a new instance of the retrofit2.http.HTTP interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						method(): string;
						path(): string;
						hasBody(): boolean;
					});
					public constructor();
					public hasBody(): boolean;
					public method(): string;
					public path(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Header {
					public static class: java.lang.Class<retrofit2.http.Header>;
					/**
					 * Constructs a new instance of the retrofit2.http.Header interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class HeaderMap {
					public static class: java.lang.Class<retrofit2.http.HeaderMap>;
					/**
					 * Constructs a new instance of the retrofit2.http.HeaderMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Headers {
					public static class: java.lang.Class<retrofit2.http.Headers>;
					/**
					 * Constructs a new instance of the retrofit2.http.Headers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<string>;
					});
					public constructor();
					public value(): native.Array<string>;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Multipart {
					public static class: java.lang.Class<retrofit2.http.Multipart>;
					/**
					 * Constructs a new instance of the retrofit2.http.Multipart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class OPTIONS {
					public static class: java.lang.Class<retrofit2.http.OPTIONS>;
					/**
					 * Constructs a new instance of the retrofit2.http.OPTIONS interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class PATCH {
					public static class: java.lang.Class<retrofit2.http.PATCH>;
					/**
					 * Constructs a new instance of the retrofit2.http.PATCH interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class POST {
					public static class: java.lang.Class<retrofit2.http.POST>;
					/**
					 * Constructs a new instance of the retrofit2.http.POST interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class PUT {
					public static class: java.lang.Class<retrofit2.http.PUT>;
					/**
					 * Constructs a new instance of the retrofit2.http.PUT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Part {
					public static class: java.lang.Class<retrofit2.http.Part>;
					/**
					 * Constructs a new instance of the retrofit2.http.Part interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						encoding(): string;
					});
					public constructor();
					public encoding(): string;
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class PartMap {
					public static class: java.lang.Class<retrofit2.http.PartMap>;
					/**
					 * Constructs a new instance of the retrofit2.http.PartMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encoding(): string;
					});
					public constructor();
					public encoding(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Path {
					public static class: java.lang.Class<retrofit2.http.Path>;
					/**
					 * Constructs a new instance of the retrofit2.http.Path interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						encoded(): boolean;
					});
					public constructor();
					public encoded(): boolean;
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Query {
					public static class: java.lang.Class<retrofit2.http.Query>;
					/**
					 * Constructs a new instance of the retrofit2.http.Query interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						encoded(): boolean;
					});
					public constructor();
					public encoded(): boolean;
					public value(): string;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class QueryMap {
					public static class: java.lang.Class<retrofit2.http.QueryMap>;
					/**
					 * Constructs a new instance of the retrofit2.http.QueryMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encoded(): boolean;
					});
					public constructor();
					public encoded(): boolean;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class QueryName {
					public static class: java.lang.Class<retrofit2.http.QueryName>;
					/**
					 * Constructs a new instance of the retrofit2.http.QueryName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encoded(): boolean;
					});
					public constructor();
					public encoded(): boolean;
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Streaming {
					public static class: java.lang.Class<retrofit2.http.Streaming>;
					/**
					 * Constructs a new instance of the retrofit2.http.Streaming interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

		declare module retrofit2 {
			export module http {
				export class Url {
					public static class: java.lang.Class<retrofit2.http.Url>;
					/**
					 * Constructs a new instance of the retrofit2.http.Url interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}

	}
}



//Generics information:

//com.google.gson.Gson.FutureTypeAdapter:1
//com.google.gson.InstanceCreator:1
//com.google.gson.JsonDeserializer:1
//com.google.gson.JsonSerializer:1
//com.google.gson.TypeAdapter:1
//com.google.gson.internal.LinkedHashTreeMap:2
//com.google.gson.internal.LinkedHashTreeMap.AvlBuilder:2
//com.google.gson.internal.LinkedHashTreeMap.AvlIterator:2
//com.google.gson.internal.LinkedHashTreeMap.LinkedTreeMapIterator:1
//com.google.gson.internal.LinkedHashTreeMap.Node:2
//com.google.gson.internal.LinkedTreeMap:2
//com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator:1
//com.google.gson.internal.LinkedTreeMap.Node:2
//com.google.gson.internal.ObjectConstructor:1
//com.google.gson.internal.bind.ArrayTypeAdapter:1
//com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter:1
//com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter:2
//com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter:1
//com.google.gson.internal.bind.TreeTypeAdapter:1
//com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper:1
//com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter:1
//com.google.gson.reflect.TypeToken:1
//com.squareup.picasso.Action:1
//com.squareup.picasso.Action.RequestWeakReference:1
//dagger.Lazy:1
//dagger.MembersInjector:1
//dagger.internal.DelegateFactory:1
//dagger.internal.DoubleCheck:1
//dagger.internal.Factory:1
//dagger.internal.InstanceFactory:1
//dagger.internal.MapBuilder:2
//dagger.internal.MapFactory:2
//dagger.internal.MapFactory.Builder:2
//dagger.internal.MapProviderFactory:2
//dagger.internal.MapProviderFactory.Builder:2
//dagger.internal.ProviderOfLazy:1
//dagger.internal.ReferenceReleasingProvider:1
//dagger.internal.SetBuilder:1
//dagger.internal.SetFactory:1
//dagger.internal.SetFactory.Builder:1
//dagger.internal.SingleCheck:1
//dagger.internal.TypedReleasableReferenceManagerDecorator:1
//dagger.releasablereferences.TypedReleasableReferenceManager:1
//javax.inject.Provider:1
//okhttp3.internal.platform.OptionalMethod:1
//org.parceler.InjectionUtil.AccessibleElementPrivilegedAction:2
//org.parceler.InjectionUtil.GenericType:1
//org.parceler.InjectionUtil.GetFieldPrivilegedAction:1
//org.parceler.InjectionUtil.SetConstructorPrivilegedAction:1
//org.parceler.InjectionUtil.SetMethodPrivilegedAction:1
//org.parceler.NonParcelRepository.ConverterParcelable:1
//org.parceler.ParcelConverter:1
//org.parceler.ParcelWrapper:1
//org.parceler.Parcels.ParcelableFactory:1
//org.parceler.Parcels.ParcelableFactoryReflectionProxy:1
//org.parceler.Repository:1
//org.parceler.TypeRangeParcelConverter:1
//org.parceler.converter.ArrayListParcelConverter:1
//org.parceler.converter.CollectionParcelConverter:2
//org.parceler.converter.HashMapParcelConverter:2
//org.parceler.converter.HashSetParcelConverter:1
//org.parceler.converter.LinkedHashMapParcelConverter:2
//org.parceler.converter.LinkedHashSetParcelConverter:1
//org.parceler.converter.LinkedListParcelConverter:1
//org.parceler.converter.MapParcelConverter:3
//org.parceler.converter.NullableParcelConverter:1
//org.parceler.converter.SparseArrayParcelConverter:1
//org.parceler.converter.TreeMapParcelConverter:2
//org.parceler.converter.TreeSetParcelConverter:1
//retrofit2.Call:1
//retrofit2.CallAdapter:2
//retrofit2.Callback:1
//retrofit2.Converter:2
//retrofit2.ExecutorCallAdapterFactory.ExecutorCallbackCall:1
//retrofit2.OkHttpCall:1
//retrofit2.ParameterHandler:1
//retrofit2.ParameterHandler.Body:1
//retrofit2.ParameterHandler.Field:1
//retrofit2.ParameterHandler.FieldMap:1
//retrofit2.ParameterHandler.Header:1
//retrofit2.ParameterHandler.HeaderMap:1
//retrofit2.ParameterHandler.Part:1
//retrofit2.ParameterHandler.PartMap:1
//retrofit2.ParameterHandler.Path:1
//retrofit2.ParameterHandler.Query:1
//retrofit2.ParameterHandler.QueryMap:1
//retrofit2.ParameterHandler.QueryName:1
//retrofit2.Response:1
//retrofit2.ServiceMethod:2
//retrofit2.ServiceMethod.Builder:2
//retrofit2.converter.gson.GsonRequestBodyConverter:1
//retrofit2.converter.gson.GsonResponseBodyConverter:1
//retrofit2.converter.scalars.ScalarRequestBodyConverter:1}