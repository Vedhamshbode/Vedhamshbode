import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogsPage() {
  return (
    <section id="blogs" className="px-6 sm:px-10 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl text-bone mb-4">Blog posts</h1>
          <p className="text-ash max-w-2xl leading-relaxed">
            Every post opens in a single-column reading page with headings, subheadings, and inline images.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-ash">No posts published yet. Add your first post in src/data/posts.js.</p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <article key={post.id} className="border border-copper-dim/35 bg-panel rounded-sm p-6 sm:p-7">
                <p className="text-sm text-ash/70 mb-2">{post.date}</p>
                <h2 className="font-display text-2xl text-bone mb-3">{post.title}</h2>
                <p className="text-ash leading-relaxed mb-6">{post.excerpt}</p>
                <Link
                  to={`/blogs/${post.id}`}
                  className="inline-block text-copper-soft border-b border-copper-dim hover:border-copper-soft transition-colors"
                >
                  Read full post
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
