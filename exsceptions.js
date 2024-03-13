function getMonthName(mo) {
    mo--;
    const months = [
        "Jan","Feb","mar", "apr","may","jun","jul","aug","sep","oct","nov","dec"
    ];

    if (months [mo]) {
        return months[mo];
    } else {
        throw new Error ("InvalidMonthNo");

    }
}

try {
    monthName = getMonthName(3);

} catch (e) {
    monthName = "unknown";
    console.error(e);
}