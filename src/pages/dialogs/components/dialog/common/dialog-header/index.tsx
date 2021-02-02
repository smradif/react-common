import * as Icon from 'react-bootstrap-icons';
import { DialogHeaderProps } from "./types";
import './styles.css';

export const DialogHeader = (props: DialogHeaderProps) => {
    const { title, handleCancelResult, isBusy } = props;

    const handleCancleClick = () => {
        if (!isBusy) {
            handleCancelResult!();
        }
    };

    return (<div className="dialog-header">
        <h4>{title}</h4>
        <Icon.X className="close-icon" onClick={handleCancleClick} />
    </div>);
}