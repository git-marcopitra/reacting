import Head from "next/head";
import { FC } from "react";
import { SEOProps } from "./seo.types";

// const SEO: FC<{ title: string }> = (props) => {
//   return (
//     <Head>
//       <title>{props.title} | Reacting</title>
//     </Head>
//   );
// };

// const SEO: FC<{ title: string }> = (props) => (
//   <Head>
//     <title>{props.title} | Reacting</title>
//   </Head>
// );

// const SEO: FC<{ title: string }> = ({ title }) => (
//   <Head>
//     <title>{title} | Reacting</title>
//   </Head>
// );

// const SEO: FC<SEOProps> = (props) => (
//   <Head>
//     <title>{props.title} | Reacting</title>
//   </Head>
// );

const SEO: FC<SEOProps> = ({ title }) => (
  <Head>
    <title>{title} | Reacting</title>
  </Head>
);

export default SEO;
