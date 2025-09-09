import { HeadsDisplay } from './HeadsDisplay';
import { ITEMS } from './util/constants';
import { ItemIndicator } from './ItemIndicator';
import type { PlayerItems } from './util/types';

function CurrencyItem(props: {
    img: string,
    text: string
}) {
    return <div className="panel">
        <img src={props.img} className="panel-img"></img>
        <p className="panel-text">{props.text}</p>
    </div>;
}

export function Display(props: {
    player: PlayerItems
}) {
    const player = props.player;
    return <>
        <div>
            <div className="panel-block">
                <CurrencyItem img="/images/Gem.webp" text={player.gems.toString()} />
                <CurrencyItem img="/images/YarnBall.webp" text={player.yarn.toString()} />
            </div>
            <div className="panel-block">
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.EXPLODING_DISC} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.GRENADE} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.BOOMERANG} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.DODGEBALL} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.FIREBALL} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.ICE_CANNON} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.FAN} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.VACUUM} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.DART_GUN} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.FORCEBALL} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.PAPER_AIRPLANE} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.FROG_BOMB} ></ItemIndicator>
                <ItemIndicator player={player} parentFolder="weapons" type="weapon" item={ITEMS.ACID_BUBBLE} ></ItemIndicator>
            </div>
            <br></br>
            <HeadsDisplay player={player} />
        </div>
    </>;
}
