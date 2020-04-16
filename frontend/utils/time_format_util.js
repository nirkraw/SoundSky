const formatUploadTime = (created_at) => {
    let timeCreatedAt = new Date(created_at);
    let currentTime = new Date();
    let years = currentTime.getFullYear() - timeCreatedAt.getFullYear();
    let months = currentTime.getMonth() - timeCreatedAt.getMonth();
    let days = currentTime.getDate() - timeCreatedAt.getDate();
    let hours = currentTime.getHours() - timeCreatedAt.getHours();
    let minutes = currentTime.getMinutes() - timeCreatedAt.getMinutes();

    if (years > 1) return `${years} years ago`;
    else if (years === 1) return "1 year ago";
    else if (months > 1) return `${months} months ago`;
    else if (months === 1) return "1 month ago";
    else if (days > 1) return `${days} days ago`;
    else if (days === 1) return "1 day ago";
    else if (hours > 1) return `${hours} hours ago`;
    else if (hours === 1) return "1 hour ago";
    else if (minutes > 1) return `${minutes} minutes ago`;
    else return "1 minute ago";

}

export default formatUploadTime; 