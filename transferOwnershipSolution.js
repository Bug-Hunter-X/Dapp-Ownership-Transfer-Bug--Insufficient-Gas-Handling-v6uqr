```javascript
async function transferOwnership(newOwner) {
  // Input validation
  if (!web3.utils.isAddress(newOwner)) {
    throw new Error('Invalid address');
  }

  try {
    const txReceipt = await this.contract.methods.transferOwnership(newOwner).send({ from: this.account, gas: 6721975 }); // Adjust gas as needed
    if (txReceipt.status) {
      console.log('Ownership transferred successfully');
    } else {
      console.error('Ownership transfer failed. Check transaction receipt for details.', txReceipt);
      // Consider adding user-friendly error messages here (e.g., 'Insufficient gas')
    }
  } catch (error) {
    console.error('Error transferring ownership:', error);
    // Add user-friendly error messages here for better UX
  }
}
```