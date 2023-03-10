import { Contract, getDefaultProvider, providers } from 'ethers';
//import type { MutationResolvers } from 'types/graphql'

import { db } from "../../lib/db";
function getProvider(chain) {
  const provider = chain === 'ETH' ? getDefaultProvider() : new providers.JsonRpcProvider('https://www.ethercluster.com/etc', 'classic');
  return provider;
}
const contractAbiFragment = [{
  name: 'balanceOf',
  type: 'function',
  inputs: [{
    name: '_owner',
    type: 'address'
  }],
  outputs: [{
    name: 'balance',
    type: 'uint256'
  }],
  constant: true,
  payable: false
}];
//read only connection w eth blockchain
const provider = getProvider('ETH');

// export const userBalances: QueryResolvers['userBalances'] = () => {
//   return db.userBalance.findMany()
// }

// export const userBalance: QueryResolvers['userBalance'] = ({ id }) => {
//   return db.userBalance.findUnique({
//     where: { id },
//   })
// }
export const createUserBalance = async name => {
  console.error('err');
  const token = name;
  const contract = new Contract(token, contractAbiFragment, provider);
  const account = '0x826B095b14EEE1dd05C3fd2f656020f8b0420494';
  const symbol = await contract.symbol();
  const balance = await contract.balanceOf(account);
  const input = {
    name: symbol,
    amount: balance
  };
  console.log('thisis the balance', balance);
  return db.userBalance.create({
    data: input
  });
};

// export const updateUserBalance: MutationResolvers['updateUserBalance'] = ({
//   id,
//   input,
// }) => {
//   return db.userBalance.update({
//     data: input,
//     where: { id },
//   })
// }

// export const deleteUserBalance: MutationResolvers['deleteUserBalance'] = ({
//   id,
// }) => {
//   return db.userBalance.delete({
//     where: { id },
//   })
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb250cmFjdCIsImdldERlZmF1bHRQcm92aWRlciIsInByb3ZpZGVycyIsImRiIiwiZ2V0UHJvdmlkZXIiLCJjaGFpbiIsInByb3ZpZGVyIiwiSnNvblJwY1Byb3ZpZGVyIiwiY29udHJhY3RBYmlGcmFnbWVudCIsIm5hbWUiLCJ0eXBlIiwiaW5wdXRzIiwib3V0cHV0cyIsImNvbnN0YW50IiwicGF5YWJsZSIsImNyZWF0ZVVzZXJCYWxhbmNlIiwiY29uc29sZSIsImVycm9yIiwidG9rZW4iLCJjb250cmFjdCIsImFjY291bnQiLCJzeW1ib2wiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwiaW5wdXQiLCJhbW91bnQiLCJsb2ciLCJ1c2VyQmFsYW5jZSIsImNyZWF0ZSIsImRhdGEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcGkvc3JjL3NlcnZpY2VzL3VzZXJCYWxhbmNlcy91c2VyQmFsYW5jZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJhY3QsIGdldERlZmF1bHRQcm92aWRlciwgcHJvdmlkZXJzLCB1dGlscyB9IGZyb20gJ2V0aGVycydcbi8vaW1wb3J0IHR5cGUgeyBNdXRhdGlvblJlc29sdmVycyB9IGZyb20gJ3R5cGVzL2dyYXBocWwnXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcblxuZnVuY3Rpb24gZ2V0UHJvdmlkZXIoY2hhaW4pIHtcbiAgY29uc3QgcHJvdmlkZXIgPVxuICAgIGNoYWluID09PSAnRVRIJ1xuICAgICAgPyBnZXREZWZhdWx0UHJvdmlkZXIoKVxuICAgICAgOiBuZXcgcHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcihcbiAgICAgICAgICAnaHR0cHM6Ly93d3cuZXRoZXJjbHVzdGVyLmNvbS9ldGMnLFxuICAgICAgICAgICdjbGFzc2ljJ1xuICAgICAgICApXG4gIHJldHVybiBwcm92aWRlclxufVxuXG5jb25zdCBjb250cmFjdEFiaUZyYWdtZW50ID0gW1xuICB7XG4gICAgbmFtZTogJ2JhbGFuY2VPZicsXG4gICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ19vd25lcicsXG4gICAgICAgIHR5cGU6ICdhZGRyZXNzJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdiYWxhbmNlJyxcbiAgICAgICAgdHlwZTogJ3VpbnQyNTYnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGNvbnN0YW50OiB0cnVlLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICB9LFxuXVxuLy9yZWFkIG9ubHkgY29ubmVjdGlvbiB3IGV0aCBibG9ja2NoYWluXG5jb25zdCBwcm92aWRlciA9IGdldFByb3ZpZGVyKCdFVEgnKVxuXG4vLyBleHBvcnQgY29uc3QgdXNlckJhbGFuY2VzOiBRdWVyeVJlc29sdmVyc1sndXNlckJhbGFuY2VzJ10gPSAoKSA9PiB7XG4vLyAgIHJldHVybiBkYi51c2VyQmFsYW5jZS5maW5kTWFueSgpXG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCB1c2VyQmFsYW5jZTogUXVlcnlSZXNvbHZlcnNbJ3VzZXJCYWxhbmNlJ10gPSAoeyBpZCB9KSA9PiB7XG4vLyAgIHJldHVybiBkYi51c2VyQmFsYW5jZS5maW5kVW5pcXVlKHtcbi8vICAgICB3aGVyZTogeyBpZCB9LFxuLy8gICB9KVxuLy8gfVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJCYWxhbmNlID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgY29uc29sZS5lcnJvcignZXJyJylcbiAgY29uc3QgdG9rZW4gPSBuYW1lXG4gIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KHRva2VuLCBjb250cmFjdEFiaUZyYWdtZW50LCBwcm92aWRlcilcbiAgY29uc3QgYWNjb3VudCA9ICcweDgyNkIwOTViMTRFRUUxZGQwNUMzZmQyZjY1NjAyMGY4YjA0MjA0OTQnXG4gIGNvbnN0IHN5bWJvbCA9IGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpXG4gIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2YoYWNjb3VudClcbiAgY29uc3QgaW5wdXQgPSB7IG5hbWU6IHN5bWJvbCwgYW1vdW50OiBiYWxhbmNlIH1cbiAgY29uc29sZS5sb2coJ3RoaXNpcyB0aGUgYmFsYW5jZScsIGJhbGFuY2UpXG4gIHJldHVybiBkYi51c2VyQmFsYW5jZS5jcmVhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICB9KVxufVxuXG4vLyBleHBvcnQgY29uc3QgdXBkYXRlVXNlckJhbGFuY2U6IE11dGF0aW9uUmVzb2x2ZXJzWyd1cGRhdGVVc2VyQmFsYW5jZSddID0gKHtcbi8vICAgaWQsXG4vLyAgIGlucHV0LFxuLy8gfSkgPT4ge1xuLy8gICByZXR1cm4gZGIudXNlckJhbGFuY2UudXBkYXRlKHtcbi8vICAgICBkYXRhOiBpbnB1dCxcbi8vICAgICB3aGVyZTogeyBpZCB9LFxuLy8gICB9KVxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgZGVsZXRlVXNlckJhbGFuY2U6IE11dGF0aW9uUmVzb2x2ZXJzWydkZWxldGVVc2VyQmFsYW5jZSddID0gKHtcbi8vICAgaWQsXG4vLyB9KSA9PiB7XG4vLyAgIHJldHVybiBkYi51c2VyQmFsYW5jZS5kZWxldGUoe1xuLy8gICAgIHdoZXJlOiB7IGlkIH0sXG4vLyAgIH0pXG4vLyB9XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLFNBQVMsUUFBZSxRQUFRO0FBQ3ZFOztBQUVBLFNBQVNDLEVBQUU7QUFFWCxTQUFTQyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7RUFDMUIsTUFBTUMsUUFBUSxHQUNaRCxLQUFLLEtBQUssS0FBSyxHQUNYSixrQkFBa0IsRUFBRSxHQUNwQixJQUFJQyxTQUFTLENBQUNLLGVBQWUsQ0FDM0Isa0NBQWtDLEVBQ2xDLFNBQVMsQ0FDVjtFQUNQLE9BQU9ELFFBQVE7QUFDakI7QUFFQSxNQUFNRSxtQkFBbUIsR0FBRyxDQUMxQjtFQUNFQyxJQUFJLEVBQUUsV0FBVztFQUNqQkMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLE1BQU0sRUFBRSxDQUNOO0lBQ0VGLElBQUksRUFBRSxRQUFRO0lBQ2RDLElBQUksRUFBRTtFQUNSLENBQUMsQ0FDRjtFQUNERSxPQUFPLEVBQUUsQ0FDUDtJQUNFSCxJQUFJLEVBQUUsU0FBUztJQUNmQyxJQUFJLEVBQUU7RUFDUixDQUFDLENBQ0Y7RUFDREcsUUFBUSxFQUFFLElBQUk7RUFDZEMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxDQUNGO0FBQ0Q7QUFDQSxNQUFNUixRQUFRLEdBQUdGLFdBQVcsQ0FBQyxLQUFLLENBQUM7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNVyxpQkFBaUIsR0FBRyxNQUFPTixJQUFJLElBQUs7RUFDL0NPLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLEtBQUssQ0FBQztFQUNwQixNQUFNQyxLQUFLLEdBQUdULElBQUk7RUFDbEIsTUFBTVUsUUFBUSxHQUFHLElBQUluQixRQUFRLENBQUNrQixLQUFLLEVBQUVWLG1CQUFtQixFQUFFRixRQUFRLENBQUM7RUFDbkUsTUFBTWMsT0FBTyxHQUFHLDRDQUE0QztFQUM1RCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsUUFBUSxDQUFDRSxNQUFNLEVBQUU7RUFDdEMsTUFBTUMsT0FBTyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksU0FBUyxDQUFDSCxPQUFPLENBQUM7RUFDakQsTUFBTUksS0FBSyxHQUFHO0lBQUVmLElBQUksRUFBRVksTUFBTTtJQUFFSSxNQUFNLEVBQUVIO0VBQVEsQ0FBQztFQUMvQ04sT0FBTyxDQUFDVSxHQUFHLENBQUMsb0JBQW9CLEVBQUVKLE9BQU8sQ0FBQztFQUMxQyxPQUFPbkIsRUFBRSxDQUFDd0IsV0FBVyxDQUFDQyxNQUFNLENBQUM7SUFDM0JDLElBQUksRUFBRUw7RUFDUixDQUFDLENBQUM7QUFDSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSJ9