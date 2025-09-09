import { INDICATOR_FALSE, INDICATOR_TRUE } from './util/constants';
import { getHeadCount, getWeaponCount, itemNameToImageName } from './util/items';
import { Item, PlayerItems } from './util/types';

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
        text = INDICATOR_TRUE + `(${itemCount}x)`;
    }

    return <>
        <div className={'panel ' + bgClass}>
            <a href={`https://steamcommunity.com/market/listings/238460/${encodeURI(props.item.name)}`} target="_blank">
                <img src={`/images/${props.parentFolder}/${itemNameToImageName(props.item.name)}.webp`} className="panel-img" alt={props.item.name} title={props.item.name}></img>
            </a>
            <p className="panel-text" title={props.item.name}>{text}</p>
        </div>
    </>;
}
