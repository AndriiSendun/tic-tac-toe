export interface Log {
  [index: number]: string,
}

export interface GameReducer {
  player: string | null,
  logs: Log[],
  winner: string | null,
};
