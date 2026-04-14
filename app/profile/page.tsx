import dbConnect from "@/lib/db";
import Paste from '@/models/paste';

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"


export default async function Profile(){
    const {getUser} = await getKindeServerSession();
    const user = await getUser();

    if(!user){
      return <div>Please login</div>
    }

    await dbConnect();

    const myPastes = await Paste.find({
      owner_id: user.id,
    })
    .sort({createdAt: -1})
    .limit(5);

    return (
    // how can i show user name in this
        <div className="space-y-6">
             <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                    <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
            <div>
                <p><label className="text-lg font-semibold">Name </label>{user?.given_name}</p>
                <p><label className="text-sm text-gray-600">Email - </label>{user?.email}</p>
            </div>

            <div className="border-t border-gray-200" />

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          My Pastes
        </h3>

        
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {myPastes.length === 0 ? (
            <p className="text-sm text-gray-500">
              You haven&apos;t created any pastes yet.
            </p>
          ) : (
            myPastes.map((paste) => (
              <div
                key={paste._id}
                className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition"
              >
                <a href={paste.paste_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{paste.name_of_paste}</a>
              </div>
            ))
          )}
        </div>
      </div>
        </div>
    )
}

