// @ts-nocheck
import { Link } from "nextra-theme-docs";
import { getPagesUnderRoute } from "nextra/context";

export default function BlogIndex({ more = "Read more" }) {
  return getPagesUnderRoute("/blog").map((page) => {
    return (
      <div key={page.route} className="mb-10">
        <h3>
          <Link
            href={page.route}
            style={{ color: "inherit", textDecoration: "none" }}
            className="block font-semibold mt-8 text-2xl "
          >
            {page.meta?.title || page.frontMatter?.title || page.name}
          </Link>
        </h3>
        <p className="opacity-80 mt-6 leading-7">
          {page.frontMatter?.description}{" "}
          <span className="inline-block">
            <Link href={page.route} className="decoration-from-font">
              {more + " →"}
            </Link>
          </span>
        </p>
        {page.frontMatter?.date ? (
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-6 leading-7">
            {page.frontMatter.date}
          </p>
        ) : null}
      </div>
    );
  });
}
