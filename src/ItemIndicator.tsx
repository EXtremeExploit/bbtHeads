import { INDICATOR_FALSE, INDICATOR_TRUE } from './util/constants';
import { getItemCount, itemNameToImageName } from './util/items';
import { Item, PlayerItems } from './util/types';

export function ItemIndicator(props: {
    player: PlayerItems,
    parentFolder: string,
    item: Item
}) {
    const itemCount = getItemCount(props.player, props.item);

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
