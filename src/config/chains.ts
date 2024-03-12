
export const ChainId = {
  BASE: 8453,
  BLAST: 81457,
} as const;

export type ChainId = (typeof ChainId)[keyof typeof ChainId];

export const ChainKey = {
  [ChainId.BLAST]: "blast",
  [ChainId.BASE]: "base",
} as const;

export function isSupportedChainId(chainId: number): boolean {
  return Object.values(ChainId).includes(chainId as ChainId);
}
