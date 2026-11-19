import { data } from "../../initial-data";
import Link from "next/link"
import { taskStatus } from "@/lib/task-status";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
// import { CircleCheckBig, CircleFadingCheck, TrendingUp } from "lucide-react";
type Task = {
  id:string;
  title: string;
  description: string;
  status: string;
};

// export const taskStatus = {
//   Pending: <TrendingUp />,
//   "in progress": <CircleFadingCheck />,
//   Done: <CircleCheckBig />
// }

const Tasks = () => {
  return (
    <div className="mt-18 flex flex-col flex-1 gap-y-8">
        <div>
          <h1 className="text-lg tracking-tight">Tasks</h1>
          <p className="text-small">All tasks at one place</p>
        </div>
      <div className="flex flex-1 items-center gap-y-4 flex-col">
      {data.map((task: Task) => (
        <Card key={task.id} className="w-full max-w-105 p-4">
          <CardTitle className="flex gap-2">
            <span>{taskStatus[task.status as keyof typeof taskStatus]}</span> 
            <span className="font-bold">{task.title}</span>
            </CardTitle>
          <CardDescription>{task.description}</CardDescription>
         <Link
              href={`/tasks/${task.id}`}
              className="text-sm underline text-blue"
            >
              View task
            </Link>
        </Card>
      ))}
      <div>
      </div>
      </div>
    </div>
  );
};

export default Tasks;