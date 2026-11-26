import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { taskStatus } from "@/lib/task-status";
import Link from "next/link";

type Task = {
  id:string;
  title: string;
  description: string;
  status: string;
};

const TaskItem = ({ task }: { task: Task }) => {
  return (
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
  )
}

export {TaskItem}