"use client";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
          <p className="text-6xl mb-4">🎵</p>
          <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
          <p style={{ color: "var(--text-muted)" }}>Please refresh the page</p>
        </div>
      );
    }
    return this.props.children;
  }
}
