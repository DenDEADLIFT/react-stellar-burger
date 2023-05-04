import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function Ingridients(props) {
    return (
      <li key={props._id}>
        <img src={props.src} alt={props.name} />
        <div>
          <p>
            {props.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p>
          {props.name}
        </p>
          <Counter count={1} size="default" />
      </li>
    );
  }

  export default Ingridients;