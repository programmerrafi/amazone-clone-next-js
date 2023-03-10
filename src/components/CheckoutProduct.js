import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { removeFromBasket } from "../slices/basketSlice";
import QuantityCount from "./QuantityCount";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  image,
  shipping,
  quantity,
}) {
  // TODO: Color and quantity
  const dispatch = useDispatch();

  const [quantityUp, setQuantityUp] = useState(quantity);
  const [rating, setRating] = useState();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  // console.log("not complete the game");

  useEffect(() => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
  }, []);

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        width={200}
        height={200}
        alt="checkbox"
        className="rounded-lg object-contain"
      />
      <div className="col-span-3 mx-5">
        <p className="text-lg mb-1 text-gray-800 font-medium">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div className="text-gray-400">
          ${price} {" * "} {quantity} {" = "}${price * quantity}
        </div>
        {shipping && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        {/* <button onClick={addItemToBasket} className="mt-auto button">Add to Busket</button> */}
        <QuantityCount
          id={id}
          dispatch
          setQuantity={setQuantityUp}
          quantity={quantityUp}
        />
        <button onClick={removeItemFromBasket} className="mt-auto button">
          Remove from Busket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
