"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

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
   <main className="h-screen flex items-center justify-center">
      <div>
        <div className="bg-black ">
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
        <div>
          {user ? (
            <div>
              <p className="overflow-hidden">
              {[...`Welcome, ${user.displayName}!`].map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [animation-fill-mode:backwards] text-xl"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}>
                  {char !== " " ? char : "\u00A0"}
                </span>
                ))}
              </p>
              <div className="grid min-h-[200px] place-content-center p-4">
                <div className="group relative w-fit transition-transform duration-300 active:scale-95">
                  <Link className="
                    block relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 
                    p-0.5 duration-300 group-hover:scale-110" 
                    href="main">
                    <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold 
                    text-slate-100 duration-300 group-hover:bg-slate-950/50
                    group-hover:text-slate-50 group-active:bg-slate-950/80">
                    Get My Reading
                    </span>
                  </Link>
                  <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu
                    rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500
                    opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50">
                  </span>
                </div>
              </div>
              <button
                className="
                bg-red-600
                p-2
                rounded-md
                hover:bg-red-400" 
                onClick={logout}
              >Logout</button>
            </div>
          ) : (
            <div className="">
              <p className="">Sign in with GitHub</p>
              <button
                className="
                  bg-green-600 
                  p-2 
                  rounded-md
                  hover:bg-green-500"
                onClick={login}
              >Sign in</button>
            </div>
          )}
        </div>
      </div>
   </main>
   
  );
}
