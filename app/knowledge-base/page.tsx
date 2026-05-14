import { KnowledgeBaseCard } from "@/components/knowledge-base-card";
import { SiteLayout } from "@/components/site-layout";
import { knowledgeBaseArticles } from "@/data/knowledgeBaseArticles";

export default function KnowledgeBasePage() {
  return (
    <SiteLayout>
      <section className="hero page-hero">
        <p className="eyebrow" style={{ color: "rgba(244, 251, 248, 0.78)" }}>
          Knowledge Base
        </p>
        <h1>Quick help articles for common questions.</h1>
        <p>
          These starter articles cover common support topics customers often need before or during a support request.
        </p>
      </section>

      <section className="card-grid">
        {knowledgeBaseArticles.map((article) => (
          <KnowledgeBaseCard key={article.slug} article={article} />
        ))}
      </section>
    </SiteLayout>
  );
}
