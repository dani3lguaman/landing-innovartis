export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/593998620536"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-wa text-white font-black text-[14px] px-[22px] py-[14px] rounded-[50px] hover:opacity-90 hover:scale-105 transition-all"
      style={{ boxShadow: "0 8px 24px rgba(37,211,102,0.45)" }}
    >
      <span className="text-[20px]">💬</span>
      WhatsApp
    </a>
  );
}
