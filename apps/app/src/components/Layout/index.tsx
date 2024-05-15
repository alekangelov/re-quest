import { cns } from "~/lib/cn";
import Resizable from "../Resizable";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <main
      class={cns(
        "w-full h-[100vh] overflow-hidden max-h-[100vh] flex items-center p-4"
      )}
    >
      <Sidebar />
      <Resizable class="bg-surface ml-2" initialSize={[0.25, 0.75]}>
        <div class="rounded-md w-full h-full">Left</div>
        <div class="rounded-md w-full h-full">Right</div>
      </Resizable>
    </main>
  );
}
