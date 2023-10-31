export function ProfilePic() {
    const baseUrl = import.meta.env.BASE_URL;
    const imagePath = "src/assets/images/Jaafar.jpg";

    return (
        <img
            src={`${baseUrl}${imagePath}`}
            alt = "Profile Picture of Jaafar Rodgers"
            className="w-auto rounded-full ms-auto me-10 mt-3 h-full" 
        />
    )
}