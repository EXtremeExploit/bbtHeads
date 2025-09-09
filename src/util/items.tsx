import { BACKEND_URL, INDICATOR_FALSE, INDICATOR_TRUE, ITEMS } from './constants';
import type { Item, PlayerItems, SteamUserInventoryRequest } from './types';

export async function getItems(steamId: bigint) {
    const f = await fetch(`${BACKEND_URL}/getItems/${steamId}`);
    if (f.status != 200) {
        alert(await f.text());
        return null;
    }
    const result = await f.json();
    return result;
}

export function parseItems(data: SteamUserInventoryRequest): PlayerItems {
    const player: PlayerItems = {
        gems: 0,
        yarn: 0,
        weapons: new Map(),
        heads: new Map()
    };

    if (data === null || data.success == false) {
        alert('Error getting steam inventory. Is inventory private?');
        return player;
    }

    if (data.total_inventory_count != data.assets.length) {
        console.warn(`Too many items, will only process ${data.assets.length}`);
        alert('WARNING: It seems you have too many items, only some will be processed, please open a new issue on github/tell me about this');
    }

    function addWeapon(id: string) {
        player.weapons.set(id, (player.weapons.get(id) || 0) + 1);
    }

    function addHead(id: string) {
        player.heads.set(id, (player.heads.get(id) || 0) + 1);
    }

    for (const [_key, asset] of Object.entries(data.assets)) {
        const id = asset.classid;

        const foundItem = Object.entries(ITEMS).find((c) => c[1].id.includes(id));

        if (!foundItem) {
            const desc = data.descriptions.find((e) => e.classid == id);
            const msg = `Missing item ${id}: ${desc?.name}`;
            console.error(msg);
            alert(msg);
            continue;
        }

        switch (foundItem[0]) {
            case 'GEM': player.gems += Number(asset.amount); break;
            case 'YARN': player.yarn += Number(asset.amount); break;

            case 'EXPLODING_DISC': addWeapon(id); break;
            case 'GRENADE': addWeapon(id); break;
            case 'BOOMERANG': addWeapon(id); break;
            case 'DODGEBALL': addWeapon(id); break;
            case 'FIREBALL': addWeapon(id); break;
            case 'ICE_CANNON': addWeapon(id); break;
            case 'FAN': addWeapon(id); break;
            case 'VACUUM': addWeapon(id); break;
            case 'DART_GUN': addWeapon(id); break;
            case 'FORCEBALL': addWeapon(id); break;
            case 'PAPER_AIRPLANE': addWeapon(id); break;
            case 'FROG_BOMB': addWeapon(id); break;
            case 'ACID_BUBBLE': addWeapon(id); break;

            // Heads
            case 'CIRCLE_01': addHead(id); break;
            case 'CIRCLE_02': addHead(id); break;
            case 'CIRCLE_03': addHead(id); break;
            case 'CIRCLE_04': addHead(id); break;
            case 'CIRCLE_05': addHead(id); break;
            case 'CIRCLE_06': addHead(id); break;
            case 'CIRCLE_07': addHead(id); break;
            case 'CIRCLE_08': addHead(id); break;
            case 'CIRCLE_09': addHead(id); break;
            case 'CIRCLE_10': addHead(id); break;
            case 'CIRCLE_11': addHead(id); break;
            case 'CIRCLE_12': addHead(id); break;
            case 'CIRCLE_13': addHead(id); break;
            case 'CIRCLE_14': addHead(id); break;
            case 'CIRCLE_15': addHead(id); break;
            case 'CIRCLE_16': addHead(id); break;
            case 'CIRCLE_17': addHead(id); break;
            case 'CIRCLE_18': addHead(id); break;
            case 'CIRCLE_19': addHead(id); break;
            case 'CIRCLE_20': addHead(id); break;
            case 'CIRCLE_21': addHead(id); break;
            case 'CIRCLE_22': addHead(id); break;
            case 'CIRCLE_23': addHead(id); break;
            case 'CIRCLE_24': addHead(id); break;
            case 'CIRCLE_25': addHead(id); break;
            case 'CIRCLE_26': addHead(id); break;
            case 'CIRCLE_27': addHead(id); break;
            case 'CIRCLE_28': addHead(id); break;
            case 'CIRCLE_29': addHead(id); break;
            case 'CIRCLE_30': addHead(id); break;
            case 'CIRCLE_31': addHead(id); break;
            case 'CIRCLE_32': addHead(id); break;
            case 'CIRCLE_33': addHead(id); break;
            case 'CIRCLE_34': addHead(id); break;
            case 'CIRCLE_35': addHead(id); break;
            case 'CIRCLE_36': addHead(id); break;
            case 'CIRCLE_37': addHead(id); break;
            case 'CIRCLE_38': addHead(id); break;
            case 'CIRCLE_39': addHead(id); break;
            case 'CIRCLE_40': addHead(id); break;
            case 'CIRCLE_41': addHead(id); break;
            case 'CIRCLE_42': addHead(id); break;
            case 'CIRCLE_43': addHead(id); break;
            case 'CIRCLE_44': addHead(id); break;
            case 'CIRCLE_45': addHead(id); break;
            case 'CIRCLE_46': addHead(id); break;
            case 'CIRCLE_47': addHead(id); break;
            case 'CIRCLE_48': addHead(id); break;
            case 'CIRCLE_49': addHead(id); break;
            case 'CIRCLE_50': addHead(id); break;
            case 'CIRCLE_51': addHead(id); break;
            case 'CIRCLE_52': addHead(id); break;
            case 'CIRCLE_53': addHead(id); break;
            case 'CIRCLE_54': addHead(id); break;
            case 'CIRCLE_55': addHead(id); break;
            case 'CIRCLE_56': addHead(id); break;
            case 'CIRCLE_57': addHead(id); break;
            case 'CIRCLE_58': addHead(id); break;
            case 'CIRCLE_59': addHead(id); break;
            case 'CIRCLE_60': addHead(id); break;
            case 'CIRCLE_61': addHead(id); break;
            case 'CIRCLE_62': addHead(id); break;
            case 'CIRCLE_63': addHead(id); break;
            case 'CIRCLE_64': addHead(id); break;

            // Triangle
            case 'TRIANGLE_01': addHead(id); break;
            case 'TRIANGLE_02': addHead(id); break;
            case 'TRIANGLE_03': addHead(id); break;
            case 'TRIANGLE_04': addHead(id); break;
            case 'TRIANGLE_05': addHead(id); break;
            case 'TRIANGLE_06': addHead(id); break;
            case 'TRIANGLE_07': addHead(id); break;
            case 'TRIANGLE_08': addHead(id); break;
            case 'TRIANGLE_09': addHead(id); break;
            case 'TRIANGLE_10': addHead(id); break;
            case 'TRIANGLE_11': addHead(id); break;
            case 'TRIANGLE_12': addHead(id); break;
            case 'TRIANGLE_13': addHead(id); break;
            case 'TRIANGLE_14': addHead(id); break;
            case 'TRIANGLE_15': addHead(id); break;
            case 'TRIANGLE_16': addHead(id); break;
            case 'TRIANGLE_17': addHead(id); break;
            case 'TRIANGLE_18': addHead(id); break;
            case 'TRIANGLE_19': addHead(id); break;
            case 'TRIANGLE_20': addHead(id); break;
            case 'TRIANGLE_21': addHead(id); break;
            case 'TRIANGLE_22': addHead(id); break;
            case 'TRIANGLE_23': addHead(id); break;
            case 'TRIANGLE_24': addHead(id); break;
            case 'TRIANGLE_25': addHead(id); break;
            case 'TRIANGLE_26': addHead(id); break;
            case 'TRIANGLE_27': addHead(id); break;
            case 'TRIANGLE_28': addHead(id); break;
            case 'TRIANGLE_29': addHead(id); break;
            case 'TRIANGLE_30': addHead(id); break;
            case 'TRIANGLE_31': addHead(id); break;
            case 'TRIANGLE_32': addHead(id); break;
            case 'TRIANGLE_33': addHead(id); break;
            case 'TRIANGLE_34': addHead(id); break;
            case 'TRIANGLE_35': addHead(id); break;
            case 'TRIANGLE_36': addHead(id); break;
            case 'TRIANGLE_37': addHead(id); break;
            case 'TRIANGLE_38': addHead(id); break;
            case 'TRIANGLE_39': addHead(id); break;
            case 'TRIANGLE_40': addHead(id); break;
            case 'TRIANGLE_41': addHead(id); break;
            case 'TRIANGLE_42': addHead(id); break;
            case 'TRIANGLE_43': addHead(id); break;
            case 'TRIANGLE_44': addHead(id); break;
            case 'TRIANGLE_45': addHead(id); break;
            case 'TRIANGLE_46': addHead(id); break;
            case 'TRIANGLE_47': addHead(id); break;
            case 'TRIANGLE_48': addHead(id); break;
            case 'TRIANGLE_49': addHead(id); break;
            case 'TRIANGLE_50': addHead(id); break;
            case 'TRIANGLE_51': addHead(id); break;
            case 'TRIANGLE_52': addHead(id); break;
            case 'TRIANGLE_53': addHead(id); break;
            case 'TRIANGLE_54': addHead(id); break;
            case 'TRIANGLE_55': addHead(id); break;
            case 'TRIANGLE_56': addHead(id); break;
            case 'TRIANGLE_57': addHead(id); break;
            case 'TRIANGLE_58': addHead(id); break;
            case 'TRIANGLE_59': addHead(id); break;
            case 'TRIANGLE_60': addHead(id); break;
            case 'TRIANGLE_61': addHead(id); break;
            case 'TRIANGLE_62': addHead(id); break;
            case 'TRIANGLE_63': addHead(id); break;
            case 'TRIANGLE_64': addHead(id); break;

            // Square
            case 'SQUARE_01': addHead(id); break;
            case 'SQUARE_02': addHead(id); break;
            case 'SQUARE_03': addHead(id); break;
            case 'SQUARE_04': addHead(id); break;
            case 'SQUARE_05': addHead(id); break;
            case 'SQUARE_06': addHead(id); break;
            case 'SQUARE_07': addHead(id); break;
            case 'SQUARE_08': addHead(id); break;
            case 'SQUARE_09': addHead(id); break;
            case 'SQUARE_10': addHead(id); break;
            case 'SQUARE_11': addHead(id); break;
            case 'SQUARE_12': addHead(id); break;
            case 'SQUARE_13': addHead(id); break;
            case 'SQUARE_14': addHead(id); break;
            case 'SQUARE_15': addHead(id); break;
            case 'SQUARE_16': addHead(id); break;
            case 'SQUARE_17': addHead(id); break;
            case 'SQUARE_18': addHead(id); break;
            case 'SQUARE_19': addHead(id); break;
            case 'SQUARE_20': addHead(id); break;
            case 'SQUARE_21': addHead(id); break;
            case 'SQUARE_22': addHead(id); break;
            case 'SQUARE_23': addHead(id); break;
            case 'SQUARE_24': addHead(id); break;
            case 'SQUARE_25': addHead(id); break;
            case 'SQUARE_26': addHead(id); break;
            case 'SQUARE_27': addHead(id); break;
            case 'SQUARE_28': addHead(id); break;
            case 'SQUARE_29': addHead(id); break;
            case 'SQUARE_30': addHead(id); break;
            case 'SQUARE_31': addHead(id); break;
            case 'SQUARE_32': addHead(id); break;
            case 'SQUARE_33': addHead(id); break;
            case 'SQUARE_34': addHead(id); break;
            case 'SQUARE_35': addHead(id); break;
            case 'SQUARE_36': addHead(id); break;
            case 'SQUARE_37': addHead(id); break;
            case 'SQUARE_38': addHead(id); break;
            case 'SQUARE_39': addHead(id); break;
            case 'SQUARE_40': addHead(id); break;
            case 'SQUARE_41': addHead(id); break;
            case 'SQUARE_42': addHead(id); break;
            case 'SQUARE_43': addHead(id); break;
            case 'SQUARE_44': addHead(id); break;
            case 'SQUARE_45': addHead(id); break;
            case 'SQUARE_46': addHead(id); break;
            case 'SQUARE_47': addHead(id); break;
            case 'SQUARE_48': addHead(id); break;
            case 'SQUARE_49': addHead(id); break;
            case 'SQUARE_50': addHead(id); break;
            case 'SQUARE_51': addHead(id); break;
            case 'SQUARE_52': addHead(id); break;
            case 'SQUARE_53': addHead(id); break;
            case 'SQUARE_54': addHead(id); break;
            case 'SQUARE_55': addHead(id); break;
            case 'SQUARE_56': addHead(id); break;
            case 'SQUARE_57': addHead(id); break;
            case 'SQUARE_58': addHead(id); break;
            case 'SQUARE_59': addHead(id); break;
            case 'SQUARE_60': addHead(id); break;
            case 'SQUARE_61': addHead(id); break;
            case 'SQUARE_62': addHead(id); break;
            case 'SQUARE_63': addHead(id); break;
            case 'SQUARE_64': addHead(id); break;

            // Cylinder
            case 'CYLINDER_01': addHead(id); break;
            case 'CYLINDER_02': addHead(id); break;
            case 'CYLINDER_03': addHead(id); break;
            case 'CYLINDER_04': addHead(id); break;
            case 'CYLINDER_05': addHead(id); break;
            case 'CYLINDER_06': addHead(id); break;
            case 'CYLINDER_07': addHead(id); break;
            case 'CYLINDER_08': addHead(id); break;
            case 'CYLINDER_09': addHead(id); break;
            case 'CYLINDER_10': addHead(id); break;
            case 'CYLINDER_11': addHead(id); break;
            case 'CYLINDER_12': addHead(id); break;
            case 'CYLINDER_13': addHead(id); break;
            case 'CYLINDER_14': addHead(id); break;
            case 'CYLINDER_15': addHead(id); break;
            case 'CYLINDER_16': addHead(id); break;
            case 'CYLINDER_17': addHead(id); break;
            case 'CYLINDER_18': addHead(id); break;
            case 'CYLINDER_19': addHead(id); break;
            case 'CYLINDER_20': addHead(id); break;
            case 'CYLINDER_21': addHead(id); break;
            case 'CYLINDER_22': addHead(id); break;
            case 'CYLINDER_23': addHead(id); break;
            case 'CYLINDER_24': addHead(id); break;
            case 'CYLINDER_25': addHead(id); break;
            case 'CYLINDER_26': addHead(id); break;
            case 'CYLINDER_27': addHead(id); break;
            case 'CYLINDER_28': addHead(id); break;
            case 'CYLINDER_29': addHead(id); break;
            case 'CYLINDER_30': addHead(id); break;
            case 'CYLINDER_31': addHead(id); break;
            case 'CYLINDER_32': addHead(id); break;
            case 'CYLINDER_33': addHead(id); break;
            case 'CYLINDER_34': addHead(id); break;
            case 'CYLINDER_35': addHead(id); break;
            case 'CYLINDER_36': addHead(id); break;
            case 'CYLINDER_37': addHead(id); break;
            case 'CYLINDER_38': addHead(id); break;
            case 'CYLINDER_39': addHead(id); break;
            case 'CYLINDER_40': addHead(id); break;
            case 'CYLINDER_41': addHead(id); break;
            case 'CYLINDER_42': addHead(id); break;
            case 'CYLINDER_43': addHead(id); break;
            case 'CYLINDER_44': addHead(id); break;
            case 'CYLINDER_45': addHead(id); break;
            case 'CYLINDER_46': addHead(id); break;
            case 'CYLINDER_47': addHead(id); break;
            case 'CYLINDER_48': addHead(id); break;
            case 'CYLINDER_49': addHead(id); break;
            case 'CYLINDER_50': addHead(id); break;
            case 'CYLINDER_51': addHead(id); break;
            case 'CYLINDER_52': addHead(id); break;
            case 'CYLINDER_53': addHead(id); break;
            case 'CYLINDER_54': addHead(id); break;
            case 'CYLINDER_55': addHead(id); break;
            case 'CYLINDER_56': addHead(id); break;
            case 'CYLINDER_57': addHead(id); break;
            case 'CYLINDER_58': addHead(id); break;
            case 'CYLINDER_59': addHead(id); break;
            case 'CYLINDER_60': addHead(id); break;
            case 'CYLINDER_61': addHead(id); break;
            case 'CYLINDER_62': addHead(id); break;
            case 'CYLINDER_63': addHead(id); break;
            case 'CYLINDER_64': addHead(id); break;

            // Star
            case 'STAR_01': addHead(id); break;
            case 'STAR_02': addHead(id); break;
            case 'STAR_03': addHead(id); break;
            case 'STAR_04': addHead(id); break;
            case 'STAR_05': addHead(id); break;
            case 'STAR_06': addHead(id); break;
            case 'STAR_07': addHead(id); break;
            case 'STAR_08': addHead(id); break;
            case 'STAR_09': addHead(id); break;
            case 'STAR_10': addHead(id); break;
            case 'STAR_11': addHead(id); break;
            case 'STAR_12': addHead(id); break;
            case 'STAR_13': addHead(id); break;
            case 'STAR_14': addHead(id); break;
            case 'STAR_15': addHead(id); break;
            case 'STAR_16': addHead(id); break;
            case 'STAR_17': addHead(id); break;
            case 'STAR_18': addHead(id); break;
            case 'STAR_19': addHead(id); break;
            case 'STAR_20': addHead(id); break;
            case 'STAR_21': addHead(id); break;
            case 'STAR_22': addHead(id); break;
            case 'STAR_23': addHead(id); break;
            case 'STAR_24': addHead(id); break;
            case 'STAR_25': addHead(id); break;
            case 'STAR_26': addHead(id); break;
            case 'STAR_27': addHead(id); break;
            case 'STAR_28': addHead(id); break;
            case 'STAR_29': addHead(id); break;
            case 'STAR_30': addHead(id); break;
            case 'STAR_31': addHead(id); break;
            case 'STAR_32': addHead(id); break;
            case 'STAR_33': addHead(id); break;
            case 'STAR_34': addHead(id); break;
            case 'STAR_35': addHead(id); break;
            case 'STAR_36': addHead(id); break;
            case 'STAR_37': addHead(id); break;
            case 'STAR_38': addHead(id); break;
            case 'STAR_39': addHead(id); break;
            case 'STAR_40': addHead(id); break;
            case 'STAR_41': addHead(id); break;
            case 'STAR_42': addHead(id); break;
            case 'STAR_43': addHead(id); break;
            case 'STAR_44': addHead(id); break;
            case 'STAR_45': addHead(id); break;
            case 'STAR_46': addHead(id); break;
            case 'STAR_47': addHead(id); break;
            case 'STAR_48': addHead(id); break;
            case 'STAR_49': addHead(id); break;
            case 'STAR_50': addHead(id); break;
            case 'STAR_51': addHead(id); break;
            case 'STAR_52': addHead(id); break;
            case 'STAR_53': addHead(id); break;
            case 'STAR_54': addHead(id); break;
            case 'STAR_55': addHead(id); break;
            case 'STAR_56': addHead(id); break;
            case 'STAR_57': addHead(id); break;
            case 'STAR_58': addHead(id); break;
            case 'STAR_59': addHead(id); break;
            case 'STAR_60': addHead(id); break;
            case 'STAR_61': addHead(id); break;
            case 'STAR_62': addHead(id); break;
            case 'STAR_63': addHead(id); break;
            case 'STAR_64': addHead(id); break;

            default: {
                const desc = data.descriptions.find((e) => e.classid == id);
                const msg = `Missing item ${id}: ${desc?.name} in switch`;
                console.error(msg);
                alert(msg);
            }
        }
    }

    return player;
}


function getWeaponCount(player: PlayerItems, weaponIds: string[]) {
    let count = 0;
    for (const id of weaponIds) {
        count += player.weapons.get(id) || 0;
    }
    return count;
}


function getHeadCount(player: PlayerItems, headIds: string[]) {
    let count = 0;
    for (const id of headIds) {
        count += player.heads.get(id) || 0;
    }
    return count;
}

export function itemNameToImageName(name: string) {
    return name.replace(/[ ?]/g, '_').replace(/#/g, '-').replace(/%/g, '%25');
}


export function ItemIndicator(props: {
    player: PlayerItems,
    parentFolder: string,
    type: 'weapon' | 'head',
    item: Item
}) {
    let itemCount = 0;
    if (props.type == 'weapon') {
        itemCount = getWeaponCount(props.player, props.item.id);
    } else if (props.type == 'head') {
        itemCount = getHeadCount(props.player, props.item.id);
    }

    let bgClass = '';
    let text = '';
    if (itemCount == 1) {
        bgClass = 'panel-true';
        text = INDICATOR_TRUE;
    } else if (itemCount == 0) {
        bgClass = 'panel-false';
        text = INDICATOR_FALSE;
    } else if (itemCount > 1) {
        bgClass = 'panel-multiple';
        text = INDICATOR_TRUE;
    }

    return <>
        <div className={'panel ' + bgClass}>
            <img src={`/images/${props.parentFolder}/${itemNameToImageName(props.item.name)}.webp`} className="panel-img" alt={props.item.name} title={props.item.name}></img>
            <p className="panel-text" title={props.item.name}>{text}</p>
        </div>
    </>;
}
