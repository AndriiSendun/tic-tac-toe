export interface Log {
  position: number,
  value: string,
}

export interface GameReducer {
  player: string | null,
  logs: Log[],
};
