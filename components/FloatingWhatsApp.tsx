import React from "react";
import { WHATSAPP_PHONE_NUMBER } from "./QuoteForm";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
        "Salam, EngravingGlass! Məhsullarınız və qiymət haqqında məlumat almaq istərdim."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ilə birbaşa əlaqə"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#25D366]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.777.978-.953 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.232-.244-.587-.492-.507-.677-.516-.175-.009-.376-.011-.577-.011-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.228 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.95.56 3.78 1.54 5.33L2 22l4.82-1.52c1.48.91 3.22 1.44 5.22 1.44 5.53 0 10.02-4.49 10.02-10.02C22.06 6.49 17.57 2 12.04 2zm0 18.25c-1.76 0-3.39-.5-4.78-1.37l-.34-.21-3.32 1.05 1.07-3.23-.23-.37a8.217 8.217 0 0 1-1.28-4.37c0-4.55 3.7-8.25 8.25-8.25 4.55 0 8.25 3.7 8.25 8.25 0 4.55-3.7 8.25-8.25 8.25z" />
      </svg>
    </a>
  );
}
