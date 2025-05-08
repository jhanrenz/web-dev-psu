import { Link } from "react-router-dom";

interface NavigationItem {
  title: string;
  href?: string;
  description?: string;
  items?: {
    title: string;
    href: string;
  }[];
}

export const Footer: React.FC = () => {
  const navigationItems: NavigationItem[] = [
    {
      title: "Home",
      href: "/",
      items: [
        { title: "Learn More", href: "/learn-more" },
        { title: "Get Involved", href: "/get-involved" },
      ],
    },
    {
      title: "Eco Tips",
      href: "/eco-tips",
      description: "Simple steps to a greener lifestyle.",
      items: [
        { title: "Reduce, Reuse & Recycle", href: "/eco-tips" },
        { title: "Energy Saving", href: "/eco-tips" },
        { title: "Green Shopping", href: "/eco-tips" },
        { title: "Composting", href: "/eco-tips" },
      ],
    },
    {
      title: "About",
      description: "Learn more about our mission.",
      items: [
        { title: "Our Story", href: "/get-involved" },
        { title: "Mission", href: "/get-involved" },
        { title: "Vission", href: "/get-involved" },
        { title: "Contact", href: "/get-involved" },
      ],
    },
  ];

  return (
    <div className="w-full py-16 lg:py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl tracking-tight max-w-xl font-semibold text-left">
                Live Green, Feel Good 🌿
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-black/75 text-left">
                Inspiring small changes for a big impact on the planet.
              </p>
            </div>
            <div className="flex flex-row gap-12">
              <div className="flex flex-col text-sm leading-relaxed tracking-tight text-black/75 text-left">
                <p>Domanpot</p>
                <p>Asingan</p>
                <p>Pangasinan</p>
              </div>
              <div className="flex flex-col text-sm leading-relaxed tracking-tight text-black/75 text-left">
                <Link to="/terms-and-privacy" className="hover:text-green-600 transition">
                  Terms of Service
                </Link>
                <Link to="/terms-and-privacy" className="hover:text-green-600 transition">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 text-base items-start"
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-xl font-medium hover:text-green-600 transition"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <p className="text-xl font-medium">{item.title}</p>
                )}
                {item.items &&
                  item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.href}
                      className="text-black/75 hover:text-green-600 transition"
                    >
                      {subItem.title}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
