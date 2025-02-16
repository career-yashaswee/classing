interface Activity {
  triggered_by: {
    id: string;
  };
  sent_to: {
    id: string;
  };
  _id: string;
  title: string;
  category: string;
  sub_category: string;
  description: string;
  severity: number;
  date: string; // ISO date format
  time: string; // HH:mm:ss format
  actions: {
    action_id: string;
    url: string;
    _id: string;
  }[];
  contact: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type { Activity };
