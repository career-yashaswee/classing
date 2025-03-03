interface TSession {
  _id: string;
  image: url;
  title: string;
  subject: string;
  description: string;
  duration: number;
  course: string;
  SClass: string;
  topic_tags: string[];
  focus: "example_intensive" | "conceptual" | "practical";
  session_start_time: string;
  session_start_date: string;
}

export type { TSession };
