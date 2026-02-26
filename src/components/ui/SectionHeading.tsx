import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) return title;

    const index = title.indexOf(highlight);
    if (index === -1) return title;

    const before = title.slice(0, index);
    const after = title.slice(index + highlight.length);

    return (
      <>
        {before}
        <span className="text-gold-400">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <div className={cn(centered && "text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-widest mb-3",
            light ? "text-primary-300" : "text-primary-500"
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "font-heading line-accent",
          light ? "text-white" : "text-base-800",
          centered && "line-accent-center"
        )}
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-relaxed",
            light ? "text-warm-300" : "text-warm-600",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
