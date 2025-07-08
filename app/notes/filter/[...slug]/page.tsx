
import NotesClient from './Notes.client';
import { getNotes } from '@/lib/api';

type Props = {
  params: {
    slug: string[]
  };
};

const NotesPageWithFilters = async ({ params }: Props) => {
  const { slug } = params;

  // Якщо вибрано "all", то тег не передаємо (щоб не фільтрувати)
  const category = slug [0] === 'all' ? undefined : slug [0] ;
  const search = slug [1] ?? '';

  const notes = await getNotes({
    search,
    tag: category,
    page: 1,
    perPage: 20,
    sortBy: 'created',
  });

  return (
    <div>
      <h2>Notes</h2>
      <NotesClient initialData={notes} tag={slug[0]} initialSearch={search} />
    </div>
  );
};

export default NotesPageWithFilters;
