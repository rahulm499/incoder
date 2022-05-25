import React from 'react'
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(initialValue);

    const setValue = (value) => {
      window.localStorage.setItem(key, value);
      setStoredValue(value);
    }
  
    return [storedValue, setValue];
}
