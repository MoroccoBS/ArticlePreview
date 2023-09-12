import ProfileImg from "../assets/images/avatar-michelle.jpg";

function Profile() {
  return (
    <div className="flex items-center gap-4">
      <img
        src={ProfileImg}
        alt=""
        className="w-[calc(1.5vw_+_30px)] aspect-square rounded-full"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-sm">Michelle Appleton</h1>
        <h2 className="text-xs text-LightGrayishBlue">28 Jun 2020</h2>
      </div>
    </div>
  );
}

export default Profile;
