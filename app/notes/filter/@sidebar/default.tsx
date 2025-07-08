import css from "./SidebarNotes.module.css";
import Link from "next/link";
import { getNotes } from "@/lib/api"; 
import type { TagName } from "@/types/note";

const SidebarNotes = async () => { 
  //? як тут дістати масив тегів нотаток, аби далі з ними працювати//
  const tags: TagName[] = await getNotes();

  return (
    <div>
      <ul className={css.menuList}>
        {/* Посилання на всі нотатки */}
        <li className={css.menuItem}>
          <Link href="/notes/filter/All" className={css.menuLink}>
            All
          </Link>
        </li>

        {/* Динамічний список тегів */}
        {tags.map((tag) => (
          <li key={tag.id} className={css.menuItem}>
            <Link href={`/notes/filter/${tag.name}`} className={css.menuLink}>
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNotes;
