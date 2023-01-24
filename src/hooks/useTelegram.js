const tg = window.Telegram.WebApp;

export function useTelegram() {
    
    const onClose = () => {
        tg.close()
    }

    return {
        tg,
        username: tg.initDataUnsafe?.user?.username,
        onClose,
    }
}