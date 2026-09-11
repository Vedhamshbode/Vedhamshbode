import { Navigate, Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

function splitContent(content) {
  if (!content) {
    return [];
  }

  if (Array.isArray(content)) {
    return content;
  }

  return content.split(/\n\s*\n/).filter(Boolean);
}

function renderBlock(block, index, postId) {
  const key = `${postId}-block-${index}`;

  if (typeof block === "string") {
    return (
      <p key={key} className="text-ash leading-relaxed mb-5">
        {block}
      </p>
    );
  }

  if (!block || !block.type) {
    return null;
  }

  switch (block.type) {
    case "heading":
      return (
        <h2 key={key} className="font-display text-3xl text-bone mt-12 mb-4">
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 key={key} className="font-display text-2xl text-bone mt-9 mb-3">
          {block.text}
        </h3>
      );

    case "image":
      return (
        <figure key={key} className="my-8 space-y-3">
          <img
            src={block.src}
            alt={block.alt || ""}
            className="w-full h-auto rounded-sm border border-copper-dim/35"
          />
          {block.caption && <figcaption className="text-sm text-ash/75">{block.caption}</figcaption>}
        </figure>
      );

    case "list":
      return (
        <ul key={key} className="space-y-2 mb-6">
          {(block.items || []).map((item, idx) => (
            <li key={`${key}-item-${idx}`} className="text-ash/95 flex gap-3">
              <span className="text-copper mt-1.5 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          key={key}
          className="my-7 border-l-2 border-copper pl-4 text-ash/90 italic leading-relaxed"
        >
          {block.text}
        </blockquote>
      );

    default:
      return (
        <p key={key} className="text-ash leading-relaxed mb-5">
          {block.text || ""}
        </p>
      );
  }
}

export default function BlogPostPage() {
  const { postId } = useParams();
  const post = posts.find((entry) => entry.id === postId);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const contentBlocks = post.body?.length ? post.body : splitContent(post.content);

  return (
    <article className="px-6 sm:px-10 pt-28 pb-24 sm:pt-32">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blogs"
          className="inline-block text-copper-soft border-b border-copper-dim hover:border-copper-soft transition-colors mb-8"
        >
          Back to all posts
        </Link>

        <header className="mb-9">
          <p className="text-sm text-ash/70 mb-3">{post.date}</p>
          <h1 className="font-display text-4xl sm:text-5xl text-bone leading-tight mb-4">{post.title}</h1>
          {post.excerpt && <p className="text-ash leading-relaxed">{post.excerpt}</p>}
        </header>

        {post.cover && (
          <figure className="mb-10 space-y-3">
            <img
              src={post.cover}
              alt={post.coverAlt || post.title}
              className="w-full h-auto rounded-sm border border-copper-dim/35"
            />
            {post.coverCaption && <figcaption className="text-sm text-ash/75">{post.coverCaption}</figcaption>}
          </figure>
        )}

        <div className="max-w-none">{contentBlocks.map((block, index) => renderBlock(block, index, post.id))}</div>
      </div>
    </article>
  );
}
