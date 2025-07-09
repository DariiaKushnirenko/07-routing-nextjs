
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';

type NotePreviewProps = {
    params: { id: string };
  };
  
  const NotePreview = async ({ params }: NotePreviewProps) => {
      const note = await fetchNoteById(Number(params.id));

    return (
      <Modal onClose={() => {}}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </Modal>
    );
  };
  
  export default NotePreview