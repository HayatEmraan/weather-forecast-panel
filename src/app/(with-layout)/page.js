import Header from "@/components/shared/header/navbar";
import UserTable from "@/components/table/table";

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl my-8 px-4">
      <UserTable />
    </main>
  );
}
