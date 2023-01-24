import React from "react";
import Button from "../Button/Button";
import {useTelegram} from "./../../hooks/useTelegram";

const Header = () => {
    const {onClose, username} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <hr/>
            <span className={'username'}>
                {username} - имя для хуесоса
            </span>
        </div>
    )
}

export default Header