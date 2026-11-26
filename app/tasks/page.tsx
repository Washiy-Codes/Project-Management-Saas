import { data } from "../../initial-data";
import {Heading} from "@/components/heading"
import { TaskItem } from "../features/tasks/componets/task-item";
type Task = {
  id:string;
  title: string;
  description: string;
  status: string;
};

const Tasks = () => {
  return (
    <div className="mt-18 flex flex-col flex-1 gap-y-8">
        <Heading title="Tasks" description="All tasks at one place"/>
      <div className="flex flex-1 items-center gap-y-4 flex-col">
      {data.map((task: Task) => (
       <TaskItem key={task.id} task={task} />
      ))}
      <div>
      </div>
      </div>
    </div>
  );
};

export default Tasks;