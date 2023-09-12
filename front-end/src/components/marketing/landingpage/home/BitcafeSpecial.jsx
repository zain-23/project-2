import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const BitcafeSpecial = () => {
  const features = [
    {
      description:
        "Who can resist the intoxicating aroma of specialty coffee, brought to you directly from the small farms of El Salvador.",
      icon: CloudArrowUpIcon,
    },
    {
      description:
        "Want to take a trip on the wild side? Try a peer-to-peer payment with Bitcoin over the Lightning Network. Speedy, low-fee, and super cool!.",
      icon: LockClosedIcon,
    },
    {
      description:
        "Our bean-to-cup mantraensures a uniquely high quality café experience that does not break the bank.",
      icon: ArrowPathIcon,
    },
    {
      description:
        "Need help? Our Genius Bar wizards are always ready to help you through the setup, acquisition, and transaction process. But do not worry, we have not forgotten our roots good old-fashioned cash works just fine, too.",
      icon: FingerPrintIcon,
    },
  ];
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-[1450px] mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The BitCafe Special Blend Coffee. Conversation . Community
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default BitcafeSpecial;
