"use client";
import CardList from "./cards/card-list";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useState, useEffect } from "react";


export default function Page() {
  const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
  
  const login = async () => {
    await gitHubSignIn();
  }

  const logout = async () => {
    await firebaseSignOut();
  }

  const title = "Free Tarot Reading! 🔮✨";

  return (
   <main className="h-screen flex items-center justify-center bg-black">
      <div>
        <div className="text-white">
          <h2 className="overflow-hidden">
            {[...title].map((char, index) => (
            <span
              className="animate-text-reveal inline-block [animation-fill-mode:backwards] text-4xl"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
            {char !== " " ? char : "\u00A0"}
            </span>
            ))}
          </h2>
        </div>
        <div className="justify-center">
          {user ? (
            <div>
              <p className="overflow-hidden text-white">
              {[...`Welcome, ${user.displayName}!`].map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [animation-fill-mode:backwards] text-xl"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}>
                  {char !== " " ? char : "\u00A0"}
                </span>
                ))}
              </p>
              <div className="grid min-h-[200px] place-content-center p-4 animate-text-reveal [animation-fill-mode:backwards]">
                <div className="group relative transition-transform duration-300 active:scale-95">
                  <Link className="
                    block relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 
                    p-0.5 duration-300 group-hover:scale-110 mt-2 text-center"
                    href="reading">
                    <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold 
                    text-slate-100 duration-300 group-hover:bg-slate-950/50
                    group-hover:text-slate-50 group-active:bg-slate-950/80">
                    Get My Cards
                    </span>
                  </Link>
                  <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu
                    rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500
                    opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50">
                  </span>
                </div>
                <div className="group relative transition-transform duration-300 active:scale-95">
                  <Link className="
                    block relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 
                    p-0.5 duration-300 group-hover:scale-110 mt-2 text-center" 
                    href="cards">
                    <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold 
                    text-slate-100 duration-300 group-hover:bg-slate-950/50
                    group-hover:text-slate-50 group-active:bg-slate-950/80">
                    View All Cards
                    </span>
                  </Link>
                  <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu
                    rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500
                    opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50">
                  </span>
                </div>
                  <button
                  className="bg-red-300 p-2 font-bold border-white border-2 mt-10 rounded-md hover:bg-red-400" 
                  onClick={logout}
                >Logout</button>
              </div>
            </div>
          ) : (
            <div>
              <p className="overflow-hidden text-white">
              {[..."Sign in with GitHub"].map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [animation-fill-mode:backwards] text-xl"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}>
                  {char !== " " ? char : "\u00A0"}
                </span>
                ))}
              </p>
              <div className="grid min-h-[200px] place-content-center p-4 animate-text-reveal [animation-fill-mode:backwards]">
                <div className="group relative w-fit transition-transform duration-300 active:scale-95">
                  <button
                    className=" bg-green-300 px-4 py-2 w-[200px] font-bold border-white border-2 mt-3 rounded-md hover:bg-green-400" 
                    onClick={login}
                  >Login</button>
                  </div>
              </div>
            </div>
          )}
        </div>
        <footer className="p-2 bg-white mt-48 rounded-md opacity-70 dark:bg-gray-800 text-center">
          Created by Chelsea Yang
        </footer>
      </div>
   </main>
  );
}
