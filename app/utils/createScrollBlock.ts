export function createScrollBlocks<
  T extends { left: React.ReactNode; right: React.ReactNode; reverse?: boolean }
>(
  start: number,
  step: number,
  blocks: T[]
): (T & { range: [number, number, number] })[] {
  return blocks.map((block, index) => {
    const rangeStart = start + index * step * 2;
    const mid = rangeStart + step;
    const end = mid + step;
    return { ...block, range: [rangeStart, mid, end] };
  });
}
