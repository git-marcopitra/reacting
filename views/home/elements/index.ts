import { HTMLAttributes } from "react";
import stylin from "@stylin.js/react";

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "color" | "translate">;

export const Main = stylin<DivProps>("main")({
  padding: "5rem",
  gap: "1rem",
  display: "grid",
  height: "100vh",
  gridTemplateColumns: "1fr 1fr",
});

export const Aside = stylin<DivProps>("aside")({
  padding: "2rem",
  borderRadius: "0.5rem",
});
