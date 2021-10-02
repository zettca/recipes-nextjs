import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import { readDirSlugs } from "../lib/utils";

type Props = {
  posts: string[];
};

type Params = {};

const Index: NextPage<Props, Params> = ({ posts = [] }) => {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipes app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <Typography color="secondary" variant="subtitle1">
              <Link href={`/post/${post}`}>{post}</Link>
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const posts = readDirSlugs("_posts");

  return {
    props: {
      posts,
    },
  };
};

export default Index;
