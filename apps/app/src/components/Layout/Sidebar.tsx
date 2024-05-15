import { ParentProps } from "solid-js";
import { cns } from "~/lib/cn";
import { FiMenu } from "solid-icons/fi";

function SingleItem(
  props: ParentProps<{
    flat?: boolean;
  }>
) {
  return (
    <li
      class={cns(
        "flex items-center justify-center",
        "p-2 w-full aspect-square rounded-lg",
        !props.flat && "bg-background",
        !props.flat && "hover:bg-primary hover:text-on"
      )}
    >
      {props.children}
    </li>
  );
}

function Separator() {
  return <div class="border-b border-text opacity-10 w-3/4 my-4" />;
}

export default function Sidebar() {
  return (
    <div class="flex items-stretch h-full">
      <nav class={cns("bg-surface w-12 h-full rounded-md")}>
        <ul class={cns("flex flex-col items-center p-2 h-full")}>
          <SingleItem flat>
            <img src="/images/mark.png" />
          </SingleItem>
          <Separator />
          <SingleItem>
            <FiMenu size={12} />
          </SingleItem>
        </ul>
      </nav>
    </div>
  );
}
