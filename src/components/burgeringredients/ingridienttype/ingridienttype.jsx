import React from "react";
import Ingridients from '../ingridients/ingridients.jsx';
import data from '../../../utils/data.js';

function IngridientType({ type, data }) {
    return (
        <section>
            <p>{type}</p>
            <div>
                {data?.map((item) => (
                    <Ingridients
                        name={item.type}
                        key={item._id}
                        src={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    );
}

export default IngridientType;