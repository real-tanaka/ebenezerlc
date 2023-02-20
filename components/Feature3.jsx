import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Administrative Law",
    description:
      "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
  },
  {
    name: "Anti-Bribery & Corruption Law",
    description:
      "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.",
  },
  {
    name: "Banking & Finance Law",
    description:
      "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
  },
  {
    name: "Business Rescue Law",
    description:
      "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.",
  },
  {
    name: "Commercial Property Law",
    description:
      "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.",
  },
  {
    name: "Competition Law",
    description:
      "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.",
  },
  {
    name: "Construction & Engineering Law",
    description:
      "Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.",
  },
  {
    name: "Content Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Corporate & Commercial Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Data Protection (POPIA) (GDPR)",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Dispute Resolution",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Education Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Employment Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Energy Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Environmental Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Financial Services Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Fintech & Cryptocurrency Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Franchise Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "International Trade & Investment Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Mergers & Acquisitions (M&A)",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Public Procurement Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Regulatory & Compliance Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Tax Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
  {
    name: "Technology, Media & Telecoms Law",
    description:
      "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
  },
];

export default function Feature3() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
              Legal Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialist Fields
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Clients have access to specialist experience and skills across the
              full range of commercial fields as and when required, without the
              burden of hiring in-house lawyers or the cost of briefing
              traditional firms.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute top-1 left-0 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-10 h-4 bg-indigo-600 w-full"></div>
    </div>
  );
}
