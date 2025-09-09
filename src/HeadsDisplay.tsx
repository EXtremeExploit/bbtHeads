import type { JSX } from 'react';
import { ITEMS } from './util/constants';
import type { HeadType, PlayerItems } from './util/types';
import { ItemIndicator } from './ItemIndicator';

function DisplayHeadType(props: {
    player: PlayerItems,
    type: HeadType
}) {
    const heads: JSX.Element[] = [];
    for (let i = 1; i <= 64; i++) {
        const head = `${props.type.toUpperCase()}_${i.toString().padStart(2, '0')}` as keyof typeof ITEMS;
        const headItem = ITEMS[head];
        const parentFolder = `heads/${props.type}`;
        heads.push(
            <ItemIndicator player={props.player} parentFolder={parentFolder} type="head" item={headItem}></ItemIndicator>
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
            <div className="panel-block panel-heads">
                <DisplayHeadType player={player} type="circle" ></DisplayHeadType>
            </div>
            <div className="panel-block panel-heads">
                <DisplayHeadType player={player} type="triangle" ></DisplayHeadType>
            </div>
            <div className="panel-block panel-heads">
                <DisplayHeadType player={player} type="square" ></DisplayHeadType>
            </div>
            <div className="panel-block panel-heads">
                <DisplayHeadType player={player} type="cylinder" ></DisplayHeadType>
            </div>
            <div className="panel-block panel-heads">
                <DisplayHeadType player={player} type="star" ></DisplayHeadType>
            </div>
        </div>
    </>;
}
