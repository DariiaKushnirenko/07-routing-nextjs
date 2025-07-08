import css from "./Header.module.css"
import Link from 'next/link';
import { getNotes } from '@/lib/api';
import TagsMenu from "../TagsMenu/TagsMenu";


const Header = async () => {
  const tags: TagName[] = await getTags(); //як витягнути масив усіх tags, якщо backend не дає такої функції


  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">NoteHub</Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li><Link href="/">Home</Link></li>
          <li><TagsMenu tags={tags} /></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
