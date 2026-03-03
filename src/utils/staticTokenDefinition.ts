import { Address, BigInt } from '@graphprotocol/graph-ts'

// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const getStaticDefinition = (
  tokenAddress: Address,
  staticDefinitions: Array<StaticTokenDefinition>,
): StaticTokenDefinition | null => {
  const tokenAddressHex = tokenAddress.toHexString()

  // Search the definition using the address
  for (let i = 0; i < staticDefinitions.length; i++) {
    const staticDefinition = staticDefinitions[i]
    if (staticDefinition.address.toHexString() == tokenAddressHex) {
      return staticDefinition
    }
  }

  // If not found, return null
  return null
}

// Lux C-Chain token definitions — verified on-chain 2026-03-05
// These prevent eth_call for token metadata at historic blocks (no archive node needed)
// ALL tokens that appear in V3 PoolCreated events must be listed here
export const STATIC_TOKEN_DEFINITIONS: Array<StaticTokenDefinition> = [
  {
    address: Address.fromString('0x4888e4a2ee0f03051c72d2bd3acf755ed3498b3e'),
    symbol: 'WLUX',
    name: 'Wrapped LUX',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x848Cff46eb323f323b6Bbe1Df274E40793d7f2c2'),
    symbol: 'LUSD',
    name: 'Lux USD',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x60E0a8167FC13dE89348978860466C9ceC24B9ba'),
    symbol: 'LETH',
    name: 'Lux Ether',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x1E48D32a4F5e9f08DB9aE4959163300FaF8A6C8e'),
    symbol: 'LBTC',
    name: 'Lux Bitcoin',
    decimals: BigInt.fromI32(8),
  },
  {
    address: Address.fromString('0x26B40f650156C7EbF9e087Dd0dca181Fe87625B7'),
    symbol: 'LSOL',
    name: 'Lux SOL',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x3141b94b89691009b950c96e97Bff48e0C543E3C'),
    symbol: 'LTON',
    name: 'Lux TON',
    decimals: BigInt.fromI32(9),
  },
  {
    address: Address.fromString('0x0e4bD0DD67c15dECfBBBdbbE07FC9d51D737693D'),
    symbol: 'LAVAX',
    name: 'Lux AVAX',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0xdf1de693c31e2a5eb869c329529623556b20abf3'),
    symbol: 'USDT',
    name: 'Tether',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x8031e9b0d02a792cfefaa2bdca6e1289d385426f'),
    symbol: 'USDC',
    name: 'UsdCoin',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x5e5290f350352768bd2bfc59c2da15dd04a7cb88'),
    symbol: 'LZOO',
    name: 'Lux ZOO',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x1af00a2590a834d14f4a8a26d1b03ebba8cf7961'),
    symbol: 'LSOL',
    name: 'Lux Solana',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0xf5a313885832d4fc71d1ef80115197c4479b58c8'),
    symbol: 'LTON',
    name: 'Lux TON',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x6edcf3645def09db45050638c41157d8b9fea1cf'),
    symbol: 'LBNB',
    name: 'Lux BNB',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x28bfc5dd4b7e15659e41190983e5fe3df1132bb9'),
    symbol: 'LPOL',
    name: 'Lux POL',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x3078847f879a33994cda2ec1540ca52b5e0ee2e5'),
    symbol: 'LCELO',
    name: 'Lux CELO',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x8b982132d639527e8a0eaad385f97719af8f5e04'),
    symbol: 'LFTM',
    name: 'Lux FTM',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x94f49d0f4c62bbe4238f4aaa9200287bea9f2976'),
    symbol: 'LBLAST',
    name: 'Lux BLAST',
    decimals: BigInt.fromI32(18),
  },
  {
    address: Address.fromString('0x768972ee4038a23b20b3bed3848027460172d897'),
    symbol: 'TRUMP',
    name: 'OFFICIAL TRUMP',
    decimals: BigInt.fromI32(6),
  },
  {
    address: Address.fromString('0x14f48a55722ecba725aa83a294a8d3e8be47de46'),
    symbol: 'MELANIA',
    name: 'Melania Meme',
    decimals: BigInt.fromI32(6),
  },
  {
    address: Address.fromString('0xa69e6612b525474cb893500b70fd7ec374cbf9a3'),
    symbol: 'Z',
    name: 'Z',
    decimals: BigInt.fromI32(6),
  },
  {
    address: Address.fromString('0x0a78f7ce8d65e0fd4d6b78848483ba3c4fb895c5'),
    symbol: 'CYRUS',
    name: 'Cyrus AI',
    decimals: BigInt.fromI32(6),
  },
]
