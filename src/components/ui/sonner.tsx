"use client";

import { useTheme } from "next-themes@0.4.6";
import { Toaster as Sonner, ToasterProps } from "sonner@2.0.3";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "bg-gray-900 border-emerald-500/30 text-white shadow-lg",
          title: "text-white font-medium",
          description: "text-gray-300",
          actionButton: "bg-emerald-500 text-white hover:bg-emerald-600",
          cancelButton: "bg-gray-700 text-white hover:bg-gray-600",
          error: "bg-red-900/90 border-red-500/30 text-white",
          success: "bg-emerald-900/90 border-emerald-500/50 text-white",
          warning: "bg-yellow-900/90 border-yellow-500/30 text-white",
          info: "bg-blue-900/90 border-blue-500/30 text-white",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };