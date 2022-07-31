import { useEffect, useRef, useState } from "react";
import { useEffectOnce } from "../customHooks/customHooks";
import { getcoinsMarkets } from "../services/api";



const Home = () => {
    const [coins, setCoins] = useState([]);


    useEffectOnce(() => {
        async function getData() {
            const res = await getcoinsMarkets();
            console.log(res);
            if (res.status === 200) {
                setCoins(res.data)
            } else {
                console.log(res);
            }
        }
        getData()
    })


    return (
        <div>Home</div>
    )
}

export default Home;