import { useEffect, useState } from "react"
import LZString from "lz-string";

const useMyTeamHook = () => {

    const [myTeam, setMyTeam] = useState(() => {
        const item = window.localStorage.getItem('myTeam');
        return item ? JSON.parse(LZString.decompress(item)!) : null;
    });

    useEffect(() => {
        if (myTeam) {
            const compressed = LZString.compress(JSON.stringify(myTeam));
            window.localStorage.setItem('myTeam', compressed);
        } else {
            window.localStorage.removeItem('myTeam');
        }
    }, [myTeam]);

    return [myTeam, setMyTeam] as const;
}

export default useMyTeamHook;