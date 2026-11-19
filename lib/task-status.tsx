import {
  CircleCheckBig,
  CircleFadingCheck,
  TrendingUp,
} from "lucide-react";

export const taskStatus = {
  Pending: <TrendingUp />,
  "in progress": <CircleFadingCheck />,
  Done: <CircleCheckBig />,
};

export type TaskStatus = keyof typeof taskStatus;