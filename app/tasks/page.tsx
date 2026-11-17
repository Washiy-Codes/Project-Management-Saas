import { data } from "../../initial-data";
import Link from "next/link"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
type Task = {
  id:string;
  title: string;
  description: string;
  status: string;
};

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
          <CardTitle>{task.title}</CardTitle>
          <CardDescription>{task.description}</CardDescription>
         <Link
              href={`/tasks/${task.id}`}
              className="text-sm underline"
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