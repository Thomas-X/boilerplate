export const isServer = () => typeof window === 'undefined';

export const deepDiff = (a: any, b: any) => JSON.stringify(a) !== JSON.stringify(b);