import Link from "next/link";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Blog() {
  return (
    <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News and Highlights
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Follow our Twitter to keep up on our News and Highlights.
          </p>
        </div>
        <div className="mt-12 ">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="EbenezerLegal"
            options={{ height: 400 }}
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
}
