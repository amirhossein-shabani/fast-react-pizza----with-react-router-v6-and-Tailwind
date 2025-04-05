import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="flex flex-wrap items-center justify-between gap-1 py-3 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-lg font-medium text-red-500">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
