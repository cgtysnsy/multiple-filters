import Image from 'next/image'
import styles from './page.module.css'
import MultipleFilters from './MultipleFilters';

export default function Home() {
  return (
    <div>
      <MultipleFilters />
    </div>
  );
}
