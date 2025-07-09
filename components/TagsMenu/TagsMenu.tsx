"use client";
import css from "./TagsMenu.module.css";
import { useState } from "react";
import Link from "next/link";
import { Tag } from "../../types/note";
type Props = {
  tags: Tag[];
};

export default function TagsMenu({tags }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link
              href={`/notes/filter`}
              className={css.menuLink}
              onClick={toggle}
            >
              All notes
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag.id} className={css.menuItem}>
              <Link
                href={`/notes/filter/${tag.name}`}
                className={css.menuLink}
                onClick={toggle}
              >
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
