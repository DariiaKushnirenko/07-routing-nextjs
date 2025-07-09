import css from "./Header.module.css"
import Link from 'next/link';
import TagsMenu from "../TagsMenu/TagsMenu"; import type { Tag } from "@/types/note";


const Header = async () => {

 
 const tags: Tag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];
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
