import { useEffect, useState } from "react";
import { baseURL } from "../../request/getItems";
import { Card } from "../../components/Card";

import './style.scss';

export const PageList = () => {
    const [cardData, setCardData] = useState([]);
    const [isLoading, setIsLoding] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoding(true)
        setIsError(false)
        baseURL.get().then(({data}) =>
            setCardData(data)
        ).catch()
    }, [])

    return (
        <div className="listPage">
            <div className="listPage__header">
                <h1 className="listPage__header__header">Products</h1>
                <p className="listPage__header__text">356 Total Products</p>
            </div>
            {!isLoading && (<div>Loading...</div>)}
            {isLoading && (<div className="listPage__products">
                {
                    cardData.map((data, index) => {
                        return (
                            <Card
                                key={index}
                                name={data.title}
                                price={data.price}                            
                                imageURL={data.banner}
                            />
                        )
                    })
                }
            </div>)}
        </div>
    );
};