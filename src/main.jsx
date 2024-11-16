import { createRoot } from "react-dom/client";
import "./index.css";
import { restaurants } from "./constants/mock";

createRoot(document.getElementById("root")).render(
  <ul>
    <li>
      <h2>{restaurants[0].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>
          <h4>{restaurants[0].menu[0].name}</h4>
          <p>{restaurants[0].menu[0].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[0].menu[0].price}</b>
          </span>
        </li>
        <li>
          <h4>
            {restaurants[0].menu[1].name}{" "}
            <span>
              <b>Price: {restaurants[0].menu[1].price}</b>
            </span>
          </h4>
          <p>{restaurants[0].menu[1].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[0].menu[1].price}</b>
          </span>
        </li>
        <li>
          <h4>{restaurants[0].menu[2].name}</h4>
          <p>{restaurants[0].menu[2].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[0].menu[2].price}</b>
          </span>
        </li>
      </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>
          <blockquote>
            <h4>Рейтинг {restaurants[0].reviews[0].rating}</h4>
            <p>{restaurants[0].reviews[0].text}</p>
            <cite>{restaurants[0].reviews[0].user}</cite>
          </blockquote>
        </li>
        <li>
          <blockquote>
            <h4>Рейтинг {restaurants[0].reviews[1].rating}</h4>
            <p>{restaurants[0].reviews[1].text}</p>
            <cite>{restaurants[0].reviews[1].user}</cite>
          </blockquote>
        </li>
      </ul>
    </li>
    <li>
      <h2>{restaurants[1].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>
          <h4>{restaurants[1].menu[0].name}</h4>
          <p>{restaurants[1].menu[0].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[1].menu[0].price}</b>
          </span>
        </li>
        <li>
          <h4>{restaurants[1].menu[1].name}</h4>
          <p>{restaurants[1].menu[1].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[1].menu[1].price}</b>
          </span>
        </li>
      </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>
          <blockquote>
            <h4>Рейтинг {restaurants[1].reviews[0].rating}</h4>
            <p>{restaurants[1].reviews[0].text}</p>
            <cite>{restaurants[1].reviews[0].user}</cite>
          </blockquote>
        </li>
        <li>
          <blockquote>
            <h4>Рейтинг {restaurants[1].reviews[1].rating}</h4>
            <p>{restaurants[1].reviews[1].text}</p>
            <cite>{restaurants[1].reviews[1].user}</cite>
          </blockquote>
        </li>
        <li>
          <blockquote>
            <h4>Рейтинг {restaurants[1].reviews[2].rating}</h4>
            <p>{restaurants[1].reviews[2].text}</p>
            <cite>{restaurants[1].reviews[2].user}</cite>
          </blockquote>
        </li>
      </ul>
    </li>
    <li>
      <h2>{restaurants[2].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>
          <h4>{restaurants[2].menu[0].name}</h4>
          <p>{restaurants[2].menu[0].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[2].menu[0].price}</b>
          </span>
        </li>
        <li>
          <h4>{restaurants[2].menu[1].name}</h4>
          <p>{restaurants[2].menu[1].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[2].menu[1].price}</b>
          </span>
        </li>
        <li>
          <h4>{restaurants[2].menu[2].name}</h4>
          <p>{restaurants[2].menu[2].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[2].menu[2].price}</b>
          </span>
        </li>
      </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>
          <blockquote>
            <h4>Рейтинг {restaurants[2].reviews[0].rating}</h4>
            <p>{restaurants[2].reviews[0].text}</p>
            <cite>{restaurants[2].reviews[0].user}</cite>
          </blockquote>
        </li>
      </ul>
    </li>
    <li>
      <h2>{restaurants[3].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>
          <h4>{restaurants[3].menu[0].name}</h4>
          <p>{restaurants[3].menu[0].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[3].menu[0].price}</b>
          </span>
        </li>
        <li>
          <h4>{restaurants[3].menu[1].name}</h4>
          <p>{restaurants[3].menu[1].ingredients.join(", ")}</p>
          <span>
            <b>Price: {restaurants[3].menu[1].price}</b>
          </span>
        </li>
      </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>
          <blockquote>
            <h4>Рейтинг {restaurants[3].reviews[0].rating}</h4>
            <p>{restaurants[3].reviews[0].text}</p>
            <cite>{restaurants[3].reviews[0].user}</cite>
          </blockquote>
        </li>
        <li>
          <blockquote>
            <h4>Рейтинг {restaurants[3].reviews[1].rating}</h4>
            <p>{restaurants[3].reviews[1].text}</p>
            <cite>{restaurants[3].reviews[1].user}</cite>
          </blockquote>
        </li>
      </ul>
    </li>
  </ul>
);
