export enum Status {
    WAITING_OCR = 0,
    WAITING_VALIDATION = 1,
    WAITING_APPROVAL = 2,
    CLOSED = 3,
    REJECTED = 4,
}

export function unixToDate(unixTime: number) {
    const date = new Date(unixTime);
    return date;
}

export function getStatusString(status: Status): string {
    switch (status) {
        case Status.WAITING_OCR:
            return "Ожидание OCR";
        case Status.WAITING_VALIDATION:
            return "Ожидание валидации";
        case Status.WAITING_APPROVAL:
            return "Ожидание подтверждения";
        case Status.CLOSED:
            return "Закрыт";
        case Status.REJECTED:
            return "Отклонен";
        default:
            return "UNKNOWN";
    }
}