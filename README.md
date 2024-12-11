# Dapp Ownership Transfer Bug: Insufficient Gas Handling

This repository demonstrates a common bug in Dapps related to ownership transfer and insufficient gas handling. The `transferOwnership` function in the provided code does not properly handle potential errors during the transaction, leading to unexpected behavior.  The solution demonstrates how to correctly handle these errors and provide informative feedback to the user.

## Bug Description
The original `transferOwnership` function lacks proper error handling when sending the ownership transfer transaction.  If the transaction fails (e.g., due to insufficient gas), the `.catch` block will log an error, but the user won't know that the ownership transfer did not complete. This can lead to silent failures and security vulnerabilities.

## Solution
The solution includes comprehensive error handling that checks the transaction receipt to confirm the transfer's success and provides feedback to the user about potential problems, such as insufficient gas or other transaction issues.