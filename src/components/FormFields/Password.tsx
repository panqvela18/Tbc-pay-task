import { useFormContext } from "react-hook-form";

export default function Password() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col w-80 min-h-32">
      <label>პაროლი</label>
      <input
        type="password"
        placeholder="შეიყვანეთ პაროლი"
        className="border border-[#0003] outline-none h-10 rounded px-3"
        {...register("password")}
        required
      />
      {errors.password && (
        <span className="text-red-600 text-sm mt-1 block">
          {errors.password.message as React.ReactNode}
        </span>
      )}{" "}
    </div>
  );
}
