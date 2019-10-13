export const isToday = (timestamp) => {
    const dayLength = 86400;

    let date = new Date();
    date.setMinutes(0);
    date.setHours(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    const todayStartTime = date.getTime() / 1000;

    return (timestamp - todayStartTime) < dayLength;
};