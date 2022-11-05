export const formatPrice = (price) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "GBP",
  }).format(price);
