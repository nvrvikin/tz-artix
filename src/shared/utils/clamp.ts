function clamp(value: number, min: number, max: number): number {
  
  if (min > max) throw new Error("min больше, чем max");
  
  return Math.min(Math.max(value, min), max);
}

export default clamp