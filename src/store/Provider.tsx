"use client";

import { Provider as ProviderRedux } from "react-redux";
import { store } from ".";



export default function Provider({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <ProviderRedux store={store}>
      {children}
    </ProviderRedux>
  );
}