export type SteamUserInventoryRequest = SteamUserInventoryRequestError | SteamUserInventoryRequestSuccess | null;

interface SteamUserInventoryRequestError {
    success: false;
    Error: string;
}

interface SteamUserInventoryRequestSuccess {
    success: true;
    assets: SteamUserInventoryAsset[];
    descriptions: SteamUserInventoryDescription[];
    rwgrsn: number;
    total_inventory_count: number;
}


interface SteamUserInventoryAsset {
    amount: string;
    appid: number;
    assetid: string;
    classid: string;
    contextid: string;
    instanceid: string;
}

interface SteamUserInventoryDescription {
    appid: string;
    background_color: string;
    classid: string;
    commodity: number;
    currency: number;
    descriptions: SteamUserInventoryDescriptions[];
    icon_url: string;
    instanceid: string;
    market_hash_name: string;
    market_name: string;
    marketable: number;
    name: string;
    name_color: string;
    sealed: number;
    tradable: number;
    type: string;
}

interface SteamUserInventoryDescriptions {
    type: string;
    value: string;
    color: string;
}

export type HeadType = 'circle' | 'triangle' | 'square' | 'cylinder' | 'star';

export type ItemList = Record<string, Item>;

export interface Item {
    id: string[];
    name: string;
}

export interface PlayerItems {
    gems: number;
    yarn: number;
    weapons: Map<string, number>;
    heads: Map<string, number>;
}
