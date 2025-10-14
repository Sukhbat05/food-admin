import AdminLayout from "@/components/AdminLayout";

import ContainerDialog from "@/components/ContainerDialog";
import DishesCategory from "@/components/DishesCategory";
import { mockFoods } from "@/mock/mockData";

export default function Home() {
  return (
    <div className="bg-[#F4F4F5]">
      <AdminLayout>
        <div>
          <DishesCategory />
        </div>
        <div className="p-6 flex gap-3">
          <ContainerDialog />
          {mockFoods.map((food) => {
            return (
              <div>
                <img className="w-60 h-[129px]" src={food.imagePath} alt="" />
                {food.foodName}
                <div>{food.price}</div>
                <div>{food.description}</div>
              </div>
            );
          })}
        </div>
      </AdminLayout>
    </div>
  );
}
