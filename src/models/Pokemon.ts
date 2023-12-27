export interface Pokemon {
  number: number;
  name: string;
  codename?: string;
  gen: number;
  species: string;
  types: string[];
  abilities: {
    name: string;
    description: string;
    hidden: boolean;
  }[];
  height: string;
  weight: string;
  mega:
    | boolean
    | {
        stone: string;
        sprite: string;
      };
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    spAtk: number;
    spDef: number;
    speed: number;
  };
  training: {
    evYield: string;
    catchRate: string;
    baseFriendship: string;
    baseExp: string;
    growthRate: string;
  };
  breeding: {
    gender: string;
    eggGroups: string[];
    eggCycles: string;
  };
  sprite: string;
}
