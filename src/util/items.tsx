import { BACKEND_URL, ITEMS } from './constants';
import type { Item, PlayerItems, SteamUserInventoryRequest } from './types';

export function isSteamIdValid(id: string): boolean {
    if (!id) return false;
    if (id.length != 17) return false;

    return (/^\d{17}$/).test(id);
}

async function getItems(steamId: bigint): Promise<SteamUserInventoryRequest> {
    const f = await fetch(`${BACKEND_URL}/getItems/${steamId}`);
    if (f.status != 200) {
        alert(await f.text());
        return null;
    }
    const result = await f.json();
    return result;
}

function parseItems(data: SteamUserInventoryRequest): PlayerItems {
    const player: PlayerItems = {
        gems: 0,
        yarn: 0,
        items: new Map()
    };

    if (data === null || data.success == false) {
        alert('Error getting steam inventory. Is inventory private?');
        return player;
    }

    if (data.total_inventory_count != data.assets.length) {
        console.warn(`Too many items, will only process ${data.assets.length}/${data.total_inventory_count}`);
        alert('WARNING: It seems you have too many items, only some will be processed, please open a new issue on github/tell me about this');
    }

    for (const asset of Object.values(data.assets)) {
        const id = asset.classid;
        let foundItem = null;
        for (const key in ITEMS) {
            const item = ITEMS[key];
            if (item.ids.includes(id)) {
                foundItem = key;
                break;
            }
        }

        if (!foundItem) {
            const desc = data.descriptions.find((e) => e.classid == id);
            if (!desc) {
                console.warn(`Missing item ${id} from steam descriptions`);
                continue;
            }
            const msg = `Missing item ${id}: "${desc.name}" from list `;
            console.error(msg);
            alert(msg);
            continue;
        }

        switch (foundItem) {
            case 'GEM': player.gems += Number(asset.amount); break;
            case 'YARN': player.yarn += Number(asset.amount); break;
            default: {
                player.items.set(id, (player.items.get(id) || 0) + 1);
            }
        }
    }

    return player;
}


export function getItemCount(player: PlayerItems, item: Item) {
    let count = 0;
    for (const id of item.ids) {
        count += player.items.get(id) || 0;
    }
    return count;
}

export function itemNameToImageName(name: string) {
    return name.replace(/[ ?]/g, '_').replace(/#/g, '-').replace(/%/g, '%25');
}

export async function loadInventory(steamId: string) {
    const response = await getItems(BigInt(steamId));
    const parsedItems = parseItems(response);
    return parsedItems;
}
