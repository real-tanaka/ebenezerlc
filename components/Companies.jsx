import SANAC from "../images/SANAC.png";
import AWIB from "../images/AWIB.png";
import DOSD from "../images/DOSD.png";
import Image from "next/image";

export default function Comapnies() {
  return (
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-4">
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left">
                Trusted by the following companies
              </h2>
              <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  height={200}
                  width={200}
                  className="h-100 w-100 rounded-full"
                  src={AWIB}
                  alt="AWIB"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  height={200}
                  width={200}
                  className="h-100 w-100 rounded-full"
                  src={SANAC}
                  alt="SANAC"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                <Image
                  height={200}
                  width={200}
                  className="h-100 w-100 rounded-full"
                  src={DOSD}
                  alt="DOSD"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
