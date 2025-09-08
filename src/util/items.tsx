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

    function addWeapon(id: string) {
        player.weapons.set(id, (player.weapons.get(id) || 0) + 1);
    }

    function addHead(id: string) {
        player.heads.set(id, (player.heads.get(id) || 0) + 1);
    }

    for (const [_key, asset] of Object.entries(data.assets)) {
        const id = asset.classid;
        switch (id) {
            // Currency
            case ITEMS.GEM.id: player.gems += Number(asset.amount); break;
            case ITEMS.YARN.id: player.yarn += Number(asset.amount); break;

            // Weapons
            case ITEMS.EXPLODING_DISC.id: addWeapon(id); break;
            case ITEMS.GRENADE.id: addWeapon(id); break;
            case ITEMS.BOOMERANG.id: addWeapon(id); break;
            case ITEMS.DODGEBALL.id: addWeapon(id); break;
            case ITEMS.FIREBALL.id: addWeapon(id); break;
            case ITEMS.ICE_CANNON.id: addWeapon(id); break;
            case ITEMS.FAN.id: addWeapon(id); break;
            case ITEMS.VACUUM.id: addWeapon(id); break;
            case ITEMS.DART_GUN.id: addWeapon(id); break;
            case ITEMS.FORCEBALL.id: addWeapon(id); break;
            case ITEMS.PAPER_AIRPLANE.id: addWeapon(id); break;
            case ITEMS.FROG_BOMB.id: addWeapon(id); break;
            case ITEMS.ACID_BUBBLE.id: addWeapon(id); break;

            // Heads
            case ITEMS.CIRCLE_01.id: addHead(id); break;
            case ITEMS.CIRCLE_02.id: addHead(id); break;
            case ITEMS.CIRCLE_03.id: addHead(id); break;
            case ITEMS.CIRCLE_04.id: addHead(id); break;
            case ITEMS.CIRCLE_05.id: addHead(id); break;
            case ITEMS.CIRCLE_06.id: addHead(id); break;
            case ITEMS.CIRCLE_07.id: addHead(id); break;
            case ITEMS.CIRCLE_08.id: addHead(id); break;
            case ITEMS.CIRCLE_09.id: addHead(id); break;
            case ITEMS.CIRCLE_10.id: addHead(id); break;
            case ITEMS.CIRCLE_11.id: addHead(id); break;
            case ITEMS.CIRCLE_12.id: addHead(id); break;
            case ITEMS.CIRCLE_13.id: addHead(id); break;
            case ITEMS.CIRCLE_14.id: addHead(id); break;
            case ITEMS.CIRCLE_15.id: addHead(id); break;
            case ITEMS.CIRCLE_16.id: addHead(id); break;
            case ITEMS.CIRCLE_17.id: addHead(id); break;
            case ITEMS.CIRCLE_18.id: addHead(id); break;
            case ITEMS.CIRCLE_19.id: addHead(id); break;
            case ITEMS.CIRCLE_20.id: addHead(id); break;
            case ITEMS.CIRCLE_21.id: addHead(id); break;
            case ITEMS.CIRCLE_22.id: addHead(id); break;
            case ITEMS.CIRCLE_23.id: addHead(id); break;
            case ITEMS.CIRCLE_24.id: addHead(id); break;
            case ITEMS.CIRCLE_25.id: addHead(id); break;
            case ITEMS.CIRCLE_26.id: addHead(id); break;
            case ITEMS.CIRCLE_27.id: addHead(id); break;
            case ITEMS.CIRCLE_28.id: addHead(id); break;
            case ITEMS.CIRCLE_29.id: addHead(id); break;
            case ITEMS.CIRCLE_30.id: addHead(id); break;
            case ITEMS.CIRCLE_31.id: addHead(id); break;
            case ITEMS.CIRCLE_32.id: addHead(id); break;
            case ITEMS.CIRCLE_33.id: addHead(id); break;
            case ITEMS.CIRCLE_34.id: addHead(id); break;
            case ITEMS.CIRCLE_35.id: addHead(id); break;
            case ITEMS.CIRCLE_36.id: addHead(id); break;
            case ITEMS.CIRCLE_37.id: addHead(id); break;
            case ITEMS.CIRCLE_38.id: addHead(id); break;
            case ITEMS.CIRCLE_39.id: addHead(id); break;
            case ITEMS.CIRCLE_40.id: addHead(id); break;
            case ITEMS.CIRCLE_41.id: addHead(id); break;
            case ITEMS.CIRCLE_42.id: addHead(id); break;
            case ITEMS.CIRCLE_43.id: addHead(id); break;
            case ITEMS.CIRCLE_44.id: addHead(id); break;
            case ITEMS.CIRCLE_45.id: addHead(id); break;
            case ITEMS.CIRCLE_46.id: addHead(id); break;
            case ITEMS.CIRCLE_47.id: addHead(id); break;
            case ITEMS.CIRCLE_48.id: addHead(id); break;
            case ITEMS.CIRCLE_49.id: addHead(id); break;
            case ITEMS.CIRCLE_50.id: addHead(id); break;
            case ITEMS.CIRCLE_51.id: addHead(id); break;
            case ITEMS.CIRCLE_52.id: addHead(id); break;
            case ITEMS.CIRCLE_53.id: addHead(id); break;
            case ITEMS.CIRCLE_54.id: addHead(id); break;
            case ITEMS.CIRCLE_55.id: addHead(id); break;
            case ITEMS.CIRCLE_56.id: addHead(id); break;
            case ITEMS.CIRCLE_57.id: addHead(id); break;
            case ITEMS.CIRCLE_58.id: addHead(id); break;
            case ITEMS.CIRCLE_59.id: addHead(id); break;
            case ITEMS.CIRCLE_60.id: addHead(id); break;
            case ITEMS.CIRCLE_61.id: addHead(id); break;
            case ITEMS.CIRCLE_62.id: addHead(id); break;
            case ITEMS.CIRCLE_63.id: addHead(id); break;
            case ITEMS.CIRCLE_64.id: addHead(id); break;

            // Triangle
            case ITEMS.TRIANGLE_01.id: addHead(id); break;
            case ITEMS.TRIANGLE_02.id: addHead(id); break;
            case ITEMS.TRIANGLE_03.id: addHead(id); break;
            case ITEMS.TRIANGLE_04.id: addHead(id); break;
            case ITEMS.TRIANGLE_05.id: addHead(id); break;
            case ITEMS.TRIANGLE_06.id: addHead(id); break;
            case ITEMS.TRIANGLE_07.id: addHead(id); break;
            case ITEMS.TRIANGLE_08.id: addHead(id); break;
            case ITEMS.TRIANGLE_09.id: addHead(id); break;
            case ITEMS.TRIANGLE_10.id: addHead(id); break;
            case ITEMS.TRIANGLE_11.id: addHead(id); break;
            case ITEMS.TRIANGLE_12.id: addHead(id); break;
            case ITEMS.TRIANGLE_13.id: addHead(id); break;
            case ITEMS.TRIANGLE_14.id: addHead(id); break;
            case ITEMS.TRIANGLE_15.id: addHead(id); break;
            case ITEMS.TRIANGLE_16.id: addHead(id); break;
            case ITEMS.TRIANGLE_17.id: addHead(id); break;
            case ITEMS.TRIANGLE_18.id: addHead(id); break;
            case ITEMS.TRIANGLE_19.id: addHead(id); break;
            case ITEMS.TRIANGLE_20.id: addHead(id); break;
            case ITEMS.TRIANGLE_21.id: addHead(id); break;
            case ITEMS.TRIANGLE_22.id: addHead(id); break;
            case ITEMS.TRIANGLE_23.id: addHead(id); break;
            case ITEMS.TRIANGLE_24.id: addHead(id); break;
            case ITEMS.TRIANGLE_25.id: addHead(id); break;
            case ITEMS.TRIANGLE_26.id: addHead(id); break;
            case ITEMS.TRIANGLE_27.id: addHead(id); break;
            case ITEMS.TRIANGLE_28.id: addHead(id); break;
            case ITEMS.TRIANGLE_29.id: addHead(id); break;
            case ITEMS.TRIANGLE_30.id: addHead(id); break;
            case ITEMS.TRIANGLE_31.id: addHead(id); break;
            case ITEMS.TRIANGLE_32.id: addHead(id); break;
            case ITEMS.TRIANGLE_33.id: addHead(id); break;
            case ITEMS.TRIANGLE_34.id: addHead(id); break;
            case ITEMS.TRIANGLE_35.id: addHead(id); break;
            case ITEMS.TRIANGLE_36.id: addHead(id); break;
            case ITEMS.TRIANGLE_37.id: addHead(id); break;
            case ITEMS.TRIANGLE_38.id: addHead(id); break;
            case ITEMS.TRIANGLE_39.id: addHead(id); break;
            case ITEMS.TRIANGLE_40.id: addHead(id); break;
            case ITEMS.TRIANGLE_41.id: addHead(id); break;
            case ITEMS.TRIANGLE_42.id: addHead(id); break;
            case ITEMS.TRIANGLE_43.id: addHead(id); break;
            case ITEMS.TRIANGLE_44.id: addHead(id); break;
            case ITEMS.TRIANGLE_45.id: addHead(id); break;
            case ITEMS.TRIANGLE_46.id: addHead(id); break;
            case ITEMS.TRIANGLE_47.id: addHead(id); break;
            case ITEMS.TRIANGLE_48.id: addHead(id); break;
            case ITEMS.TRIANGLE_49.id: addHead(id); break;
            case ITEMS.TRIANGLE_50.id: addHead(id); break;
            case ITEMS.TRIANGLE_51.id: addHead(id); break;
            case ITEMS.TRIANGLE_52.id: addHead(id); break;
            case ITEMS.TRIANGLE_53.id: addHead(id); break;
            case ITEMS.TRIANGLE_54.id: addHead(id); break;
            case ITEMS.TRIANGLE_55.id: addHead(id); break;
            case ITEMS.TRIANGLE_56.id: addHead(id); break;
            case ITEMS.TRIANGLE_57.id: addHead(id); break;
            case ITEMS.TRIANGLE_58.id: addHead(id); break;
            case ITEMS.TRIANGLE_59.id: addHead(id); break;
            case ITEMS.TRIANGLE_60.id: addHead(id); break;
            case ITEMS.TRIANGLE_61.id: addHead(id); break;
            case ITEMS.TRIANGLE_62.id: addHead(id); break;
            case ITEMS.TRIANGLE_63.id: addHead(id); break;
            case ITEMS.TRIANGLE_64.id: addHead(id); break;

            // Square
            case ITEMS.SQUARE_01.id: addHead(id); break;
            case ITEMS.SQUARE_02.id: addHead(id); break;
            case ITEMS.SQUARE_03.id: addHead(id); break;
            case ITEMS.SQUARE_04.id: addHead(id); break;
            case ITEMS.SQUARE_05.id: addHead(id); break;
            case ITEMS.SQUARE_06.id: addHead(id); break;
            case ITEMS.SQUARE_07.id: addHead(id); break;
            case ITEMS.SQUARE_08.id: addHead(id); break;
            case ITEMS.SQUARE_09.id: addHead(id); break;
            case ITEMS.SQUARE_10.id: addHead(id); break;
            case ITEMS.SQUARE_11.id: addHead(id); break;
            case ITEMS.SQUARE_12.id: addHead(id); break;
            case ITEMS.SQUARE_13.id: addHead(id); break;
            case ITEMS.SQUARE_14.id: addHead(id); break;
            case ITEMS.SQUARE_15.id: addHead(id); break;
            case ITEMS.SQUARE_16.id: addHead(id); break;
            case ITEMS.SQUARE_17.id: addHead(id); break;
            case ITEMS.SQUARE_18.id: addHead(id); break;
            case ITEMS.SQUARE_19.id: addHead(id); break;
            case ITEMS.SQUARE_20.id: addHead(id); break;
            case ITEMS.SQUARE_21.id: addHead(id); break;
            case ITEMS.SQUARE_22.id: addHead(id); break;
            case ITEMS.SQUARE_23.id: addHead(id); break;
            case ITEMS.SQUARE_24.id: addHead(id); break;
            case ITEMS.SQUARE_25.id: addHead(id); break;
            case ITEMS.SQUARE_26.id: addHead(id); break;
            case ITEMS.SQUARE_27.id: addHead(id); break;
            case ITEMS.SQUARE_28.id: addHead(id); break;
            case ITEMS.SQUARE_29.id: addHead(id); break;
            case ITEMS.SQUARE_30.id: addHead(id); break;
            case ITEMS.SQUARE_31.id: addHead(id); break;
            case ITEMS.SQUARE_32.id: addHead(id); break;
            case ITEMS.SQUARE_33.id: addHead(id); break;
            case ITEMS.SQUARE_34.id: addHead(id); break;
            case ITEMS.SQUARE_35.id: addHead(id); break;
            case ITEMS.SQUARE_36.id: addHead(id); break;
            case ITEMS.SQUARE_37.id: addHead(id); break;
            case ITEMS.SQUARE_38.id: addHead(id); break;
            case ITEMS.SQUARE_39.id: addHead(id); break;
            case ITEMS.SQUARE_40.id: addHead(id); break;
            case ITEMS.SQUARE_41.id: addHead(id); break;
            case ITEMS.SQUARE_42.id: addHead(id); break;
            case ITEMS.SQUARE_43.id: addHead(id); break;
            case ITEMS.SQUARE_44.id: addHead(id); break;
            case ITEMS.SQUARE_45.id: addHead(id); break;
            case ITEMS.SQUARE_46.id: addHead(id); break;
            case ITEMS.SQUARE_47.id: addHead(id); break;
            case ITEMS.SQUARE_48.id: addHead(id); break;
            case ITEMS.SQUARE_49.id: addHead(id); break;
            case ITEMS.SQUARE_50.id: addHead(id); break;
            case ITEMS.SQUARE_51.id: addHead(id); break;
            case ITEMS.SQUARE_52.id: addHead(id); break;
            case ITEMS.SQUARE_53.id: addHead(id); break;
            case ITEMS.SQUARE_54.id: addHead(id); break;
            case ITEMS.SQUARE_55.id: addHead(id); break;
            case ITEMS.SQUARE_56.id: addHead(id); break;
            case ITEMS.SQUARE_57.id: addHead(id); break;
            case ITEMS.SQUARE_58.id: addHead(id); break;
            case ITEMS.SQUARE_59.id: addHead(id); break;
            case ITEMS.SQUARE_60.id: addHead(id); break;
            case ITEMS.SQUARE_61.id: addHead(id); break;
            case ITEMS.SQUARE_62.id: addHead(id); break;
            case ITEMS.SQUARE_63.id: addHead(id); break;
            case ITEMS.SQUARE_64.id: addHead(id); break;

            // Cylinder
            case ITEMS.CYLINDER_01.id: addHead(id); break;
            case ITEMS.CYLINDER_02.id: addHead(id); break;
            case ITEMS.CYLINDER_03.id: addHead(id); break;
            case ITEMS.CYLINDER_04.id: addHead(id); break;
            case ITEMS.CYLINDER_05.id: addHead(id); break;
            case ITEMS.CYLINDER_06.id: addHead(id); break;
            case ITEMS.CYLINDER_07.id: addHead(id); break;
            case ITEMS.CYLINDER_08.id: addHead(id); break;
            case ITEMS.CYLINDER_09.id: addHead(id); break;
            case ITEMS.CYLINDER_10.id: addHead(id); break;
            case ITEMS.CYLINDER_11.id: addHead(id); break;
            case ITEMS.CYLINDER_12.id: addHead(id); break;
            case ITEMS.CYLINDER_13.id: addHead(id); break;
            case ITEMS.CYLINDER_14.id: addHead(id); break;
            case ITEMS.CYLINDER_15.id: addHead(id); break;
            case ITEMS.CYLINDER_16.id: addHead(id); break;
            case ITEMS.CYLINDER_17.id: addHead(id); break;
            case ITEMS.CYLINDER_18.id: addHead(id); break;
            case ITEMS.CYLINDER_19.id: addHead(id); break;
            case ITEMS.CYLINDER_20.id: addHead(id); break;
            case ITEMS.CYLINDER_21.id: addHead(id); break;
            case ITEMS.CYLINDER_22.id: addHead(id); break;
            case ITEMS.CYLINDER_23.id: addHead(id); break;
            case ITEMS.CYLINDER_24.id: addHead(id); break;
            case ITEMS.CYLINDER_25.id: addHead(id); break;
            case ITEMS.CYLINDER_26.id: addHead(id); break;
            case ITEMS.CYLINDER_27.id: addHead(id); break;
            case ITEMS.CYLINDER_28.id: addHead(id); break;
            case ITEMS.CYLINDER_29.id: addHead(id); break;
            case ITEMS.CYLINDER_30.id: addHead(id); break;
            case ITEMS.CYLINDER_31.id: addHead(id); break;
            case ITEMS.CYLINDER_32.id: addHead(id); break;
            case ITEMS.CYLINDER_33.id: addHead(id); break;
            case ITEMS.CYLINDER_34.id: addHead(id); break;
            case ITEMS.CYLINDER_35.id: addHead(id); break;
            case ITEMS.CYLINDER_36.id: addHead(id); break;
            case ITEMS.CYLINDER_37.id: addHead(id); break;
            case ITEMS.CYLINDER_38.id: addHead(id); break;
            case ITEMS.CYLINDER_39.id: addHead(id); break;
            case ITEMS.CYLINDER_40.id: addHead(id); break;
            case ITEMS.CYLINDER_41.id: addHead(id); break;
            case ITEMS.CYLINDER_42.id: addHead(id); break;
            case ITEMS.CYLINDER_43.id: addHead(id); break;
            case ITEMS.CYLINDER_44.id: addHead(id); break;
            case ITEMS.CYLINDER_45.id: addHead(id); break;
            case ITEMS.CYLINDER_46.id: addHead(id); break;
            case ITEMS.CYLINDER_47.id: addHead(id); break;
            case ITEMS.CYLINDER_48.id: addHead(id); break;
            case ITEMS.CYLINDER_49.id: addHead(id); break;
            case ITEMS.CYLINDER_50.id: addHead(id); break;
            case ITEMS.CYLINDER_51.id: addHead(id); break;
            case ITEMS.CYLINDER_52.id: addHead(id); break;
            case ITEMS.CYLINDER_53.id: addHead(id); break;
            case ITEMS.CYLINDER_54.id: addHead(id); break;
            case ITEMS.CYLINDER_55.id: addHead(id); break;
            case ITEMS.CYLINDER_56.id: addHead(id); break;
            case ITEMS.CYLINDER_57.id: addHead(id); break;
            case ITEMS.CYLINDER_58.id: addHead(id); break;
            case ITEMS.CYLINDER_59.id: addHead(id); break;
            case ITEMS.CYLINDER_60.id: addHead(id); break;
            case ITEMS.CYLINDER_61.id: addHead(id); break;
            case ITEMS.CYLINDER_62.id: addHead(id); break;
            case ITEMS.CYLINDER_63.id: addHead(id); break;
            case ITEMS.CYLINDER_64.id: addHead(id); break;

            // Star
            case ITEMS.STAR_01.id: addHead(id); break;
            case ITEMS.STAR_02.id: addHead(id); break;
            case ITEMS.STAR_03.id: addHead(id); break;
            case ITEMS.STAR_04.id: addHead(id); break;
            case ITEMS.STAR_05.id: addHead(id); break;
            case ITEMS.STAR_06.id: addHead(id); break;
            case ITEMS.STAR_07.id: addHead(id); break;
            case ITEMS.STAR_08.id: addHead(id); break;
            case ITEMS.STAR_09.id: addHead(id); break;
            case ITEMS.STAR_10.id: addHead(id); break;
            case ITEMS.STAR_11.id: addHead(id); break;
            case ITEMS.STAR_12.id: addHead(id); break;
            case ITEMS.STAR_13.id: addHead(id); break;
            case ITEMS.STAR_14.id: addHead(id); break;
            case ITEMS.STAR_15.id: addHead(id); break;
            case ITEMS.STAR_16.id: addHead(id); break;
            case ITEMS.STAR_17.id: addHead(id); break;
            case ITEMS.STAR_18.id: addHead(id); break;
            case ITEMS.STAR_19.id: addHead(id); break;
            case ITEMS.STAR_20.id: addHead(id); break;
            case ITEMS.STAR_21.id: addHead(id); break;
            case ITEMS.STAR_22.id: addHead(id); break;
            case ITEMS.STAR_23.id: addHead(id); break;
            case ITEMS.STAR_24.id: addHead(id); break;
            case ITEMS.STAR_25.id: addHead(id); break;
            case ITEMS.STAR_26.id: addHead(id); break;
            case ITEMS.STAR_27.id: addHead(id); break;
            case ITEMS.STAR_28.id: addHead(id); break;
            case ITEMS.STAR_29.id: addHead(id); break;
            case ITEMS.STAR_30.id: addHead(id); break;
            case ITEMS.STAR_31.id: addHead(id); break;
            case ITEMS.STAR_32.id: addHead(id); break;
            case ITEMS.STAR_33.id: addHead(id); break;
            case ITEMS.STAR_34.id: addHead(id); break;
            case ITEMS.STAR_35.id: addHead(id); break;
            case ITEMS.STAR_36.id: addHead(id); break;
            case ITEMS.STAR_37.id: addHead(id); break;
            case ITEMS.STAR_38.id: addHead(id); break;
            case ITEMS.STAR_39.id: addHead(id); break;
            case ITEMS.STAR_40.id: addHead(id); break;
            case ITEMS.STAR_41.id: addHead(id); break;
            case ITEMS.STAR_42.id: addHead(id); break;
            case ITEMS.STAR_43.id: addHead(id); break;
            case ITEMS.STAR_44.id: addHead(id); break;
            case ITEMS.STAR_45.id: addHead(id); break;
            case ITEMS.STAR_46.id: addHead(id); break;
            case ITEMS.STAR_47.id: addHead(id); break;
            case ITEMS.STAR_48.id: addHead(id); break;
            case ITEMS.STAR_49.id: addHead(id); break;
            case ITEMS.STAR_50.id: addHead(id); break;
            case ITEMS.STAR_51.id: addHead(id); break;
            case ITEMS.STAR_52.id: addHead(id); break;
            case ITEMS.STAR_53.id: addHead(id); break;
            case ITEMS.STAR_54.id: addHead(id); break;
            case ITEMS.STAR_55.id: addHead(id); break;
            case ITEMS.STAR_56.id: addHead(id); break;
            case ITEMS.STAR_57.id: addHead(id); break;
            case ITEMS.STAR_58.id: addHead(id); break;
            case ITEMS.STAR_59.id: addHead(id); break;
            case ITEMS.STAR_60.id: addHead(id); break;
            case ITEMS.STAR_61.id: addHead(id); break;
            case ITEMS.STAR_62.id: addHead(id); break;
            case ITEMS.STAR_63.id: addHead(id); break;
            case ITEMS.STAR_64.id: addHead(id); break;

            default: {
                const desc = data.descriptions.find((e) => e.classid == id);
                const msg = `Missing item ${id}: ${desc?.name}`;
                console.error(msg);
                alert(msg);
            }
        }
    }

    return player;
}


function getWeaponCount(player: PlayerItems, weaponId: string) {
    return player.weapons.get(weaponId) || 0;
}


function getHeadCount(player: PlayerItems, head: string) {
    return player.heads.get(head) || 0;
}

export function itemNameToImageName(name: string) {
    return name.replace(/[ ?]/g, '_').replace(/#/g, '-');
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
    } else {
        console.error(`Negative amount of ${props.item.id} ${props.item.name}`);
    }

    return <>
        <div className={'panel ' + bgClass}>
            <img src={`/images/${props.parentFolder}/${itemNameToImageName(props.item.name)}.webp`} className="panel-img" alt={props.item.name} title={props.item.name}></img>
            <p className="panel-text" title={props.item.name}>{text}</p>
        </div>
    </>;
}
