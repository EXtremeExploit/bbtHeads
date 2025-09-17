import { useEffect, useRef, useState } from 'react';
import { isSteamIdValid, loadInventory } from './util/items';
import type { PlayerItems } from './util/types';
import { Display } from './Display';
import { Meta } from './Meta';
import { BUTTON_IDLE, BUTTON_LOADING, TITLE, VERSION } from './util/constants';


export function App() {
    const steamId = useRef<string>('');
    const [playerItems, setPlayerItems] = useState<PlayerItems>({
        gems: 0,
        yarn: 0,
        items: new Map()
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // For handling query params
    useEffect(() => {
        (async () => {
            const urlSteamId = new URLSearchParams(document.location.search).get('steamId');
            if (!urlSteamId)
                return;

            if (!isSteamIdValid(urlSteamId)) {
                return;
            }

            const sidElement = document.getElementById('steamId') as HTMLInputElement | null;
            if (sidElement)
                sidElement.value = urlSteamId;
            steamId.current = urlSteamId;
            setIsLoading(true);
            const inventory = await loadInventory(urlSteamId);
            setPlayerItems(inventory);
            setIsLoading(false);
        })();
    }, []);

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
                    <input type='number' id='steamId' placeholder='76561197960287930' onChange={(ev) => {
                        steamId.current = ev.target.value;
                    }}></input>
                </div>
                <button onClick={async (_ev) => {
                    if (!isSteamIdValid(steamId.current)) {
                        alert('invalid SteamID type, make sure its 17 characters long and starts with 7');
                        return;
                    }
                    setIsLoading(true);

                    const winLoc = window.location;
                    const newurl = winLoc.protocol + '//' + winLoc.host + winLoc.pathname + `?steamId=${steamId.current}`;
                    window.history.pushState({ path: newurl }, '', newurl);

                    const inventory = await loadInventory(steamId.current);
                    setPlayerItems(inventory);
                    setIsLoading(false);
                }}>{isLoading ? BUTTON_LOADING : BUTTON_IDLE}</button>
                <br></br>
            </div>
            <Display player={playerItems} />
        </>
    );
}
