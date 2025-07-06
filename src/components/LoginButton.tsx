import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

function LoginButton() {
  return (
    <SignInButton mode="modal">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black rounded-lg
             transition-all duration-200 font-medium shadow-lg shadow-yellow-500/20"
      >
        <LogIn className="w-4 h-4 transition-transform" />
        <span>Sign In</span>
      </button>
    </SignInButton>
  );
}
export default LoginButton;