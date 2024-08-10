import { useFormContext } from "react-hook-form";

export default function Email() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col w-[275px] min-h-32">
      <label className="text-gray-500  ">ელ-ფოსტა</label>
      <input
        type="email"
        placeholder="შეიყვანეთ ელ-ფოსტა"
        className="border border-[#0003] outline-none h-10  rounded px-3 mt-2 "
        {...register("email")}
        required
      />
      {errors.email && (
        <span className="text-red-600 text-sm mt-1 block">
          {errors.email.message as React.ReactNode}
        </span>
      )}
    </div>
  );
}
