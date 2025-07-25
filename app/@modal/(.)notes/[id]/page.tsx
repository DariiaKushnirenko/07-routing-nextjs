import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
;
import NotePreviewClient from './NotePreview.client';

type NoteDetailsProps = {
    params: Promise <{ id: string }>;
  };
  
export default async function NotePreview({ params }: NoteDetailsProps) {
    const { id } = await params;
    const parsedId = Number(id);
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["note", parsedId],
        queryFn: () => fetchNoteById(parsedId),
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotePreviewClient id = {parsedId} />
        </HydrationBoundary>
    )
  }