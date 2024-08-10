import { useFormContext } from "react-hook-form";

export default function UserName() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col w-[275px] min-h-32">
      <label className="text-gray-500 ">მომხმარებლის სახელი</label>
      <input
        type="text"
        placeholder="შეიყვანეთ მომხმარებლის სახელი"
        className="border border-[#0003] outline-none h-10 rounded px-3 mt-2"
        {...register("username")}
        required
      />
      {errors.username && (
        <span className="text-red-600 text-sm mt-1 block">
          {errors.username.message as React.ReactNode}
        </span>
      )}{" "}
    </div>
  );
}
