export function ProfilePic() {
    const baseUrl = import.meta.env.BASE_URL;
    const imagePath = "src/assets/images/Jaafar.jpg";

    return (
        <img
            src={`${baseUrl}${imagePath}`}
            alt = "Profile Picture of Jaafar Rodgers"
            width = "200"
            height = "200"
            className="border-black border-4 rounded-full mt-6 mx-6 shadow-2xl" 
        />
    )
}