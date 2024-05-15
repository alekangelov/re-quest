import { For, createMemo, createSignal } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { cns } from "~/lib/cn";

interface P {
  children?: JSX.Element[];
  position?: "vertical" | "horizontal";
  initialSize?: number[];
  class?: string;
}

interface G {
  position: "vertical" | "horizontal";
  class?: string;
  style?: string;
}

const Gutter = (props: G) => (
  <div
    data-gutter
    style={props.style}
    class={cns(
      "absolute h-full z-10 select-none",
      "before:content-[''] bg-",
      "hover:before:opacity-100 before:opacity-0 before:w-full before:absolute before:h-full before:bg-primary",
      props.class,
      props.position === "horizontal"
        ? "w-1 cursor-col-resize"
        : "h-1 cursor-row-resize"
    )}
  />
);

export default function Resizable(props: P) {
  props.position ||= "horizontal";

  const [sizes, setSize] = createSignal(
    props.initialSize ??
      Array.from(
        { length: props.children?.length ?? 0 },
        () => 1 / (props.children?.length ?? 1)
      )
  );

  return (
    <div
      class={cns(
        "relative flex h-full w-full overflow-hidden",
        props.class,
        props.position === "horizontal" ? "flex-row" : "flex-col"
      )}
    >
      <For each={props.children}>
        {(child, i) => (
          <div
            style={`${props.position === "horizontal" ? "width" : "height"}: ${(sizes().at(i()) || 1 / (props.children?.length ?? 1)) * 100}%`}
            class={cns("flex h-full overflow-auto")}
          >
            {child}
          </div>
        )}
      </For>
      <For each={sizes()}>
        {(size) => {
          return (
            <Gutter
              position={props.position || "horizontal"}
              style={cns(`left: ${size * 100}%`)}
            />
          );
        }}
      </For>
    </div>
  );
}
