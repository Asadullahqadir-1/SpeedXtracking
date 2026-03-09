import Link from "next/link";

const navItems = [
  { href: "/track-package", label: "Track Package" },
  { href: "/carriers", label: "Carriers" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-brand-700">
          SpeedXTracking
        </Link>
        <nav className="w-full overflow-x-auto sm:w-auto">
          <ul className="flex min-w-max items-center gap-4 text-sm font-medium text-slate-700 sm:gap-5">
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
