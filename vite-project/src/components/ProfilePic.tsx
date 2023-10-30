export function ProfilePic() {
    const baseUrl = import.meta.env.BASE_URL;
    const imagePath = "src/assets/images/Jaafar.jpg";

    return (
        <img
            src={`${baseUrl}${imagePath}`}
            alt = "Profile Picture of Jaafar Rodgers"
            className="w-1/2 rounded-full mx-5 mt-3" 
        />
    )
}