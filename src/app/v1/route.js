import prisma from "@/libs/prisma";

export async function POST(request) {
  const getProjects = await prisma.projects.findMany();
  if (!getProjects) {
    return Response.json({ status: 500, message: "error" });
  } else {
    return Response.json({ status: 200, message: "ok", data: getProjects });
  }
}
