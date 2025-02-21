"use client";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { InputOtp } from "@nextui-org/input-otp";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Link from "next/link";
import { useState } from "react";
import SignIn from "@/app/components/signin";

const Register = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex items-center md:flex-row flex-col w-full p-6 bg-gray-100 dark:bg-gray-900 h-screen">
        <div className="p-12 flex flex-col items-center md:w-1/2 w-full text-blue-600">
          <h1 className="text-7xl font-bold text-orange-500">Welcome</h1>
          <h1 className="text-6xl font-bold text-orange-500">to zipit</h1>
        </div>
        <Card className="flex flex-col md:w-1/2 items-center gap-4 justify-center w-full md:h-1/2 p-4 dark:bg-gray-800">
          <SignIn />
          <div className="flex justify-between w-10/12 gap-3 items-center">
            <Input
              placeholder="Email"
              type="email"
              size="lg"
              variant="bordered"
              color="primary"
              className="w-5/6 text-xl dark:text-white"
            />
            <Button
              className="bg-orange-500 text-white text-lg h-10"
              onPress={() => {
                onOpen();
              }}
            >
              Verify
            </Button>
          </div>
          <Input
            placeholder="Password"
            size="lg"
            variant="bordered"
            color="primary"
            className="w-10/12 dark:text-white"
          />
          <Input
            placeholder="Confirm Password"
            size="lg"
            variant="bordered"
            color="primary"
            className="w-10/12 dark:text-white"
          />
          <Button className="bg-orange-500 text-white text-2xl w-10/12 h-12">
            Sign Up
          </Button>
        </Card>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="dark:bg-slate-800"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <h1 className="text-lg pr-5">
                    Enter the{" "}
                    <span className="text-orange-400">6 digit OTP</span> sent to
                    your Email
                  </h1>
                  <InputOtp
                    length={6}
                    className="dark:text-white"
                    color="primary"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    onPress={onClose}
                    className="bg-orange-500 text-white text-lg"
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Register;
// ("use client");
// import { Button } from "@nextui-org/button";
// import { Input } from "@nextui-org/input";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
// } from "@nextui-org/modal";
// import Link from "next/link";
// import { JSX, SVGProps } from "react";

// export const MailIcon = (
//   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
// ) => {
//   return (
//     <svg
//       aria-hidden="true"
//       fill="none"
//       focusable="false"
//       height="1em"
//       role="presentation"
//       viewBox="0 0 24 24"
//       width="1em"
//       {...props}
//     >
//       <path
//         d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// };

// export const LockIcon = (
//   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
// ) => {
//   return (
//     <svg
//       aria-hidden="true"
//       fill="none"
//       focusable="false"
//       height="1em"
//       role="presentation"
//       viewBox="0 0 24 24"
//       width="1em"
//       {...props}
//     >
//       <path
//         d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
//         fill="currentColor"
//       />
//       <path
//         d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// };

// export default function App() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <>
//       <Button color="primary" onPress={onOpen}>
//         Open Modal
//       </Button>
//       <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
//               <ModalBody>
//                 <Input
//                   endContent={
//                     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="Email"
//                   placeholder="Enter your email"
//                   variant="bordered"
//                 />
//                 <Input
//                   endContent={
//                     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="Password"
//                   placeholder="Enter your password"
//                   type="password"
//                   variant="bordered"
//                 />
//                 <div className="flex py-2 px-1 justify-between">
//                   <Link color="primary" href="#">
//                     Forgot password?
//                   </Link>
//                 </div>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="flat" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Sign in
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
