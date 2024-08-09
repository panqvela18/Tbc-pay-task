import registrationDoneIcon from "../../assets/tick-circle.svg";

export default function Done() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="mb-4 font-bold text-xl text-gray-400">
        რეგისტრაცია წარმატებულია
      </h1>
      <img src={registrationDoneIcon} alt="done" />
    </div>
  );
}
