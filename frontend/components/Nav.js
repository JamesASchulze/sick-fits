import Link from 'next/link';
import NaveStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NaveStyles>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </NaveStyles>
  );
}
