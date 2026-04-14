import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function SignInOut() {
    return (
         <div className="flex gap-3 px-3 py-3">
                <RegisterLink><Button>Sign up</Button></RegisterLink>
                <LoginLink><Button>Sign in</Button></LoginLink>
              </div>
    )
}