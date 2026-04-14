"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Category from "./Mycomponents/Category";
import Data from "./Mycomponents/Data";
import PasteExpire from "./Mycomponents/Paste_Expire";
import SyntaxHighlight from "./Mycomponents/Syntax_Highlight";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Input from "./Mycomponents/Input";


export default function Home() {

  const {isAuthenticated} = useKindeBrowserClient();

  const [code , setCode] = useState("");
  const [category , setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [expiry, setExpiry] = useState("");
  const [pasteName , setPasteName] = useState("");


  const handleCreatePaste = async () => {

    if(!isAuthenticated){
      alert("You must be logged in");
      return ;
    }

    if (!code || !category || !language || !expiry || !pasteName) {
      alert("All fields are required");
      return;
    }

    const response = await fetch("/api/paste", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        category,
        language,
        expiry,
        pasteName
      }),
    });

    const data = await response.json();
   
    if(!response.ok){
      alert(data.message);
      return ;
    }
    
    console.log("Paste URL:" , data.pasteUrl)
    window.open(data.pasteUrl, "_blank");

    setCode("");
    setCategory("");
    setLanguage("");
    setExpiry("");
    setPasteName("");
  };

  return (
    <main>
      <div>
        
          <Data code={code} setCode={setCode}/>
          <div className="mt-3 space-y-4">
          <Input value={pasteName} onChange={setPasteName} />
          <Category value ={category} onChange = {setCategory}/>
          <SyntaxHighlight value={language} onChange = {setLanguage}/>
          <PasteExpire value = {expiry} onChange = {setExpiry}/>
          <Button onClick={handleCreatePaste}>Create Paste</Button> 
          {/* when user hit this button it will call an api */}
          {/* But also i have to make sure that user is authenticated while creating paste */}
        </div>
      </div>
    </main>
  );
}
