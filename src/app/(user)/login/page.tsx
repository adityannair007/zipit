import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col w-full pt-56 p-6 bg-gray-100 dark:bg-gray-900 h-screen">
        <div className="p-12 flex flex-col items-center md:w-1/2 w-full text-blue-600">
          <h1 className="text-7xl font-bold text-orange-500">Welcome</h1>
          <h1 className="text-6xl font-bold text-orange-500">to zipit</h1>
        </div>
        <Card className="flex flex-col items-center justify-center gap-4 md:w-1/2 w-full md:h-1/2 p-4 dark:bg-gray-800">
          <Input
            placeholder="Email"
            type="email"
            size="lg"
            variant="bordered"
            color="primary"
            className="w-10/12 dark:text-white"
          />
          <Input
            placeholder="Password"
            size="lg"
            variant="bordered"
            color="primary"
            className="w-10/12 dark:text-white"
          />
          <Button className="bg-orange-500 text-white text-2xl w-10/12 h-12">
            Login
          </Button>
          <Link
            href="/register"
            className="underline text-orange-400 flex self-start ml-14"
          >
            Instead create a Zipper?
          </Link>
        </Card>
      </div>
    </>
  );
};

export default Login;
