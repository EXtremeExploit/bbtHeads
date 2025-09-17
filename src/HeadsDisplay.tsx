import type { JSX } from 'react';
import { HEADS_COUNT, ITEMS } from './util/constants';
import type { HeadType, PlayerItems } from './util/types';
import { ItemIndicator } from './ItemIndicator';

function DisplayHeadType(props: {
    player: PlayerItems,
    type: HeadType
}) {
    const heads: JSX.Element[] = [];
    for (let i = 1; i <= HEADS_COUNT[props.type]; i++) {
        const head = `${props.type}_${i.toString().padStart(2, '0')}` as keyof typeof ITEMS;
        const headItem = ITEMS[head];
        const parentFolder = `heads/${props.type.toLowerCase()}`;
        heads.push(
            <ItemIndicator key={`${props.type}-${headItem.name}`} player={props.player} parentFolder={parentFolder} item={headItem}></ItemIndicator>
        );
    }
    return heads;
}

export function HeadsDisplay(props: {
    player: PlayerItems
}) {
    const player = props.player;
    return <>
        <div>
            {
                (Object.keys(HEADS_COUNT) as HeadType[]).map((h) => <div className="panel-block panel-heads">
                    <DisplayHeadType key={h + '-heads'} player={player} type={h} ></DisplayHeadType>
                </div>
                )
            }
        </div>
    </>;
}
