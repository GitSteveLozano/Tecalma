import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    clearCart();
    onClose();
    toast.success("Order placed! We'll be in touch shortly. 🌺");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal/40 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-charcoal/10">
          <h2 className="font-display text-xl font-bold text-charcoal">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-charcoal/60 hover:text-charcoal text-2xl leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 cart-scroll">
          {items.length === 0 ? (
            <p className="text-charcoal/50 font-body text-center mt-12">
              Your cart is empty. Time to add some tortillas! 🫓
            </p>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.productId}
                  className="bg-warm-white rounded-2xl p-4 flex items-center gap-4 shadow-sm"
                >
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-charcoal">{item.name}</h3>
                    <p className="text-sm text-charcoal/60 font-body">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-teal/10 text-teal font-bold flex items-center justify-center hover:bg-teal/20 cursor-pointer"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-body font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-teal/10 text-teal font-bold flex items-center justify-center hover:bg-teal/20 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-charcoal/30 hover:text-red-500 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-charcoal/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body font-700 text-charcoal">Subtotal</span>
              <span className="font-display text-xl font-bold text-teal">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-charcoal/50 font-body">
              Currently shipping within Hawai'i only 🏝️
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-teal text-white font-body font-700 py-3 rounded-full hover:bg-teal-dark transition-colors shadow-md cursor-pointer"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
