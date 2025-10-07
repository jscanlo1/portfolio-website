---
title: 'Cryptographic Website'
date: '2023-06-01'
description: "A personal project to help teach myself about the Diffie–Hellman keys and other cryptographic concepts. Based off of a project as part of Alechemy University's blockchain course."
github: 'https://github.com/jscanlo1/cryptographic-ledger-website'
favourite: false
slug: 'cryptographic-website'
---

### Overview

The basis of this project is a project as part of the [Alchemy University](https://university.alchemy.com/) course on blockchain and ethereum development; a course I would certainly recommend to anyone interested in getting to grips with this technology as it starts from very first principles!

The aim of the project was to build a simple website that kept track of user accounts and allowed them to securely send transactions to other acounts.

### How it Works

This project uses **React** using **Vite** for the front end. I used **Express.js** and **Node.js** for the backend.

The project uses the "ethereum-cryptography" npm package to generate public and private keys. 
It also provides functions for hashing and converting utf-8 to bytes.

The project solves the issue of 'double-spending', where correctly signed messages can be resent to re-trigger valid transactions, by making a time-stamp mandatory in all transactions. 
This timestamp is then stored internally on the server. 
It then rejects any messages that have a timestamp that has already been used along with the message hash. 
Any change to the timestamp would need a different message hash.

This is not dissimilar to the idea of nonces that blockchain technologies like Ethereum and Bitcoin use.
