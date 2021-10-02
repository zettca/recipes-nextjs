import fs from "fs";

export const readDirSlugs = (directory: string) => {
  const files = fs.readdirSync(directory);
  const slugs = files.map((fileName) =>
    fileName.slice(0, fileName.indexOf("."))
  );
  return slugs;
};
