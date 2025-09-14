import { useRef, useState } from 'react';
import { getItems, parseItems } from './util/items';
import type { PlayerItems } from './util/types';
import { Display } from './Display';
import Meta from './Meta';
import { BUTTON_IDLE, BUTTON_LOADING, TITLE, VERSION } from './util/constants';


function App() {
    const steamId = useRef<bigint>(0n);
    const [playerItems, setPlayerItems] = useState<PlayerItems>({
        gems: 0,
        yarn: 0,
        weapons: new Map(),
        heads: new Map()
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <>
            <Meta />
            <div className='header'>
                <h1><a href='https://github.com/EXtremeExploit/bbtHeads'>{TITLE}</a></h1>
                <h3>{VERSION}</h3>
            </div>
            <div className='header'>
                <div>
                    <p> <u>SteamID:</u></p>
                    <input type='number' placeholder='76561197960287930' onChange={(ev) => {
                        steamId.current = BigInt(ev.target.value);
                    }}></input>
                </div>
                <button onClick={async (_ev) => {
                    if (steamId.current == null ||
                        steamId.current == 0n) {
                        alert('invalid steamId type');
                        return;
                    }

                    setIsLoading(true);
                    const response = await getItems(steamId.current);
                    const parsedItems = parseItems(response);
                    setPlayerItems(parsedItems);
                    setIsLoading(false);
                }}>{isLoading ? BUTTON_LOADING : BUTTON_IDLE}</button>
                <br></br>
            </div>
            <Display player={playerItems} />
        </>
    );
}

export default App;
