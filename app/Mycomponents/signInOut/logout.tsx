import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function LogOut(){
    return (
        <div className="flex py-3 px-5 gap-3">
            <Link href="/profile"><Button>Profile</Button></Link>
            <LogoutLink><Button>Logout</Button></LogoutLink>
        </div>
    )
}