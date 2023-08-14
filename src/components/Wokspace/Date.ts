export function getFormattedDate(): string {
    const currentDate: Date = new Date();

    // 연도, 월, 일
    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth() + 1;
    const day: number = currentDate.getDate();

    // 날짜 표시
    const formattedDate: string = `${year}-${month}-${day}`;
    return formattedDate;
}