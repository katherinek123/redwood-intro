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

//can be read from when connected with provider

//all incoming units of USD are in cents

// export const userBalances: QueryResolvers['userBalances'] = () => {
//   return db.userBalance.findMany()
// }

// export const userBalance: QueryResolvers['userBalance'] = ({ id }) => {
//   return db.userBalance.findUnique({
//     where: { id },
//   })
// }
export const createUserBalance = async name => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb250cmFjdCIsImdldERlZmF1bHRQcm92aWRlciIsInByb3ZpZGVycyIsImRiIiwiZ2V0UHJvdmlkZXIiLCJjaGFpbiIsInByb3ZpZGVyIiwiSnNvblJwY1Byb3ZpZGVyIiwiY29udHJhY3RBYmlGcmFnbWVudCIsIm5hbWUiLCJ0eXBlIiwiaW5wdXRzIiwib3V0cHV0cyIsImNvbnN0YW50IiwicGF5YWJsZSIsImNyZWF0ZVVzZXJCYWxhbmNlIiwidG9rZW4iLCJjb250cmFjdCIsImFjY291bnQiLCJzeW1ib2wiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwiaW5wdXQiLCJhbW91bnQiLCJjb25zb2xlIiwibG9nIiwidXNlckJhbGFuY2UiLCJjcmVhdGUiLCJkYXRhIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBpL3NyYy9zZXJ2aWNlcy91c2VyQmFsYW5jZXMvdXNlckJhbGFuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyYWN0LCBnZXREZWZhdWx0UHJvdmlkZXIsIHByb3ZpZGVycywgdXRpbHMgfSBmcm9tICdldGhlcnMnXG4vL2ltcG9ydCB0eXBlIHsgTXV0YXRpb25SZXNvbHZlcnMgfSBmcm9tICd0eXBlcy9ncmFwaHFsJ1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5cbmZ1bmN0aW9uIGdldFByb3ZpZGVyKGNoYWluKSB7XG4gIGNvbnN0IHByb3ZpZGVyID1cbiAgICBjaGFpbiA9PT0gJ0VUSCdcbiAgICAgID8gZ2V0RGVmYXVsdFByb3ZpZGVyKClcbiAgICAgIDogbmV3IHByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoXG4gICAgICAgICAgJ2h0dHBzOi8vd3d3LmV0aGVyY2x1c3Rlci5jb20vZXRjJyxcbiAgICAgICAgICAnY2xhc3NpYydcbiAgICAgICAgKVxuICByZXR1cm4gcHJvdmlkZXJcbn1cblxuY29uc3QgY29udHJhY3RBYmlGcmFnbWVudCA9IFtcbiAge1xuICAgIG5hbWU6ICdiYWxhbmNlT2YnLFxuICAgIHR5cGU6ICdmdW5jdGlvbicsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdfb3duZXInLFxuICAgICAgICB0eXBlOiAnYWRkcmVzcycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnYmFsYW5jZScsXG4gICAgICAgIHR5cGU6ICd1aW50MjU2JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjb25zdGFudDogdHJ1ZSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgfSxcbl1cbi8vcmVhZCBvbmx5IGNvbm5lY3Rpb24gdyBldGggYmxvY2tjaGFpblxuY29uc3QgcHJvdmlkZXIgPSBnZXRQcm92aWRlcignRVRIJylcblxuXG4vL2NhbiBiZSByZWFkIGZyb20gd2hlbiBjb25uZWN0ZWQgd2l0aCBwcm92aWRlclxuXG5cbi8vYWxsIGluY29taW5nIHVuaXRzIG9mIFVTRCBhcmUgaW4gY2VudHNcblxuLy8gZXhwb3J0IGNvbnN0IHVzZXJCYWxhbmNlczogUXVlcnlSZXNvbHZlcnNbJ3VzZXJCYWxhbmNlcyddID0gKCkgPT4ge1xuLy8gICByZXR1cm4gZGIudXNlckJhbGFuY2UuZmluZE1hbnkoKVxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgdXNlckJhbGFuY2U6IFF1ZXJ5UmVzb2x2ZXJzWyd1c2VyQmFsYW5jZSddID0gKHsgaWQgfSkgPT4ge1xuLy8gICByZXR1cm4gZGIudXNlckJhbGFuY2UuZmluZFVuaXF1ZSh7XG4vLyAgICAgd2hlcmU6IHsgaWQgfSxcbi8vICAgfSlcbi8vIH1cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyQmFsYW5jZSA9IGFzeW5jIChuYW1lKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gbmFtZVxuICBjb25zdCBjb250cmFjdCA9IG5ldyBDb250cmFjdCh0b2tlbiwgY29udHJhY3RBYmlGcmFnbWVudCwgcHJvdmlkZXIpXG4gIGNvbnN0IGFjY291bnQgPSAnMHg4MjZCMDk1YjE0RUVFMWRkMDVDM2ZkMmY2NTYwMjBmOGIwNDIwNDk0J1xuICBjb25zdCBzeW1ib2wgPSBhd2FpdCBjb250cmFjdC5zeW1ib2woKVxuICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29udHJhY3QuYmFsYW5jZU9mKGFjY291bnQpXG4gIGNvbnN0IGlucHV0ID0geyBuYW1lOiBzeW1ib2wsIGFtb3VudDogYmFsYW5jZSB9XG4gIGNvbnNvbGUubG9nKCd0aGlzaXMgdGhlIGJhbGFuY2UnLCBiYWxhbmNlKVxuICByZXR1cm4gZGIudXNlckJhbGFuY2UuY3JlYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgfSlcbn1cblxuLy8gZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJCYWxhbmNlOiBNdXRhdGlvblJlc29sdmVyc1sndXBkYXRlVXNlckJhbGFuY2UnXSA9ICh7XG4vLyAgIGlkLFxuLy8gICBpbnB1dCxcbi8vIH0pID0+IHtcbi8vICAgcmV0dXJuIGRiLnVzZXJCYWxhbmNlLnVwZGF0ZSh7XG4vLyAgICAgZGF0YTogaW5wdXQsXG4vLyAgICAgd2hlcmU6IHsgaWQgfSxcbi8vICAgfSlcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXJCYWxhbmNlOiBNdXRhdGlvblJlc29sdmVyc1snZGVsZXRlVXNlckJhbGFuY2UnXSA9ICh7XG4vLyAgIGlkLFxuLy8gfSkgPT4ge1xuLy8gICByZXR1cm4gZGIudXNlckJhbGFuY2UuZGVsZXRlKHtcbi8vICAgICB3aGVyZTogeyBpZCB9LFxuLy8gICB9KVxuLy8gfVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxTQUFTLFFBQWUsUUFBUTtBQUN2RTs7QUFFQSxTQUFTQyxFQUFFO0FBRVgsU0FBU0MsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLE1BQU1DLFFBQVEsR0FDWkQsS0FBSyxLQUFLLEtBQUssR0FDWEosa0JBQWtCLEVBQUUsR0FDcEIsSUFBSUMsU0FBUyxDQUFDSyxlQUFlLENBQzNCLGtDQUFrQyxFQUNsQyxTQUFTLENBQ1Y7RUFDUCxPQUFPRCxRQUFRO0FBQ2pCO0FBRUEsTUFBTUUsbUJBQW1CLEdBQUcsQ0FDMUI7RUFDRUMsSUFBSSxFQUFFLFdBQVc7RUFDakJDLElBQUksRUFBRSxVQUFVO0VBQ2hCQyxNQUFNLEVBQUUsQ0FDTjtJQUNFRixJQUFJLEVBQUUsUUFBUTtJQUNkQyxJQUFJLEVBQUU7RUFDUixDQUFDLENBQ0Y7RUFDREUsT0FBTyxFQUFFLENBQ1A7SUFDRUgsSUFBSSxFQUFFLFNBQVM7SUFDZkMsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUNGO0VBQ0RHLFFBQVEsRUFBRSxJQUFJO0VBQ2RDLE9BQU8sRUFBRTtBQUNYLENBQUMsQ0FDRjtBQUNEO0FBQ0EsTUFBTVIsUUFBUSxHQUFHRixXQUFXLENBQUMsS0FBSyxDQUFDOztBQUduQzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBTVcsaUJBQWlCLEdBQUcsTUFBT04sSUFBSSxJQUFLO0VBQy9DLE1BQU1PLEtBQUssR0FBR1AsSUFBSTtFQUNsQixNQUFNUSxRQUFRLEdBQUcsSUFBSWpCLFFBQVEsQ0FBQ2dCLEtBQUssRUFBRVIsbUJBQW1CLEVBQUVGLFFBQVEsQ0FBQztFQUNuRSxNQUFNWSxPQUFPLEdBQUcsNENBQTRDO0VBQzVELE1BQU1DLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNFLE1BQU0sRUFBRTtFQUN0QyxNQUFNQyxPQUFPLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxTQUFTLENBQUNILE9BQU8sQ0FBQztFQUNqRCxNQUFNSSxLQUFLLEdBQUc7SUFBRWIsSUFBSSxFQUFFVSxNQUFNO0lBQUVJLE1BQU0sRUFBRUg7RUFBUSxDQUFDO0VBQy9DSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRUwsT0FBTyxDQUFDO0VBQzFDLE9BQU9qQixFQUFFLENBQUN1QixXQUFXLENBQUNDLE1BQU0sQ0FBQztJQUMzQkMsSUFBSSxFQUFFTjtFQUNSLENBQUMsQ0FBQztBQUNKLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIn0=