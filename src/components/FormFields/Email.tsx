import { useFormContext } from "react-hook-form";

export default function Email() {
  const { register } = useFormContext();

  return (
    <div>
      <input
        {...register("email")}
        type="email"
        placeholder="Enter your email"
      />
    </div>
  );
}
