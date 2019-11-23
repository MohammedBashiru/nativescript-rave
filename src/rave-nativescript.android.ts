/**
 * RAVE NATIVESCRIPT PLUGIN BY MOHAMMED BASHIRU
 * github.com/MohammedBashiru
 */

import * as app from "tns-core-modules/application";
import { PayLoad } from "./rave-nativescript.common";

const RaveConstants = com.flutterwave.raveandroid.RaveConstants;
const RavePayActivity = com.flutterwave.raveandroid.RavePayActivity;
const RavePayManager = com.flutterwave.raveandroid.RavePayManager;
const List = java.util.List;
const ArrayList = java.util.ArrayList;

export class RaveNativescript {
  private __payload: PayLoad;

  constructor(payload) {
    this.__payload = payload;
  }

  get params(): PayLoad {
    return this.__payload;
  }

  get acceptAccountPayments(): boolean {
    return this.params.acceptAccountPayments ? true : false;
  }

  get acceptCardPayments(): boolean {
    return this.params.acceptCardPayments ? true : false;
  }

  get acceptMpesaPayments(): boolean {
    return this.params.acceptMpesaPayments ? true : false;
  }

  get acceptAchPayments(): boolean {
    return this.params.acceptAchPayments ? true : false;
  }

  get acceptGHMobileMoneyPayments(): boolean {
    return this.params.acceptGHMobileMoneyPayments ? true : false;
  }

  get acceptUgMobileMoneyPayments(): boolean {
    return this.params.acceptUgMobileMoneyPayments ? true : false;
  }

  get acceptZmMobileMoneyPayments(): boolean {
    return this.params.acceptZmMobileMoneyPayments ? true : false;
  }

  get acceptRwfMobileMoneyPayments(): boolean {
    return this.params.acceptRwfMobileMoneyPayments ? true : false;
  }

  get acceptUkPayments(): boolean {
    return this.params.acceptUkPayments ? true : false;
  }

  get acceptFrancMobileMoneyPayments(): boolean {
    return this.params.acceptFrancMobileMoneyPayments ? true : false;
  }

  get acceptBankTransferPayments(): boolean {
    return this.params.acceptBankTransferPayments ? true : false;
  }

  get acceptUssdPayments(): boolean {
    return this.params.acceptUssdPayments ? true : false;
  }

  get onStagingEnv(): boolean {
    return this.params.onStagingEnv ? true : false;
  }

  get shouldDisplayFee(): boolean {
    return this.params.shouldDisplayFee ? true : false;
  }

  get showStagingLabel(): boolean {
    return this.params.showStagingLabel ? true : false;
  }

  get setSubAccounts(): any {
    return this.params.setSubAccounts &&
      Array.isArray(this.params.setSubAccounts) &&
      this.params.setSubAccounts
      ? this.params.setSubAccounts
      : false;
  }

  get setMeta(): any {
    return this.params.setMeta &&
      Array.isArray(this.params.setMeta) &&
      this.params.setMeta
      ? this.params.setMeta
      : false;
  }

  checkoutPayment(): Promise<Object> {
    return new Promise((resolve, reject) => {
      if (!this.params.amount) {
        reject(new Error("No amount provided"));
      }
      if (!this.params.country) {
        reject(new Error("No country provided"));
      }
      if (!this.params.currency) {
        reject(new Error("No currency provided"));
      }
      if (!this.params.fName) {
        reject(new Error("fName property is not specified"));
      }
      if (!this.params.fName) {
        reject(new Error("fName property is not specified"));
      }
      if (!this.params.lName) {
        reject(new Error("lName property is not specified"));
      }
      if (!this.params.email) {
        reject(new Error("Email property is not specified"));
      }
      if (!this.params.publicKey) {
        reject(new Error("publicKey property is not specified"));
      }
      if (!this.params.encryptionKey) {
        reject(new Error("encryptionKey property is not specified"));
      }
      if (!this.params.txRef) {
        reject(new Error("txRef property is not specified"));
      }

      let ravePayManager = new com.flutterwave.raveandroid.RavePayManager(app.android.foregroundActivity)
        .setAmount(parseFloat(this.params.amount))
        .setCountry(this.params.country)
        .setCurrency(this.params.currency)
        .setEmail(this.params.email)
        .setfName(this.params.fName)
        .setlName(this.params.lName)
        .setNarration(this.params.narration)
        .setPublicKey(this.params.publicKey)
        .setEncryptionKey(this.params.encryptionKey)
        .setTxRef(this.params.txRef)
        .acceptMpesaPayments(this.acceptMpesaPayments)
        .acceptAccountPayments(this.acceptAccountPayments)
        .acceptCardPayments(this.acceptCardPayments)
        .acceptAchPayments(this.acceptAchPayments)
        .acceptGHMobileMoneyPayments(this.acceptGHMobileMoneyPayments)
        .acceptUgMobileMoneyPayments(this.acceptUgMobileMoneyPayments)
        .acceptZmMobileMoneyPayments(this.acceptZmMobileMoneyPayments)
        .acceptRwfMobileMoneyPayments(this.acceptRwfMobileMoneyPayments)
        .acceptUkPayments(this.acceptUkPayments)
        .acceptFrancMobileMoneyPayments(this.acceptFrancMobileMoneyPayments)
        .acceptBankTransferPayments(this.acceptBankTransferPayments)
        .acceptUssdPayments(this.acceptUssdPayments)
        .onStagingEnv(this.onStagingEnv)
        .shouldDisplayFee(this.shouldDisplayFee)
        .showStagingLabel(this.showStagingLabel);

      if (this.setSubAccounts) {
        let subAccount: java.util.List<com.flutterwave.raveandroid.responses.SubAccount> = new ArrayList<
          com.flutterwave.raveandroid.responses.SubAccount
        >();
        this.setSubAccounts.map(account => {
          subAccount.add(
            new com.flutterwave.raveandroid.responses.SubAccount(
              account.subAccountId.toString(),
              account.transactionSplitRatio.toString()
            )
          );
        });
        ravePayManager.setSubAccounts(subAccount);
      }
      if (this.setMeta) {
        let metaData: java.util.List<com.flutterwave.raveandroid.Meta> = new ArrayList<
          com.flutterwave.raveandroid.Meta
        >();
        this.setMeta.map(meta => {
          metaData.add(
            new com.flutterwave.raveandroid.Meta(
              meta.metaname.toString(),
              meta.metavalue.toString()
            )
          );
        });
        ravePayManager.setMeta(metaData);
      }
      ravePayManager.initialize();

      app.android.on(app.AndroidApplication.activityResultEvent, onResult);

      function onResult(args) {
        let requestCode = args.requestCode;
        let resultCode = args.resultCode;
        let data = args.intent;
        /*
         *  We advise you to do a further verification of transaction's details on your server to be
         *  sure everything checks out before providing service or goods.
         */
        if (requestCode == RaveConstants.RAVE_REQUEST_CODE && data != null) {
          let message = data.getStringExtra("response");
          if (resultCode == RavePayActivity.RESULT_SUCCESS) {
            let response = { status: "success", data: message };
            resolve(response);
          } else if (resultCode == RavePayActivity.RESULT_ERROR) {
            let response = { status: "error", data: message };
            reject(response);
          } else if (resultCode == RavePayActivity.RESULT_CANCELLED) {
            let response = { status: "cancelled", data: message };
            reject(response);
          }
        }
      }
    });
  }
}

export function prepare(payload: PayLoad): RaveNativescript {
  return new RaveNativescript(payload);
}
