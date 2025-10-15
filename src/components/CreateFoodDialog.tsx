"use client";

import { useState } from "react";

export default function AddFoodForm() {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("68eeffcbd5fdbd319a11f9d4");
  const [image, setImage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const foodData = {
      foodName,
      price,
      ingredients,
      category,
      image,
    };

    try {
      const res = await fetch("http://localhost:4000/api/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodData),
      });

      const result = await res.json();

      if (res.ok) {
        setResponseMessage("Success");
      } else {
        setResponseMessage(`Error: ${result.message}`);
      }
    } catch (err) {
      setResponseMessage("Holbogdhgui");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-80 mt-10 my-10">
      <input
        type="text"
        placeholder="Name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        className="w-full border p-2"
        required
      />
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full border p-2"
        required
      />
      <input
        type="text"
        placeholder="ingridients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border p-2"
        required
      />
      <input
        type="text"
        placeholder="Category ID"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-2"
        required
      />
      <input
        type="file"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border p-2"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Save
      </button>
      {responseMessage && <p className="text-sm mt-2">{responseMessage}</p>}
    </form>
  );
}
