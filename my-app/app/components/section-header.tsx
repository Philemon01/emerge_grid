export default function SectionHeader({ 
  title, 
  subtitle, 
  description,
  centered = false 
}: { 
  title: string; 
  subtitle?: string; 
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${centered ? 'text-center' : ''}`}>
      <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
        {title}
      </h3>
      {subtitle && (
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          {subtitle}
        </h2>
      )}
      {description && (
        <p className={`mt-4 text-base leading-7 text-zinc-600 max-w-2xl sm:text-lg ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
