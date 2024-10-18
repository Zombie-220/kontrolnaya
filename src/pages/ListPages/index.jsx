import { useEffect, useState } from "react";
import { baseURL } from "../../request/getItems";
import { Card } from "../../components/Card";

export const PageList = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        baseURL.get("/newBicycles").then(({data}) =>
            setCardData(data)
        ).catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {
                cardData.map((data, index) => {
                    return (
                        <Card name={data.name}/>
                    )
                })
            }
        </div>
    );
};