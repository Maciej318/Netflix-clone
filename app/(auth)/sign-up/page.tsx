import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GitHubSignInButton from "@/app/components/GitHubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/utils/auth";

export default async function SignUp() {
  const session = await getServerSession(authOptions)

    if(session){
      return redirect('/home')
    }
  return (
    <div className="mt-24 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action='/api/auth/signin'>
        <h1 className="text-3xl font-semibold text-white ">Zarejestruj się</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Input
            type="password"
            name="password"
            placeholder="Hasło"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full text-white bg-[#e50914]"
          >
            Zarejestruj się
          </Button>
        </div>
      </form>
    
      <div className="text-gray-500 text-sm mt-2 ">
        Masz już konto? <Link className="text-white hover:underline" href='/login'>Zaloguj się teraz!</Link>
      </div>
      <div className="text-center text-gray-400 text-base my-4">LUB</div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GitHubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
}
