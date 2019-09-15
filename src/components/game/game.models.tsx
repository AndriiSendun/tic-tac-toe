export interface Log {
  [index: number]: string,
}

export interface GameReducer {
  player: string | null,
  logs: Log | any,
  winner: string | null,
  pointToJump: number | null,
};
