import { taskStatus } from "@/lib/task-status";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { data } from "../../../initial-data";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const TaskDetailsContent = async ({ params }: Props) => {
  const { id } = await params;

  const task = data.find((task) => task.id === id);

  if (!task) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col mt-8 p-4 gap-8 items-center ">
    <Card className="w-full max-w-[420]">
      <CardHeader>
        <CardTitle>{taskStatus[task.status]} {task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {task.description}
      </CardContent>
    </Card>
    </div>
  );
};

// This is the main page
const TaskDetailsPage = ({ params }: Props) => {
  return (
    <Suspense fallback={<p>Loading task...</p>}>
      <TaskDetailsContent params={params} />
    </Suspense>
  );
};

export default TaskDetailsPage;

