"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
  const { items, removeItem, total, count, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: "#E8E0D8" }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                color: "#2C2C2C",
              }}
            >
              Your Cart
            </h2>
            <p
              className="text-xs text-[#2C2C2C]/50 mt-0.5"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              {count} item{count !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F5F0E8] transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2C2C2C"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5F0E8] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9927A"
                  strokeWidth="1.5"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#2C2C2C",
                  fontSize: "1.1rem",
                }}
              >
                Your cart is empty
              </p>
              <p
                className="text-sm text-[#2C2C2C]/50 mt-1"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Add some beautiful templates
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-2xl"
                style={{ background: "#FAF8F5" }}
              >
                <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-medium text-[#2C2C2C] truncate"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-xs text-[#2C2C2C]/50 mt-0.5"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {item.category}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span
                      className="text-sm font-semibold text-[#C9927A]"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {item.price === 0 ? "Free" : `$${item.price.toFixed(2)}`}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-[#2C2C2C]/40 hover:text-[#C9927A] transition-colors"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className="p-6 border-t space-y-4"
            style={{ borderColor: "#E8E0D8" }}
          >
            <div className="flex justify-between items-center">
              <span
                className="text-sm text-[#2C2C2C]/60"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Total
              </span>
              <span
                className="text-lg font-semibold text-[#2C2C2C]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              className="w-full py-4 text-white text-sm font-medium tracking-wide rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #C9927A, #B5785F)",
                fontFamily: "var(--font-ui)",
              }}
            >
              Checkout — ${total.toFixed(2)}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 text-[#2C2C2C]/60 text-sm"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
