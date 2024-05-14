import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <main classList={{
        "w-full h-[100vh] overflow-hidden max-h-[100vh] flex items-center": true,
    }}>
      <Sidebar />
    </main>
  );
}
