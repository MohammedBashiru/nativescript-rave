import { prepare } from 'nativescript-rave';
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

export function initPayment(args) {
    let context = prepare({
      country: "GH",
      currency: "GHS",
      fName: "Mohammed",
      lName: "Bashiru",
      email: "your email here",
      narration: "narration here",
      publicKey: "your public key here",
      encryptionKey: "your encryption key here",
      txRef: "txRef",
      amount: 2,
      acceptAccountPayments: true,
      acceptCardPayments: true,
      acceptGHMobileMoneyPayments: true,
      onStagingEnv: true,
      shouldDisplayFee: true,
      showStagingLabel: true,
      setSubAccounts: [
        {
          subAccountId: "subAccountId",
          transactionSplitRatio: 1
        }
      ],
      setMeta: [{ metaname: "Meta name here", metavalue: "meta value here" }]
    });
    context
      .checkoutPayment()
      .then(response => {
        console.log("payment process complete");
        console.log(response);
      })
      .catch(e => {
        console.log("error", e);
      });
  }
