import React from "react";
import { StoreService } from "../types";

export const StoreContext = React.createContext<StoreService | undefined>(undefined);