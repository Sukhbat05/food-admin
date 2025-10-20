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
        </div>
      </AdminLayout>
    </div>
  );
}
