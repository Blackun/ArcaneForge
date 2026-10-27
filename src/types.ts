export type ItemCategory =
  | 'generator_forge'
  | 'generator_alchemy'
  | 'generator_arcane'
  | 'weapon'
  | 'potion'
  | 'arcane'
  | 'hybrid'
  | 'gold'
  | 'energy'
  | 'chest';

export interface SpawnEntry {
  itemId: string;
  weight: number;
}

export interface ItemDef {
  id: string;
  name: string;
  category: ItemCategory;
  level: number;
  maxLevel: number;
  nextItemId?: string;
  /** For generators or chests: weighted list of items spawned on tap */
  spawnPool?: SpawnEntry[];
  /** Energy cost per tap (for generators) */
  energyCost?: number;
  /** How many charges a chest has before vanishing (if category === 'chest') */
  charges?: number;
  /** Gold value when sold, or gold/energy granted when consumed */
  value?: number;
  /** Accent hex color for particles and UI badges */
  color: string;
  description: string;
  /** Inline SVG string (viewBox="0 0 64 64") */
  svgIcon: string;
}

export interface CrossCraftRecipe {
  id: string;
  ingredientA: string;
  ingredientB: string;
  resultItemId: string;
  name: string;
  hint: string;
}

export interface DialogueLine {
  speaker: '리아 (견습 연금술사)' | '토르그 (드워프 대장장이)';
  role: 'alchemist' | 'blacksmith';
  text: string;
}

export interface QuestRequirement {
  itemId: string;
  count: number;
}

export interface QuestDef {
  id: string;
  zoneId: string;
  stepIndex: number; // 1, 2, 3
  title: string;
  description: string;
  requiredItems: QuestRequirement[];
  rewardGold: number;
  rewardEnergy?: number;
  rewardItemIds?: string[]; // e.g. ['chest_supply_1', 'gen_arcane_1']
  dialogue: DialogueLine[];
}

export interface WorkshopZoneDef {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  maxSteps: number; // typically 3 steps per zone
  icon: string;
}

export interface GridCellItem {
  uid: string;
  itemId: string;
  chargesLeft?: number;
}

export interface GameState {
  energy: number;
  maxEnergy: number;
  lastEnergyTick: number;
  gold: number;
  gems: number;
  grid: (GridCellItem | null)[]; // length 49 (7x7)
  inventory: (GridCellItem | null)[]; // expandable storage slots
  inventoryMaxSlots: number;
  completedQuestIds: string[];
  zoneProgress: Record<string, number>; // zoneId -> completed step count (0..maxSteps)
  discoveredItemIds: string[];
  claimedDiscoveryIds: string[];
  discoveredRecipeIds: string[];
  totalMerges: number;
  soundEnabled: boolean;
}
