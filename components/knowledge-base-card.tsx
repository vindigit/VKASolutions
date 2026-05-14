import { KnowledgeBaseArticle } from "@/lib/types";

export function KnowledgeBaseCard({ article }: { article: KnowledgeBaseArticle }) {
  return (
    <article className="feature-card stack-sm">
      <p className="eyebrow">Starter Article</p>
      <h3 style={{ margin: 0 }}>{article.title}</h3>
      <p className="muted" style={{ margin: 0 }}>
        {article.summary}
      </p>
    </article>
  );
}
