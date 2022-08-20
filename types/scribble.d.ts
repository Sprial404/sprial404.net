/** A collection of metadata about a Scribble post contained in the Markdown's frontmatter. */
export type ScribbleFrontmatter = {
  /** A unique, human-readable, URL-friendly identifier for the post. */
  slug: string;

  /** The permament absolute URL to the post. */
  permalink: string;

  /**
   * The publication date of the post in ISO 8601 format, which can be set
   * to a future date to schedule a post to be published in the future.
   */
  date: string;

  /** The short title of the post. */
  title: string;

  /** An optional list of tags for the post. */
  tags?: string[];

  /** An optional longer description of the post. */
  description?: string;

  /** An optional list of authors for the post. */
  authors?: string[];

  /** An optional image to use as the post's thumbnail. */
  image?: string;

  /** Whether the post is a draft and should not be published regardless of its `date`. */
  draft?: boolean;
};

/** The frontmatter and markdown content of a Scribble post. */
export type ScribbleSource = {
  /** The frontmatter of the post. */
  frontmatter: ScribbleFrontmatter;

  /** The markdown content of the post. */
  content: string;
};
