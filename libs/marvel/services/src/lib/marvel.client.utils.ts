import { MD5 } from 'crypto-js';

export function getHash(
  ts: number,
  publicKey: string,
  privateKey: string
): string {
  const message = ts + privateKey + publicKey;
  const a = MD5(message);

  return a.toString();
}
