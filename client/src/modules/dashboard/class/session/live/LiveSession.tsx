import Present from "@/modules/present/Present";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

import { useParams } from "react-router-dom";

function LiveSession() {
  const { sessionID } = useParams<{ sessionID: string }>();
  return (
    <LiveblocksProvider
      publicApiKey={import.meta.env.VITE_LIVEBLOCKS_PUBLIC_API_KEY}
    >
      <RoomProvider id={sessionID || ""}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <Present />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

export default LiveSession;
