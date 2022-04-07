import { IBeatCycleColour } from './beat-cycle-colour';

export interface IBeaterSettings {
  power: boolean;
  lightsetting: string;
  colour: string;
  filter: number;
  beatdebounce: number;
  gainlow: number;
  gainincrement: number;
  gaindecrement: number;
  scrollspeed: number;
  message: string;
  messagescroll: boolean;
  beatdecay: number;
  minbeatband: number;
  maxbeatband: number;
  cyclecolours: IBeatCycleColour[];
}
