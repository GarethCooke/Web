import { IWAP } from './wap';


export interface IWifiInfo {
  selected: string;
  connected: boolean;
  networks: IWAP[];
}
