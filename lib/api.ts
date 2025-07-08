import axios from 'axios';
import type { Note, NotesResponse, NewNoteData, NotesParams} from "../types/note";

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

export const fetchNoteById = async (id: number) => {
  const res = await axios.get<Note>(`/notes/${id}`,{
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
  return res.data;
};

export const createNote = async (noteData: NewNoteData) => {
  const response = await axios.post<Note>("/notes", noteData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteNote = async (noteId: number) : Promise<Note>  => {
  const response = await axios.delete(`/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getNotes = async (
  params: NotesParams,
): Promise<NotesResponse> => {
  const response = await axios.get<NotesResponse>('/notes', {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

