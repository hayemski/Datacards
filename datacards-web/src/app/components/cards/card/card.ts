import { WeaponType } from "./forms/weapon-form/weapon-form";

export interface Card {
  name: string,
  movement : number,
  APL: number,
  GA: number,
  DF: number,
  save : number,
  wounds: number,
  weapons?: Weapon[],
  abilities?: Abilities[],
  uniqueActions?: UniqueActions[]
}


export interface UniqueActions {
  factionid: string;
  killteamid: string;
  fireteamid: string;
  opid: string;
  uniqueactionid: string;
  title: string;
  description: string;
  AP: number;
}

export interface Weapon {
  weaponType: WeaponType,
}

interface Abilities {
  factionid: string;
  killteamid: string;
  fireteamid: string;
  opid: string;
  abilityid: string;
  title: string;
  description: string;
}

export interface Weapon {
  factionid:  string;
  killteamid: string;
  fireteamid: string;
  opid:       string;
  wepid:      string;
  wepseq:     number;
  wepname:    string;
  weptype:    string;
  isdefault:  number;
  profiles:   Profile[];
  isselected: boolean;
}

export interface Profile {
  factionid:  string;
  killteamid: string;
  fireteamid: string;
  opid:       string;
  wepid:      string;
  profileid:  string;
  name:       string;
  A:          string;
  BS:         string;
  D:          string;
  SR:         string;
}
