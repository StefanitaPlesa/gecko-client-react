import { useState } from "react";
import { useEffectOnce } from "../customHooks/customHooks";
import { getCoinsMarkets } from "../services/api";
import Table from "../components/table/table";


const Home = () => {
    const [coins, setCoins] = useState([]);

    useEffectOnce(() => {
        async function getData() {
            const res = await getCoinsMarkets();
            if (res.status === 200) {
                const filteredData = res.data.map((obj) => {
                    return {
                        image: { value: obj.image, type: "image" },
                        name: { value: obj.name, type: "string" },
                        symbol: { value: obj.symbol, type: "string" },
                        current_price: { value: obj.current_price, type: "string" },
                        high_24_hour_price: { value: obj.high_24h, type: "string" },
                        low_24_hour_price: { value: obj.low_24h, type: "string" }
                    };
                });
                setCoins(filteredData);
            } else {
                console.log(res);
            }
        }
        getData();
    });

    return (
        <div>
            {coins.length > 0 && <Table data={coins} />}
        </div>
    );
};

export default Home;