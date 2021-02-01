import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string
export type InitCodeHashes = { [chainId in ChainId]: string }

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  HECO_MAINNET = 128,
  HECO_TESTNET = 256,
  MATIC_MAINNET = 137,
  OKCHAIN_TEST = 65
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x32CE36F6eA8d97f9fC19Aab83b9c6D2F52D74470'

export const INIT_CODE_HASH_BSC = '0x9b025805045f6da539a4926f67307a9b0ab5aaccc42d3f14aaea0776a5b727ac'
export const INIT_CODE_HASH_ETH = '0xa852da7194a3edaba2a5a4545af11dda00ca97d89e0f9934bb841dffaa964220'
export const INIT_CODE_HASH_HECO = '0x7b9686f044376bf1a04de2e9f1dbb6c9a4fe516f7cbd89b68be801982b62f913'
export const INIT_CODE_HASH_MATIC = '0xf523ab2e058386ecc391c92c3cda3906b9c8a50c2cca82c4f12ea030fee83af1'
// @XXX: change this if factory was replaced
export const INIT_CODE_HASH_OKCHAIN_TESTNET = '0x85c3c9a75ba81d6e35a53711a7eb5cb910409d3396d00129d9b7006d76dbc310'
export const INIT_CODE_HASHES: InitCodeHashes = {
  [ChainId.MAINNET]: INIT_CODE_HASH_ETH,
  [ChainId.ROPSTEN]: INIT_CODE_HASH_ETH,
  [ChainId.RINKEBY]: INIT_CODE_HASH_ETH,
  [ChainId.GÖRLI]: INIT_CODE_HASH_ETH,
  [ChainId.KOVAN]: INIT_CODE_HASH_ETH,
  [ChainId.BSC_MAINNET]: INIT_CODE_HASH_BSC,
  [ChainId.BSC_TESTNET]: INIT_CODE_HASH_BSC,
  [ChainId.HECO_MAINNET]: INIT_CODE_HASH_HECO,
  [ChainId.HECO_TESTNET]: INIT_CODE_HASH_MATIC,
  [ChainId.MATIC_MAINNET]: INIT_CODE_HASH_MATIC,
  [ChainId.OKCHAIN_TEST]: INIT_CODE_HASH_OKCHAIN_TESTNET
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
