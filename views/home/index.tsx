import { FC } from "react";
import { Main, Aside } from "./elements";

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
