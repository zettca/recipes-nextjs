import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import marked from "marked";
import { Container, Grid, Typography } from "@material-ui/core";
import { readDirSlugs } from "lib/utils";

type Metadata = {
  title: string;
  description: string;
  tags: string;
  date: Date;
  author: string;
};

type Props = {
  html: string;
  meta: Metadata;
};
type Params = {
  slug: string;
};

const Post: NextPage<Props, Params> = ({ html, meta }) => {
  const { title, description, author, date, tags } = meta;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta title="description" content={description} />
        <meta name="keywords" content={tags} />
        <meta name="author" content={author} />
        <meta property="article:published_time" content={date.toISOString()} />
      </Head>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography component="h1" variant="h4">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              posted by {author} at {date.toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>

        <Grid container item>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Grid>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = readDirSlugs("_posts");
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;

  const markdownWithMeta = fs
    .readFileSync(join("_posts", `${slug}.md`))
    .toString();

  const parsedMd = matter(markdownWithMeta);
  const html = marked(parsedMd.content);
  const meta = parsedMd.data as Metadata;

  return {
    props: {
      html,
      meta,
    },
  };
};

export default Post;
