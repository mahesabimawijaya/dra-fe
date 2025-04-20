export function loadSnapScript(callback: () => void) {
  const script = document.createElement("script");
  script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
  script.setAttribute("data-client-key", process.env.MIDTRANS_CLIENT_KEY!); // Replace with your Midtrans client key
  script.onload = callback;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}

export function toRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}
