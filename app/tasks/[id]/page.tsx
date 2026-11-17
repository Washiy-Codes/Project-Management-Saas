
// import { data } from "../../../initial-data";
// import { notFound } from "next/navigation";

// type Props = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// const TaskDetails = async ({ params }: Props) => {
//   const { id } = await params;

//   const task = data.find((task) => task.id === id);

//   if (!task) {
//     notFound();
//   }

//   return (
//     <div className="mt-18 p-5">
//       <h1 className="text-2xl font-bold">
//         {task.title}
//       </h1>

//       <p className="mt-3">
//         {task.description}
//       </p>

//       <p className="mt-3">
//         Status: {task.status}
//       </p>
//     </div>
//   );
// };

// export default TaskDetails;



import { data } from "../../../initial-data";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// This component handles the actual task details
const TaskDetailsContent = async ({ params }: Props) => {
  const { id } = await params;

  const task = data.find((task) => task.id === id);

  if (!task) {
    notFound();
  }

  return (
    <div className="mt-18 p-5">
      <h1 className="text-2xl font-bold">
        {task.title}
      </h1>

      <p className="mt-3">
        {task.description}
      </p>

      <p className="mt-3">
        Status: {task.status}
      </p>
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

