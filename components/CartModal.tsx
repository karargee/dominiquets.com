"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

export default function CartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button onClick={onClose} className="text-2xl">✕</button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-400 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-gray-400">Qty: {item.quantity}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="font-bold text-primary">{item.price}</div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500">🗑️</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-800 pt-4 mb-4">
                  <div className="flex justify-between text-xl font-bold mb-4">
                    <span>Total:</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold mb-2"
                  >
                    Checkout
                  </motion.button>
                  <button onClick={clearCart} className="w-full text-gray-400 text-sm">Clear Cart</button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
