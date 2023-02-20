/* This example requires Tailwind CSS v2.0+ */
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Business Visa",
    description:
      "The Business Visa is a Temporary Residency Visa that allows a foreigner to",
    icon: GlobeAltIcon,
  },
  {
    name: "Critical Skills Visa",
    description:
      "The Critical Skills Visa is a Temporary Residency visa that was introduced",
    icon: ScaleIcon,
  },
  {
    name: "Intra-Company Transfer Visa",
    description:
      "A Intra-Company Transfer Visa is a Temporary Residency visa for a multi-national",
    icon: BoltIcon,
  },
  {
    name: "Relative Visa",
    description:
      "A Relatives Visa is a Temporary Residency visa issued to a foreigner who is",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Tourist Visa",
    description:
      "A Tourist/Holiday Visa is a short term visitor’s visa which allows the holder",
    icon: GlobeAltIcon,
  },
  {
    name: "Permanent Residence",
    description:
      "Are you eligible to apply for a proof of permanent residency application?If you are currently a permanent residency holder in South Africa",
    icon: ScaleIcon,
  },
  {
    name: "General Work Visa",
    description:
      "A General Work Visa is a Temporary Residency Visa that allows the holder",
    icon: BoltIcon,
  },
  {
    name: "Life Partner Visa",
    description:
      "A Life Partner visa is a Temporary Residency Visa issued to a foreigner who",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Volunteer Visa",
    description:
      "A Volunteer Visa is a visitor’s visa that allows the holder to reside in South Africa",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Feature2() {
  return (
    <>
      <div className="h-4 bg-indigo-600 w-full"></div>
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg font-semibold text-indigo-600">
              Immigration
            </h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Our Immigration Services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The basic function of our Immigration services is to assess your
              eligibility for residency in South Africa and to assist and guide
              you throughout this process.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="h-4 bg-indigo-600 w-full"></div>
    </>
  );
}
