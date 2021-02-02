import { ErrorComponentProps } from "./types";
import './styles.css';

export const ErrorComponent = (props: ErrorComponentProps) => {
    const { error, errorInfo } = props;
    console.log('>>>', error.toString(), errorInfo);
    return <div className="error-container"><h1>Error</h1><div><h3>{error.message}</h3></div></div>;
};