export function formatDate(date) {
    return date.toLocaleDateString("en-PH", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}