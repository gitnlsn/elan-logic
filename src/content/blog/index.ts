import type { ComponentType } from "react";
import HowMuchDoesALandingPageCostContent from "./how-much-does-a-landing-page-cost";
import HowLongDoesItTakeToBuildALandingPageContent from "./how-long-does-it-take-to-build-a-landing-page";
import HowMuchDoesAnEcommerceWebsiteCostContent from "./how-much-does-an-ecommerce-website-cost";
import ShopifyVsCustomEcommerceContent from "./shopify-vs-custom-ecommerce";
import WhatFeaturesShouldYourSaasMvpHaveContent from "./what-features-should-your-saas-mvp-have";
import HowToChooseSaasDevelopmentPartnerContent from "./how-to-choose-saas-development-partner";

export const blogContent: Record<string, ComponentType> = {
  "how-much-does-a-landing-page-cost": HowMuchDoesALandingPageCostContent,
  "how-long-does-it-take-to-build-a-landing-page":
    HowLongDoesItTakeToBuildALandingPageContent,
  "how-much-does-an-ecommerce-website-cost":
    HowMuchDoesAnEcommerceWebsiteCostContent,
  "shopify-vs-custom-ecommerce": ShopifyVsCustomEcommerceContent,
  "what-features-should-your-saas-mvp-have":
    WhatFeaturesShouldYourSaasMvpHaveContent,
  "how-to-choose-saas-development-partner":
    HowToChooseSaasDevelopmentPartnerContent,
};

// Word counts for calculating reading time (approximated from original content)
export const wordCounts: Record<string, number> = {
  "how-much-does-a-landing-page-cost": 1650,
  "how-long-does-it-take-to-build-a-landing-page": 1480,
  "how-much-does-an-ecommerce-website-cost": 1820,
  "shopify-vs-custom-ecommerce": 1720,
  "what-features-should-your-saas-mvp-have": 1850,
  "how-to-choose-saas-development-partner": 1520,
};
