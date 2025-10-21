"use client";
import { FiEdit2 } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
export type Food = {
  _id: string;
  foodName: string;
  price: number;
  ingredients: string;
  category: string;
  image: string;
};

const ContainerDialog = () => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("68eeffcbd5fdbd319a11f9d4");

  const [image, setImage] = useState<File | null>(null);

  const [responseMessage, setResponseMessage] = useState("");
  const [foods, setFoods] = useState<Food[]>([]);

  const getFoods = async () => {
    const result = await fetch("http://localhost:4000/api/food");
    const responseData = await result.json();

    console.log("foods response:", responseData);
    setFoods(responseData.data);
  };
  useEffect(() => {
    getFoods();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Submit duudah");
    e.preventDefault();

    if (!image) {
      setResponseMessage("choose a image!");
      return;
    }

    const formData = new FormData();
    formData.append("foodName", foodName);
    formData.append("price", price.toString());
    formData.append("ingredients", ingredients);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:4000/api/food", {
        method: "POST",
        body: formData,
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
    getFoods();
  };

  return (
    <div>
      <div className="flex gap-4 w-full">
        <div>
          <Dialog>
            <DialogTrigger asChild className="w-[270px] h-[240px] ">
              <Button
                type="button"
                variant="outline"
                className="text-[14px] grid "
              >
                <div className="w-10 h-10 bg-red-500 m-auto mt-20 rounded-4xl">
                  <img src="/images/plus.svg" className="m-auto mt-3"></img>
                </div>
                <div className="mb-20 mt-3 w-100"> Add new Dish to Salads</div>
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[465px]">
              <DialogHeader>
                <DialogTitle>Add new Dish to Appetizers</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1"> Food name</Label>
                    <Input
                      placeholder="Type food name"
                      value={foodName}
                      onChange={(e) => setFoodName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Food price</Label>
                    <Input
                      placeholder="Enter price..."
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="name-1"> Ingredients</Label>
                  <Textarea
                    placeholder="List ingredients..."
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Category ID"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border p-2"
                  required
                />
                <div>
                  <Label htmlFor="name-1"> Food image</Label>

                  <Input
                    className=" w-105 h-[138px] bg-blue-200 mt-5  border"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setImage(e.target.files[0]);
                      }
                    }}
                    required
                  ></Input>
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" className="mt-5">
                      Add dish
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex gap-4">
          {foods.map((food) => (
            <div
              key={food._id}
              className="w-[270px] h-[240px] border-2 border-gray-300 rounded-md p-5"
            >
              <div className="h-[100px] mb-8">
                <img
                  src={food.image}
                  alt={food.foodName}
                  className="w-[238px] h-[129px] object-cover rounded "
                />
                <div className="flex -mt-12 ml-43">
                  <Button className="bg-white rounded-2xl cursor-pointer hover:bg-gray-300">
                    <FiEdit2 color="red" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-[14px] text-[#EF4444]">
                  {food.foodName}
                </span>
                <span className="text-black text-[12px] font-normal">
                  {food.price}
                </span>
              </div>
              <span className="text-[12px] font-medium">
                {food.ingredients}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerDialog;
