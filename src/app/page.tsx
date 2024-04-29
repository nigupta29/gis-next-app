import Link from "next/link"

export default function Home() {
  return (
    <div className="container space-y-10 p-5">
      <h3 className="text-6xl">GIS Trial Demo</h3>

      <div>
        <li>
          Discovered this
          <Link
            className="mx-2 font-medium underline underline-offset-2 hover:decoration-purple-500"
            href="https://data.leptonmaps.com/datasets"
            target="__blank__"
          >
            Lepton Maps Tool
          </Link>
          and thought I can replicate or not.
        </li>
        <li>
          I have taken some look datasets on from google (Just picked whatever
          striked in my mind first).
        </li>
        <li>
          Well it&apos;s a first draft wanted to pour everything I know with
          latest tech
        </li>
        <li>
          The Tech Used is - Next.js, Tailwind(shadcn/ui), Prisma, Postgresql,
          React-Leaflet
        </li>
        <li>Kindly have a look below on the available demo</li>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-medium">Avaliable Datasets</h3>

        <li>
          <Link
            className="font-medium underline underline-offset-2 hover:text-purple-500 hover:decoration-purple-500"
            href="/restaurants"
            target="__blank__"
          >
            Restaurants - Area wise Clustering of different restaurants around
            Delhi
          </Link>
        </li>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-medium">Next Datasets</h3>

        <li>
          <Link
            className="font-medium underline underline-offset-2 hover:decoration-purple-500"
            href="https://www.kaggle.com/datasets/aestheteaman01/zomato-restaurants-in-delhi-ncr"
            target="__blank__"
          >
            Zomato Analysis
          </Link>
        </li>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-medium">About Me</h3>

        <li>Well! I&apos;m Nikhil Gupta.</li>
        <li>Just looking around in tech space.</li>
        <li>Come say hi or any feedbacks here</li>
        <li className="space-x-2">
          <Link
            className="font-medium underline underline-offset-2 hover:decoration-purple-500"
            href="https://github.com/nigupta29"
            target="__blank__"
          >
            Github
          </Link>
          <Link
            className="font-medium underline underline-offset-2 hover:decoration-purple-500"
            href="https://twitter.com/jerry_codes"
            target="__blank__"
          >
            Twitter
          </Link>
          <Link
            className="font-medium underline underline-offset-2 hover:decoration-purple-500"
            href="mailto:nikhil.gupts5667@gmail.com"
            target="__blank__"
          >
            Gmail
          </Link>
        </li>

        <li>Atlast! Thanks!</li>
      </div>
    </div>
  )
}
