import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Logo from "@components/logo";

const themeConfig: DocsThemeConfig = {
  project: {
    link: "https://github.com/erlang",
  },
  docsRepositoryBase: "https://github.com/erlang/erlang-org/blob/master",
  toc: {
    float: true,
  },
  search: {
    placeholder: "Search erlang.org",
  },
  editLink: {},
  feedback: {},
  logo: () => {
    return (
      <>
        <Logo height={42} />
        {/* <span
          className="mx-2 font-extrabold hidden md:inline"
          title={`Erlang: Practical functional programming for a parallel world`}
        >
          Erlang
        </span> */}
      </>
    );
  },
  head: () => {
    const { route, locales, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = "Practical functional programming for a parallel world";
    // const description = useLocalesMap(headDescriptionMap);

    const imageUrl = new URL("https://swr-card.vercel.app");

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", title || titleSuffix);
    }

    const contentLanguage = "en";
    const ogTitle = title ? `${title} - Erlang` : `Erlang: ${titleSuffix}`;
    const ogDescription = frontMatter.description || "description";
    const ogImage = frontMatter.image || imageUrl.toString();

    return (
      <>
        {/* Favicons, meta */}
        <title>{"%s - Erlang"}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta httpEquiv="Content-Language" content={contentLanguage} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Erlang" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={locale} />
      </>
    );
  },
  footer: {
    content: null,
  },
};

export default themeConfig;
