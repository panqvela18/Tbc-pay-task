import { useFormContext } from "react-hook-form";

export default function Password() {
  const { register } = useFormContext();

  return (
    <div>
      <input
        {...register("password")}
        type="password"
        placeholder="Enter your password"
      />
    </div>
  );
}
