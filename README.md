# Rave-Nativescript

<!-- [![Build Status](https://travis-ci.org/MohammedBashiru/rave-nativescript.svg?branch=master)](https://travis-ci.org/MohammedBashiru/rave-nativescript) -->

## Version 1.2.0
- Upgraded to nativescript 6
- Fixed issues with retrieving transaction fee 
- Previous versions repo link https://github.com/MohammedBashiru/rave-nativescript

## Version 1.1.0

- Upgraded to rave-android:1.0.43
- Fixed few noticed bugs

## Version 1.0.0

- Using rave-android:1.0.39
- Initial Release

This plugin allows you to use flutterwave payment platform with Nativescript. For more information visit https://developer.flutterwave.com

![Plugin demo](https://github.com/MohammedBashiru/rave-nativescript/blob/master/screenshot/example.gif)

## Requirements

- Add the required permission
  `<uses-permission android:name="android.permission.READ_PHONE_STATE" />`
  `<uses-permission android:name="android.permission.INTERNET" />`


    ## REQUIRED PERMISSION
    This library requires the READ_PHONE_PERMISSION to get the build number for fraud detection and flagging as recommended here https://developer.android.com/training/articles/user-data-ids.html#i_abuse_detection_detecting_high_value_stolen_credentials

## Installation

```javascript
tns plugin add rave-nativescript
```

## Usage

The best way to explore the usage of the plugin is to inspect demo apps in the plugin repository.
In `demo` folder you can find the usage of the plugin.

In addition to the plugin usage, both apps are webpack configured.

In short here are the steps:

### Import the plugin

_TypeScript_
`import * as RaveNativescript from 'rave-nativescript';`

_Javascript_
`var Expresspay = require("rave-nativescript");`

### Start RavePayManager

```
 let context = RaveNativescript.prepare({
      country: "country",
      currency: "currency here",
      fName: "Customer first name",
      lName: "Customer last name",
      email: "customer email",
      narration: "Your narration here",
      publicKey: "your public key here",
      encryptionKey: "your encryption key here",
      txRef: "txRef",
      amount: amount,
      acceptAccountPayments: true,
      acceptCardPayments: true,
      acceptGHMobileMoneyPayments: true,
      onStagingEnv: true,
      shouldDisplayFee: true,
      showStagingLabel: false,
      setSubAccounts: [{
        subAccountId : "subAccountId",
        transactionSplitRatio: 1
      }],
      setMeta: [{ metaname: "Meta name here", metavalue: "meta value here"}]
    });
```

### Full usage

```
context.checkoutPayment()
    .then((response) => {
      console.log("payment process complete")
      console.log(response)
    })
    .catch(e => {
    console.log("handle errors")
    })
```

## API

### Methods

| Option                               | Status   | Default | Description                                                                                                                                                                                                                                                                                  |
| ------------------------------------ | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount                               | required | null    | This is the amount to be charged from card/account                                                                                                                                                                                                                                           |
| country                              | required | null    | This is the route country for the transaction with respect to the currency. You can find a list of supported countries and currencies [here](https://flutterwavedevelopers.readme.io/docs/multicurrency-payments)                                                                            |
| currency                             | required | null    | This is the specified currency to charge the card in                                                                                                                                                                                                                                         |
| fName                                | required | null    | This is the first name of the card holder or the customer                                                                                                                                                                                                                                    |
| lName                                | required | null    | This is the last name of the card holder or the customer                                                                                                                                                                                                                                     |
| email                                | required | null    | This is the email address of the customer                                                                                                                                                                                                                                                    |
| narration                            | optional | null    | This is a custom description added by the merchant. For Bank Transfer payments, this becomes the account name of the account to be paid into. See more details [here](https://developer.flutterwave.com/v2.0/reference#pay-with-bank-transfer-nigeria)                                       |
| publicKey                            | required | null    | Merchant's public key. Get your merchant keys here for [staging](https://flutterwavedevelopers.readme.io/blog/how-to-get-your-staging-keys-from-the-rave-sandbox-environment) and [live](https://flutterwavedevelopers.readme.io/blog/how-to-get-your-live-keys-from-the-rave-dashboard)     |
| encryptionKey                        | required | null    | Merchant's encryption key. Get your merchant keys here for [staging](https://flutterwavedevelopers.readme.io/blog/how-to-get-your-staging-keys-from-the-rave-sandbox-environment) and [live](https://flutterwavedevelopers.readme.io/blog/how-to-get-your-live-keys-from-the-rave-dashboard) |
| txRef                                | required | null    | This is the unique reference, unique to the particular transaction being carried out. It is generated by the merchant for every transaction                                                                                                                                                  |
| acceptAccountPayments(boolean)       | optional | false   | Set to `true` if you want to accept payments via cards, else set to `false`                                                                                                                                                                                                                  |
| acceptCardPayments(boolean)          | optional | false   | Set to `true` if you want to accept payments via cards, else set to `false`                                                                                                                                                                                                                  |
| acceptMpesaPayments(boolean)         | optional | false   | Set to `true` if you want to accept Mpesa payments, else set to `false` . For this option to work, you should set your country to `KE` and your currency to `KES`                                                                                                                            |
| acceptGHMobileMoneyPayments(boolean) | optional | false   | Set to `true` if you want to accept Ghana mobile money payments, else set to `false` . For this option to work, you should set your country to `GH` and your currency to `GHS`                                                                                                               |
| acceptUgMobileMoneyPayments(boolean) | optional | false   | Set to `true` if you want to accept Uganda mobile money payments, else set to `false` . For this option to work, you should set your country to `UG` and your currency to `UGX`                                                                                                              |
| acceptAchPayments(boolean)           | optional | false   | Set to `true` if you want to accept US `ACH` charges from your customers, else set to `false` . For this option to work, you should set your country to `US` and your currency to `USD`. You also have to set `acceptAccountPayments(true)`                                                  |
| acceptBankTransferPayments(boolean)  | optional | false   | Set to true if you want to accept payments via bank transfer from your customers, else set to false . This option is currently only available for Nigerian Naira. See more details in the [API Location](https://developer.flutterwave.com/v2.0/reference#pay-with-bank-transfer-nigeria)    |
| onStagingEnv(boolean)                | required | false   | Set to `true` if you want your transactions to run in the staging environment otherwise set to `false`. Defaults to `false`                                                                                                                                                                  |
| txRef                                | required | null    | Pass in any other custom data you wish to pass. It takes an array of Meta object {}                                                                                                                                                                                                          |
| txRef                                | required | null    | This is the unique reference, unique to the particular transaction being carried out. It is generated by the merchant for every transaction                                                                                                                                                  |

## Contribute

We love PRs!. If you want to contribute, but you are not sure where to start - look for [issues labeled `help wanted`](https://github.com/MohammedBashiru/rave-nativescript/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).

## Get Help

Please, use [github issues](https://github.com/MohammedBashiru/rave-nativescript/issues) strictly for reporting bugs or requesting features.
