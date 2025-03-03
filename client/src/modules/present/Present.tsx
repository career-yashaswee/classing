"use client";
import "@liveblocks/react-ui/styles.css";
import { API_ } from "@/data/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRoom } from "@liveblocks/react";
export function Present() {
  const [doubts, setDoubts] = useState([]);
  const room = useRoom(); // Get LiveBlocks room

  useEffect(() => {
    const fetchDoubts = async () => {
      const response = await axios.get(
        API_.DOUBT.GET_DOUBTS_BY_SESSION(room.id)
      );
      setDoubts(response.data);
    };
    fetchDoubts();
  }, []);

  useEffect(() => {
    const unsubscribe = room.subscribe(
      "event",
      (event) => {
        console.log(event);
        console.log(doubts);
        if (event.event.type === "new_doubt") {
          setDoubts((prev) => [...prev, event.event.doubt]);
          console.log(doubts);
        }
      },
      {
        onError: (error) => {
          console.error("Error subscribing to events:", error);
        },
      }
    );
    return () => unsubscribe();
  }, [room]);
  return (
    <div>
      <h2>Live Doubts</h2>
      <ul>
        {doubts.map((doubt, index) => (
          <li key={index}>
            <strong>{doubt.studentId}:</strong> {doubt.doubtText}
            <span> ({new Date(doubt.timestamp).toLocaleTimeString()})</span>
            <span>{doubt.tags.map((tag) => `#${tag}`)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Present;
