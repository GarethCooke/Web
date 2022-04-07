export interface IBeaterEventBand {
  band: string;
  value: number;
}

export interface IBeaterEvent {
  frequencies: IBeaterEventBand[];
  beatDetected: boolean;
}
