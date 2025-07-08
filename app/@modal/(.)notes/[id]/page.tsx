
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';

type Props = {
  params: Promise<{ id: string }>;
};
const NotePreview = async ({ params }: Props) => {
    const { id } = await params;
    
//створити окрему функцію для отримання однієї нотатки?//
  const note = await fetchNoteById (id);

  return (
      <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;
