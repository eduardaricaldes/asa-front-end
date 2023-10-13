import React from "react";
import Image from 'next/image';
import asalogo from '@/assets/asalogo.svg';
import Button from "@/components/Button";

function Login() {
  return (
    <div className="login bg-[#54BF64]">
      <div className="skewed"></div>
      <div className="login-container shadow-lg">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <Image src={asalogo} alt="white menu image" width={100} height={100} />
          <h1 className="text-2xl font-semibold mt-4 text-white	">Login</h1>
          <div className="p-4 w-80 mt-4 login-form bg-white rounded-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium">Nome</label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-1 border-b border-gray-300 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium">Senha</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-1 border-b border-gray-300 focus:outline-none"
                  
                />
              </div>
              <div className="mb-4">
                <Button type="submit" className="bg-[#54BF64] rounded-full mb-2 w-full ">
                  Entrar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
