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
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContainerDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild className="w-[270px] h-[240px] ">
          <Button variant="outline" className="text-[14px] grid ">
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
          <div className="flex gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1"> Foot name</Label>
              <Input placeholder="Type food name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Foot price</Label>
              <Input placeholder="Enter price..." />
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name-1"> Ingredients</Label>
            <Textarea placeholder="List ingredients..." />
          </div>
          <div>
            <Label htmlFor="name-1"> Foot image</Label>

            <input
              className=" w-93 h-[138px] bg-blue-200 mt-5  border"
              type="file"
            ></input>
          </div>

          <DialogFooter>
            <Button type="submit">Add dish</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ContainerDialog;
