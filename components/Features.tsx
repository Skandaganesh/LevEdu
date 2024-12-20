import Card from "./Card";

const Features = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
    <Card title="Purpose" description="To provide syllabus-related content..." icon="🎯" />
    <Card title="Goal" description="Foster learning habits..." icon="📈" />
    <Card title="Outcome" description="Enhance student productivity..." icon="📚" />
  </section>
);

export default Features;
