import Link from "next/link";

const navItems = [
  { href: "/track-package", label: "Track Package" },
  { href: "/carriers", label: "Carriers" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-brand-700">
          SpeedXTracking
        </Link>
        <nav>
          <ul className="flex items-center gap-5 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
