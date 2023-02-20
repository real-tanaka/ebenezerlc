/* This example requires Tailwind CSS v2.0+ */
import {
  PlusIcon,
  PlusCircleIcon,
  ArrowLeftOnRectangleIcon,
  InformationCircleIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  BookmarkSquareIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  HeartIcon,
  ScaleIcon,
  UserGroupIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Health Legislation and Draft Legislation",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: PlusIcon,
  },
  {
    name: "Health Policy",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: PlusCircleIcon,
  },
  {
    name: "B-BBEE",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ArrowLeftOnRectangleIcon,
  },
  {
    name: "Information, Data and Privacy / Confidentiality",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: InformationCircleIcon,
  },
  {
    name: "Employment Equity",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ChartPieIcon,
  },
  {
    name: "Consumer Rights",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Section Health Care Funding and Access (social security, NHI, medical schemes etc)",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Funding in the Public Health Sector",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BanknotesIcon,
  },
  {
    name: "Ethics / Code of Marketing Practices",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: DocumentIcon,
  },
  {
    name: "Health Professional Legislation",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Economic and Industrial Development",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HomeModernIcon,
  },
  {
    name: "Corporate Governance and Legal Compliance Audits",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Human Rights and Constitutional Law",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: UserGroupIcon,
  },
  {
    name: "Administrative Justice",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ScaleIcon,
  },
  {
    name: "Occupational Health Law",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HeartIcon,
  },
  {
    name: "Assistance with Clinical Forensic Investigations from Medical Schemes",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: LifebuoyIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-indigo-700" id="Features">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Services:
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
          Services we offer at Ebenezer Legal Consultancy
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16 flex">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                {/* 
                <p className="mt-2 text-base text-indigo-200">
                  {feature.description}
                </p>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
