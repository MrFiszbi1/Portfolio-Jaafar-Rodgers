export function ProfilePic() {
    const baseUrl = import.meta.env.BASE_URL;
    const imagePath = "src/assets/images/Jaafar.jpg";

    return (
        <img
            src={`${baseUrl}${imagePath}`}
            alt = "Profile Picture of Jaafar Rodgers"
            className="rounded-full mx-auto mt-3 h-1/3" 
        />
    )
}