import { NextPage } from "next";
import SEO from "@/components/seo";
import Home from "@/views/home";

const HomePage: NextPage = () => (
  <>
    <SEO title="Home" />
    <Home />
  </>
);

export default HomePage;
