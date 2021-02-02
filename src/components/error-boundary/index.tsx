import React from "react";
import { ErrorComponent } from "./components/error-component";

interface ErrorBoundaryState {
    hasError: boolean;
    error?: any;
    errorInfo?: any;
}

class CustomErrorBoundary extends React.Component<any, ErrorBoundaryState> {
    state = { hasError: false } as ErrorBoundaryState;

    static getDerivedStateFromError(error: any): ErrorBoundaryState | null {
        if (error) {
            return { hasError: true, error };
        }
        return null;
    }

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({ error, errorInfo });
    }

    render() {
        const { hasError, error, errorInfo } = this.state;
        const { children } = this.props;
        return hasError ? (<ErrorComponent error={error} errorInfo={errorInfo} />) : children;
    }
}

export default CustomErrorBoundary;
