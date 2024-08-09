import { useFormContext } from "react-hook-form";

export default function UserName() {
  const { register } = useFormContext();

  return (
    <div>
      <input
        {...register("username")}
        type="text"
        placeholder="Enter your username"
      />
    </div>
  );
}
