import { FC, HTMLAttributes } from "react";
import stylin from "@stylin.js/react";

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "color" | "translate">;

const Main = stylin<DivProps>("main")({
  padding: "5rem",
  gap: "1rem",
  display: "grid",
  height: "100vh",
  gridTemplateColumns: "1fr 1fr",
});

const Aside = stylin<DivProps>("aside")({
  padding: "2rem",
  borderRadius: "0.5rem",
});

const Home: FC = () => (
  <Main p="4rem" height="200vh">
    <Aside
      bg="#282828"
      cursor="pointer"
      transition="transform 300ms ease-in-out"
      nHover={{
        bg: "#383838",
        transform: "translateY(-1rem)",
      }}
    >
      Left
    </Aside>
    <Aside bg="#383838">Right</Aside>
  </Main>
);

export default Home;
