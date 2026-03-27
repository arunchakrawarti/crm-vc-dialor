import MainDashboard from "@/components/pages/dashboard/Index";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <MainDashboard/>
      </MainLayout>
    </div>
  );
}
