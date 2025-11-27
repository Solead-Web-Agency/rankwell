import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const getMarkDownData = (folder: string, reversedSort?: boolean, sortBy?: string) => {
  if (!sortBy) {
    sortBy = 'title';
  }
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const postsData = markdownPosts.map((file) => {
    const filePath = path.join(folder, file);
    const content = fs.readFileSync(filePath, 'utf8');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = matter(content);
    return {
      ...data.data,
      slug: file.replace('.md', ''),
      content: data.content,
    };
  });

  const sortedPosts = postsData.sort((a, b) => {
    const fieldA = a[sortBy] || '';
    const fieldB = b[sortBy] || '';
    return fieldA.localeCompare(fieldB);
  });
  if (reversedSort) {
    return sortedPosts.reverse();
  }
  return sortedPosts;
};

export default getMarkDownData;
