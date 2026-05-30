import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  breadcrumb,
  backgroundImage = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200",
}: PageHeaderProps) {
  const currentBreadcrumb = breadcrumb || title;

  return (
    <section className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Navy Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out hover:scale-105"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-primary/85 to-navy-dark/95" />

      {/* Grid Pattern Overlay for Premium Feel */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Decorative Gold Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-primary via-yellow-400 to-gold-primary" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4 drop-shadow-md animate-fade-in">
          {title}
        </h1>

        {/* Breadcrumb Trail */}
        <nav className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium text-slate-300">
          <Link
            href="/"
            className="hover:text-gold-primary transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-500" />
          <span className="text-gold-primary font-semibold drop-shadow-sm">
            {currentBreadcrumb}
          </span>
        </nav>
      </div>
    </section>
  );
}
