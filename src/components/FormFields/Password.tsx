import { useFormContext } from "react-hook-form";

export default function Password() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col w-[275px] min-h-40">
      <label className="text-gray-500">პაროლი</label>
      <input
        type="password"
        placeholder="შეიყვანეთ პაროლი"
        className="border border-[#0003] outline-none h-10 rounded px-3 mt-2"
        {...register("password")}
        required
      />
      {errors.password && (
        <span className="text-red-600 text-sm mt-1 block">
          {errors.password.message as React.ReactNode}
        </span>
      )}

      <label className="text-gray-500 mt-4">გაიმეორე პაროლი</label>
      <input
        type="password"
        placeholder="დაადასტურე პაროლი"
        className="border border-[#0003] outline-none h-10 rounded px-3 mt-2"
        {...register("confirmPassword")}
        required
      />
      {errors.confirmPassword && (
        <span className="text-red-600 text-sm mt-1 block">
          {errors.confirmPassword.message as React.ReactNode}
        </span>
      )}
    </div>
  );
}
