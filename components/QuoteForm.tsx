"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";

// ============================================================================
// DƏYİŞDİRİLƏCƏK SABİT: WhatsApp nömrənizi ölkə kodu ilə birlikdə bura yazın
// Nümunə: "994501234567" (boşluq və '+' işarəsi olmadan)
// ============================================================================
export const WHATSAPP_PHONE_NUMBER = "994501234567";

const quoteSchema = z.object({
  fullNameOrCompany: z
    .string()
    .min(2, "Zəhmət olmasa Ad Soyad və ya Şirkət adını qeyd edin"),
  phone: z
    .string()
    .min(9, "Zəhmət olmasa düzgün əlaqə nömrəsi daxil edin"),
  product: z.enum([
    "Viski dəstləri",
    "Şərab qədəhləri",
    "Korporativ dəst",
    "Digər",
  ]),
  quantity: z
    .string()
    .min(1, "Sayı qeyd edin")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Zəhmət olmasa müsbət rəqəm yazın",
    }),
  requiredDate: z.string().optional(),
  notes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      product: "Viski dəstləri",
      quantity: "1",
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    const messageLines = [
      "Salam, EngravingGlass! Yeni sifariş / qiymət sorğusu:",
      `👤 Ad/Şirkət: ${data.fullNameOrCompany}`,
      `📞 Əlaqə: ${data.phone}`,
      `🍸 Məhsul: ${data.product}`,
      `🔢 Say: ${data.quantity} ədəd`,
      data.requiredDate ? `📅 Lazım olan tarix: ${data.requiredDate}` : null,
      data.notes ? `📝 Qeyd / Dizayn: ${data.notes}` : null,
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="sorqu" className="border-t border-[var(--border-color)] px-5 py-20 transition-colors md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-wider text-[var(--accent-amber)] uppercase">
            Operativ Əlaqə
          </span>
          <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
            Qiymət təklifi & Fərdi sifariş
          </h2>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            Tələblərinizi qeyd edin, birbaşa WhatsApp üzərindən operativ cavablandıraq.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-12 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 shadow-[var(--card-shadow)] sm:p-10 transition-colors"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Ad Soyad / Şirkət adı */}
            <div className="sm:col-span-2">
              <label
                htmlFor="fullNameOrCompany"
                className="block text-xs font-medium text-[var(--text-primary)]"
              >
                Ad Soyad və ya Şirkət adı <span className="text-[var(--accent-amber)]">*</span>
              </label>
              <input
                id="fullNameOrCompany"
                type="text"
                {...register("fullNameOrCompany")}
                placeholder="məs. Rəşad Əliyev və ya Pasha Holding"
                className="mt-2 w-full rounded-sm border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
              />
              {errors.fullNameOrCompany && (
                <p className="mt-1.5 text-xs text-[var(--accent-amber)]">
                  {errors.fullNameOrCompany.message}
                </p>
              )}
            </div>

            {/* Əlaqə nömrəsi */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-[var(--text-primary)]"
              >
                Əlaqə nömrəsi <span className="text-[var(--accent-amber)]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="məs. +994 50 123 45 67"
                className="mt-2 w-full rounded-sm border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-[var(--accent-amber)]">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Seçilən məhsul */}
            <div>
              <label
                htmlFor="product"
                className="block text-xs font-medium text-[var(--text-primary)]"
              >
                Seçilən məhsul kateqoriyası <span className="text-[var(--accent-amber)]">*</span>
              </label>
              <select
                id="product"
                {...register("product")}
                className="mt-2 w-full rounded-sm border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
              >
                <option value="Viski dəstləri">Viski dəstləri</option>
                <option value="Şərab qədəhləri">Şərab qədəhləri</option>
                <option value="Korporativ dəst">Korporativ dəst</option>
                <option value="Digər">Digər xüsusi şüşə</option>
              </select>
            </div>

            {/* Say */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-xs font-medium text-[var(--text-primary)]"
              >
                Say (ədəd) <span className="text-[var(--accent-amber)]">*</span>
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                {...register("quantity")}
                placeholder="məs. 1 və ya 50"
                className="mt-2 w-full rounded-sm border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
              />
              {errors.quantity && (
                <p className="mt-1.5 text-xs text-[var(--accent-amber)]">
                  {errors.quantity.message}
                </p>
              )}
            </div>

            {/* Lazım olan tarix */}
            <div>
              <label
                htmlFor="requiredDate"
                className="block text-xs font-medium text-[var(--text-primary)]"
              >
                Təhvil tarixi (əgər varsa)
              </label>
              <input
                id="requiredDate"
                type="date"
                {...register("requiredDate")}
                className="mt-2 w-full rounded-sm border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
              />
            </div>

            {/* Qeyd */}
            <div className="sm:col-span-2">
              <label
                htmlFor="notes"
                className="block text-xs font-medium text-[var(--text-primary)]"
              >
                Qeyd və fərdiləşdirmə tələbləri (ad, tarix, loqo formatı)
              </label>
              <textarea
                id="notes"
                rows={3}
                {...register("notes")}
                placeholder="Məsələn: Viski qədəhinə 'E.M. 1988' yazılacaq, qutunun üzərinə isə ailə monoqramı həkk olunmalıdır."
                className="mt-2 w-full rounded-sm border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent-amber)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-gold)]"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#B87333] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#A35D20] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-gold)] sm:w-auto"
            >
              <span>Sorğunu WhatsApp-a göndər</span>
              <Send className="h-4 w-4" />
            </button>

            <p className="mt-3 text-xs text-[var(--text-muted)]">
              Göndərməni siz edirsiniz.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
