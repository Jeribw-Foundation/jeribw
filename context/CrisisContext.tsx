"use client";

import { createContext, useContext, useState } from "react";

type Crisis = {
  active: boolean;
  message: string;
};

const CrisisContext = createContext<any>(null);

export function CrisisProvider({ children }: { children: React.ReactNode }) {
  const [crisis, setCrisis] = useState<Crisis>({
    active: false,
    message: "",
  });

  return (
    <CrisisContext.Provider value={{ crisis, setCrisis }}>
      {children}
    </CrisisContext.Provider>
  );
}

export function useCrisis() {
  return useContext(CrisisContext);
}